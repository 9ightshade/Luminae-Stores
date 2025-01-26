import bgimage from "../assets/png/background_img.png";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai"; // Import eye icons from react-icons
import { motion } from "framer-motion";
import { account } from "../lib/appwrite";

function SignUp() {
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});
  const [toast, setToast] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const validateForm = () => {
    const newErrors = {};

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      newErrors.email = "Invalid email address";
    }

    if (formData.password.length < 8) {
      newErrors.password = "Password must be 8+ characters";
    }

    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords don't match";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsLoading(true);
    try {
      const response = await account.create(
        "unique()",
        formData.email,
        formData.password,
        formData.fullname
      );
      setToast("Account created successfully");
      setTimeout(() => navigate("/"), 2000);
    } catch (error) {
      setToast(error.message || "Signup failed");
    } finally {
      setIsLoading(false);
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
      className="min-h-screen flex items-center justify-center p-4 bg-cover bg-center"
      style={{
        backgroundImage: `url(${bgimage})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}>
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md bg-white/90 backdrop-blur-sm p-8 rounded-xl shadow-2xl">
        <h3 className="text-center text-3xl md:text-4xl text-[#39447F] font-black mb-6">
          Create Account
        </h3>

        {toast && (
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="bg-blue-100 border border-blue-400 text-blue-700 px-4 py-3 rounded relative mb-4"
            role="alert">
            <span className="block sm:inline">{toast}</span>
          </motion.div>
        )}

        <form
          onSubmit={(e) => {
            handleSubmit(
              e,
              formData.email,
              formData.password,
              formData.fullname
            );
          }}
          className="space-y-4">
          <div>
            <input
              className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 
                                ${
                                  errors.email
                                    ? "border-red-500 focus:ring-red-500"
                                    : "border-gray-300 focus:ring-blue-500"
                                }`}
              type="email"
              placeholder="Email*"
              name="email"
              required
              value={formData.email}
              onChange={handleInputChange}
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email}</p>
            )}
          </div>

          <div>
            <input
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="text"
              placeholder="Full Name"
              name="fullname"
              required
              value={formData.fullname}
              onChange={handleInputChange}
            />
          </div>

          <div className="relative">
            <input
              className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 
                                ${
                                  errors.password
                                    ? "border-red-500 focus:ring-red-500"
                                    : "border-gray-300 focus:ring-blue-500"
                                }`}
              type={showPassword ? "text" : "password"}
              required
              placeholder="Password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
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
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">{errors.password}</p>
            )}
          </div>

          <div className="relative">
            <input
              className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 
                                ${
                                  errors.confirmPassword
                                    ? "border-red-500 focus:ring-red-500"
                                    : "border-gray-300 focus:ring-blue-500"
                                }`}
              type={showPassword ? "text" : "password"}
              required
              placeholder="Confirm Password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleInputChange}
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
            {errors.confirmPassword && (
              <p className="text-red-500 text-sm mt-1">
                {errors.confirmPassword}
              </p>
            )}
          </div>

          <button
            className={`w-full py-3 rounded-md text-white font-semibold transition-colors duration-300
                            ${
                              isLoading
                                ? "bg-gray-500 cursor-not-allowed"
                                : "bg-[#39447F] hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            }`}
            type="submit"
            disabled={isLoading}>
            {isLoading ? "Processing..." : "Create Account"}
          </button>

          <p className="text-center text-sm text-gray-600">
            Already have an account?{" "}
            <Link
              to="/"
              className="text-[#39447F] hover:underline font-semibold">
              Log in
            </Link>
          </p>
        </form>
      </motion.div>
    </motion.div>
  );
}

export default SignUp;
