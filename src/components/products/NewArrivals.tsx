import { Button } from "../layout/Button"
type NewArrivalProps = {
    src?: string;
    price?: number;
    title?: string;
    subTitle?: string
}
export const NewArrivals = ({ price = 89, src = "https://img.freepik.com/premium-photo/stunning-brunette-woman-bright-red-jacket_132075-5201.jpg?ga=GA1.1.1380726810.1733336188&semt=ais_incoming", title = "Cool & Sexy Calvin Klein", subTitle = " Belt-Brown-Casual" }: NewArrivalProps) => {
    return (
        <div>
            <div className="relative" >
                <img src={src} alt="New Arrivals" className="w-full" />
                <button className="absolute top-0 left-0 bg-[#00A95D] text-white p-2" >
                    New Arrivals
                </button>
            </div>
            <div className="bg-[#262626] justify-between p-6 flex " >
                <p className="text-white text-xl">
                    {title} <span className="text-[#C4C4C4] text-base block">
                        {subTitle}
                    </span>
                </p>
                <Button text={`${price}$ SHOP NOW`} bgColor="bg-black" width="500px" rounded="rounded-lg" padding="p-2" />
            </div>
        </div>

    )
}