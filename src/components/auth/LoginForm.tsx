import { useState } from "react"
import googleLogo from "../../assets/GoogleLogo.svg"
import viewPassword from "../../assets/Vector.svg"
import left from "../../assets/left.svg"
export const LoginForm = () => {
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
                Sign in
            </h1>



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

            <div className="flex items-center justify-between" >
                <div className="flex items-center gap-2" >
                    <input type="checkbox" name="rememberPassword" id="rememberPassword" />
                    <label htmlFor="rememberPassword" className="text-[14px]">
                        Remember for 30 days
                    </label>
                </div>

                <a className="cursor-pointer hover:underline text-[12px] text-[#4172DC]" >
                    Forgot password
                </a>
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


export const BacktoSite = ({ justify = "end" }) => {

    return (
        <div className={`bg-white flex items-center justify-${justify} gap-1 w-full`} >
            <div>
                <img src={left} alt="#" />
            </div>
            <p className="text-[#555555] text-[16px] font-[600]">
                Back to Site
            </p>
        </div>
    )
}