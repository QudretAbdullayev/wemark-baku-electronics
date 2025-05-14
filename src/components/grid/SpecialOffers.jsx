'use client'
import { useState } from 'react'
import styles from '../../styles/components/grid/specialOffers.module.scss'

const SpecialOffers = ({productsData}) => {
  const [activeButton, setActiveButton] = useState('all')
  console.log(productsData)
  return (
    (productsData!==null && productsData.length>0) &&
    <div className={styles.specialOffers}>
        <div className={styles.descriptions}>
            <div className={styles.titles}>
                <span className={styles.specialTitle}>Özəl təkliflər</span>
                <span className={styles.specialDesc}>Payız gəldi, şərtlər indi daha da sadələşdi!</span>
            </div>
            <div className={styles.buttons}>
                <div className={styles.box}>
                    <button className={`${activeButton==='all' ? `${styles.active}` : `${styles.deactive}`}`}>Hamısı</button>
                    <button className={`${activeButton==='al' ? `${styles.active}` : `${styles.deactive}`}`}>Elektronika</button>
                    <button className={`${activeButton==='al' ? `${styles.active}` : `${styles.deactive}`}`}>Məişət Əşyaları</button>
                    <button className={`${activeButton==='al' ? `${styles.active}` : `${styles.deactive}`}`}>Telefonlar</button>
                    <button className={`${activeButton==='al' ? `${styles.active}` : `${styles.deactive}`}`}>Smartfonlar</button>
                    <button className={`${activeButton==='al' ? `${styles.active}` : `${styles.deactive}`}`}>Telefonlar</button>
                </div>
            </div>
        </div>
        <div className={styles.products}></div>
    </div>
  )
}

export default SpecialOffers