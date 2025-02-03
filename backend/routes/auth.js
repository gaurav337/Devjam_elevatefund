const express = require('express');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const Entrepreneur = require('../models/Entrepreneur');
const Investor = require('../models/Investor');
const router = express.Router();

// Signup route
router.post('/signup', async (req, res) => {
  try {
    const { email, password, userType, ...profileData } = req.body;

    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ error: 'Email already registered' });
    }

    // Create profile based on user type
    let profile;
    if (userType === 'entrepreneur') {
      profile = new Entrepreneur(profileData);
    } else if (userType === 'investor') {
      // Ensure email is included in investor profile
      profile = new Investor({
        ...profileData,
        email: email // Add email to investor profile
      });
    } else {
      return res.status(400).json({ error: 'Invalid user type' });
    }

    // Save profile
    await profile.save();

    // Create user with reference to profile
    const user = new User({
      email,
      password,
      userType,
      profileId: profile._id
    });

    await user.save();

    // Generate JWT token
    const token = jwt.sign(
      { userId: user._id, userType: user.userType },
      process.env.JWT_SECRET,
      { expiresIn: '24h' }
    );

    res.status(201).json({
      token,
      user: {
        id: user._id,
        email: user.email,
        userType: user.userType,
        profile: profile
      }
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Login route
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    // Find user by email
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ error: 'Invalid email or password' });
    }

    // Check password
    const isMatch = await user.comparePassword(password);
    if (!isMatch) {
      return res.status(401).json({ error: 'Invalid email or password' });
    }

    // Get user profile
    const Profile = user.userType === 'entrepreneur' ? Entrepreneur : Investor;
    const profile = await Profile.findById(user.profileId);

    // Generate JWT token
    const token = jwt.sign(
      { userId: user._id, userType: user.userType },
      process.env.JWT_SECRET,
      { expiresIn: '24h' }
    );

    res.json({
      token,
      user: {
        id: user._id,
        email: user.email,
        userType: user.userType,
        profile: profile
      }
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Get current user route
router.get('/me', async (req, res) => {
  try {
    const token = req.header('Authorization')?.replace('Bearer ', '');
    if (!token) {
      return res.status(401).json({ error: 'Please authenticate' });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findById(decoded.userId);
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    const Profile = user.userType === 'entrepreneur' ? Entrepreneur : Investor;
    const profile = await Profile.findById(user.profileId);

    res.json({
      user: {
        id: user._id,
        email: user.email,
        userType: user.userType,
        profile: profile
      }
    });
  } catch (error) {
    res.status(401).json({ error: 'Please authenticate' });
  }
});

module.exports = router; 