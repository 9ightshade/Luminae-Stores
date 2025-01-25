import Nav from "./nav";
import dashboard from "../dashboard";
import { useState } from "react";
import Home from "../components/dashboardInfo/home";
import ApplicationDashboard from "../components/dashboardInfo/application";
import Payment from "../components/dashboardInfo/payment";
import Transcript from "../components/dashboardInfo/transcript";
import { Link, useNavigate } from "react-router-dom";

function StudentDashboard() {

    const [step, setStep] = useState(1);
    // const navigate = useNavigate();


    const handleClick = (sectionId) => {

        switch (sectionId) {
            case 1:
                setStep(1)
                break;

            case 2:
                setStep(2)
                break;
            case 3:
                setStep(3)
                break;
            case 4:
                setStep(4)
                break;
            default:
                setStep(1)
                break;
        }
        console.log(sectionId, step);

    }


    return (
        <div>
            <Nav />


            <div className="container py-4 px-7 flex justify-between gap-4  " >

                <div className="sections flex gap-2 flex-col w-1/3  text-gray-500 h-[400px] " >
                    {
                        dashboard.map((section) => (
                            <button
                                className="py-[.7em] border-none rounded"
                                style={{
                                    backgroundColor: `${step === section.id ? '#1e3a8a' : '#F3F1F1'}`,
                                    color: `${step === section.id ? 'white' : '#6b7280'}`
                                }}

                                key={section.id}

                                onClick={() => { handleClick(section.id) }}
                            >
                                {

                                }
                                {
                                    section.label
                                }
                            </button>
                        ))
                    }
                    <p className="program-links font-bold" >
                        Programme Application Links
                    </p>
                    <hr className="mb-[2em]" />
                    <Link to={'/application'} >
                        <p className="text-blue-950 font-semibold hover:underline cursor-pointer mb-2">

                            Full Time MBA
                        </p>
                        <p className="text-blue-950 font-semibold hover:underline cursor-pointer mb-2">
                            Modular MBA
                        </p>
                        <p className="text-blue-950 font-semibold hover:underline cursor-pointer mb-2">
                            Modular Executive MBA
                        </p>
                        <p className="text-blue-950 font-semibold hover:underline cursor-pointer mb-2" >
                            Executive MBA
                        </p>
                    </Link>
                </div>


                <div className=" bg-[#F3F1F1] w-full px-4 py-3 mb-4 " >
                    {
                        step === 1 && <Home />
                    }
                    {
                        step === 2 && <ApplicationDashboard />
                    }

                    {
                        step === 3 && <Payment />
                    }

                    {
                        step === 4 && <Transcript />
                    }


                </div>
            </div>

        </div>

    )




};


export default StudentDashboard;