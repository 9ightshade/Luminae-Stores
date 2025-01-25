import { useState } from "react";
import adminData from "../admin";
import StudentInfo from "./adminInfo/adminStudentPanel";
import AdminHomePanel from "../components/adminInfo/adminHomePanel";
import AdminStudentPanel from "../components/adminInfo/adminStudentPanel";
import AdminTranscriptPanel from "../components/adminInfo/adminTranscriptPanel";

function AdminDashboard() {
    const [step, setStep] = useState(1)


    const NextStep = () => {
        setStep(step + 1);
    };

    const PrevStep = () => {
        setStep(step - 1);
    };


    const handleClick = (sectionId) => {
        console.log(sectionId);

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
            case 5:
                setStep(5)
                break;
            case 6:
                setStep(6)
                break;
            case 7:
                setStep(7)
                break;
            case 8:
                setStep(8)
                break;
            case 9:
                setStep(9)
                break;
            default:
                setStep(1)
                break;
        }
    }
    return (


        <div className="container px-7 flex justify-between gap-4  " >

            <div className="sections flex gap-2 flex-col w-1/3  text-gray-500 " >
                {
                    adminData.map((section) => (
                        <button
                            className=" py-[.7em] border-none rounded"
                            style={{
                                backgroundColor: `${step === section.id ? '#1e3a8a' : '#F3F1F1'}`,
                                color: `${step === section.id ? 'white' : '#6b7280'}`
                            }}
                            key={section.id}

                            onClick={() => { handleClick(section.id) }}
                        >
                            {
                                section.label
                            }
                        </button>
                    ))
                }
            </div>


            <div className=" bg-[#F3F1F1] w-full px-4 py-3 " >
                {
                    step === 1 && <AdminHomePanel />
                }
                {
                    step === 2 && <AdminStudentPanel />
                }
                {
                    step === 3 && <AdminTranscriptPanel/>
                }
            </div>

        </div>








    )
}


export default AdminDashboard;