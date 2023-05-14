import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import dynamic from 'next/dynamic'

import Footer from "@/components/Footer"
import Body from '@/components/Body'

import { NavItemPropsType } from '@/components/Header/types'

const Header = dynamic(
  () => import('../components/Header'),
  { ssr: false }
)

const App = ({ Component, pageProps }: AppProps) => (
  <>
    <Header navData={navigation} />
    <Body>
      <Component {...pageProps} />
    </Body>
    <Footer />
  </>
  )

const navigation: Array<NavItemPropsType> = [
  {text: 'rostislav.cv', href: '/cv/', type: 'logo'},
  {text: '.experience', href: '/cv/experience'},
  {text: '.projects', href: '/cv/projects'},
  {text: '.contacts', href: '/cv/contacts'},
]

export default App
