import React from 'react'

import NavItem from './NavItem'
import { HeaderProps } from './types'

import styles from './index.module.scss'

const Header: React.FC<HeaderProps> = ({ navData }) => {
  const location = document.location
  console.log(location)
  return(
  <header className={styles.header}>
    <nav className={styles.nav}>
      {navData.map((item) => (
        <NavItem href={item.href} type={item.type} text={item.text} />
      ))}
    </nav>
  </header>
)}

export default Header