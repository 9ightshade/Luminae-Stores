import { motion } from 'framer-motion';
import { AcademicCapIcon, BookOpenIcon } from "@heroicons/react/24/outline";

// eslint-disable-next-line react/prop-types
function Course({ data, onChange }) {
  const programOptions = [
    {
      value: "Post Graduate Diploma in Business (PGDBA)",
      label: "Post Graduate Diploma in Business",
    },
    {
      value: "Masters in Business Administration (MBA)",
      label: "Masters in Business Administration",
    },
    { value: "Master of Sciences (M.Sc)", label: "Master of Sciences" },
    {
      value: "Doctorate in Business Administration (DBA)",
      label: "Doctorate in Business Administration",
    },
  ];
  
  const courseOptions = [
    { value: "Accounting", label: "Accounting" },
    { value: "Management", label: "Management" },
    { value: "Marketing", label: "Marketing" },
    { value: "Finance", label: "Finance" },
    { value: "ICT Management", label: "ICT Management" },
    {
      value: "Supply Chain and Logistics Management",
      label: "Supply Chain & Logistics",
    },
    {
      value: "Procurement and Contract Management",
      label: "Procurement & Contract",
    },
    {
      value: "Healthcare and Hospital Management",
      label: "Healthcare Management",
    },
    { value: "Human Resource Management", label: "Human Resource Management" },
  ];

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white shadow-md rounded-lg p-6"
    >
      <div className="flex items-center mb-6 border-b pb-4">
        <AcademicCapIcon className="h-8 w-8 text-[#39447F] mr-3" />
        <h2 className="text-2xl font-bold text-[#39447F]">Program Selection</h2>
      </div>
      <motion.div 
        className="grid md:grid-cols-2 gap-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        <motion.div
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <label
            htmlFor="programme-title"
            className="block text-sm font-medium text-gray-700 mb-2 flex items-center">
            <BookOpenIcon className="h-5 w-5 mr-2 text-[#39447F]" />
            Program Title
          </label>
          <select
            id="programme-title"
            name="programmeTitle"
            value={data.programmeTitle}
            onChange={(e) => onChange("programmeTitle", e.target.value)}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm 
                        focus:ring-2 focus:ring-[#39447F]/50 focus:border-[#39447F] 
                        transition-all duration-300">
            <option value="">Select Program</option>
            {programOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <label
            htmlFor="course-title"
            className="block text-sm font-medium text-gray-700 mb-2 flex items-center">
            <BookOpenIcon className="h-5 w-5 mr-2 text-[#39447F]" />
            Course Title
          </label>
          <select
            id="course-title"
            name="courseTitle"
            value={data.courseTitle}
            onChange={(e) => onChange("courseTitle", e.target.value)}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm 
                        focus:ring-2 focus:ring-[#39447F]/50 focus:border-[#39447F] 
                        transition-all duration-300">
            <option value="">Select Course</option>
            {courseOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </motion.div>
      </motion.div>
      <motion.div 
        className="mt-4 text-sm text-gray-500 italic flex items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.5 }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 mr-2 text-yellow-500"
          viewBox="0 0 20 20"
          fill="currentColor">
          <path
            fillRule="evenodd"
            d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
            clipRule="evenodd"
          />
        </svg>
        Please select your preferred program and specialized course carefully
      </motion.div>
    </motion.div>
  );
}

export default Course;