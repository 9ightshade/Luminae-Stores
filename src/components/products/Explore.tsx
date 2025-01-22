type ExploreProps = {
    src?: string
    subTitle?: string;
    title?: string;
    bgColor?: string
}

export const Explore = ({ src = "https://img.freepik.com/free-photo/pretty-brunette-girl-stylish-hat-posing-yellow-wall_273443-1612.jpg?t=st=1737497632~exp=1737501232~hmac=38afe725849919299a64fc2af89196a5751bafd65c967538160f77401081ef2d&w=740", title = "Never-Ending Summer", subTitle = "Throwback Shirts & all-day dressed", bgColor = "#BF2E3B" }: ExploreProps) => {
    return (
        <div className=" flex items-center text-white" style={{ backgroundColor: `${bgColor}` }} >
            <div className="p-4 basis-1/2 " >
                <p className="text-4xl" >{title}
                    <span className="text-2xl block" >
                        {subTitle}
                    </span>
                </p>

                <a href="#" className="text-2xl hover:underline block mt-6">
                    Exlopre all category
                </a>
            </div>
            <div className="basis-1/2" >
                <img src={src} alt="#" className="w-full" />
            </div>
        </div>
    )
}