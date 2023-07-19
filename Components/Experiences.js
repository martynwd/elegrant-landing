import React from 'react'
import { Box, Avatar } from "@chakra-ui/react"
import styles from '../styles/Work.module.css'
import { userinfo, headings } from '../Constants/userinfo'
import img from '../styles/kira.jpg'
import Image from 'next/image'
const Experiences = ({ currentTheme }) => {
    return (
        <div className={styles.experienceWrapper}>
            <h1 className={styles.workHeading} data-aos="fade-up" data-aos-duration="1000" data-aos-delay="100">{headings.experience}</h1>
            <div className={styles.experienceCardWrapper} data-aos="fade-up" data-aos-duration="1000" data-aos-delay="100">
                {
                    userinfo.experience.experienceList ?
                    userinfo.experience.experienceList.map((exp, key) => {
                            return (
                                <div className={styles.experienceCard} key={key} data-aos="fade-up">
                                    <Box borderWidth="0px" borderRadius="md" overflow="hidden">
                                        <div style={{ background: currentTheme.secondary, height: '150px' }}></div>
                                        <div className={styles.experienceCardContent}>
                                            <h1>{exp.company}</h1>
                                            <div className={styles.avatar}>
                                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                                <Image src={exp.companylogo} width={200} height={200} objectFit="contain" style={{ maxHeight: '150px'}}/>
                                            </div>
                                            <div style={{ position: 'relative', top: '20px' }}>
                                                <h2>{exp.position}</h2>
                                                <h3>{exp.description}</h3>
                                            </div>
                                            <h4 style={{ color: currentTheme.subtext }}>{exp.time}</h4>
                                        </div>
                                    </Box>
                                </div>
                            )
                        }) : null
                }
            </div>
        </div>
    )
}

export default Experiences
