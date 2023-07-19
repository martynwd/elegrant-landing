import styles from '../styles/Home.module.css'
import Link from 'next/link'
import HomeProject from './HomeProject'
import Skills from './Skills'
import { projects } from '../Constants/projects'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons"
import { userinfo, ctaTexts, headings } from '../Constants/userinfo'
import Education from './Education'
import Experiences from "./Experiences";

const HomePage = ({ currentTheme }) => {
    return (
        <div>
            <div className={styles.homeheading} style={{ backgroundColor: currentTheme.secondary }}>
                <h1 className={styles.heading}>{userinfo.greeting.title}</h1>
                <h2 className={styles.subheading} style={{ color: currentTheme.subtext }}>{userinfo.greeting.subtitle}</h2>
                <Link href="#work"><a className={styles.cta1} style={{ backgroundColor: currentTheme.accent, color: currentTheme.contrastText, boxShadow: currentTheme.boxShadow }}>{ctaTexts.landingCTA}</a></Link>
            </div>
            <div>
                {
                    userinfo.education.visible ? <Education currentTheme={currentTheme} /> : null
                }
            </div>
            <div id="about" className={styles.homeAboutSection} style={{ backgroundColor: currentTheme.secondary }}>
                <h1 className={styles.workheading} data-aos="fade-up">{headings.about}</h1>
                <p className={styles.aboutText} style={{ color: currentTheme.subtext }} data-aos="fade-up">{userinfo.about.content}</p>


            </div>
            <Experiences currentTheme={currentTheme} />
        </div>
    )
}

export default HomePage
