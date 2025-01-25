import axios from "axios";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
function Error() {
  const userId = localStorage.getItem("_id");

  const startUrl = `https://portal.rsubs.org/api/application/${userId}/start`;

  const handleClick = async () => {
    console.log("clicked");
    try {
      const response = await axios.get(startUrl, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`, // Assuming token-based authentication
        },
      });
      console.log(response.data);
    } catch (error) {
      console.error(
        "An error occurred:",
        error.response?.data || error.message
      );
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white p-8 rounded-lg shadow-lg text-center">
        <h1 className="text-4xl font-bold text-blue-700 mb-4">
          Oops! Something went wrong.
        </h1>
        <p className="text-gray-600 mb-6">
          We're sorry for the inconvenience. Please try again or contact support
          if the issue persists.
        </p>

        <Link to="/" className="block font-bold text-blue-700 mb-4 ">
          Return to login
        </Link>
        <button
          onClick={handleClick}
          className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition duration-200">
          Retry
        </button>
      </motion.div>
    </div>
  );
}

export default Error;
