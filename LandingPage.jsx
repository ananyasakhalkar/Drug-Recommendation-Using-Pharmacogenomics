import React from 'react';
import { motion } from 'framer-motion';
import { Button } from "../components/ui/button";
import { Link } from 'react-router-dom';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-[#1c1c1e] text-white overflow-y-scroll">
      {/* Header */}
      <header className="flex justify-between items-center p-6 bg-[#2c2c2e] shadow-md sticky top-0 z-10">
        <h1 className="text-3xl font-bold text-white">GenoMedic</h1>
        <nav className="space-x-6">
        <Link to="/disease-prediction" className="hover:text-[#009688]">Disease Prediction</Link>
        <Link to="/drug-prediction" className="hover:text-[#009688]">Drug Prediction</Link>
        <Link to="/my-profile" className="hover:text-[#009688]">My Profile</Link>

        </nav>
      </header>

      {/* Hero Section */}
      <section className="flex flex-col justify-center items-center h-screen text-center bg-cover bg-center" style={{ backgroundImage: 'url(/images/landing-bg.jpg)' }}>
        <motion.h2 
          className="text-6xl font-bold text-white mb-4"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Revolutionizing Genomic Insights
        </motion.h2>
        <motion.p 
          className="text-2xl text-gray-300 mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          Explore genomic data, predict diseases, and discover drug treatments.
        </motion.p>
        <Button className="bg-[#00796b] text-white hover:bg-[#009688]">Get Started</Button>
      </section>

      {/* Features Section */}
      <section className="py-16 px-8 bg-[#2c2c2e]">
        <motion.h3 
          className="text-4xl font-bold text-center text-white mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          What We Offer
        </motion.h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div className="p-6 bg-[#3a3a3c] rounded-lg shadow-lg" whileHover={{ scale: 1.05 }}>
            <h4 className="text-2xl font-bold text-white mb-2">Disease Prediction</h4>
            <p className="text-gray-300">Leverage genomic data to predict potential health risks.</p>
          </motion.div>

          <motion.div className="p-6 bg-[#3a3a3c] rounded-lg shadow-lg" whileHover={{ scale: 1.05 }}>
            <h4 className="text-2xl font-bold text-white mb-2">Drug Discovery</h4>
            <p className="text-gray-300">Find the most effective drugs based on your unique genome.</p>
          </motion.div>

          <motion.div className="p-6 bg-[#3a3a3c] rounded-lg shadow-lg" whileHover={{ scale: 1.05 }}>
            <h4 className="text-2xl font-bold text-white mb-2">Secure Genomic Data</h4>
            <p className="text-gray-300">Your data is encrypted and handled with utmost security.</p>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 px-8 bg-[#1c1c1e] text-center">
        <motion.h3 className="text-4xl font-bold text-white mb-8" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1 }}>
          What Our Users Say
        </motion.h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div className="p-6 bg-[#2c2c2e] rounded-lg shadow-lg" whileHover={{ scale: 1.05 }}>
            <p className="text-gray-300 italic">"GenoMedic has transformed the way I understand my health risks. Highly recommended!"</p>
            <h4 className="text-xl font-bold text-white mt-4">- Jane Doe</h4>
          </motion.div>

          <motion.div className="p-6 bg-[#2c2c2e] rounded-lg shadow-lg" whileHover={{ scale: 1.05 }}>
            <p className="text-gray-300 italic">"The drug prediction tool helped me find better treatment options tailored to my genome."</p>
            <h4 className="text-xl font-bold text-white mt-4">- John Smith</h4>
          </motion.div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 px-8 bg-[#00796b] text-center text-white">
        <motion.h3 className="text-4xl font-bold mb-4" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1 }}>
          Ready to Explore?
        </motion.h3>
        <motion.p className="text-xl mb-6" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.3, duration: 1 }}>
          Dive into your genomic data and unlock new possibilities.
        </motion.p>
        <Button className="bg-white text-[#00796b] hover:bg-[#b2dfdb]">Start Now</Button>
      </section>

      {/* Footer */}
      <footer className="p-6 bg-[#2c2c2e] text-center text-gray-400">
        © 2025 GenoMedic. All rights reserved.
      </footer>
    </div>
  );
}
