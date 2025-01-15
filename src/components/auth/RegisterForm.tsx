import { useState } from "react"
import googleLogo from "../../assets/GoogleLogo.svg"
import viewPassword from "../../assets/Vector.svg"

export const RegisterForm = () => {
    const [inputType, setInputType] = useState("password");
    const tooglePassword = () => {
        if (inputType == "password") {
            setInputType("text")
        } else {
            setInputType("password")
        }
    }

    return (

        <form className="font-Lato" action="">
            <h1 className=" font-bold text-[20px]" >
                Sign up
            </h1>

            <label htmlFor="name" className="text-[14px]">
                Name
            </label>
            <div className="my-2" >
                <input type="text" placeholder="Full name" className="border p-2 w-full outline-none border-[#D9D9D9]" />
            </div>

            <label htmlFor="email" className="text-[14px]">
                Email
            </label>
            <div className="my-2" >
                <input type="email" placeholder="Email address" className="border p-2 w-full outline-none border-[#D9D9D9]" />
            </div>


            <label htmlFor="password" className="text-[14px]">
                Password
            </label>
            <div className="my-2 flex items-center justify-between border p-2 w-full border-[#D9D9D9]" >
                <input type={inputType} placeholder="password" className=" outline-none w-full " />

                <div>
                    <img src={viewPassword} alt="#" className="cursor-pointer" onClick={tooglePassword} />
                </div>
            </div>

            <div className="flex items-center gap-2" >
                <input type="checkbox" name="T&C" id="T&C" />
                <label htmlFor="T&C" className="text-[14px]">
                    Terms and conditions agreement should start with an introduction that lets users know they’re reading a terms and conditions agreement
                </label>
            </div>

            <button className="border p-3 w-full outline-none border-[#D9D9D9] bg-[#C4C4C4] text-white text-[14px]">
                Sign up
            </button>
            <div className="flex items-center gap-2 text-[#9D9D9D] select-none " >
                <hr className="w-1/2" />OR <hr className="w-1/2" />
            </div>
            <button className="border p-3 w-full outline-none border-[#D9D9D9] bg-[#434343] text-white flex items-center justify-center gap-2">
                <div className="" >
                    <img src={googleLogo} alt="google logo" /></div>Sign up with google
            </button>
        </form>

    )
}