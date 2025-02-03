import { motion } from "framer-motion";
import { Wallet, PieChart, Activity, TrendingUp, Search } from "lucide-react";
import Button from "../components/Button";

const LenderDashboard = () => {
  const stats = [
    {
      name: "Total Invested",
      value: "$45,250",
      change: "+8.2%",
      icon: Wallet,
    },
    {
      name: "Active Investments",
      value: "12",
      change: "+2",
      icon: PieChart,
    },
    {
      name: "Average ROI",
      value: "15.4%",
      change: "+2.3%",
      icon: TrendingUp,
    },
    {
      name: "Portfolio Health",
      value: "94.2%",
      change: "+1.1%",
      icon: Activity,
    },
  ];

  const investments = [
    {
      id: 1,
      name: "Eco-Friendly Food Packaging",
      company: "GreenPack Solutions",
      invested: 15000,
      currentValue: 18500,
      roi: 23.3,
      status: "Active",
    },
    {
      id: 2,
      name: "Smart Urban Farming",
      company: "UrbanCrops Tech",
      invested: 10000,
      currentValue: 11200,
      roi: 12.0,
      status: "Active",
    },
    {
      id: 3,
      name: "Renewable Energy Storage",
      company: "EcoStore Systems",
      invested: 20000,
      currentValue: 24500,
      roi: 22.5,
      status: "Active",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex justify-between items-center mb-8">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-2xl font-bold text-foreground"
          >
            Lender Dashboard
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <Button variant="primary" size="sm">
              <Search className="h-4 w-4 mr-2" />
              Find Projects
            </Button>
          </motion.div>
        </div>

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-card overflow-hidden shadow-soft rounded-lg"
            >
              <div className="p-5">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <stat.icon className="h-6 w-6 text-muted-foreground" />
                  </div>
                  <div className="ml-5 w-0 flex-1">
                    <dl>
                      <dt className="text-sm font-medium text-muted-foreground truncate">
                        {stat.name}
                      </dt>
                      <dd>
                        <div className="flex items-baseline">
                          <p className="text-2xl font-semibold text-foreground">
                            {stat.value}
                          </p>
                          <p className="ml-2 flex items-baseline text-sm font-semibold text-success">
                            {stat.change}
                          </p>
                        </div>
                      </dd>
                    </dl>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Investment Portfolio */}
        <div className="bg-card shadow-soft rounded-lg">
          <div className="px-4 py-5 sm:px-6 border-b border-border">
            <h3 className="text-lg leading-6 font-medium text-foreground">
              Investment Portfolio
            </h3>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-border">
              <thead className="bg-accent">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
                    Project
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
                    Company
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
                    Invested
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
                    Current Value
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
                    ROI
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody className="bg-card divide-y divide-border">
                {investments.map((investment, index) => (
                  <motion.tr
                    key={investment.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 + index * 0.1 }}
                    className="hover:bg-accent transition-colors cursor-pointer"
                  >
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-primary-600">
                        {investment.name}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-foreground">
                        {investment.company}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-foreground">
                        ${investment.invested.toLocaleString()}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-foreground">
                        ${investment.currentValue.toLocaleString()}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-success">
                        +{investment.roi}%
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-success/10 text-success">
                        {investment.status}
                      </span>
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LenderDashboard;
