import Link from "next/link";

import { NavItemPropsType } from "./types";

import styles from './index.module.scss'

const NavItem: React.FC<NavItemPropsType> = ({ text, href, isActive, type }) => (
  <Link href={href}>
    <div
      className={type === 'logo' ? styles.logo : styles.navitem}
    >
      {text}
    </div>
  </Link>
)

export default NavItem
