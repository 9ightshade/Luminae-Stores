import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { motion } from "framer-motion";

function ApplicationDashboard() {
  //   const navigate = useNavigate();
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

  if (isLoading)
    return (
      <div className="flex justify-center items-center h-full">
        <p className="text-[#39447F]">Loading applications...</p>
      </div>
    );

  if (error)
    return <div className="text-red-500 text-center">Error: {error}</div>;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl text-[#39447F] font-bold mb-6">
        My Applications
      </h2>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse text-gray-700">
          <thead>
            <tr className="bg-gray-100 text-[#39447F] font-semibold">
              <th className="p-3 text-left">Application ID</th>
              <th className="p-3 text-left">Name</th>
              <th className="p-3 text-left">Email</th>
              <th className="p-3 text-left">Program</th>
              <th className="p-3 text-left">Status</th>
              <th className="p-3 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {applications.length === 0 ? (
              <tr>
                <td colSpan="6" className="text-center p-4 text-gray-500">
                  No applications found
                </td>
              </tr>
            ) : (
              applications.map((app) => (
                <tr
                  key={app.id}
                  className="border-b hover:bg-gray-50 transition-colors">
                  <td className="p-3">{app.applicationId}</td>
                  <td className="p-3">{app.name}</td>
                  <td className="p-3">{app.email}</td>
                  <td className="p-3">{app.program}</td>
                  <td className="p-3">
                    <span
                      className={`
                                            px-2 py-1 rounded text-sm
                                            ${
                                              app.status === "Not Submitted"
                                                ? "bg-yellow-100 text-yellow-800"
                                                : app.status === "In Progress"
                                                ? "bg-blue-100 text-blue-800"
                                                : app.status === "Completed"
                                                ? "bg-green-100 text-green-800"
                                                : "bg-gray-100 text-gray-800"
                                            }
                                        `}>
                      {app.status}
                    </span>
                  </td>
                  <td className="p-3">
                    <Link
                      to={`/application/${app.id}`}
                      className="bg-[#39447F] text-white px-3 py-2 rounded hover:bg-blue-700 transition-colors">
                      {app.status === "Not Submitted" ? "Continue" : "View"}
                    </Link>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </motion.div>
  );
}

export default ApplicationDashboard;
