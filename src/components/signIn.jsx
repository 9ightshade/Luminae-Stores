import axios from "axios";
import bgimage from "../assets/png/background_img.png";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai"; // Eye icons
import { motion } from "framer-motion"; // Animations

function SignIn() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [toast, setToast] = useState("");
  const [showPassword, setShowPassword] = useState(false); // Password visibility toggle

  const loginURL = "https://portal.rsubs.org/api/users/login";
  const expirationTimeInHours = 2;
  const expirationTime = Date.now() + expirationTimeInHours * 60 * 60 * 1000;

  const decodeToken = (token) => {
    const response = jwtDecode(token);

    localStorage.setItem("_id", response.userId);
    localStorage.setItem("role", response.role);

    const role = response.role;
    role === "student" && navigate("/student");
    role === "admin" && navigate("/admin");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (email && password) {
      localStorage.setItem("email", email);
      localStorage.setItem("tokenExpirationTime", expirationTime);

      setIsLoading(true);

      try {
        const response = await axios.post(loginURL, { email, password });
        const token = response.data.token;

        localStorage.setItem("token", token);
        decodeToken(token);
      } catch (error) {
        const errorMessage =
          error.response?.data?.message || "Login failed. Please try again.";
        setToast(errorMessage);
      } finally {
        setIsLoading(false);
      }
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="h-screen flex items-center justify-center p-4 bg-cover bg-center"
      style={{
        backgroundImage: `url(${bgimage})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}>
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="bg-[#F3F1F1] p-10 shadow-md shadow-gray-500 rounded-xl w-full max-w-md">
        <h3 className="text-center text-3xl text-[#39447F] font-black mb-6">
          Log in
        </h3>

        {toast && (
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4"
            role="alert">
            <span>{toast}</span>
          </motion.div>
        )}

        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            {/* <label htmlFor="email" className="block mb-1 text-gray-700">
              Email
            </label> */}
            <input
              id="email"
              type="email"
              required
              placeholder="Email*"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="relative">
            {/* <label htmlFor="password" className="block mb-1 text-gray-700">
              Password
            </label> */}
            <input
              id="password"
              type={showPassword ? "text" : "password"}
              required
              placeholder="Password"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              onChange={(e) => setPassword(e.target.value)}
            />
            <div
              className="absolute inset-y-0 right-3 flex items-center cursor-pointer"
              onClick={togglePasswordVisibility}>
              {showPassword ? (
                <AiOutlineEyeInvisible className="w-5 h-5 text-gray-500" />
              ) : (
                <AiOutlineEye className="w-5 h-5 text-gray-500" />
              )}
            </div>
          </div>

          <motion.button
            type="submit"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className={`w-full py-3 rounded-md text-white font-semibold transition-colors duration-300 ${
              isLoading
                ? "bg-gray-500 cursor-not-allowed"
                : "bg-[#39447F] hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
            }`}
            disabled={isLoading}>
            {isLoading ? "Processing..." : "Submit"}
          </motion.button>

          <p className="text-center text-sm text-gray-600 mt-4">
            Don’t have an account?{" "}
            <Link
              to="/register"
              className="text-[#39447F] hover:underline font-semibold">
              Create profile
            </Link>
          </p>

          <p className="text-center text-sm text-gray-600 mt-2">
            <Link
              to="/reset_password"
              className="text-[#39447F] hover:underline font-semibold">
              Forgot Your Password?
            </Link>
          </p>
        </form>
      </motion.div>
    </motion.div>
  );
}

export default SignIn;
