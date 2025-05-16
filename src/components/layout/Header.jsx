'use client'

import React, { useEffect, useState } from 'react'
import styles from '../../styles/components/layout/header.module.scss'
import Link from 'next/link'
import Hamburger from '@/svg/Hamburger'
import ArrowDown from '@/svg/ArrowDown'
import Sun from '@/svg/Sun'
import Moon from '@/svg/Moon'
import BakuElectronics from '@/svg/BakuElectronics'
import Catalog from '../buttons/Catalog'
import Search from '../inputs/Search'
import City from '../dropdowns/City'
import UserButtons from '../buttons/UserButtons'
import { usePathname } from 'next/navigation'
const Header = () => {

  const pathname = usePathname();
  // dark-light hissəsi
  const [theme, setTheme] = useState('light');
  useEffect(() => {
    document.body.setAttribute('data-theme', 'light');
    if(localStorage.getItem('theme')){
      const themeStorage = localStorage.getItem('theme');
      setTheme(themeStorage);
    document.body.setAttribute('data-theme', themeStorage);
    }
  }, []);

  const changeTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    document.body.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    setTheme(newTheme);
  };
  return (
    <>
      <header className={styles.header}>
        <Hamburger/>
        <div className={styles.navLinks}>
          <Link className={pathname === "/kampaniyalar" ? `${styles.active}` : `${styles.deactive}`} href="/kampaniyalar">Kampaniyalar</Link>
          <Link className={pathname === "/korporativ-satislar" ? `${styles.active}` : `${styles.deactive}`} href="/korporativ-satislar">Korporativ satışlar</Link>
          <Link className={pathname === "/magazalar" ? `${styles.active}` : `${styles.deactive}`} href="/magazalar">Mağazalar</Link>
          <Link className={pathname === "/ayliq-odenis" ? `${styles.active}` : `${styles.deactive}`} href="/ayliq-odenis">Aylıq ödəniş</Link>
          <Link className={pathname === "/diger" ? `${styles.active}` : `${styles.deactive}`} href="/diger">Digər</Link>
        </div>
        <div className={styles.right}>
          <Link className={styles.old} href='https://www.bakuelectronics.az/'>Əvvəlki versiyaya keçid</Link>
          <div className={styles.language}>
            <span id='langTitle' className={styles.langTitle}>Aze</span>
            <ArrowDown/>
          </div>
          <div onClick={changeTheme} className={`${styles.lightMode} ${theme === 'light' ? styles.light : styles.dark}`}>
            <Moon/>
            <span className={styles.whiteCircle}></span>
            <Sun/>
          </div>
        </div>
      </header>
      <nav className={styles.nav}>
        <Link href='/'><BakuElectronics/></Link>
        <Catalog/>
        <Search/>
        <City/>
        <UserButtons/>
      </nav>
    </>
  )
}

export default Header