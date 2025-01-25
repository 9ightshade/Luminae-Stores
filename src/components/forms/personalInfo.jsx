import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { UserCircleIcon, IdentificationIcon } from '@heroicons/react/24/solid';

const PersonalInfo = ({ data, onChange }) => {
  const [email] = useState(() => localStorage.getItem("email"));

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
        Personal Information
        <UserCircleIcon 
          className="ml-2 text-blue-500" 
          width={24} 
          height={24} 
        />
      </h2>

      <div className="space-y-4">
        {/* Title Section */}
        <motion.div 
          variants={inputVariants}
          initial="initial"
          animate="animate"
          whileHover="hover"
        >
          <label htmlFor="title" className="block text-gray-700 font-medium mb-2">
            Title
          </label>
          <select
            value={data.title}
            onChange={(e) => onChange("title", e.target.value)}
            name="title"
            id="title"
            className="w-full px-4 py-2 border border-gray-300 rounded-md 
              focus:outline-none focus:ring-2 focus:ring-blue-500 
              transition-all duration-300"
            required
          >
            <option value="select">--Select--</option>
            <option value="Mr">Mr</option>
            <option value="Mrs">Mrs</option>
            <option value="Dr">Dr</option>
            <option value="Miss">Miss</option>
            <option value="Prof">Prof</option>
          </select>
        </motion.div>

        {/* Email Section */}
        <motion.div 
          variants={inputVariants}
          initial="initial"
          animate="animate"
          whileHover="hover"
        >
          <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
            Email
          </label>
          <input
            type="email"
            required
            name="email"
            value={email}
            disabled
            onChange={(e) => onChange("email", e.target.value)}
            id="email"
            className="w-full px-4 py-2 border border-gray-300 rounded-md 
              bg-gray-100 cursor-not-allowed"
          />
        </motion.div>

        {/* Names Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {['first_name', 'middle_name', 'last_name'].map((nameField) => (
            <motion.div 
              key={nameField}
              variants={inputVariants}
              initial="initial"
              animate="animate"
              whileHover="hover"
            >
              <label 
                htmlFor={nameField} 
                className="block text-gray-700 font-medium mb-2 capitalize"
              >
                {nameField.replace('_', ' ')}
              </label>
              <input
                type="text"
                required
                value={data[nameField]}
                onChange={(e) => onChange(nameField, e.target.value)}
                name={nameField}
                id={nameField}
                className="w-full px-4 py-2 border border-gray-300 rounded-md 
                  focus:outline-none focus:ring-2 focus:ring-blue-500 
                  transition-all duration-300"
              />
            </motion.div>
          ))}
        </div>

        {/* Additional Personal Details */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            { 
              name: 'gender', 
              type: 'select', 
              options: ['Male', 'Female'],
              label: 'Sex'
            },
            { 
              name: 'maritalStatus', 
              type: 'select', 
              options: ['Single', 'Married', 'Divorced', 'Widowed'],
              label: 'Marital Status'
            },
            { 
              name: 'dateOfBirth', 
              type: 'date',
              label: 'Date of Birth'
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
                  name={field.name}
                  value={data[field.name]}
                  onChange={(e) => onChange(field.name, e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md 
                    focus:outline-none focus:ring-2 focus:ring-blue-500 
                    transition-all duration-300"
                  required
                >
                  <option value="select">--Select--</option>
                  {field.options.map((option) => (
                    <option key={option.toLowerCase()} value={option.toLowerCase()}>
                      {option}
                    </option>
                  ))}
                </select>
              ) : (
                <input
                  type={field.type}
                  name={field.name}
                  value={data[field.name]}
                  onChange={(e) => onChange(field.name, e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md 
                    focus:outline-none focus:ring-2 focus:ring-blue-500 
                    transition-all duration-300"
                  required
                />
              )}
            </motion.div>
          ))}
        </div>

        {/* Address and Other Details */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            { 
              name: 'address', 
              type: 'textarea',
              label: 'Address',
              fullWidth: true
            },
            { 
              name: 'religion', 
              type: 'select', 
              options: ['Christian', 'Muslim', 'Others'],
              label: 'Religion'
            },
            { 
              name: 'phone', 
              type: 'tel',
              label: 'Phone Number',
              placeholder: 'Your Phone Number'
            }
          ].map((field) => (
            <motion.div 
              key={field.name}
              variants={inputVariants}
              initial="initial"
              animate="animate"
              whileHover="hover"
              className={field.fullWidth ? 'md:col-span-3' : ''}
            >
              <label 
                htmlFor={field.name} 
                className="block text-gray-700 font-medium mb-2"
              >
                {field.label}
              </label>
              {field.type === 'select' ? (
                <select
                  name={field.name}
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
              ) : field.type === 'textarea' ? (
                <textarea
                  name={field.name}
                  value={data[field.name]}
                  onChange={(e) => onChange(field.name, e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md 
                    focus:outline-none focus:ring-2 focus:ring-blue-500 
                    transition-all duration-300"
                  required
                />
              ) : (
                <input
                  type={field.type}
                  name={field.name}
                  value={data[field.name]}
                  onChange={(e) => onChange(field.name, e.target.value)}
                  placeholder={field.placeholder}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md 
                    focus:outline-none focus:ring-2 focus:ring-blue-500 
                    transition-all duration-300"
                  required
                />
              )}
            </motion.div>
          ))}
        </div>

        {/* Physical Challenge and Photo Upload */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <motion.div 
            variants={inputVariants}
            initial="initial"
            animate="animate"
            whileHover="hover"
          >
            <label 
              htmlFor="physical_challenge" 
              className="block text-gray-700 font-medium mb-2"
            >
              Disability Details
            </label>
            <textarea
              name="physicalChallenge"
              value={data.physical_challenge}
              onChange={(e) => onChange("physical_challenge", e.target.value)}
              id="physical_challenge"
              className="w-full px-4 py-2 border border-gray-300 rounded-md 
                focus:outline-none focus:ring-2 focus:ring-blue-500 
                transition-all duration-300"
              required
            />
          </motion.div>

          <motion.div 
            variants={inputVariants}
            initial="initial"
            animate="animate"
            whileHover="hover"
          >
            <label 
              htmlFor="photo" 
              className="block text-gray-700 font-medium mb-2"
            >
              Upload Photo
            </label>
            <input
              type="file"
              name="photo"
              id="photo"
              onChange={(e) => onChange("photo", e.target.files[0])}
              className="w-full px-4 py-2 border border-gray-300 rounded-md 
                file:mr-4 file:rounded-full file:border-0 
                file:text-sm file:bg-blue-50 file:text-blue-700
                hover:file:bg-blue-100"
              required
            />
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default PersonalInfo;