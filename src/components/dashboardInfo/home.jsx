import { useEffect, useState } from "react";
import axios from "axios";
import { motion } from "framer-motion"; // Animations
import profilePic from "../../assets/jpeg/testPassport.jpg";

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
  // Get user ID and token from localStorage
  const userId = localStorage.getItem("_id");
  const token = localStorage.getItem("token");
  //   const email = localStorage.getItem('email');
  //   console.log(email);

  // API URL to fetch user data
  const fetchUserURL = `https://portal.rsubs.org/api/users/${userId}`;

  const fetchUserData = async () => {
    try {
      const fetchResponse = await axios.get(fetchUserURL, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setUserData(fetchResponse.data);
      //   console.log(fetchResponse.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchUserData();
    // Shuffle and pick 4 random events
    const shuffledEvents = [...nigeriaHolidaysAndEvents].sort(
      () => 0.5 - Math.random()
    );
    setRandomEvents(shuffledEvents.slice(0, 3));
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="flex justify-between p-3 text-gray-500 gap-4">
      {/* Upcoming Events Section */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="upcoming-class bg-white p-5 w-1/2">
        <h2 className="font-bold text-lg">Upcoming Events</h2>

        <div className="events-list rounded flex flex-col gap-2">
          {randomEvents.map((event) => (
            <motion.div
              key={event.id}
              className="event border-2 border-l-blue-400 bg-blue-100 p-2"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}>
              <h2 className="event-day font-bold">{event.name}</h2>
              <p className="event-description">{event.description}</p>
              <p className="justify-self-end font-semibold">{event.date}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Profile Details Section */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="profile bg-white p-5 flex flex-col gap-3 w-1/2">
        <h2 className="font-bold text-lg">Profile Details</h2>
        <div className="flex flex-col items-center gap-2">
          <motion.div
            className="profile-pic w-[50px] relative"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}>
            <div className="w-2 h-2 bg-green-400 absolute rounded-full left-10 top-2"></div>
            <img
              src={profilePic}
              alt="Profile"
              className="w-full rounded-full"
            />
          </motion.div>
          <p className="font-semibold">{userData ? userData.name : ""}</p>
        </div>

        <p className="email text-center">{userData ? userData.email : ""}</p>
        <div className="about-me">
          <p className="phone-number text-center">Contact info: 0802389911</p>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default Home;
