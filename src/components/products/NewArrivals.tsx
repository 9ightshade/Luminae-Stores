import { Button } from "../layout/Button"

export const NewArrivals = ({price="89$"}) => {
    return (
        <div>
            <div className="relative" >
                <img src="https://img.freepik.com/premium-photo/stunning-brunette-woman-bright-red-jacket_132075-5201.jpg?ga=GA1.1.1380726810.1733336188&semt=ais_incoming" alt="new arrivals" className="w-full" />
                <button className="absolute top-0 left-0 bg-[#00A95D] text-white p-2" >
                    New Arrivals
                </button>
            </div>
            <div className="bg-[#262626] justify-between p-6 flex " >
                <p className="text-white text-xl">
                Cool & Sexy Calvin Klein <span className="text-[#C4C4C4] text-base block">
                Belt-Brown-Casual
                </span>
                </p>
                <Button text={`${price} SHOP NOW`} bgColor="bg-black"  width="500px" rounded="rounded-lg" padding="p-2" />
            </div>
        </div>

    )
}