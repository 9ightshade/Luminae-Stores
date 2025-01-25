import React from 'react';
import { motion } from 'framer-motion';
import { AcademicCapIcon } from '@heroicons/react/24/solid';

const RsubsQualification = ({ data, onChange }) => {
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

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-white p-6 rounded-lg shadow-md max-w-4xl mx-auto"
    >
      <h2 className="text-xl font-semibold text-gray-800 mb-6 flex items-center">
        Qualification Details
        <AcademicCapIcon 
          className="ml-2 text-blue-500" 
          width={24} 
          height={24} 
        />
      </h2>

      <div className="space-y-4">
        {/* Highest Qualification and Degree Class */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            { 
              name: 'highestQualification', 
              label: 'Highest Qualification',
              options: ['Masters Degree', 'Bachelors Degree', 'HND']
            },
            { 
              name: 'classOfDegree', 
              label: 'Class of Degree',
              options: ['2.1 or First Class', 'Equivalent of 2.2', 'Others']
            }
          ].map((field) => (
            <motion.div 
              key={field.name}
              variants={inputVariants}
              initial="initial"
              animate="animate"
              whileHover="hover"
            >
              <label 
                htmlFor={field.name} 
                className="block text-gray-700 font-medium mb-2"
              >
                {field.label}
              </label>
              <select
                name={field.name}
                id={field.name}
                value={data[field.name]}
                onChange={(e) => onChange(field.name, e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-md 
                  focus:outline-none focus:ring-2 focus:ring-blue-500 
                  transition-all duration-300"
                required
              >
                <option value="select">--Select--</option>
                {field.options.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </motion.div>
          ))}
        </div>

        {/* Motivating and Hindering Factors */}
        {[
          { 
            name: 'factorsMotivatingMBA', 
            label: 'Factors Motivating MBA'
          },
          { 
            name: 'factorsHinderingMBA', 
            label: 'Factors Hindering MBA'
          }
        ].map((field) => (
          <motion.div 
            key={field.name}
            variants={inputVariants}
            initial="initial"
            animate="animate"
            whileHover="hover"
          >
            <label 
              htmlFor={field.name} 
              className="block text-gray-700 font-medium mb-2"
            >
              {field.label}
            </label>
            <textarea
              name={field.name}
              id={field.name}
              value={data[field.name]}
              onChange={(e) => onChange(field.name, e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md 
                focus:outline-none focus:ring-2 focus:ring-blue-500 
                transition-all duration-300 min-h-[100px]"
              required
            />
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default RsubsQualification;