import React from "react";
import styles from './Navbar.module.css'
import ToggleMenu from "../ToggleMenu";


export default function Navbar() {

    return (
        <>
            <nav className={styles.navbar}>
                <ToggleMenu />
                <img class={styles.navbar_icon} src={'icons/graduation-hat.png'} ></img>
            </nav>

        </>
    )
}