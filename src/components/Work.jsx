import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import PropTypes from 'prop-types'
import FetchIcon from "../assets/icon_set"
import Footer from "./Footer"

const variants = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0 }
}
const entries = [
    {
        title: "ILoca Services, Inc.",
        link: "https://semitrailers.net/",
        screenshot: "/screenshot-iloca.png",
        blurb: "An e-commerce site for semitruck trailers and parts. With an online store that has over 1,000 parts, the site sees thousands of visitors each month and averages over a million dollars per year in sales.",
        skills: ["wordpress","php","javascript","jquery","html","css","bootstrap","photoshop"]
    },{
        title: "Safety Technology International",
        link: "https://sti-usa.com",
        screenshot: "/screenshot-sti.png",
        blurb: "There are two versions of the site, one for their USA market as well as one for their EMEA market. Each site has a unique product database. While not direct e-com sites they each have thousands of products/variations online. The site functions as a support tool for their B2B sales.",
        skills: ["wordpress","php","javascript","jquery","html","css","bootstrap","photoshop"]
    },{
        title: "With 2 Bees",
        link: "https://with2bees.com",
        screenshot: "/screenshot-with2bees.png",
        blurb: "My personal website for my freelance services. The entire site was done with Javascript/React and Tailwind.",
        skills: ["react","javascript","html","tailwind","photoshop"]
    },{
        title: "Giddy Hedgehog",
        link: "https://giddyhedgehog.com",
        screenshot: "/screenshot-giddyhedgehog.png",
        blurb: "Personal portfolio site for an amazingly talented graphic artist. If you need any graphic design work I can highly recommend her.",
        skills: ["wordpress","php","javascript","jquery","html","css","bootstrap","photoshop"]
    },{
        title: "D's Incredible Co-ed Sports League",
        link: "https://dicsleague.com",
        screenshot: "/screenshot-dics.png",
        blurb: "I built this website for my sports league. We play every Thursday evening (Ultimate Frisbee and Soccer) to get some laughs and exercise.",
        skills: ["wordpress","javascript","html","css","photoshop"]
    }
]

WorkEntry.propTypes = {
    id: PropTypes.number,
};

function WorkEntry({id}) {
    return (
        <Link to={entries[id].link} target="_blank">
        <motion.div variants={variants} className="project-grid">
            <img src={entries[id].screenshot} className="mb-5" />
            <div className="project-desc md:pl-10 leading-7 flex flex-col">
                <h3 className="mb-0 mt-0 text-[1.65rem]">{entries[id].title}</h3>
                <div className="mb-6">{entries[id].blurb}</div>
                <div className="flex flex-row gap-4 flex-wrap">{ entries[id].skills.map((skill, i) => (<FetchIcon key={i} id={skill} />)) }</div>
            </div>
        </motion.div>
        </Link>
    )
}

function Portfolio() {
    return (
        <motion.section
            id="work"
            className="text-left max-w-screen-lg m-auto px-10 text-gray-400"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <motion.h1 initial={{ opacity: 0, x: -150 }} animate={{ opacity: 1, x: 0 }} transition={{ type: "spring", stiffness: 250 }}>
                MY WORK<span className="blinking-cursor">_</span>
            </motion.h1>
            <div className="mb-16">I built all of these sites from design to development. From fully bespoke to a custom WordPress theme, I can do it all. This is only a small sample of the many sites I have built over the years.</div>
            <motion.div initial="hidden" animate="visible" transition={{ staggerChildren: 0.15 }} className="mt-10">
                <WorkEntry id="0" />
                <WorkEntry id="1" />
                <WorkEntry id="2" />
                <WorkEntry id="3" />
                <WorkEntry id="4" />
            </motion.div>
            <Footer />
        </motion.section>
    )
}

export default Portfolio