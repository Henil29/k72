import React from 'react'
import img1 from '../assets/img/projects/1.jpg'
import img2 from '../assets/img/projects/2.jpg'
import img3 from '../assets/img/projects/3.jpg'
import img4 from '../assets/img/projects/4.jpg'
import img5 from '../assets/img/projects/5.jpg'
import img6 from '../assets/img/projects/6.jpg'
import img7 from '../assets/img/projects/7.jpg'
import img8 from '../assets/img/projects/8.jpg'
import ProjectCard from '../components/projects/ProjectCard'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'

const Projects = () => {
  const projects = [
    { image1: img1, image2: img2 },
    { image1: img3, image2: img4 },
    { image1: img5, image2: img6 },
    { image1: img7, image2: img8 },
  ]

  gsap.registerPlugin(ScrollTrigger)

  useGSAP(() => {
    gsap.utils.toArray('.inner').forEach((el) => {
      gsap.from(el, {
        scaleY: 0.2,
        transformOrigin: 'top',
        scrollTrigger: {
          trigger: el,
          start: 'top 80%',
          end: 'top 30%',
          scrub: true
        }
      })
    })
  })



  return (
    <div className='project lg:p-4 p-2 pb-60'>
      <div className='lg:pt-[36vh] md:pt-[60vh] pt-[60vh]'>
        <h2 className='font-[font2] lg:text-[10vw] text-7xl uppercase'>Projets</h2>
      </div>
      <div className='-lg:mt-14 lol'>
        {projects.map((elem, idx) => (
          <div key={idx} className="hero w-full lg:h-[500px] mb-4 flex lg:flex-row flex-col lg:gap-4 gap-2">
            <ProjectCard image1={elem.image1} image2={elem.image2} />
          </div>

        ))}
      </div>
    </div>
  )
}

export default Projects
