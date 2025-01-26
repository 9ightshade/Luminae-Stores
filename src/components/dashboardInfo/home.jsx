import { useEffect, useState } from "react";
import axios from "axios";
import { motion } from "framer-motion"; // Animations
import profilePic from "../../assets/jpeg/testPassport.jpg";
import { account } from "../../lib/appwrite";

const nigeriaHolidaysAndEvents = [
  {
    id: 1,
    name: "New Year's Day",
    date: "2025-01-01",
    description: "Celebration of the first day of the Gregorian calendar year.",
    type: "Public Holiday",
  },
  {
    id: 2,
    name: "Good Friday",
    date: "2025-04-18",
    description:
      "Christian holiday commemorating the crucifixion of Jesus Christ.",
    type: "Public Holiday",
  },
  {
    id: 3,
    name: "Easter Monday",
    date: "2025-04-21",
    description:
      "Christian holiday celebrating the resurrection of Jesus Christ.",
    type: "Public Holiday",
  },
  {
    id: 4,
    name: "Workers' Day",
    date: "2025-05-01",
    description: "International day to celebrate workers and laborers.",
    type: "Public Holiday",
  },
  {
    id: 5,
    name: "Democracy Day",
    date: "2025-06-12",
    description: "Celebration of the return to civilian rule in Nigeria.",
    type: "Public Holiday",
  },
  {
    id: 6,
    name: "Eid al-Fitr",
    date: "2025-04-30",
    description: "Islamic festival marking the end of Ramadan.",
    type: "Public Holiday",
  },
  {
    id: 7,
    name: "Eid al-Adha",
    date: "2025-06-29",
    description: "Islamic festival of sacrifice.",
    type: "Public Holiday",
  },
  {
    id: 8,
    name: "Independence Day",
    date: "2025-10-01",
    description:
      "Celebration of Nigeria's independence from British rule in 1960.",
    type: "Public Holiday",
  },
  {
    id: 9,
    name: "Christmas Day",
    date: "2025-12-25",
    description: "Christian holiday celebrating the birth of Jesus Christ.",
    type: "Public Holiday",
  },
  {
    id: 10,
    name: "Boxing Day",
    date: "2025-12-26",
    description:
      "Day after Christmas, traditionally a time for giving to the less fortunate.",
    type: "Public Holiday",
  },
  {
    id: 11,
    name: "Lagos Carnival",
    date: "2025-04-27",
    description:
      "A vibrant street carnival in Lagos featuring colorful parades and cultural performances.",
    type: "Cultural Event",
  },
  {
    id: 12,
    name: "Calabar Carnival",
    date: "2025-12-01",
    description:
      "Known as Africa's biggest street party, celebrated throughout December in Calabar.",
    type: "Cultural Event",
  },
  {
    id: 13,
    name: "Argungu Fishing Festival",
    date: "2025-02-20",
    description:
      "A cultural festival held in Argungu, Kebbi State, celebrating traditional fishing and other activities.",
    type: "Cultural Event",
  },
  {
    id: 14,
    name: "Osun-Osogbo Festival",
    date: "2025-08-15",
    description:
      "Annual festival in honor of the river goddess Osun in Osogbo, Osun State.",
    type: "Cultural Event",
  },
  {
    id: 15,
    name: "New Yam Festival",
    date: "2025-09-05",
    description: "Celebration of the yam harvest among the Igbo people.",
    type: "Cultural Event",
  },
];

function Home() {
    const [userData, setUserData] = useState(null);
    const [randomEvents, setRandomEvents] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
  
  
    const fetchUserData = async () => {
      try {
        setIsLoading(true);
       
        setUserData(await account.get());
        
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
  
    useEffect(() => {
      fetchUserData();
      const shuffledEvents = [...nigeriaHolidaysAndEvents]
        .sort(() => 0.5 - Math.random())
        .slice(0, 3);
      setRandomEvents(shuffledEvents);
    }, []);
  
    if (isLoading) return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-[#39447F]">Loading dashboard...</p>
      </div>
    );
  
    if (error) return (
      <div className="text-red-500 text-center p-4">
        Error loading dashboard: {error}
      </div>
    );
  
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="flex justify-between p-6 bg-gray-100 gap-6"
      >
        {/* Upcoming Events Section */}
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="bg-white p-6 rounded-lg shadow-md w-1/2"
        >
          <h2 className="text-2xl text-[#39447F] font-bold mb-4">
            Upcoming Events
          </h2>
          <div className="space-y-4">
            {randomEvents.map((event) => (
              <motion.div
                key={event.id}
                whileHover={{ scale: 1.02 }}
                className="border-l-4 border-blue-500 bg-blue-50 p-4 rounded-r-lg"
              >
                <h3 className="text-lg font-semibold text-blue-800">
                  {event.name}
                </h3>
                <p className="text-gray-600 mb-2">{event.description}</p>
                <p className="text-sm text-blue-600 font-medium">
                  {event.date}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
  
        {/* Profile Details Section */}
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="bg-white p-6 rounded-lg shadow-md w-1/2 flex flex-col items-center"
        >
          <h2 className="text-2xl text-[#39447F] font-bold mb-6">
            Profile Details
          </h2>
          <motion.div
            whileHover={{ scale: 1.1 }}
            className="relative mb-4"
          >
            <div className="absolute right-0 top-0 w-3 h-3 bg-green-400 rounded-full border-2 border-white"></div>
            <img
              src={profilePic}
              alt="Profile"
              className="w-24 h-24 rounded-full object-cover border-4 border-[#39447F]"
            />
          </motion.div>
          
          <div className="text-center">
            <h3 className="text-xl font-semibold text-gray-800">
              {userData?.name || "User"}
            </h3>
            <p className="text-gray-600 mb-2">{userData?.email || "No email"}</p>
            <p className="text-gray-500">Contact: {userData?.phone || "Not provided"}</p>
          </div>
        </motion.div>
      </motion.div>
    );
  }
  
  export default Home;