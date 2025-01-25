import React from 'react';
import { motion } from 'framer-motion';
import { CreditCardIcon } from '@heroicons/react/24/solid';

const ProgramFinancing = ({ data, onChange }) => {
  const inputVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { 
      opacity: 1, 
      y: 0, 
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

  const fundingOptions = [
    { value: 'self Sponsorship', label: 'Self Sponsored' },
    { value: 'Guardian/Parent Sponsored', label: 'Guardian/Parent Sponsored' },
    { value: 'Schoolarship', label: 'Scholarship' },
    { value: 'company Sponsored', label: 'Company Sponsored' }
  ];

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-white p-6 rounded-lg shadow-md max-w-4xl mx-auto"
    >
      <h2 className="text-xl font-semibold text-gray-800 mb-6 flex items-center">
        Program Financing
        <CreditCardIcon 
          className="ml-2 text-blue-500" 
          width={24} 
          height={24} 
        />
      </h2>

      <motion.div 
        variants={inputVariants}
        initial="initial"
        animate="animate"
        whileHover="hover"
      >
        <label 
          htmlFor="fundingMethod" 
          className="block text-gray-700 font-medium mb-2"
        >
          Funding Method: How Do You Intend To Pay for this Program?
        </label>
        <select
          required
          name="fundingMethod"
          id="fundingMethod"
          value={data.fundingMethod}
          onChange={(e) => onChange('fundingMethod', e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-md 
            focus:outline-none focus:ring-2 focus:ring-blue-500 
            transition-all duration-300"
        >
          <option value="select">--Select--</option>
          {fundingOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </motion.div>
    </motion.div>
  );
};

export default ProgramFinancing;