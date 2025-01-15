import { useState } from "react"
import viewPassword from "../../assets/Vector.svg"
import left from "../../assets/left.svg"
export const ForgotForm = () => {
    const [inputType, setInputType] = useState("password");
    const tooglePassword = () => {
        if (inputType == "password") {
            setInputType("text")
        } else {
            setInputType("password")
        }
    }

    return (
        <div>

            <div className={`bg-white flex items-center justify-end gap-1 w-full`} >
                <div>
                    <img src={left} alt="#" />
                </div>
                <p className="text-[#555555] text-[16px] font-[600]">
                    Back to Site
                </p>
            </div>

            <form className="font-Lato" action="">
                <h1 className=" font-bold text-center text-[20px]" >
                    Forgot password
                </h1>

                <p className="text-center" >
                    Enter your email adress to reacquisition to your password.
                </p>

                <label htmlFor="email" className="text-[14px]">
                    Email
                </label>
                <div className="my-2" >
                    <input type="email" placeholder="Email address" className="border p-2 w-full outline-none border-[#D9D9D9]" />
                </div>


                <label htmlFor="password" className="text-[14px]">
                    New Password
                </label>
                <div className="my-2 flex items-center justify-between border p-2 w-full border-[#D9D9D9]" >
                    <input type={inputType} placeholder="new password" className=" outline-none w-full " />

                    <div>
                        <img src={viewPassword} alt="#" className="cursor-pointer" onClick={tooglePassword} />
                    </div>
                </div>

            

                <button className="border p-3 w-full outline-none border-[#D9D9D9] bg-[#C4C4C4] text-white text-[18px]">
                    Reset password
                </button>
               
                <button className="border p-3 w-full outline-none border-[#D9D9D9] bg-[#434343] text-white flex items-center justify-center gap-2">
                    <p className="" >
                        Don’t have an account?</p> <a href="" className="text-[#FF7A00] text-[16px] hover:underline">
                        Sign Up
                    </a>
                </button>
            </form>
        </div>

    )
}

