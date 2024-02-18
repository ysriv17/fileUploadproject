
import React from 'react'

import { Tilt } from 'react-tilt'
import { motion } from 'framer-motion'
import information from '../constants/index'
import { fadeIn, textVariant } from "../utils/motion"
import style from '../style';
import { SectionWrapper } from '../hoc'


const About = () => {
  return (
    <div className='grid col-auto justify-items-center bg'>
      <motion.div variants={textVariant()}>
        <p className={style.sectionSubText}>
          Introduction
        </p>
        <h2 className={style.sectionHeadText}>Overview</h2>
      </motion.div>
      <motion.p variants={fadeIn('', '', 0.1, 1)} className='mt-4 text-white text-[17px] max-w-3xl leading-[30px] text-left pt-16 '>
        Many job seekers don’t get enough interviews even after applying for dozens of jobs. Why? Companies use Applicant Tracking Systems (ATS) to search and filter resumes by keywords. The Jobscan resume scanner helps you optimize your resume keywords for each job listing so that your application gets found by recruiters.
      </motion.p>
      <div className='mt-20 flex justify-center flex-wrap gap-10 pt-36'>
        {information.services.map((service, index) => {

          { console.log(service.title, index, service, "LLLLDDSDS") }
          return (
            // <ServiceCard key={service.title} index={index} ser={service} />
            <Tilt className="xs:w-[450px] w-full" key={null}>
              <motion.div variants={fadeIn("right", "spring", 0.5 * index, 0.75)} className='w-full green-pink-gradient p-[5px] rounded-[20px] shadow-card'>
                <div className='bg-gradient rounded-[20px] py-5 px-12 min-h-[400px] flex justify-evenly items-center flex-col '>
                 <div>
                    <h1 className='text-center text-white font-black  font-medium lg:text-[27px] sm:text-[23px] xs:text-[20px] text-[16px] mx-0 my-0 py-0 px-0'>{service.title}</h1>
                    <h2 className='text-center text-white font-semibold md:text-[15px] sm:text-[12px] xs:text-[10px] text-[15px] mx-0 my-0 py-0 px-0'>{service.subheading}</h2>
                 </div>
                  <p className=' text-white '>{service.content}</p>
                </div>
              </motion.div>

            </Tilt>
          )

        })}
        {console.log(information.services)}
      </div>

    </div>
  )
}

export default SectionWrapper(About, "about")