import styles from "../page.module.css";

const Center = () => {
    return (
        <div className={styles.hero}>
            <div>
                <h2>Discover Your Next Adventure</h2>
                <p>Explore the world with us and create unforgettable memories.</p>
                <a href="#" className={styles.btn}>Explore Now</a>
                </div>
        </div>
    )
}
export default Center;