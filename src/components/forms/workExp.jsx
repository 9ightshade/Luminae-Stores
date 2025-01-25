import React from 'react';
import { motion } from 'framer-motion';
import { InformationCircleIcon } from '@heroicons/react/24/solid';

const WorkExperience = ({ data, onChange }) => {
  const inputVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, 
      transition: { 
        type: "spring", 
        stiffness: 300, 
        damping: 10 
      } 
    },
    hover: { 
      scale: 1.02,
      boxShadow: "0 4px 6px rgba(0,0,0,0.1)"
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-white p-6 rounded-lg shadow-md max-w-md mx-auto"
    >
      <h2 className="text-xl font-semibold text-gray-800 mb-6 flex items-center">
        Work Experience 
        <InformationCircleIcon 
          className="ml-2 text-blue-500" 
          width={24} 
          height={24} 
        />
      </h2>

      <div className="space-y-4">
        <motion.div 
          variants={inputVariants}
          initial="initial"
          animate="animate"
          whileHover="hover"
        >
          <label 
            htmlFor="postQualificationExperienceYears" 
            className="block text-gray-700 font-medium mb-2"
          >
            Post Qualification Experience 
            <span className="text-sm text-gray-500 block">Years of Professional Experience</span>
          </label>
          <motion.input
            type="number"
            name="postQualificationExperienceYears"
            id="postQualificationExperienceYears"
            className="w-full px-4 py-2 border border-gray-300 rounded-md 
              focus:outline-none focus:ring-2 focus:ring-blue-500 
              transition-all duration-300"
            required
            min="0"
            value={data.postQualificationExperienceYears}
            onChange={(e) => {
              onChange("postQualificationExperienceYears", e.target.value);
            }}
            whileFocus={{ scale: 1.02 }}
          />
        </motion.div>

        <motion.div 
          variants={inputVariants}
          initial="initial"
          animate="animate"
          whileHover="hover"
        >
          <label 
            htmlFor="managerialExperienceYears" 
            className="block text-gray-700 font-medium mb-2"
          >
            Managerial Experience 
            <span className="text-sm text-gray-500 block">Years in Leadership Roles</span>
          </label>
          <motion.input
            type="number"
            name="managerialExperienceYears"
            id="managerialExperienceYears"
            className="w-full px-4 py-2 border border-gray-300 rounded-md 
              focus:outline-none focus:ring-2 focus:ring-blue-500 
              transition-all duration-300"
            required
            min="0"
            value={data.managerialExperienceYears}
            onChange={(e) => {
              onChange("managerialExperienceYears", e.target.value);
            }}
            whileFocus={{ scale: 1.02 }}
          />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default WorkExperience;