import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { motion } from "framer-motion";
import { 
  ArrowRightIcon, 
  DocumentIcon, 
  ClockIcon, 
  CheckCircleIcon 
} from "@heroicons/react/24/outline";

function ApplicationDashboard() {
  const [applications, setApplications] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchApplications = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await axios.get(
          "https://portal.rsubs.org/api/applications",
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );
        setApplications(response.data);
        setIsLoading(false);
      } catch (err) {
        setError(err.message);
        setIsLoading(false);
      }
    };
    fetchApplications();
  }, []);

  const getStatusIcon = (status) => {
    switch(status) {
      case "Not Submitted": 
        return <DocumentIcon className="w-5 h-5 text-yellow-600" />;
      case "In Progress": 
        return <ClockIcon className="w-5 h-5 text-blue-600" />;
      case "Completed": 
        return <CheckCircleIcon className="w-5 h-5 text-green-600" />;
      default: 
        return null;
    }
  };

  const getStatusStyles = (status) => {
    const baseStyles = "px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider inline-flex items-center gap-2";
    switch(status) {
      case "Not Submitted": 
        return `${baseStyles} bg-yellow-100 text-yellow-900`;
      case "In Progress": 
        return `${baseStyles} bg-blue-100 text-blue-900`;
      case "Completed": 
        return `${baseStyles} bg-green-100 text-green-900`;
      default: 
        return `${baseStyles} bg-gray-100 text-gray-900`;
    }
  };

  if (isLoading)
    return (
      <div className="flex justify-center items-center h-screen">
        <motion.div 
          animate={{ rotate: 360 }}
          transition={{ 
            duration: 1, 
            repeat: Infinity, 
            ease: "linear" 
          }}
          className="w-12 h-12 border-4 border-[#39447F] border-t-transparent rounded-full"
        />
      </div>
    );

  if (error)
    return (
      <div className="bg-red-50 border border-red-200 text-red-800 px-4 py-3 rounded-lg text-center">
        <p className="font-bold">Error Loading Applications</p>
        <p>{error}</p>
      </div>
    );

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="container mx-auto px-4 sm:px-6 lg:px-8 py-8"
    >
      <div className="bg-white shadow-xl rounded-2xl overflow-hidden">
        <div className="bg-gradient-to-r from-[#39447F] to-[#5A6BAD] px-6 py-4">
          <h2 className="text-2xl font-bold text-white flex items-center gap-3">
            <DocumentIcon className="w-7 h-7" />
            My Applications
          </h2>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                {["Application ID", "Name", "Email", "Program", "Status", "Actions"].map((header) => (
                  <th 
                    key={header}
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {applications.length === 0 ? (
                <tr>
                  <td colSpan="6" className="text-center p-8 text-gray-500">
                    No applications found
                  </td>
                </tr>
              ) : (
                applications.map((app) => (
                  <tr 
                    key={app.id} 
                    className="hover:bg-gray-50 transition-colors duration-200"
                  >
                    <td className="px-6 py-4 whitespace-nowrap">{app.applicationId}</td>
                    <td className="px-6 py-4 whitespace-nowrap">{app.name}</td>
                    <td className="px-6 py-4 whitespace-nowrap">{app.email}</td>
                    <td className="px-6 py-4 whitespace-nowrap">{app.program}</td>
                    <td className="px-6 py-4">
                      <span className={getStatusStyles(app.status)}>
                        {getStatusIcon(app.status)}
                        {app.status}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <Link
                        to={`/application/${app.id}`}
                        className="inline-flex items-center gap-2 bg-[#39447F] text-white px-4 py-2 rounded-lg hover:bg-[#4A5AD0] transition-colors"
                      >
                        {app.status === "Not Submitted" ? "Continue" : "View"}
                        <ArrowRightIcon className="w-4 h-4" />
                      </Link>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </motion.div>
  );
}

export default ApplicationDashboard;