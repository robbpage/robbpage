import { motion } from "framer-motion"
import FetchIcon from "../assets/icon_set"
import Footer from "./Footer";

const madSkills = ["JAVASCRIPT","jQUERY","REACT","PHP","MYSQL","HTML","CSS","BOOTSTRAP","TAILWIND","WORDPRESS","GDSCRIPT","SWIFT","PHOTOSHOP","NODE.JS","GIT"];

const variants = {
    initial: { opacity: 0, y: -50, },
    animate: (i) => ({ opacity: 1, y: 0, ease: "easeInOut", transition: { delay: 0.05 * i }}),
}

function Skills() {
    return (
        <motion.section
            id="skills"
            className="text-left max-w-screen-lg m-auto px-10 text-gray-400"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <motion.h1 initial={{ opacity: 0, x: -150 }} animate={{ opacity: 1, x: 0 }} transition={{ type: "spring", stiffness: 250 }}>
                SKILLS<span className="blinking-cursor">_</span>
            </motion.h1>
            My main skill list is below. This list is not exhaustive, but it gives a good idea of my main skillset. I am always adding new entries to this list.
            <div className="grid grid-cols-3 md:grid-cols-5 gap-0 mt-8 gap-y-4">    
                { madSkills.map((skill, i) => (
                    <motion.div
                        variants={variants}
                        className="skillset-item"
                        key={i}
                        initial="initial"
                        animate="animate"
                        custom={i}
                    >
                        <div className="skillset-icon"><FetchIcon id={`${skill.toLowerCase()}`} /></div>
                        {skill}
                    </motion.div>
                ))}
            </div>
            <Footer />
        </motion.section>
    )
}

export default Skills