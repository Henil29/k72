import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

const Contact = () => {
  const tapeRef = useRef(null)
  const tapeInnerRef = useRef(null)
  const scrollWrapperRef = useRef(null)

  useEffect(() => {
    // Horizontal marquee (your old code)
    if (tapeInnerRef.current) {
      const w = tapeInnerRef.current.scrollWidth / 2
      gsap.fromTo(
        tapeInnerRef.current,
        { x: 0 },
        {
          x: -w,
          duration: 12,
          ease: 'none',
          repeat: -1,
          paused: false,
        }
      )
    }

    // Infinite manual scroll
    const wrapper = scrollWrapperRef.current
    if (!wrapper) return

    const handleScroll = () => {
      const { scrollTop, scrollHeight, clientHeight } = wrapper
      const halfHeight = scrollHeight / 2

      // when scrolled past first copy → reset back
      if (scrollTop >= halfHeight) {
        wrapper.scrollTop = scrollTop - halfHeight
      }
      // when scrolling up before start → jump to end copy
      else if (scrollTop === 0) {
        wrapper.scrollTop = halfHeight
      }
    }

    wrapper.addEventListener('scroll', handleScroll)
    // set initial position in middle
    wrapper.scrollTop = wrapper.scrollHeight / 2

    return () => {
      wrapper.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const PageContent = () => (
    <>
      {/* Tagline & Address (bottom corners) */}
      <div className="absolute bottom-6 left-5 text-sm leading-tight hidden lg:block">
        <p>
          Dans un écran ou un bureau.<br />Chez vous. Chez nous.<br />Partout.
        </p>
      </div>
      <div className="absolute bottom-6 right-5 text-sm leading-tight text-right hidden lg:block">
        <p>
          525 Av. Viger O - Suite 400<br />
          Montréal, QC H2Z 1G6 &rarr;
        </p>
      </div>

      {/* Huge Title */}
      <div className="w-full pt-32 lg:pt-16 px-4 relative">
        <h1 className="text-[12vw] lg:text-[10vw] leading-[0.85] tracking-tight uppercase text-center select-none">
          POUR<br />PARLER DE<br />VOTRE<br />PROJET
        </h1>
      </div>

      {/* Diagonal Neon Tape */}
      <div ref={tapeRef} className="pointer-events-none rotate-[-8deg] mt-15">
        <div className="bg-[#D9FF33] text-black font-bold text-[12vw] lg:text-[9vw] leading-none py-[1.2vw] overflow-hidden relative shadow-[0_0_30px_#d9ff33]">
          <div
            ref={tapeInnerRef}
            className="flex whitespace-nowrap will-change-transform"
            style={{ width: 'max-content' }}
          >
            {[...Array(2)].map((_, i) => (
              <span key={i} className="flex items-center">
                <span className="mx-[5vw] text-[0.7em]">❤</span>
                BONJOUR@K72.COM
                <span className="mx-[5vw] text-[0.7em]">❤</span>
                BONJOUR@K72.COM
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Social Section */}
      <div className="bottom-32 w-full flex flex-col items-center gap-6 mt-15 pb-15">
        <p className="uppercase tracking-wide text-xs">SUIVEZ-NOUS</p>
        <div className="flex gap-4 flex-wrap justify-center">
          {['FB', 'IG', 'IN', 'BE'].map((s) => (
            <a
              key={s}
              href="#"
              className="px-6 py-2 rounded-full border border-white text-3xl font-semibold hover:bg-white hover:text-black transition-colors"
            >
              {s}
            </a>
          ))}
        </div>
      </div>
    </>
  )

  return (
    <div
      ref={scrollWrapperRef}
      className="relative h-screen w-full bg-black text-white overflow-y-scroll font-[font2] hide-scrollbar"
    >
      {/* Duplicate content twice for looping */}
      <div>
        <PageContent />
      </div>
      <div>
        <PageContent />
      </div>
    </div>
  )
}

export default Contact
