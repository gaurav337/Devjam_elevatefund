import React, { useState } from 'react';
import Button from '../components/Button';
import Input from '../components/Input';
import { Icons } from '../components/Icons';

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
      tags: ['AI/ML', 'SaaS'],
      investmentRange: '$50K - $200K',
      image: '/investor-placeholder.png'
    },
    {
      name: 'Michael Rodriguez',
      type: 'VC Partner',
      tags: ['Fintech', 'Blockchain', 'B2B'],
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
      <h1 className="text-4xl font-bold text-foreground mb-12">Investor Hub</h1>
      
      {/* Search Section */}
      <div className="bg-background border border-border rounded-xl shadow-sm mb-12">
        <div className="flex flex-col md:flex-row gap-4 items-center justify-between p-6">
          <div className="relative w-full md:w-96">
            <Input
              type="text"
              placeholder="Search investors..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10"
            />
            <Icons.Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          </div>
          <div className="flex flex-col md:flex-row gap-4 items-center">
            <select
              value={sector}
              onChange={(e) => setSector(e.target.value)}
              className="w-full md:w-48 p-2 rounded-lg border border-input bg-background text-foreground hover:bg-accent hover:text-accent-foreground"
            >
              <option value="Healthcare">Healthcare</option>
              <option value="Technology">Technology</option>
              <option value="Finance">Finance</option>
            </select>
            <select
              value={investmentRange}
              onChange={(e) => setInvestmentRange(e.target.value)}
              className="w-full md:w-48 p-2 rounded-lg border border-input bg-background text-foreground hover:bg-accent hover:text-accent-foreground"
            >
              <option value="">Investment Range</option>
              <option value="50-200">$50K - $200K</option>
              <option value="200-1M">$200K - $1M</option>
              <option value="1M+">$1M+</option>
            </select>
            <Button variant="primary">
              Search
              <Icons.ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>

      {/* Featured Investors */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-foreground mb-6">Featured Investors</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {featuredInvestors.map((investor, index) => (
            <div key={index} className="bg-card rounded-xl p-6 shadow-soft border border-border">
              <div className="flex items-center mb-4">
                <div className="w-16 h-16 bg-muted rounded-full mr-4"></div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground">{investor.name}</h3>
                  <p className="text-muted-foreground">{investor.type}</p>
                </div>
              </div>
              <div className="flex flex-wrap gap-2 mb-4">
                {investor.tags.map((tag, i) => (
                  <span key={i} className="px-3 py-1 bg-accent text-accent-foreground rounded-full text-sm">
                    {tag}
                  </span>
                ))}
              </div>
              <p className="text-muted-foreground mb-4">{investor.investmentRange}</p>
              <Button variant="primary" className="w-full">Connect</Button>
            </div>
          ))}
        </div>
      </section>

      {/* Active Investors Table */}
      <section>
        <h2 className="text-2xl font-bold text-foreground mb-6">Active Investors</h2>
        <div className="overflow-x-auto rounded-xl border border-border">
          <table className="w-full bg-card">
            <thead className="bg-muted">
              <tr>
                <th className="px-6 py-3 text-left text-foreground">Investor Name</th>
                <th className="px-6 py-3 text-left text-foreground">Type</th>
                <th className="px-6 py-3 text-left text-foreground">Focus Areas</th>
                <th className="px-6 py-3 text-left text-foreground">Recent Investments</th>
                <th className="px-6 py-3 text-left text-foreground">Investment Range</th>
                <th className="px-6 py-3 text-left text-foreground">Action</th>
              </tr>
            </thead>
            <tbody>
              {activeInvestors.map((investor, index) => (
                <tr key={index} className="border-t border-border hover:bg-muted/50 transition-colors">
                  <td className="px-6 py-4 text-foreground">{investor.name}</td>
                  <td className="px-6 py-4 text-muted-foreground">{investor.type}</td>
                  <td className="px-6 py-4">
                    <div className="flex flex-wrap gap-1">
                      {investor.focusAreas.map((area, i) => (
                        <span key={i} className="px-2 py-1 bg-accent/20 text-accent-foreground rounded-full text-sm">
                          {area}
                        </span>
                      ))}
                    </div>
                  </td>
                  <td className="px-6 py-4 text-muted-foreground">{investor.recentInvestments}</td>
                  <td className="px-6 py-4 text-muted-foreground">{investor.investmentRange}</td>
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