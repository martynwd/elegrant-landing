import styles from '../styles/NavbarFooter.module.css';
import { userinfo } from '../Constants/userinfo'
import Link from 'next/link'

const Footer = ({ currentTheme }) => {
    return (
        <div className={styles.footermain} style={{ backgroundColor: currentTheme.footerColor, color: currentTheme.subtext }}>
            <div className={styles.footertable}>
                <Link href='/'><a><h2 className={styles.footerlogo}>{userinfo.logoText}</h2></a></Link>
                <ul>
                    <li className={styles.listHeading}>Socials</li>
                    {userinfo.socials ?
                        userinfo.socials.map((social, key) => {
                            return (
                                <Link href={social.link} key={key}><a><li>{social.type}</li></a></Link>
                            )
                        }) : null
                    }
                    <Link href={'https://t.me/wefsignn'}><a><li>Karina</li></a></Link>
                    <Link href={'https://t.me/annn_787'}><a><li>Ann</li></a></Link>
                    <Link href={'https://t.me/kkammila007'}><a><li>Kamila</li></a></Link>
                    <Link href={'https://t.me/modellerilya'}><a><li>Ilya</li></a></Link>
                    <Link href={'https://t.me/kirabazykina'}><a><li>Kira</li></a></Link>
                </ul>
                <ul>
                    <li className={styles.listHeading}>Pages</li>
                    <Link href='/'><a><li>Главная</li></a></Link>
                    <Link href='/#about'><a><li>о нас</li></a></Link>
                    <Link href='/work'><a><li>Наш проект</li></a></Link>
                </ul>
            </div>
            <hr style={{ height: '1px', backgroundColor: currentTheme.subtext, border: 'none', opacity: '0.5' }}></hr>
        </div>
    )
}

export default Footer
