import { React, useState } from "react";
import styles from './ToggleMenu.module.css'
import Link from 'next/link'

export default function ToggleMenu() {
    const [popUp, setPopUP] = useState(false)
    return (
        <>
            <img class={styles.hamburgerMenu} onClick={() => setPopUP(true)} src={'icons/menu-icon.png'}></img>
            {
                popUp && (
        <div className={styles.main}>
            <img className={styles.menuBackground} src="background-images/menuBackground.png"></img>
            <p className={styles.exit} onClick={()=>setPopUP(false)}>X</p>
            <ul className={styles.navList}>
                            <Link href='/'><li>Home</li></Link>
                            <Link href='/about'><li>About</li></Link>
                            <Link href='/contact'><li>Contact</li></Link>
            </ul>
        </div>)
    }
    </>
    )
}

