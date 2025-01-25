import { useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";

function Payment() {
    const [file, setFile] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [toast, setToast] = useState("");

    const handleFileChange = (event) => {
        setFile(event.target.files[0]);
    };

    const submitPaymentProof = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        setToast("");

        if (!file) {
            setToast("Please select a payment proof file");
            setIsLoading(false);
            return;
        }

        const formData = new FormData();
        formData.append('proofOfPayment', file);

        try {
            const token = localStorage.getItem('token');
            const response = await axios.post('https://portal.rsubs.org/api/payment-proof', formData, {
                headers: { 
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'multipart/form-data'
                }
            });

            setToast("Payment proof uploaded successfully!");
            setFile(null);
        } catch (error) {
            const errorMessage = 
                error.response?.data?.message || 
                "Upload failed. Please try again.";
            setToast(errorMessage);
        } finally {
            setIsLoading(false);
        }
    };

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
                className="bg-white p-10 shadow-md rounded-xl w-full max-w-md"
            >
                <h3 className="text-center text-3xl text-[#39447F] font-black mb-6">
                    Payment Details
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

                <div className="mb-6">
                    <p className="text-gray-700 mb-2">
                        <span className="font-semibold">Account Name:</span> University Bursar Account
                    </p>
                    <p className="text-gray-700">
                        <span className="font-semibold">Account Number:</span> 1234567890
                    </p>
                </div>

                <form onSubmit={submitPaymentProof} className="space-y-4">
                    <div>
                        <p className="text-gray-700 mb-2 font-semibold">
                            Upload Payment Proof
                        </p>
                        <input 
                            type="file" 
                            name="proofOfPayment" 
                            id="proofOfPayment" 
                            required
                            onChange={handleFileChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        {file && (
                            <p className="text-sm text-gray-600 mt-2">
                                Selected file: {file.name}
                            </p>
                        )}
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
                        disabled={isLoading}
                    >
                        {isLoading ? "Uploading..." : "Submit Payment Proof"}
                    </motion.button>
                </form>
            </motion.div>
        </motion.div>
    )
}

export default Payment;