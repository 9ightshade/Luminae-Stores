import { useState } from "react";
import bgimage from "../assets/png/background_img.png"
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
function Reset() {

    const [email, setEmail] = useState("");
    const data = {
        email: email,
    }

    const URL = "https://portal.rsubs.org/api/users/forgot-password"
    const navigate = useNavigate();

    let message;

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(data);


        try {
            const response = await axios.post(URL, data,)
            console.log(response);
            message = response
            console.log("successful");
            navigate("/")

        } catch (error) {
            console.log(error);
            console.log(error.message);
            // navigate("/error")

        }
    };

    return (

        <div className="h-[81vh] relative flex justify-center py-5" style={{ backgroundImage: `url(${bgimage})`, backgroundRepeat: "no-repeat" }}>
            <div className='bg-[#F3F1F1]  p-10 shadow-md shadow-gray-500 rounded-[1em]  '>
                <h3 className='text-center text-[36px] text-[#39447F] font-black'>Reset Password</h3>
                {
                    !message ? <form className='mt-5' onSubmit={handleSubmit}>
                        <div>
                            <div> <label className='my-2 cursor-pointer' htmlFor="email">Email </label></div>

                            <input className='w-full p-4 my-2 bg-white outline-none  ' id="email" type="email" placeholder='Email*' onChange={(e) => { setEmail(e.target.value) }} name='email' />
                        </div>




                        <button className='bg-[#39447F] w-full py-2 text-center my-3 rounded text-white hover:bg-[#39449F] '>Request Password Reset</button>


                        <p className='text-[#39447F] text-[1em] text-center hover:underline cursor-pointer hover:text-[#39449F] '>
                            <Link to="/">
                                Remember Your Password? <span className="font-bold"  >Log in</span>
                            </Link>
                        </p>



                    </form> :
                        <Link to={'/'} >
                            <div className="text-center text-[#39447F] text-[1em] text-center hover:underline cursor-pointer hover:text-[#39449F] font-semibold " >
                                {
                                    message ? message + 'return to login' : 'Success'
                                }
                            </div>
                        </Link>
                }


            </div>




        </div>

    )

};

export default Reset;