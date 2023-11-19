import React from 'react'
import { Tilt } from 'react-tilt'

import { fadeIn } from "../utils/motion"
import { motion } from 'framer-motion'
function serviceCard(service,key, index) {
 
   return (
    
        <Tilt className="xs:w-[250px] w-full">
            <motion.div variants={fadeIn("right", "spring", 0.5 * index, 0.75)} className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'>
                <div className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col '>
                    <img src={service.icon} alt={service.title}></img>
                   
                </div>
            </motion.div>

        </Tilt>
    )
  
}

export default serviceCard
