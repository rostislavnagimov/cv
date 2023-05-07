export interface NavItemPropsType {
  text: string
  href: string
  isActive?: boolean
  type?: string
}

export interface HeaderProps {
  navData: Array<NavItemPropsType>
}