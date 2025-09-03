import { useEffect } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Rocket, Shield, Cpu, Car } from "lucide-react";

export default function Portfolio() {
  useEffect(() => {
    document.title = "Daniel Chattar | Portfolio";
  }, []);

  const projects = [
    {
      icon: <Shield className="w-8 h-8 text-indigo-400" />,
      title: "Cybersecurity Dashboard",
      desc: "Built an interactive SOC dashboard to monitor network traffic, detect threats, and automate alerts.",
      img: "https://images.unsplash.com/photo-1556157382-97eda2d62296?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80",
    },
    {
      icon: <Cpu className="w-8 h-8 text-blue-400" />,
      title: "IT Helpdesk AI Assistant",
      desc: "Developed an AI-powered chatbot to resolve Level 1 IT issues, reducing average resolution time by 40%.",
      img: "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80",
    },
    {
      icon: <Car className="w-8 h-8 text-red-400" />,
      title: "Motorsport Data Logger",
      desc: "Designed a telemetry system for race cars to analyze performance, lap times, and mechanical stress.",
      img: "https://images.unsplash.com/photo-1525609004556-c46c7d6cf023?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80",
    },
    {
      icon: <Rocket className="w-8 h-8 text-purple-400" />,
      title: "Satellite Uplink Monitor",
      desc: "Created a monitoring tool to ensure stable satellite communications, visualizing real-time uplink quality.",
      img: "https://images.unsplash.com/photo-1581091870622-1e7b1f1b6c96?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-white font-sans overflow-x-hidden">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="h-screen flex flex-col justify-center items-center text-center space-y-6"
      >
        <motion.h1
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.2 }}
          className="text-6xl font-extrabold bg-gradient-to-r from-indigo-400 via-blue-500 to-purple-600 bg-clip-text text-transparent"
        >
          Daniel Chattar
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 1 }}
          className="text-lg max-w-xl text-gray-300"
        >
          IT Helpdesk Specialist | Cybersecurity Enthusiast | Motorsport & Space Engineering Inspired
        </motion.p>
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <Rocket className="w-12 h-12 text-purple-400" />
        </motion.div>
      </motion.div>

      {/* Projects Section */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="py-20 px-6 md:px-20 grid gap-10 md:grid-cols-2"
      >
        {projects.map((project, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            className="relative group"
          >
            <Card className="bg-gray-800/80 border border-gray-700 overflow-hidden rounded-2xl shadow-lg">
              <img
                src={project.img}
                alt={project.title}
                className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <CardContent className="p-6 space-y-4">
                <div className="flex items-center space-x-3">
                  {project.icon}
                  <h2 className="text-2xl font-bold">{project.title}</h2>
                </div>
                <p className="text-gray-300">{project.desc}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>

      {/* Contact Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="py-20 text-center"
      >
        <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent">
          Let’s Work Together
        </h2>
        <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
          Looking for someone who blends IT expertise with creativity? Reach out, and let’s build something amazing.
        </p>
        <Button className="px-8 py-3 text-lg bg-gradient-to-r from-purple-500 to-indigo-500 hover:from-indigo-500 hover:to-purple-500">
          Contact Me
        </Button>
      </motion.div>
    </div>
  );
}
