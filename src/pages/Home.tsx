import React from 'react'
import { Header } from '../components/layout/Header'
import { Hero } from '../components/layout/Hero'
import { FlashCard } from '../components/products/FlashCard'
import { NewArrivals } from '../components/products/NewArrivals'
import { Explore } from '../components/products/Explore'

const Home = () => {
    return (
        <div>
            <Header />
            <Hero/>
          <div className='flex justify-between'>
          <NewArrivals/>
          <NewArrivals/>
          <NewArrivals/>
          </div>
          <Explore/>
            <FlashCard/>
        </div>
    )
}

export default Home