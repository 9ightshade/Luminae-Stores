import axios from "axios";
import { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

function Transcript() {
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);
    const [toast, setToast] = useState("");
    const [data, setData] = useState({
        fullName: '',
        registrationNumber: '',
        emailAddress: '',
        phoneNumber: '',
        courseOfStudy: '',
        admissionYear: '',
        graduationYear: '',
        receiverEmail: '',
        organisationName: ''
    });

    const transcriptURL = "https://portal.rsubs.org/api/transcript-requests";

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setData(prevData => ({
            ...prevData,
            [name]: value,
        }));
    }

    const submitTranscript = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        setToast("");

        try {
            const token = localStorage.getItem('token');
            const response = await axios.post(transcriptURL, data, {
                headers: { Authorization: `Bearer ${token}` }
            });

            // Reset form and show success message
            setToast("Transcript request submitted successfully!");
            setData({
                fullName: '',
                registrationNumber: '',
                emailAddress: '',
                phoneNumber: '',
                courseOfStudy: '',
                admissionYear: '',
                graduationYear: '',
                receiverEmail: '',
                organisationName: ''
            });
        } catch (error) {
            const errorMessage = 
                error.response?.data?.message || 
                "Transcript request failed. Please try again.";
            setToast(errorMessage);
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="min-h-screen flex items-center justify-center p-4 bg-gray-100"
        >
            <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="bg-white p-10 shadow-md rounded-xl w-full max-w-3xl"
            >
                <h3 className="text-center text-3xl text-[#39447F] font-black mb-6">
                    Request Transcript
                </h3>

                {toast && (
                    <motion.div
                        initial={{ y: -20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: -20, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className={`
                            ${toast.includes('successfully') 
                                ? 'bg-green-100 border-green-400 text-green-700' 
                                : 'bg-red-100 border-red-400 text-red-700'}
                            border px-4 py-3 rounded relative mb-4
                        `}
                        role="alert"
                    >
                        <span>{toast}</span>
                    </motion.div>
                )}

                <form className="space-y-4" onSubmit={submitTranscript}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-4">
                            <input
                                type="text"
                                name="fullName"
                                value={data.fullName}
                                required
                                placeholder="Full Name*"
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                onChange={handleInputChange}
                            />
                            <input
                                type="text"
                                name="registrationNumber"
                                value={data.registrationNumber}
                                required
                                placeholder="Registration Number*"
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                onChange={handleInputChange}
                            />
                            <input
                                type="email"
                                name="emailAddress"
                                value={data.emailAddress}
                                required
                                placeholder="Email Address*"
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                onChange={handleInputChange}
                            />
                            <input
                                type="tel"
                                name="phoneNumber"
                                value={data.phoneNumber}
                                required
                                placeholder="Phone Number*"
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                onChange={handleInputChange}
                            />
                            <input
                                type="text"
                                name="courseOfStudy"
                                value={data.courseOfStudy}
                                required
                                placeholder="Course of Study*"
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className="space-y-4">
                            <input
                                type="number"
                                name="admissionYear"
                                value={data.admissionYear}
                                required
                                placeholder="Admission Year*"
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                onChange={handleInputChange}
                            />
                            <input
                                type="number"
                                name="graduationYear"
                                value={data.graduationYear}
                                required
                                placeholder="Graduation Year*"
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                onChange={handleInputChange}
                            />
                            <input
                                type="email"
                                name="receiverEmail"
                                value={data.receiverEmail}
                                required
                                placeholder="Receiver Email*"
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                onChange={handleInputChange}
                            />
                            <input
                                type="text"
                                name="organisationName"
                                value={data.organisationName}
                                required
                                placeholder="Organisation Name*"
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                onChange={handleInputChange}
                            />
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
                                disabled={isLoading}
                            >
                                {isLoading ? "Processing..." : "Request Transcript"}
                            </motion.button>
                        </div>
                    </div>
                </form>
            </motion.div>
        </motion.div>
    )
}

export default Transcript;