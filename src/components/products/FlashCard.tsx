import iphone from "../../assets/Iphone.svg"
export const FlashCard=()=>{

    return(
        <div className="bg-[#F7DDD0] flex px-4 justify-center gap-2 items-end text-[#465D6B] h-80 " >
            <div className="pb-24" >
                <h1 className="text-3xl  " >
                MagSafe
                </h1>
                <p className="text-xl" >
                Snap on a magnetic case, wallet, or both. And get faster wireless charging.
                </p>
            </div>
            <div  className="" >
                <img src={iphone} alt="#" className="h-full"  />
            </div>
        </div>
    )
}