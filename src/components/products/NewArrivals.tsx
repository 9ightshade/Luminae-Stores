// import { Button } from "../layout/Button"
type NewArrivalProps = {
    src?: string;
    price?: number;
    title?: string;
    subTitle?: string
}
export const NewArrivals = ({ price = 89, src = "https://img.freepik.com/premium-photo/stunning-brunette-woman-bright-red-jacket_132075-5201.jpg?ga=GA1.1.1380726810.1733336188&semt=ais_incoming", title = "Cool & Sexy Calvin Klein", subTitle = " Belt-Brown-Casual" }: NewArrivalProps) => {
    return (
        <div className="border flex-1  flex-col gap-2 justify-center items-center rounded-lg shadow-md  h-auto max-w-sm bg-white" >
            <div className="relative flex flex-col items-center" >
                <div className="w-[300px] h-[300px] " >
                    <img src={src} alt="New Arrivals" className="w-full h-full object-contain" />
                </div>
                <button className="absolute top-0 left-0 bg-[#00A95D] text-white p-2" >
                    New Arrivals
                </button>
            </div>
            <div className="flex items-center justify-between w-full bg-[#262626] justify-between p-6 flex gap-2 " >
                <p className="text-white text-xl">
                    {title} <span className="text-[#C4C4C4] text-base block">
                        {subTitle}
                    </span>
                    <span>
                    ${price}
                    </span>
                </p>
                {/* <Button text={`${price}$ SHOP NOW`} bgColor="bg-black" width="500px" rounded="rounded-lg" padding="p-2" /> */}

            </div>
        </div>

    )
}