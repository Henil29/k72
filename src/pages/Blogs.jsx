import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'

/* Blogs Coming Soon Page (tape removed) */
const Blogs = () => {
  const headingRef = useRef(null)
  const subRef = useRef(null)

  // Intro animation
  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })
    tl.fromTo(headingRef.current, { y: 60, opacity: 0 }, { y: 0, opacity: 1, duration: 1 })
      .fromTo(subRef.current, { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.7 }, '-=0.5')
  }, [])

  return (
    <div className='relative min-h-screen w-full bg-black text-white overflow-hidden font-[font2] flex flex-col'>
      {/* Center Block */}
      <div className='flex-1 flex flex-col justify-center items-center px-4 text-center select-none pt-32 lg:pt-24'>
        <h1 ref={headingRef} className='uppercase tracking-tight leading-[0.85] text-[22vw] md:text-[18vw]'>Blogs</h1>
        <p ref={subRef} className='mt-6 max-w-3xl mx-auto text-sm md:text-lg font-normal text-neutral-300 px-4'>Articles, études de cas & perspectives créatives arrivent bientôt. Abonnez-vous & restez inspiré.</p>
      </div>

      {/* Bottom Meta / Actions */}
      <div className='w-full flex flex-col items-center gap-8 z-40 px-4 pb-20'>
        <div className='flex gap-4 flex-wrap justify-center'>
          <a href='/' className='px-6 py-2 rounded-full border border-white/30 hover:border-white text-xs md:text-sm tracking-wide uppercase font-medium hover:bg-white hover:text-black transition'>Accueil</a>
          <a href='/contact' className='px-6 py-2 rounded-full border border-white/30 hover:border-white text-xs md:text-sm tracking-wide uppercase font-medium hover:bg-white hover:text-black transition'>Contact</a>
          <a href='/agence' className='px-6 py-2 rounded-full border border-white/30 hover:border-white text-xs md:text-sm tracking-wide uppercase font-medium hover:bg-white hover:text-black transition'>Agence</a>
        </div>
        <div className='text-[10px] tracking-wider text-neutral-500'>© {new Date().getFullYear()} K72 • Tous droits réservés.</div>
      </div>

      {/* Optional subtle overlay (removed if not needed) */}
      <div className='pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.05),transparent_60%)] mix-blend-overlay opacity-30'></div>
    </div>
  )
}

export default Blogs