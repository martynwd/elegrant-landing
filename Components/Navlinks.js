import { useState, useEffect } from 'react'
import styles from '../styles/NavbarFooter.module.css'
import Link from 'next/link'
import { useRouter } from 'next/router'

const Navlinks = () => {
    const router = useRouter()
    const [activeLink, setActiveLink] = useState('/')

    useEffect(() => {
        setActiveLink(router.asPath)
    }, [router.asPath])

    return (
        <>
            <div className={styles.navlinks}>
                <Link href='/'><a style={{ opacity: activeLink === '/' || activeLink === '/#work' ? '100%' : '80%' }}>Главная</a></Link>
            </div>
            <div className={styles.navlinks}>
                <Link href='/#about'><a style={{ opacity: activeLink === '/#about' ? '100%' : '80%' }}>О нас</a></Link>
            </div>
            <div className={styles.navlinks}>
                <Link href='/work'><a style={{ opacity: activeLink === '/work' ? '100%' : '80%' }}>Наш проект</a></Link>
            </div>
        </>

    )
}

export default Navlinks
