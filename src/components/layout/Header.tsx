import logo from "../../assets/Logo.svg"
import search from "../../assets/Search.svg"
import facebook from "../../assets/facebook.svg"
import telegram from "../../assets/telegram.svg"
import instagram from "../../assets/Instagram.svg"
import categories from "../../assets/category.svg"
import signin from "../../assets/Signin.svg"
import favorides from "../../assets/Favorides.svg"
import card from "../../assets/Card.svg"
import memcosmetics from "../../assets/Men cosmetic.svg"
export const Header = () => {
    return (
        <div className="font-Lato " >
            <div className="flex justify-evenly " >
                <div className="flex items-center gap-2 cursor-pointer" >
                    <div>
                        <img src={logo} alt="logo" />
                    </div>
                    <p className="text-[32px] font-bold" >
                        Luminae
                    </p>
                </div>

                <div className="my-2 flex items-center justify-between border p-2 border-[#D9D9D9]" >
                    <input type="text" placeholder="Search Products" className=" outline-none w-full " />
                    <div>
                        <img src={search} alt="#" className="cursor-pointer" />
                    </div>
                </div>

                <ul className="text-[#555555] text-[14px] flex items-center gap-4 cursor-pointer " >
                    <li className="hover:underline">About us</li>
                    <li className="hover:underline">Blog</li>
                    <li className="hover:underline">Contact us</li>
                    <li className="hover:underline">Help & support</li>
                </ul>

                <div className="flex items-center gap-2 cursor-pointer" >
                    <div><img src={instagram} alt="#" /></div>
                    <div><img src={facebook} alt="#" /></div>
                    <div><img src={telegram} alt="#" /></div>
                </div>

            </div>


            <div className="bg-[#262626] flex items-center justify-between p-4" >
                <div className="flex items-center gap-2" >
                    <div>
                        <img src={categories} alt="#" />
                    </div>
                    <p className="text-[20px] font-bold text-white" >
                        Categories
                    </p>
                </div>

                <div className="flex items-center gap-2" >
                    <div>
                        <img src={memcosmetics} alt="#" />
                    </div>
                    <div>
                        <h2 className="text-white" >
                            Weekly Men's Toiletries Coupons.
                        </h2>
                        <p className="text-[#C4C4C4] " >We extend exclusive discounts to our male clientele</p>
                    </div>
                </div>

                <div className="text-white gap-2 flex items-center" >
                    <div>
                        <div><img src={signin} alt="#" /></div>
                    </div>
                    <p>
                        Sign in
                    </p>
                </div>

                <div className="text-white gap-2 flex items-center">
                    <div>
                        <img src={favorides} alt="#" />
                    </div>
                    <p>
                        Favourites
                    </p>
                </div>

                <div className="text-white gap-2 flex items-center">
                    <div>
                        <img src={card} alt="#" />
                    </div>
                    <p>Cart</p>
                    <p className="bg-[#3DC47E] rounded-full p-2 ">3</p>
                </div>
            </div>


        </div>
    )
}