import React from 'react'
import { useState, useEffect } from "react";
import { Header } from '../components/layout/Header'
import { Hero } from '../components/layout/Hero'
import { FlashCard } from '../components/products/FlashCard'
import { NewArrivals } from '../components/products/NewArrivals'
import { Explore } from '../components/products/Explore'
import { Subcription } from '../components/auth/Subscription'
import { Footer } from '../components/layout/Footer'
import { ProductCard } from '../components/products/ProductCard'

const Home = () => {


    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState<boolean>(true);
    let usdToSolRate;

    function convertDollarsToSol(priceInDollars: number, exchangeRate: number): number {
        if (priceInDollars < 0 || exchangeRate <= 0) {
            throw new Error("Price and exchange rate must be positive values.");
        }
        return priceInDollars / exchangeRate;
    }




    async function fetchUsdToSolRate(): Promise<number> {
        const response = await fetch("https://api.coingecko.com/api/v3/simple/price?ids=solana&vs_currencies=usd");
        const data = await response.json();
        return data.solana.usd; // Returns the USD to SOL rate
    }

    (async () => {
        usdToSolRate = await fetchUsdToSolRate();
        const priceInDollars = 2000;
        const priceInSol = convertDollarsToSol(priceInDollars, usdToSolRate);
        console.log(`Price in SOL: ${priceInSol.toFixed(2)} SOL`);
    })();









    // Fetch products from an API
    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch("https://fakestoreapi.com/products?limit=10");
                const data = await response.json();
                // console.log(data);

                setProducts(data);
            } catch (error) {
                console.error("Error fetching products:", error);
            } finally {
                setLoading(false);
            }
        };



        fetchProducts();
    }, []);


    function addToCart() {
        console.log("added to cart");

    }


    return (
        <div>
            <Header />
            <Hero />
            <div className='flex py-16 flex-col gap-4 px-8' >
                <p className=' text-2xl text-[#000000]' >New Arrivals</p>
                <div className='flex flex-col lg:flex-row gap-2 justify-between '>
                    <NewArrivals />
                    <NewArrivals />
                    <NewArrivals />
                </div>
            </div>
            <div className='flex flex-wrap gap-3 my-5 items-start ' >
                {
                    products?.map((product) => (
                        <ProductCard key={product.id} title={product.title} category={product.category} productImage={product.image} price={product.price} onAddToCart={addToCart} />
                    ))
                }
            </div>
            <Explore />
            <FlashCard />
            <div >

                <Explore src='https://img.freepik.com/free-photo/studio-photo-african-black-woman-stylish-dress-white-sunglasses_273443-3237.jpg?ga=GA1.1.1380726810.1733336188&semt=ais_incoming' title='Best Sellers Everyone Love' subTitle='poolside glam include' bgColor='#0186C4' />
            </div>
            <Subcription />

            <Footer />
        </div>
    )
}

export default Home