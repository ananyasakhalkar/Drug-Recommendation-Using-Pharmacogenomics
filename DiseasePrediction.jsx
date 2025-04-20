import React from 'react';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";

export default function DiseasePrediction() {
  return (
    <div className="min-h-screen bg-[#1c1c1e] text-white overflow-y-scroll">
      {/* Header */}
      <header className="flex justify-between items-center p-6 bg-[#2c2c2e] shadow-md sticky top-0 z-10">
        <h1 className="text-2xl font-bold text-white">Disease Prediction</h1>
      </header>

      {/* Hero Section */}
      <section className="flex flex-col justify-center items-center h-screen text-center bg-cover bg-center" style={{ backgroundImage: 'url(/images/disease-bg.jpg)' }}>
        <motion.h2 
          className="text-5xl font-bold text-white mb-4"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Predict Diseases with Precision
        </motion.h2>
        <motion.p 
          className="text-xl text-gray-300 mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          Analyze your genomic data to forecast potential health risks.
        </motion.p>
        <Button className="bg-[#00796b] text-white hover:bg-[#009688]">Upload Genomic Data</Button>
      </section>

      {/* Features Section */}
      <section className="py-16 px-8 bg-[#2c2c2e]">
        <motion.h3 
          className="text-4xl font-bold text-center text-white mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Key Features
        </motion.h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div className="p-6 bg-[#3a3a3c] rounded-lg shadow-lg" whileHover={{ scale: 1.05 }}>
            <h4 className="text-2xl font-bold text-white mb-2">Advanced Algorithms</h4>
            <p className="text-gray-300">Utilizes cutting-edge AI to provide highly accurate disease predictions.</p>
          </motion.div>

          <motion.div className="p-6 bg-[#3a3a3c] rounded-lg shadow-lg" whileHover={{ scale: 1.05 }}>
            <h4 className="text-2xl font-bold text-white mb-2">Personalized Insights</h4>
            <p className="text-gray-300">Receive health insights tailored to your unique genetic profile.</p>
          </motion.div>

          <motion.div className="p-6 bg-[#3a3a3c] rounded-lg shadow-lg" whileHover={{ scale: 1.05 }}>
            <h4 className="text-2xl font-bold text-white mb-2">Data Security</h4>
            <p className="text-gray-300">Your genomic data is encrypted and stored with utmost security.</p>
          </motion.div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 px-8 bg-[#00796b] text-center text-white">
        <motion.h3 className="text-4xl font-bold mb-4" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1 }}>
          Ready to Predict?
        </motion.h3>
        <motion.p className="text-xl mb-6" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.3, duration: 1 }}>
          Start analyzing your genome today and take control of your health.
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
