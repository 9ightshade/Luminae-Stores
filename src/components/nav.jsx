import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  Bars3Icon,
  XMarkIcon,
  UserPlusIcon,
} from "@heroicons/react/24/outline";
import logo from "../assets/svg/logo.svg";
import { useTokenClearAndRedirect } from "./helper/function";

function Nav() {
  const [isVisible, setIsVisible] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const token = localStorage.getItem("token");

  useEffect(() => {
    setIsLoggedIn(!!token);
  }, [token]);

  const toggleSideNav = () => {
    setIsVisible((prev) => !prev);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
  };

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link to="/">
          <img src={logo} alt="Logo" className="w-32" />
        </Link>

        {/* Hamburger Menu for Mobile */}
        <button
          onClick={toggleSideNav}
          className="block md:hidden focus:outline-none">
          {isVisible ? (
            <XMarkIcon className="w-8 h-8 text-gray-700" />
          ) : (
            <Bars3Icon className="w-8 h-8 text-gray-700" />
          )}
        </button>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-6 items-center">
          <Link to="/" className="text-gray-700 hover:text-blue-500">
            Home
          </Link>
          <Link to="/about" className="text-gray-700 hover:text-blue-500">
            About Us
          </Link>
          <Link to="/contact" className="text-gray-700 hover:text-blue-500">
            Contact Us
          </Link>
          <Link to="/portal" className="text-gray-700 hover:text-blue-500">
            Portal
          </Link>
          <Link to="/privacy" className="text-gray-700 hover:text-blue-500">
            Privacy Policy
          </Link>
          <Link to="/alumni" className="text-gray-700 hover:text-blue-500">
            Alumni
          </Link>
          {isLoggedIn ? (
            <button
              onClick={handleLogout}
              className="flex items-center bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-200">
              {/* <ArrowRightOnRectangleIcon className="w-5 h-5 mr-2" /> */}
              <Link to="/">Log Out</Link>
            </button>
          ) : (
            <Link
              to="/register"
              className="flex items-center bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-200">
              <UserPlusIcon className="w-5 h-5 mr-2" />
              Create Profile
            </Link>
          )}
        </div>
      </div>

      {/* Mobile Dropdown */}
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="bg-gray-50 shadow-md md:hidden">
            <div className="flex flex-col px-6 py-4 gap-4">
              <Link
                to="/"
                className="text-gray-700 hover:text-blue-500"
                onClick={toggleSideNav}>
                Home
              </Link>
              <Link
                to="/about"
                className="text-gray-700 hover:text-blue-500"
                onClick={toggleSideNav}>
                About Us
              </Link>
              <Link
                to="/contact"
                className="text-gray-700 hover:text-blue-500"
                onClick={toggleSideNav}>
                Contact Us
              </Link>
              <Link
                to="/portal"
                className="text-gray-700 hover:text-blue-500"
                onClick={toggleSideNav}>
                Portal
              </Link>
              <Link
                to="/privacy"
                className="text-gray-700 hover:text-blue-500"
                onClick={toggleSideNav}>
                Privacy Policy
              </Link>
              <Link
                to="/alumni"
                className="text-gray-700 hover:text-blue-500"
                onClick={toggleSideNav}>
                Alumni
              </Link>
              {isLoggedIn ? (
                <button
                  onClick={() => {
                    handleLogout();
                    toggleSideNav();
                  }}
                  className="flex items-center bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-200">
                  {/* <ArrowRightOnRectangleIcon className="w-5 h-5 mr-2" /> */}
                  Log Out
                </button>
              ) : (
                <Link
                  to="/create-profile"
                  className="flex items-center bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-200"
                  onClick={toggleSideNav}>
                  <UserPlusIcon className="w-5 h-5 mr-2" />
                  Create Profile
                </Link>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

export default Nav;
