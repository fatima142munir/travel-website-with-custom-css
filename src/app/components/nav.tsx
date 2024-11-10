import styles from "../page.module.css";

const Nav = ()=>{
    return(          

        <div className={styles.container}>
            <h1>Travel Explorer</h1>
            <nav className={styles.nav}>
                <ul>
                    <li><a href="#destinations">Destinations</a></li>
                    <li><a href="#about">About Us</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>
        </div>

    )
}
export default Nav;