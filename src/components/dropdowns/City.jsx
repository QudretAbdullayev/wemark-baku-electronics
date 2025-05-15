import ArrowDownSearch from "@/svg/ArrowDownSearch"
import styles from '../../styles/components/dropdown/city.module.scss'

const City = () => {
  return (
    <div className={styles.cityDropdown}>
      <span className={styles.cityName}>Sumqayıt şəhəri...</span>
      <ArrowDownSearch/>
    </div>
  )
}

export default City