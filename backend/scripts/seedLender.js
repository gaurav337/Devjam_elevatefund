const mongoose = require('mongoose');
const User = require('../models/User');
const Investor = require('../models/Investor');
require('dotenv').config();

const seedLender = async () => {
  try {
    // Connect to MongoDB
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('Connected to MongoDB');

    // Delete existing lender if exists
    await User.deleteOne({ email: 'admin1@admin.com' });
    await Investor.deleteOne({ email: 'admin1@admin.com' });
    console.log('Cleaned up existing lender data');

    // Create investor profile
    const profile = new Investor({
      name: 'Admin Lender',
      email: 'admin1@admin.com',
      type: 'Angel Investor',
      investmentRange: {
        min: 50000,
        max: 500000
      },
      focusAreas: ['Technology', 'Healthcare', 'Sustainability'],
      investmentCriteria: 'Looking for innovative startups with strong growth potential',
      portfolioSize: 10
    });

    await profile.save();
    console.log('Created investor profile');

    // Create user
    const user = new User({
      email: 'admin1@admin.com',
      password: '0791Gaurav@',
      userType: 'investor',
      profileId: profile._id
    });

    await user.save();
    console.log('Created lender account');
    
    // Verify the user was created
    const createdUser = await User.findOne({ email: 'admin1@admin.com' });
    console.log('Verification - Lender found:', {
      email: createdUser.email,
      userType: createdUser.userType,
      profileId: createdUser.profileId
    });

    process.exit(0);
  } catch (error) {
    console.error('Error seeding lender:', error);
    process.exit(1);
  }
};

seedLender(); 