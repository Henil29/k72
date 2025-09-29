import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import React, { useRef } from 'react'

// images
import img1 from '../assets/img/agence/1.png'
import img2 from '../assets/img/agence/2.png'
import img3 from '../assets/img/agence/3.png'
import img4 from '../assets/img/agence/4.png'
import img5 from '../assets/img/agence/5.png'
import img6 from '../assets/img/agence/6.png'
import img7 from '../assets/img/agence/7.png'
import img8 from '../assets/img/agence/8.png'
import img9 from '../assets/img/agence/9.png'
import img10 from '../assets/img/agence/10.png'
import img11 from '../assets/img/agence/11.png'
import img12 from '../assets/img/agence/12.png'
import img13 from '../assets/img/agence/13.png'
import img14 from '../assets/img/agence/14.png'

const Agence = () => {
  const imageDivRef = useRef(null)
  const imageRef = useRef(null)

  const imageArray = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12, img13, img14]

  gsap.registerPlugin(ScrollTrigger)
  useGSAP(() => {
    gsap.to(imageDivRef.current, {
      scrollTrigger:{
        trigger:imageDivRef.current,
        start:"top 26.8%",
        end: 'top -100%',
        pin:true,
        pinSpacing:true,
        pinReparent: true,
        pinType: 'transform',
        scrub:1,
        anticipatePin:1,
        invalidateOnRefresh:true,
        onUpdate: (e) => {
          const progress = Math.floor(e.progress * (imageArray.length - 1))
          imageRef.current.src = imageArray[progress]
        }
      }
    })
  })
  return (
    <div className='bg-black'>
      <div className='section1 py-1 text-white'>
      <div ref={imageDivRef} className='absolute overflow-hidden lg:h-[18vw] lg:w-[14vw] h-[100px] w-[100px] lg:rounded-3xl rounded-4xl top-50 left-[30vw]'>
        <img ref={imageRef} className='h-full w-full object-cover' src={img1} alt="" />
      </div>
      <div className='relative font-[font2]'>
        <div className='lg:mt-[52vh] mt-[28vh]'>
          <h1 className='lg:text-[18vw] text-7xl text-center uppercase leading-[18vw]'>Soixan7e <br />Douze</h1>
        </div>
        <div className='pl-[45%] mt-20'>
          <p className='lg:text-5xl text-3xl'> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Notre curiosité nourrit notre créativité. On reste humbles et on dit non aux gros egos, même le vôtre. Une marque est vivante. Elle a des valeurs, une personnalité, une histoire. Si on oublie ça, on peut faire de bons chiffres à court terme, mais on la tue à long terme. C’est pour ça qu’on s’engage à donner de la perspective, pour bâtir des marques influentes.</p>
        </div>
      </div>
    </div>
    <div className="section2 h-screen"></div>
    </div>
  )
}

export default Agence