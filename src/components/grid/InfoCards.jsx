import styles from '../../styles/components/grid/infoGrid.module.scss'
import InfoCard from '../cards/InfoCard'

const InfoCards = ({infoDataCards}) => {
  return (
    <div className={styles.infoCards}>
        {(infoDataCards!==null && infoDataCards.length>0) && infoDataCards.map((infoCard, index)=>(
            <InfoCard key={index} infoSVG={infoCard.icon} title={infoCard.title} duration={infoCard.description}/>
        ))}
    </div>
  )
}

export default InfoCards;