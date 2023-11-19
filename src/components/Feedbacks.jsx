import React from 'react'
import {motion } from "framer-motion"
import Information from "../constants"
import { fadeIn,textVariant } from '../utils/motion'
import styles from "../style"
const FeedbacksCard =(props)=>{
  return(
    <motion.div variants={fadeIn("","spring", props.index * 0.5,0.75)} className="bg-black-200 p-10 rounded-3xl xs:w-[320px] w-full ">
      <p className='text-white font-black text-[48px]'>"</p>
      <div className='"mt-1'>
        <p className='text-white tracking-wider text-[18px]'>{props.testimonials.testimonial}</p>
        <div className='mt-7 flex justify-between item-center gap-1'>
          <div className='flex-1 flex flex-col'>
            <p className='text-white font-medium text-[16px]'>
              <span className='blue-text-gradient'>@</span> {props.testimonials.name}
            </p>
            <p className='mt-1 text-secondary text-[12px] '>
              {props.testimonials.designation} of {props.testimonials.company}
            </p>
          </div>
          <img src={props.testimonials.image} alt={`feedback by-${props.testimonials.name}`} className='w-10 h-10 rounded-full object-cover'></img>
        </div>
      </div>
    </motion.div>
  )
}
const Feedbacks = () => {
  return (
  <div className='mt-12 bg-black-100 rounded-[20px]'>
    <div className={`${styles.padding} bg-tertiary rounded-2xl min-h-[300px]`}>
       <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>What others say</p>
        <h2 className={`${styles.sectionHeadText} flex  justify-center`}>Testimonials</h2>
       </motion.div>
       </div>
       <div className={`${styles.paddingX} -mt-20 pb-14 flex  justify-center flex-wrap gap-7`}>
        {Information.testimonials.map((testimonial,index)=>{
          return(
          <FeedbacksCard key={testimonial.name} index={index} testimonials={testimonial}/>
       ) })}
       </div>
  </div>
  )
}

export default Feedbacks