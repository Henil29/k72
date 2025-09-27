import React from 'react'
import homePageVideo from '../../assets/video/home_page_video.mp4'
const Video = () => {
    return (
        <div className='h-full w-full'>
            <video className='h-full w-full object-cover' autoPlay loop muted src={homePageVideo}></video>
        </div>
    )
}

export default Video