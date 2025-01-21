import iphone from "../../assets/Iphone.svg"
export const FlashCard=()=>{

    return(
        <div className="bg-[#F7DDD0] flex px-4 justify-center gap-2 items-center text-[#465D6B] " >
            <div>
                <h1 className="text-3xl  " >
                MagSafe
                </h1>
                <p className="text-xl" >
                Snap on a magnetic case, wallet, or both. And get faster wireless charging.
                </p>
            </div>
            <div>
                <img src={iphone} alt="@" />
            </div>
        </div>
    )
}