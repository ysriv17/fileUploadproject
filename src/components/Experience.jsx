/* eslint-disable react/jsx-key */
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component"
import { motion } from "framer-motion"
import styles from "../style"
import Information from "../constants"
import { SectionWrapper } from "../hoc"
import "react-vertical-timeline-component/style.min.css"

// import { textVariant } from "../utils/motion"
// const ExperienceCard = (experience) => (

// )
const Experience = () => {
  return (
    <>
      <motion.div>
        <p className={styles.sectionSubText}>
          What I Have Done So Far
        </p>
        <h2 className={styles.sectionHeadText}>Experience</h2>
      </motion.div>
      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {Information.experiences.map((experience, index) => {
            return (<VerticalTimelineElement
              contentStyle={{ background: "#1d1836", color: "#fff" }}
              contentArrowStyle={{ borderRight: "7px solid #232631" }}
              data={experience.data}
              iconStyle={{ background: experience.iconBg }}
              icon={<div>
                <img
                  src={experience.icon}
                  alt={experience.company_name}
                  className="w-[60] h-[60%] object-contain" />
              </div>
              }><div>
                <h1 className="text-white text-[26px] font-bold">
                  {experience.title}
                </h1>
                <h3 className=" text-white text-[20px] font-semibold">{experience.company_name}</h3>
                <h4>{experience.date}</h4>
                <ul className="mt-5 list-disc ml-5 space-y">
                  {experience.points.map((point, index) => (
                    <li key={`experience-point-${index}`} className=" text-white-100 text-[14px] pl-1 tracking-wider">{point}</li>
                  ))}
                </ul>
              </div>
            </VerticalTimelineElement>
            )
          })}
        </VerticalTimeline>
      </div>
    </>
  )
}

export default SectionWrapper(Experience, "experience")