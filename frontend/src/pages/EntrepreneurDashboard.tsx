// import React from "react";
import { motion } from "framer-motion";
import { BarChart3, Users, DollarSign, TrendingUp, Plus } from "lucide-react";
import Button from "../components/Button";

const EntrepreneurDashboard = () => {
  const stats = [
    {
      name: "Total Raised",
      value: "$24,500",
      change: "+12.5%",
      icon: DollarSign,
    },
    {
      name: "Active Investors",
      value: "48",
      change: "+7.2%",
      icon: Users,
    },
    {
      name: "Project Views",
      value: "1,429",
      change: "+14.3%",
      icon: BarChart3,
    },
    {
      name: "Success Rate",
      value: "88.2%",
      change: "+4.1%",
      icon: TrendingUp,
    },
  ];

  const projects = [
    {
      id: 1,
      name: "Eco-Friendly Food Packaging",
      description: "Biodegradable packaging solutions for restaurants",
      raised: 12000,
      goal: 25000,
      backers: 28,
      daysLeft: 15,
    },
    {
      id: 2,
      name: "Smart Urban Farming",
      description: "IoT-based vertical farming technology",
      raised: 8500,
      goal: 20000,
      backers: 15,
      daysLeft: 21,
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
            Entrepreneur Dashboard
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <Button variant="primary" size="sm">
              <Plus className="h-4 w-4 mr-2" />
              New Project
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

        {/* Projects List */}
        <div className="bg-card shadow-soft rounded-lg">
          <div className="px-4 py-5 sm:px-6 border-b border-border">
            <h3 className="text-lg leading-6 font-medium text-foreground">
              Active Projects
            </h3>
          </div>
          <ul className="divide-y divide-border">
            {projects.map((project, index) => (
              <motion.li
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + index * 0.1 }}
                className="px-4 py-4 sm:px-6 hover:bg-accent transition-colors cursor-pointer"
              >
                <div className="flex items-center justify-between">
                  <div className="flex-1 min-w-0">
                    <h4 className="text-lg font-medium text-primary-600 truncate">
                      {project.name}
                    </h4>
                    <p className="mt-1 text-sm text-muted-foreground">
                      {project.description}
                    </p>
                    <div className="mt-2">
                      <div className="relative pt-1">
                        <div className="flex mb-2 items-center justify-between">
                          <div>
                            <span className="text-xs font-semibold inline-block text-primary-600">
                              {Math.round((project.raised / project.goal) * 100)}% Funded
                            </span>
                          </div>
                          <div className="text-right">
                            <span className="text-xs font-semibold inline-block text-muted-foreground">
                              ${project.raised} / ${project.goal}
                            </span>
                          </div>
                        </div>
                        <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-primary-100">
                          <div
                            style={{
                              width: `${(project.raised / project.goal) * 100}%`,
                            }}
                            className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-primary-500"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="mt-2 flex items-center text-sm text-muted-foreground">
                      <span className="mr-4">{project.backers} Backers</span>
                      <span>{project.daysLeft} Days Left</span>
                    </div>
                  </div>
                </div>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default EntrepreneurDashboard;
