import Image from "next/image";
import styles from "../page.module.css";

const Destinations = () => {
    return (
        <div className={styles.destinations}>
        <h2>Popular Destinations</h2>
        <div className={styles.destinationGrid}>
            <div className={styles.destinationCard}>
                <Image className={styles.destinationCardImage} width={300} height={200} src={'/quetta.jpg'} alt="Quetta"></Image>
                <h3>Quetta</h3>
                <p>The city of lights and love.</p>
            </div>
            <div className={styles.destinationCard}>
                <Image className={styles.destinationCardImage} width={300} height={200} src={'/image-1.jpg'} alt="Hunza"></Image>
                <h3>Hunza</h3>
                <p>A tropical paradise.</p>
            </div>
            <div className={styles.destinationCard}>
                <Image className={styles.destinationCardImage} width={300} height={200} src={'/kund-malir-beach-balochistan.jpg'} alt="Kund Malir"></Image>
                <h3>Kund Malir</h3>
                <p>The Balochistan Beach.</p>
            
            </div>
        </div>
    </div>

    )
}
export default Destinations;