import styles from './Arrow.module.css'


export default function Arrow({
    page = "home",
}) {
    return (

        page.toLowerCase() === "home" ?
            <div className={styles.arrow}>
                <a href='/about'><span><img src={'icons/downwardArrow.png'} /></span></a>
            </div> :
            page.toLowerCase() === "about" ?
                <div className={styles.arrow}>
                    <a href='/'><span><img src={'icons/upwardArrow.png'} /></span></a>
                    <a href='/contact'><span><img src={'icons/downwardArrow.png'} /></span></a>
                </div> :
                page.toLowerCase() === "contact" ?
                    <div className={styles.arrow}>
                        <a href="/about"><span ><img src={'icons/upwardArrow.png'} /></span></a>
                    </div> :
                    <div className={styles.arrow}>
                        <a href="/" ><span ><img src={'icons/downwardArrow.png'} /></span></a>
                    </div>


    )
}
