import { motion } from "framer-motion"
import PropTypes from 'prop-types'
import FetchIcon from '../assets/icon_set'
import Footer from "./Footer"

const entries = [
    {
        year: "2023-",
        company: "With2Bees",
        location: "Delray Beach, Florida",
        title: "Owner | Developer/Designer",
        blurb: "My freelance company that I started in 2023 to help my friends with their websites. Also to keep learning/developing new skills by picking up various freelance projects while job hunting."
    },
    {
        year: "2021-2023",
        company: "The Agency at Sikich",
        location: "Chicago, Illinois (remote)",
        title: "Developer",
        blurb: "Helped with the creation and development of the Agency’s web division. Mainly focused on Wordpress but with a slight focus on headless CMS (Sanity.io) use cases. Built several high traffic sites with ecommerce as well as developed custom plugins and scripts based on client needs."
    },
    {
        year: "2015-2021",
        company: "Twin Design Studios",
        location: "Delray Beach, Florida",
        title: "Co-owner | Developer/Designer",
        blurb: "Freelance company started by my twin brother and I. We worked on various projects for a wide range of clients. Doctors, yoga studios, restaurants, and more."
    },
    {
        year: "2008-2015",
        company: "QEP Corporation",
        location: "Boca Raton, Florida",
        title: "Developer/Designer",
        blurb: "Designed, developed and maintained the global web presence for QEP Corporation. Took the company from just 3 websites in 2008 to over 25 websites in 2015 with monthly traffic of over 50,000 unique visitors. Covering everything from custom CMS, UI/UX, Branding, server management, etc."
    },
    {
        year: "2006-2008",
        company: "Reagan Wireless",
        location: "Deerfield Beach, Florida",
        title: "Developer/Designer",
        blurb: "Designed and built the company website from the ground up, giving real-time inventory of products to enable the sales team to be more effective as well has handled the weekly email newsletter design and sending."
    },
    {
        year:"1996-2006",
        company: "Sites & Sounds",
        location: "Ann Arbor, Michigan",
        title: "Web Designer",
        blurb: "Designed and built many different websites. Worked on the site for Cindy Margolis (at the time; the most downloaded model on the internet) as well as the one and only Al Roker. (I still have the signed book he sent to thank us!)"
    }    
]

const variants = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0 }
}

function WorkHistoryEntry({entry_id}) {
    return (
        <>
        <motion.div variants={variants}>
            <span className="resume-year">{entries[entry_id].year}</span>
            <span className="font-bold"><span className="font-oxanium text-2xl font-normal text-green-dark">{entries[entry_id].company}</span><span className="resume-location block md:inline"><FetchIcon id="location" />{entries[entry_id].location}</span></span>
            <span className="resume-title">{entries[entry_id].title}</span>
            <div className="resume-blurb">{entries[entry_id].blurb}</div>
        </motion.div>
        </>
    )
}

function History() {    
    return (
        <motion.section
            id="history"
            className="text-left max-w-screen-lg m-auto px-10 text-gray-400"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <motion.h1 initial={{ opacity: 0, x: -150 }} animate={{ opacity: 1, x: 0 }} transition={{ type: "spring", stiffness: 250 }}>
                HISTORY<span className="blinking-cursor">_</span>
            </motion.h1>            
            <motion.div className="leading-8" initial="hidden" whileInView="visible" transition={{ staggerChildren: 0.15 }}>
                <WorkHistoryEntry entry_id={0} />
                <WorkHistoryEntry entry_id={1} />
                <WorkHistoryEntry entry_id={2} />
                <WorkHistoryEntry entry_id={3} />
                <WorkHistoryEntry entry_id={4} />
                <WorkHistoryEntry entry_id={5} />
            </motion.div>
            <Footer />
        </motion.section>
    )
}
WorkHistoryEntry.propTypes = {
    entry_id: PropTypes.number,
};

export default History