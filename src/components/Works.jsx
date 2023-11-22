import { Tilt } from "react-tilt"
import {SectionWrapper} from "../hoc"
import Information from "../constants"
import { fadeIn, textVariant } from "../utils/motion"
import { motion } from "framer-motion"
import styles from "../style"
import { github } from "../assets"
const  ProjectCard =(props) =>{
  return(
    <motion.div variants={fadeIn("up", "spring", props.index.index * 0.5, 7.5)}>
      <Tilt className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full" options={{ max:45 ,scale:1, speed:450}} >
        <div className="relative w-full h-[230px]">
          <img src={`${props.project.image}`} alt={props.project.name} className="w-full h-full object-cover rounded-2xl"/>

        <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
            <div onClick={() => window.open(props.project.source_code_link,"_blank")} className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer">
              <img src={github} alt={github} className="object-contain"></img>
            </div>
        </div>
        </div>
        <div className="mt-5">
          <h3 className="text-white font-bold text-[24px]">{props.project.name}</h3>
          <p className="mt-2 text-secondary text-[14px]">{props.project.description}</p>
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          {props.project.tags.map((tags)=>(
            <p key={tags.name} className={` text-[14px] ${tags.color}`}>#{tags.name}</p>
          ))}
        </div>
      </Tilt>
    </motion.div>

  )

}
const Works = () => {
  return (
   <>
      <motion.div>
        <p className={styles.sectionSubText}>
        projects
        </p>
        <h2 className={styles.sectionHeadText}>Works</h2>
      </motion.div>
      <div className="w-full flex justify-center text-white font-bold font-sans">
        <motion.p variants={fadeIn("", "", 0.1, 1)} className="mt-3  text-[17px] max-w-3xl leading-[30px] text-center w-full"> Throughout my career, I've had the opportunity to take on a variety of projects and achieve significant milestones. 
        These experiences have not only enriched my professional journey but have also made a positive impact in various ways.These projects and achievements collectively represent my dedication, adaptability, and a strong desire to make a meaningful impact.
         As I continue to grow and evolve professionally, I'm excited about the possibilities that lie ahead and the opportunities to create even more noteworthy projects and achievements.
         Here's a summary of some of my notable projects and achievements.</motion.p>
      </div>
      <div className="mt-20 flex flex-wrap gap-7">
        
        {Information.projects.map((project,index)=>(
          
          <ProjectCard key={`project-${index}`} project={project} index={index}/>
        ))}
      </div>
 
   </>
  )
}

export default SectionWrapper(Works,"")