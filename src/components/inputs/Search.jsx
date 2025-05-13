import SearchSVG from '@/svg/Search'
import styles from '../../styles/components/inputs/search.module.scss'

const Search = () => {
  return (
    <div className={styles.searchButton}>
        <input placeholder='Məhsul axtar...' type="text" />
        <SearchSVG/>
    </div>
  )
}

export default Search