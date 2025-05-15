'use client'
import Basket from '@/svg/Basket'
import Heart from '@/svg/Heart'
import Profile from '@/svg/Profile'
import styles from '../../styles/components/buttons/userButtons.module.scss'
import Compare from '@/svg/Compare'
import { useState } from 'react'

const UserButtons = () => {
  const [basketCounter, setBasketCounter] = useState(0)
  const [compareCounter, setCompareCounter] = useState(1)
  console.log(compareCounter)
  return (
    <div className={styles.userButtons}>
        <button className={`${styles.userButton} ${styles.compare}`}>
            <Compare/>
            {compareCounter>0 && <span className={styles.counter}>{compareCounter}</span>}
        </button>
        <button className={styles.userButton}>
            <Basket/>
            {basketCounter>0 && <span className={styles.counter}>{basketCounter}</span>}
        </button>
        <button className={styles.userButton}>
            <Heart/>
        </button>
        <button className={styles.userButton}>
            <Profile/>
        </button>
    </div>
  )
}

export default UserButtons