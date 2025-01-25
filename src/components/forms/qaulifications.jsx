import React from 'react';
import { motion } from 'framer-motion';
// import { GraduationCapIcon } from '@heroicons/react/24/solid';

const Qualifications = ({ data, onChange }) => {
  const inputVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { 
      opacity: 1, 
      y: 0, 
      transition: { type: "spring", stiffness: 300, damping: 10 } 
    },
    hover: { 
      scale: 1.02,
      boxShadow: "0 4px 6px rgba(0,0,0,0.1)"
    }
  };

  const formFields = [
    { 
      name: 'institutionName', 
      label: 'Institution Name', 
      type: 'text',
      placeholder: ''
    },
    { 
      name: 'institutionType', 
      label: 'Institution Type', 
      type: 'select',
      options: [
        { value: 'highschool', label: 'High School' },
        { value: 'tertiary', label: 'Tertiary' }
      ]
    },
    { 
      name: 'certificateAwarded', 
      label: 'Certificate Awarded', 
      type: 'text',
      placeholder: 'E.g B.Sc Business Administration'
    },
    { 
      name: 'startDate', 
      label: 'Start Date', 
      type: 'date'
    },
    { 
      name: 'endDate', 
      label: 'End Date', 
      type: 'date'
    }
  ];

  const renderField = (field) => {
    const commonProps = {
      name: field.name,
      id: field.name,
      value: data[field.name],
      onChange: (e) => onChange(0, field.name, e.target.value),
      required: true,
      className: "w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
    };

    return (
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
          <select {...commonProps}>
            <option value="select">--Select--</option>
            {field.options.map(option => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        ) : (
          <input 
            type={field.type}
            {...commonProps}
            placeholder={field.placeholder}
          />
        )}
      </motion.div>
    );
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-white p-6 rounded-lg shadow-md max-w-4xl mx-auto"
    >
      <h2 className="text-xl font-semibold text-gray-800 mb-6 flex items-center">
        Educational Qualifications
        {/* <GraduationCapIcon 
          className="ml-2 text-blue-500" 
          width={24} 
          height={24} 
        /> */}
      </h2>

      <div className="space-y-4">
        {formFields.slice(0, 3).map(renderField)}
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {formFields.slice(3).map(renderField)}
        </div>
      </div>
    </motion.div>
  );
};

export default Qualifications;