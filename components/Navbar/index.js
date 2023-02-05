import React from "react";
import styles from './Navbar.module.css'

export default function Navbar(props) {
    return (
        <>
            <nav className={styles.navbar}>
                <img class={styles.navbar_icon} src={'icons/menu-icon.png'} ></img>
                <img class={styles.navbar_icon} src={'icons/graduation-hat.png'} ></img>
            </nav>
    

        </>
    )
}