import React from 'react'
import Video from '../components/home/video'
import HomeHeroText from '../components/home/HomeHeroText'
import HomeBottomText from '../components/home/HomeBottomText'
import logo from '../assets/logo.svg'
const Home = () => {
  return (
    <div className='text-white'>
      <div className="h-screen w-screen fixed">
        <Video />
      </div>
      <div className="h-screen w-screen relative flex flex-col justify-between">
        <HomeHeroText />
        <HomeBottomText />
      </div>
    </div>
  )
}

export default Home