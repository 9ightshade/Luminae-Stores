import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  CheckCircleIcon,
  ChevronRightIcon,
  ChevronLeftIcon,
} from "@heroicons/react/24/outline";

import Nav from "./nav";
import sections from "../sections";
import Course from "./forms/course";
import PersonalInfo from "./forms/personalInfo";
import EmergencyContact from "./forms/emergencyContact";
import Citizenship from "./forms/citizenship";
import WorkExperience from "./forms/workExp";
import RsubsQualification from "./forms/rsubsQualification";
import Qualifications from "./forms/qaulifications";
import ProgramFinancing from "./forms/programFinacing";
import Attachment from "./forms/attachement";
import axios from "axios";

function RsbApplication() {
  const [step, setStep] = useState(1);
  const email = localStorage.getItem("email");
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const startUrl = `https://portal.rsubs.org/api/applications/start`;

  const [formData, setFormData] = useState({
    course: { programmeTitle: "", courseTitle: "" },
    personalInformation: {
      title: "",
      first_name: "",
      middle_name: "",
      last_name: "",
      email: email,
      gender: "",
      maritalStatus: "",
      dateOfBirth: "",
      address: "",
      religion: "",
      phone: "",
      physical_challenge: "",
      photo: "",
    },
    emergencyContact: { name: "", relationship: "", phone: "", email: "" },
    citizenship: {
      nationality: "",
      countryOfResidency: "",
      primaryLanguage: "",
      stateOfOrigin: "",
    },
    workExperience: {
      postQualificationExperienceYears: 0,
      managerialExperienceYears: 0,
    },
    lbsProgrammeQualification: {
      highestQualification: "",
      classOfDegree: "",
      factorsMotivatingMBA: "",
      factorsHinderingMBA: "",
    },
    qualifications: [
      {
        institutionName: "",
        institutionType: "",
        certificateAwarded: "",
        startDate: "",
        endDate: "",
      },
    ],
    programmeFinancing: { fundingMethod: "" },
    attachments: {
      degreeCertificate: "",
      curriculumVitae: "",
      evidenceOfAbilityToPay: "",
      oLevelResult: "",
      nyscExemptionLetter: "",
    },
    lastSavedStep: "Started",
  });

  const handleChange = (section, key, value) => {
    setFormData((prev) => ({
      ...prev,
      [section]: { ...prev[section], [key]: value },
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(startUrl, formData, {
        headers: { Authorization: `Bearer ${token}` },
      });
      navigate("/student");
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  const renderFormStep = () => {
    const formComponents = {
      1: (
        <Course
          data={formData.course}
          onChange={(k, v) => handleChange("course", k, v)}
        />
      ),
      2: (
        <PersonalInfo
          data={formData.personalInformation}
          onChange={(k, v) => handleChange("personalInformation", k, v)}
        />
      ),
      3: (
        <EmergencyContact
          data={formData.emergencyContact}
          onChange={(k, v) => handleChange("emergencyContact", k, v)}
        />
      ),
      4: (
        <Citizenship
          data={formData.citizenship}
          onChange={(k, v) => handleChange("citizenship", k, v)}
        />
      ),
      5: (
        <WorkExperience
          data={formData.workExperience}
          onChange={(k, v) => handleChange("workExperience", k, v)}
        />
      ),
      6: (
        <RsubsQualification
          data={formData.lbsProgrammeQualification}
          onChange={(k, v) => handleChange("lbsProgrammeQualification", k, v)}
        />
      ),
      7: (
        <Qualifications
          data={formData.qualifications}
          onChange={(idx, k, v) => {
            const newQualifications = [...formData.qualifications];
            newQualifications[idx][k] = v;
            setFormData({ ...formData, qualifications: newQualifications });
          }}
        />
      ),
      8: (
        <ProgramFinancing
          data={formData.programmeFinancing}
          onChange={(k, v) => handleChange("programmeFinancing", k, v)}
        />
      ),
      9: (
        <Attachment
          data={formData.attachments}
          onChange={(k, f) => handleChange("attachments", k, f)}
        />
      ),
    };

    return formComponents[step];
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Nav />
      <div className="container mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white shadow-xl rounded-2xl overflow-hidden">
          <div className="bg-gradient-to-r from-[#39447F] to-[#5A6BAD] px-6 py-4">
            <h1 className="text-2xl font-bold text-white text-center">
              Full-Time MBA Admissions
            </h1>
          </div>

          <div className="flex">
            {/* Sidebar Navigation */}
            <div className="w-1/4 bg-gray-50 p-4 space-y-2">
              {sections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => setStep(section.id)}
                  className={`w-full text-left px-4 py-3 rounded-lg transition-all duration-300 
                    ${
                      step === section.id
                        ? "bg-[#39447F] text-white"
                        : "text-gray-600 hover:bg-gray-200"
                    }`}>
                  <div className="flex items-center justify-between">
                    <span>{section.label}</span>
                    {step > section.id && (
                      <CheckCircleIcon className="h-5 w-5 text-green-400" />
                    )}
                  </div>
                </button>
              ))}
            </div>

            {/* Form Content */}
            <div className="w-3/4 p-8">
              <AnimatePresence mode="wait">
                <motion.div
                  key={step}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.3 }}>
                  {renderFormStep()}
                </motion.div>
              </AnimatePresence>

              {/* Navigation Buttons */}
              <div className="flex justify-between mt-8">
                {step > 1 && (
                  <button
                    onClick={() => setStep(step - 1)}
                    className="flex items-center bg-gray-200 text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-300">
                    <ChevronLeftIcon className="h-5 w-5 mr-2" />
                    Previous
                  </button>
                )}

                {step < sections.length ? (
                  <button
                    onClick={() => setStep(step + 1)}
                    className="ml-auto flex items-center bg-[#39447F] text-white px-4 py-2 rounded-lg hover:bg-blue-700">
                    Next
                    <ChevronRightIcon className="h-5 w-5 ml-2" />
                  </button>
                ) : (
                  <button
                    onClick={handleSubmit}
                    className="ml-auto flex items-center bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700">
                    Submit Application
                    <CheckCircleIcon className="h-5 w-5 ml-2" />
                  </button>
                )}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default RsbApplication;
