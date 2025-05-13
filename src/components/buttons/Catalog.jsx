import Category from '@/svg/Category'
import styles from '../../styles/components/buttons/catalog.module.scss'
const Catalog = () => {
  return (
    <button className={styles.catalog}>
        <Category/>
        Kataloq
    </button>
  )
}

export default Catalog