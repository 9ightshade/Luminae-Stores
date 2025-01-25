import axios from "axios"
import { useState, useEffect } from "react"

function AdminTranscriptPanel() {

    const [data, setData] = useState();
    const [page, setPage] = useState(1);
    const transcriptURL = "https://portal.rsubs.org/api/transcript-requests"
    let transcriptArray;

    const nextPage = () => {
        console.log(transcriptArray);
        setPage(page + 1)
    }



    const prevPage = () => {
        setPage(page - 1)
    }

    const pagination = () => {

        const startIndex = (page - 1) * 8
        const endIndex = startIndex + 8
        transcriptArray = data?.slice(startIndex, endIndex);
        console.log(transcriptArray);
    }

    const fetchTranscript = async () => {
        try {
            const token = localStorage.getItem('token')
            const response = await axios.get(transcriptURL, {
                headers: { Authorization: `Bearer ${token}` }
            }
            )

            setData(response.data.data);


        } catch (error) {
            console.log(error);

        }

    }

    useEffect(() => {
        fetchTranscript()
    }, [])

    console.log(data);
    pagination()


    return (
        <div>
            <table className=" relative text-[#39447F] " >


                <thead className=" border-b border-b-4 border-b-white " >
                    <tr>
                    
                        <td className="p-2" >
                            Reg No
                        </td>
                        <td className="p-2" >
                            Full Name
                        </td>
                        <td className="p-2" >
                            Email
                        </td>
                        <td className="p-2" >
                            Receiver Email
                        </td>
                        <td className="p-2" >
                            Phone Number
                        </td>
                        <td className="p-2" >
                            Admission Year
                        </td>
                        <td className="p-2" >
                            Graduation Year
                        </td>
                        <td className="p-2" >
                            Course
                        </td>

                        <td className="p-2" >
                            Organisation Name
                        </td>

                    </tr>
                </thead>


                <tbody className="relative" >



                    {
                        !data && <div className="flex justify-center items-center w-20 h-20 bg-gray-200 rounded-full absolute top-1/2 left-1/2 ">
                            <div className="flex gap-2">
                                <div className="w-3 h-3 bg-gray-800 rounded-full animate-bounce"></div>
                                <div className="w-3 h-3 bg-gray-800 rounded-full animate-bounce delay-100"></div>
                                <div className="w-3 h-3 bg-gray-800 rounded-full animate-bounce delay-200"></div>
                            </div>
                        </div>

                    }
                    { 
                    
                        transcriptArray?.map((transcript) => (
                            <tr key={transcript._id} className="hover:bg-white cursor-pointer "  >

                                <td className="p-2" >
                                    {
                                        transcript.registrationNumber
                                    }
                                </td>

                                <td className="p-2" >
                                    {
                                        transcript.fullName
                                    }
                                </td>

                                <td className="p-2" >
                                    {
                                        transcript.emailAddress
                                    }
                                </td>

                                <td className="p-2" >
                                    {
                                        transcript.receiverEmail
                                    }
                                </td>
                                <td className="p-2" >
                                    {
                                        transcript.phoneNumber
                                    }
                                </td>

                                <td className="p-2" >
                                    {
                                        transcript.admissionYear
                                    }
                                </td>

                                <td className="p-2" >
                                    {
                                        transcript.graduationYear
                                    }
                                </td>
                                <td className="p-2" >
                                    {
                                        transcript.courseOfStudy
                                    }
                                </td>
                                <td className="p-2" >
                                    {
                                        transcript.organisationName
                                    }
                                </td>
                            </tr>
                        ))
                    }
                </tbody>

            </table>

            {
                page > 1 && <button
                    onClick={prevPage}
                    className="prev-btn bg-[#39447F] text-white p-3 border-none rounded "
                >
                    Prev
                </button>
            }
            <span className=" text-[#39447F] bg-white border-gray-500 p-3" >
                {page}
            </span>
            {
                page < data?.length && <button
                    onClick={() => {
                    pagination()
                    nextPage()
                    }}
                    className="next-btn bg-[#39447F] text-white p-3 border-none rounded "
                >
                    Next
                </button>
            }
        </div>

    )


}

export default AdminTranscriptPanel;