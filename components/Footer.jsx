import styles from '../styles/Footer.module.css'
import Image from "next/image"

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <Image src='/img/bg.png' alt='' fill style={{objectFit: 'cover'}}/>
      </div>
      <div className={styles.item}>
        <div className={styles.card}>
          <h2 className={styles.motto}>
            OH YEAAAH! CHEEZE UP TO THE KAZOO.
          </h2>
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>FIND OUR RESTAURANTS</h1>
          <p className={styles.text}>
            123, Evergreen AV.
            <br/> LA, 90210
            <br/> (555) 555-5555
          </p>
          <p className={styles.text}>
            123, Evergreen AV.
            <br/> LA, 90210
            <br/> (555) 555-5555
          </p>
          <p className={styles.text}>
            123, Evergreen AV.
            <br/> LA, 90210
            <br/> (555) 555-5555
          </p>
          <p className={styles.text}>
            123, Evergreen AV.
            <br/> LA, 90210
            <br/> (555) 555-5555
          </p>
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>WORKING HOURS</h1>
          <p className={styles.text}> 
            SATURDAY - SUNDAY
            <br/> 12:00 - 24:00
          </p> 

        </div>
      </div>
    </div>
  )
}

export default Footer