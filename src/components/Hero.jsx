/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'




const Hero = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width : 600px)');
    setIsMobile(mediaQuery.matches);
    const handelMediaQueryChange = (event) => {
      setIsMobile(event.matches);
      mediaQuery.addEventListener('resize', handelMediaQueryChange)
      return () => {
        mediaQuery.removeEventListener('resize', handelMediaQueryChange)
      }
    }
  }, [])
  return (
    <section className='relative w-full h-[130vh] mx-auto'>
      <div className="sm:px-16 px-6 absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5">
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915eff]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>
        <div className='font-black text-white lg:text-[70px] sm:text-[60px] xs:text-[50px] text-[40px] lg:leading-[98px] mt-2'>
          <h2><span className='text-[#915eff]'>Optimize your resume
            to get more interviews</span></h2>
          <p className='text-[#dfd9ff] font-medium lg:text-[27px] sm:text-[23px] xs:text-[20px] text-[16px] lg:leading-[40px] mt-2 '>
            Jobscan helps you optimize your resume for any job, highlighting the key experience and skills recruiters need to see.
          </p>
        </div>
      </div>

      


    </section>

  )
}

export default Hero