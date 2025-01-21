import { Button } from "./Button"

export const Hero = () => {
    return (
        <div className="flex relative" >
            <div className="basis-1/2 h-[80vh]" >
                <img src="https://img.freepik.com/premium-photo/two-young-beautiful-women-colorful-summer-clothes_149155-3631.jpg?ga=GA1.1.1380726810.1733336188&semt=ais_incoming" alt="#" className="w-full object-cover h-full"  />
            </div>

            <div className="bg-[#3b82f6] basis-3/5 flex items-center justify-center text-center text-white ">
                <div>
                    <h1 className="text-4xl" >
                        Kimonos, Caftans & Pareos
                    </h1>
                    <p className="text-xl" >
                        Poolside glam included From $4.99
                    </p>
                    <Button text="SHOP NOW" bgColor="bg-[#1d4ed8]" textColor="text-white" rounded="rounded-md" />
                </div>
            </div>
        </div>
    )
}