import { useEffect, useState } from "react";
import axios from "axios";
import profilePic from "../../assets/jpeg/testPassport.jpg"
function Home() {
    const [userData, setUserData] = useState(null)

    let user;

    //get user id
    const userId = localStorage.getItem('_id');
    // console.log(userId);

    //api to fetch user based on id
    const fetchUserURL = `https://portal.rsubs.org/api/users/${userId}`;


    //get token
    const token = localStorage.getItem('token');
    // console.log(token);

    const email = localStorage.getItem('email');
    console.log(email);


    const fetchUserData = async () => {
        try {
            const fetchResponse = await axios.get(fetchUserURL, { headers: { Authorization: `Bearer ${token}` } })
             setUserData( fetchResponse.data)
            console.log(userData);



        } catch (error) {
            console.log(error);

        }



    }


    useEffect(() => {
        fetchUserData()
    }, [])






    return (
        <div className="flex justify-between p-3 text-gray-500 gap-4" >
            <div className="upcoming-class bg-white p-5 w-1/2" >
                <h2 className="font-bold text-lg" >
                    Upcoming Events
                </h2>

                <div className="events-list  rounded  flex flex-col gap-2 " >
                    <div className="event border-2 border-l-blue-400  bg-blue-100 p-2" >
                        <h2 className="event-day font-bold " >
                            Saturday
                        </h2>
                        <p className="event-description" >
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.

                        </p>
                        <p className="justify-self-end font-semibold" >
                            9 April 2024
                        </p>
                    </div>

                    <div className="p-2 event bg-blue-100  border-2 border-l-blue-400  " >
                        <h2 className="event-day font-bold " >
                            Saturday
                        </h2>
                        <p className="event-description" >
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.

                        </p>
                        <p className="justify-self-end font-semibold" >
                            9 April 2024
                        </p>
                    </div>

                    <div className=" p-2 event bg-blue-100  border-2 border-l-blue-400 " >
                        <h2 className="event-day font-bold " >
                            Saturday
                        </h2>
                        <p className="event-description" >
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.

                        </p>
                        <p className="justify-self-end font-semibold" >
                            9 April 2024
                        </p>
                    </div>
                </div>



            </div>

            <div className="profile bg-white p-5 flex flex-col gap-3 w-1/2 " >
                <h2 className="font-bold text-lg">
                    Profile Details
                </h2>
                <div className="flex flex-col items-center gap-2 "  >
                    <div className="profile-pic w-[50px] relative " >

                        <div className="w-2 h-2 bg-green-400 absolute rounded-full left-10 top-2 " >
                        </div>
                        <img src={profilePic} alt="#" className="w-full rounded-full" />


                    </div>
                    <p className="font-semibold" >
                        {userData?userData.name:''}

                    </p>
                </div>

                <p className="email text-center  " >
                    {userData?userData.email:''}

                </p>
                <div className="about-me" >
                    <p className="phone-number text-center " >
                        Contact info: 0802389911
                    </p>

                    {/* <p>
                        Gender: {userData?userData.gender:'n/a'}
                    </p> */}
                </div>
            </div>
        </div>
    )
}

export default Home;