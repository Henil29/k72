import React from 'react'
import { Link } from 'react-router-dom'

const HomeBottomText = () => {
  return (
    <div className='font-[font2] pt-5 text-center text-[4vw] flex justify-center items-center gap-10 uppercase mb-4'>
      <Link className='border-4 border-white hover:border-[#D3FD50] hover:text-[#D3FD50] rounded-full px-8 pt-1 p-0' to='/projects'>Projects</Link>
      <Link className='border-4 border-white hover:border-[#D3FD50] hover:text-[#D3FD50] rounded-full px-8 pt-1 p-0' to='/agence'>Agence</Link>
    </div>
  )
}

export default HomeBottomText