import React, { useState } from 'react';
import Button from '../components/Button';
import Input from '../components/Input';

interface Investor {
  name: string;
  type: string;
  focusAreas: string[];
  recentInvestments: string;
  investmentRange: string;
}

const InvestorHub: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [sector, setSector] = useState('Healthcare');
  const [investmentRange, setInvestmentRange] = useState('');

  const featuredInvestors = [
    {
      name: 'Sarah Chen',
      type: 'Angel Investor',
      tags: ['Tech', 'AI/ML', 'SaaS'],
      investmentRange: '$50K - $200K',
      image: '/investor-placeholder.png'
    },
    {
      name: 'Michael Rodriguez',
      type: 'VC Partner',
      tags: ['FinTech', 'Blockchain', 'B2B'],
      investmentRange: '$200K - $1M',
      image: '/investor-placeholder.png'
    }
  ];

  const activeInvestors: Investor[] = [
    {
      name: 'Alex Thompson',
      type: 'Angel Investor',
      focusAreas: ['Healthcare', 'BioTech'],
      recentInvestments: '3 in last month',
      investmentRange: '$50K - $200K'
    },
    {
      name: 'Elena Martinez',
      type: 'VC Fund Manager',
      focusAreas: ['E-commerce', 'D2C'],
      recentInvestments: '5 in last month',
      investmentRange: '$200K - $1M'
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-12">Investor Hub</h1>
      
      {/* Search Section */}
      <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg mb-12">
        <div className="flex flex-col md:flex-row gap-4 items-center justify-center">
          <Input
            type="text"
            placeholder="Search investors..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full md:w-96"
          />
          <select
            value={sector}
            onChange={(e) => setSector(e.target.value)}
            className="w-full md:w-48 p-2 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700"
          >
            <option value="Healthcare">Healthcare</option>
            <option value="Technology">Technology</option>
            <option value="Finance">Finance</option>
          </select>
          <select
            value={investmentRange}
            onChange={(e) => setInvestmentRange(e.target.value)}
            className="w-full md:w-48 p-2 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700"
          >
            <option value="">Investment Range</option>
            <option value="50-200">$50K - $200K</option>
            <option value="200-1M">$200K - $1M</option>
            <option value="1M+">$1M+</option>
          </select>
          <Button variant="primary">Search</Button>
        </div>
      </div>

      {/* Featured Investors */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Featured Investors</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {featuredInvestors.map((investor, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
              <div className="flex items-center mb-4">
                <div className="w-16 h-16 bg-gray-200 rounded-full mr-4"></div>
                <div>
                  <h3 className="text-xl font-semibold">{investor.name}</h3>
                  <p className="text-gray-600 dark:text-gray-400">{investor.type}</p>
                </div>
              </div>
              <div className="flex flex-wrap gap-2 mb-4">
                {investor.tags.map((tag, i) => (
                  <span key={i} className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-sm">
                    {tag}
                  </span>
                ))}
              </div>
              <p className="text-gray-600 dark:text-gray-400 mb-4">{investor.investmentRange}</p>
              <Button variant="primary" className="w-full">Connect</Button>
            </div>
          ))}
        </div>
      </section>

      {/* Active Investors Table */}
      <section>
        <h2 className="text-2xl font-bold mb-6">Active Investors</h2>
        <div className="overflow-x-auto">
          <table className="w-full bg-white dark:bg-gray-800 rounded-lg shadow">
            <thead className="bg-gray-50 dark:bg-gray-700">
              <tr>
                <th className="px-6 py-3 text-left">Investor Name</th>
                <th className="px-6 py-3 text-left">Type</th>
                <th className="px-6 py-3 text-left">Focus Areas</th>
                <th className="px-6 py-3 text-left">Recent Investments</th>
                <th className="px-6 py-3 text-left">Investment Range</th>
                <th className="px-6 py-3 text-left">Action</th>
              </tr>
            </thead>
            <tbody>
              {activeInvestors.map((investor, index) => (
                <tr key={index} className="border-t border-gray-200 dark:border-gray-700">
                  <td className="px-6 py-4">{investor.name}</td>
                  <td className="px-6 py-4">{investor.type}</td>
                  <td className="px-6 py-4">{investor.focusAreas.join(', ')}</td>
                  <td className="px-6 py-4">{investor.recentInvestments}</td>
                  <td className="px-6 py-4">{investor.investmentRange}</td>
                  <td className="px-6 py-4">
                    <Button variant="secondary">View Profile</Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
};

export default InvestorHub; 