import Image from 'next/image'
import styles from '../../styles/components/cards/infoCard.module.scss'

const InfoCard = ({infoSVG, title, duration}) => {
  return (
    <div className={styles.card}>
      <div className={styles.box}>
        <Image src={infoSVG} alt={title} fill/>
      </div>
      <div className={styles.description}>
        <span className={styles.title}>{title}</span>
        <span className={styles.duration}>{duration}</span>
      </div>
    </div>
  )
}

export default InfoCard