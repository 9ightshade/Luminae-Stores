import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion"; // Animations
import Nav from "./nav";
import dashboard from "../dashboard";
import Home from "./dashboardInfo/home";
import ApplicationDashboard from "./dashboardInfo/application";
import Payment from "./dashboardInfo/payment";
import Transcript from "./dashboardInfo/transcript";

function StudentDashboard() {
  const [step, setStep] = useState(1);

  const handleClick = (sectionId) => {
    setStep(sectionId);
    console.log(sectionId, step);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen flex flex-col"
    >
      <Nav />

      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="container py-4 px-7 flex justify-between gap-4"
      >
        <div className="sections flex gap-2 flex-col w-1/3 text-gray-500 h-[400px]">
          {dashboard.map((section) => (
            <motion.button
              key={section.id}
              className="py-[.7em] border-none rounded"
              style={{
                backgroundColor: `${step === section.id ? "#1e3a8a" : "#F3F1F1"}`,
                color: `${step === section.id ? "white" : "#6b7280"}`,
              }}
              onClick={() => handleClick(section.id)}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              {section.label}
            </motion.button>
          ))}
          <p className="program-links font-bold">Programme Application Links</p>
          <hr className="mb-[2em]" />
          <Link to={"/application"}>
            <p className="text-blue-950 font-semibold hover:underline cursor-pointer mb-2">
              Full Time MBA
            </p>
            <p className="text-blue-950 font-semibold hover:underline cursor-pointer mb-2">
              Modular MBA
            </p>
            <p className="text-blue-950 font-semibold hover:underline cursor-pointer mb-2">
              Modular Executive MBA
            </p>
            <p className="text-blue-950 font-semibold hover:underline cursor-pointer mb-2">
              Executive MBA
            </p>
          </Link>
        </div>

        <div className="bg-[#F3F1F1] w-full px-4 py-3 mb-4">
          {step === 1 && <Home />}
          {step === 2 && <ApplicationDashboard />}
          {step === 3 && <Payment />}
          {step === 4 && <Transcript />}
        </div>
      </motion.div>
    </motion.div>
  );
}

export default StudentDashboard;
