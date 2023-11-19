import React, { useRef, useState } from 'react'
import { SectionWrapper } from '../hoc';
import { motion } from 'framer-motion';
import styles from '../style';
import emailjs from "@emailjs/browser"
import { slideIn } from '../utils/motion';
const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: ""
  })
  const handelChange = (e) => {
  }
  const handelSubmit = (e) => { }
  return (
    <div className='xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden'>
      <motion.div variants={slideIn('left', "tween", 0.2, 1)}
        className='flex-[0.75] bg-black-100 p-8 rounded-2xl'>
        <p className={styles.sectionSubText}>Get In Touch</p>
        <h3 className={styles.sectionHeadText}>Conatct</h3>
        <form ref={formRef}>
          
        </form>
      </motion.div>
    </div>
  )
}

export default SectionWrapper(Contact, "contact")