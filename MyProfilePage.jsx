import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";

export default function MyProfilePage() {
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState("John Doe");
  const [bio, setBio] = useState("Genomic Researcher | Health Enthusiast");

  const handleSave = () => {
    setIsEditing(false);
  };

  return (
    <div className="min-h-screen bg-[#1c1c1e] text-white overflow-y-scroll">
      {/* Header */}
      <header className="flex justify-between items-center p-6 bg-[#2c2c2e] shadow-md sticky top-0 z-10">
        <h1 className="text-2xl font-bold text-white">My Profile</h1>
      </header>

      {/* Profile Section */}
      <section className="flex flex-col items-center py-16">
        <motion.img 
          src="/images/profile-avatar.png" 
          alt="Profile Avatar" 
          className="w-40 h-40 rounded-full mb-6 border-4 border-[#00796b]"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.8 }}
        />

        {isEditing ? (
          <div className="text-center">
            <input 
              type="text" 
              value={name} 
              onChange={(e) => setName(e.target.value)} 
              className="mb-2 p-2 rounded bg-[#3a3a3c] text-white"
            />
            <br />
            <input 
              type="text" 
              value={bio} 
              onChange={(e) => setBio(e.target.value)} 
              className="mb-4 p-2 rounded bg-[#3a3a3c] text-white"
            />
            <br />
            <Button className="bg-[#00796b] text-white hover:bg-[#009688]" onClick={handleSave}>Save</Button>
          </div>
        ) : (
          <>
            <motion.h2 
              className="text-4xl font-bold mb-2"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              {name}
            </motion.h2>
            <motion.p 
              className="text-gray-400 text-xl mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              {bio}
            </motion.p>
            <Button className="bg-[#00796b] text-white hover:bg-[#009688]" onClick={() => setIsEditing(true)}>Edit Profile</Button>
          </>
        )}
      </section>

      {/* Genomic Data Section */}
      <section className="py-16 px-8 bg-[#2c2c2e]">
        <motion.h3 
          className="text-3xl font-bold text-center text-white mb-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          My Genomic Data
        </motion.h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div className="p-6 bg-[#3a3a3c] rounded-lg shadow-lg" whileHover={{ scale: 1.05 }}>
            <h4 className="text-2xl font-bold text-white mb-2">Uploaded Samples</h4>
            <p className="text-gray-300">5 genomic datasets uploaded.</p>
          </motion.div>

          <motion.div className="p-6 bg-[#3a3a3c] rounded-lg shadow-lg" whileHover={{ scale: 1.05 }}>
            <h4 className="text-2xl font-bold text-white mb-2">Last Analysis</h4>
            <p className="text-gray-300">Conducted on: Jan 15, 2025</p>
          </motion.div>

          <motion.div className="p-6 bg-[#3a3a3c] rounded-lg shadow-lg" whileHover={{ scale: 1.05 }}>
            <h4 className="text-2xl font-bold text-white mb-2">Risk Predictions</h4>
            <p className="text-gray-300">3 potential health risks identified.</p>
          </motion.div>

          <motion.div className="p-6 bg-[#3a3a3c] rounded-lg shadow-lg" whileHover={{ scale: 1.05 }}>
            <h4 className="text-2xl font-bold text-white mb-2">Recommended Treatments</h4>
            <p className="text-gray-300">2 personalized treatment plans.</p>
          </motion.div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 px-8 bg-[#00796b] text-center text-white">
        <motion.h3 className="text-4xl font-bold mb-4" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1 }}>
          Upload More Genomic Data
        </motion.h3>
        <motion.p className="text-xl mb-6" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.3, duration: 1 }}>
          Enhance your predictions with more data.
        </motion.p>
        <Button className="bg-white text-[#00796b] hover:bg-[#b2dfdb]">Upload Now</Button>
      </section>

      {/* Footer */}
      <footer className="p-6 bg-[#2c2c2e] text-center text-gray-400">
        © 2025 GenoMedic. All rights reserved.
      </footer>
    </div>
  );
}

