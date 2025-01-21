import React from 'react'
import { Header } from '../components/layout/Header'
import { Hero } from '../components/layout/Hero'
import { FlashCard } from '../components/products/FlashCard'
import { NewArrivals } from '../components/products/NewArrivals'
import { Explore } from '../components/products/Explore'
import { Subcription } from '../components/auth/Subscription'
import { Footer } from '../components/layout/Footer'

const Home = () => {
    return (
        <div>
            <Header />
            <Hero />
            <div className='flex py-16 flex-col gap-4 px-8' >
                <p className=' text-2xl text-[#000000]' >New Arrivals</p>
                <div className='flex justify-between '>
                    <NewArrivals />
                    <NewArrivals />
                    <NewArrivals />
                </div>
            </div>
            
            <Explore />
            <Subcription />
            <FlashCard />
            <Footer />
        </div>
    )
}

export default Home