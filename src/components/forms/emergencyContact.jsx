import React from 'react';
import { motion } from 'framer-motion';
import { UserPlusIcon } from '@heroicons/react/24/solid';

const EmergencyContact = ({ data, onChange }) => {
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
        Emergency Contact
        <UserPlusIcon 
          className="ml-2 text-blue-500" 
          width={24} 
          height={24} 
        />
      </h2>

      <div className="space-y-4">
        {/* Name of Next of Kin */}
        <motion.div 
          variants={inputVariants}
          initial="initial"
          animate="animate"
          whileHover="hover"
        >
          <label 
            htmlFor="nextOfKin" 
            className="block text-gray-700 font-medium mb-2"
          >
            Name of Next of Kin
          </label>
          <input 
            type="text" 
            value={data.name} 
            onChange={(e) => onChange('name', e.target.value)}
            name="nameOfNextOfKin" 
            id="nextOfKin" 
            className="w-full px-4 py-2 border border-gray-300 rounded-md 
              focus:outline-none focus:ring-2 focus:ring-blue-500 
              transition-all duration-300"
            required 
          />
        </motion.div>

        {/* Additional Details */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            { 
              name: 'relationship', 
              type: 'select', 
              label: 'Relationship',
              options: ['Father', 'Mother', 'Brother', 'Sister']
            },
            { 
              name: 'email', 
              type: 'email', 
              label: 'Email'
            },
            { 
              name: 'phone', 
              type: 'tel', 
              label: 'Phone Number'
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
              {field.type === 'select' ? (
                <select
                  value={data[field.name]}
                  onChange={(e) => onChange(field.name, e.target.value)}
                  name={`${field.name}WithNextOfKin`}
                  id={field.name}
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
              ) : (
                <input
                  type={field.type}
                  value={data[field.name]}
                  onChange={(e) => onChange(field.name, e.target.value)}
                  name={`${field.name}OfNextOfKin`}
                  id={field.name}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md 
                    focus:outline-none focus:ring-2 focus:ring-blue-500 
                    transition-all duration-300"
                  required
                />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default EmergencyContact;