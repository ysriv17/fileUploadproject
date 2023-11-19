import {motion} from "framer-motion"
import style from "../style"
import { staggerContainer } from "../utils/motion"
const SectionWrapper=(Component,idName)=>
 function HOC(){
    return(
        <motion.section variants={staggerContainer()}
        initial="hidden" whileInView='show'viewport={{once: false, amount:0.40}} className={`${style.padding} max-w-7xl mx-auto relative z-0`}>
            <span className="hash-span" id={idName}>&nbsp;</span>
            <Component/>
        </motion.section>
    )
 }


export default SectionWrapper
