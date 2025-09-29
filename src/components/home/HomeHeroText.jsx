import React from 'react'
import Video from './Video.jsx'

const HomeHeroText = () => {
    return (
        <div className='font-[font1] lg:pt-5 md:pt-5 pt-[70vh] text-center'>
            <div className='text-[8.5vw] justify-center flex items-center uppercase leading-[8vw]'>L'étincelle</div>
            {/* for video between text */}
            <div className='text-[8.5vw] justify-center flex items-center uppercase leading-[8vw]'>
                qui
                <div className='h-[8vw] w-[16vw] mx-2 rounded-full overflow-hidden text-video'>
                    <Video />
                </div> génère
            </div>
            <div className='text-[8.5vw] justify-center flex items-center uppercase leading-[8vw]'>la créativité</div>
            
        </div>
    )
}

export default HomeHeroText