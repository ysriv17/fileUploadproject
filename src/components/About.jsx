
import React from 'react'

import { Tilt } from 'react-tilt'
import { motion } from 'framer-motion'
import information from '../constants/index'
import { fadeIn, textVariant } from "../utils/motion"
import style from '../style';
import { SectionWrapper } from '../hoc'
// const ServiceCard =(ser,key,index)=>{
//   return (
//     <Tilt className="xs:w-[250px] w-full">
//       <motion.div variants={fadeIn("right", "spring", 0.5 * index, 0.75)} className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'>
//         <div className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col '>
//           <img src={`${ser.icon}`} alt={ser.title}></img>
//           <li>{`${ser.title}`}</li>

//         </div>
//       </motion.div>

//     </Tilt>
//   )
// }

const About = () => {
  return (
    <div className='grid col-auto justify-items-center'>
      <motion.div variants={textVariant()}>
        <p className={style.sectionSubText}>
          Introduction
        </p>
        <h2 className={style.sectionHeadText}>Overview</h2>
      </motion.div>
      <motion.p variants={fadeIn('', '', 0.1, 1)} className='mt-4 text-white text-[17px] max-w-3xl leading-[30px] text-center pt-16 '>
        I'm a dedicated MERN stack developer with one year of experience, specializing in React, Node.js, and Express.js. My expertise extends to crafting immersive 3D websites, where I seamlessly blend front-end creativity with robust back-end functionality. I've successfully delivered projects that leverage cutting-edge technologies to create engaging
        user experiences. My skills encompass responsive web design, RESTful API development, and database management. I'm passionate about pushing the boundaries of web development and thrive in dynamic environments. If you're seeking a skilled MERN developer to bring your 3D web visions to life, I'm eager to contribute my expertise to your team. Let's innovate together
      </motion.p>
      <div className='mt-20 flex justify-center flex-wrap gap-10 pt-36'>
        {information.services.map((service, index) => {

          { console.log(service.title, index, service, "LLLLDDSDS") }
          return (
            // <ServiceCard key={service.title} index={index} ser={service} />
            <Tilt className="xs:w-[250px] w-full" key={null}>
              <motion.div variants={fadeIn("right", "spring", 0.5 * index, 0.75)} className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'>
                <div className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col '>
                  <img src={service.icon} alt={service.title} className='w-16' />
                  <h2 className='text-center text-white font-bold'>{service.title}</h2>
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