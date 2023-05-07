import React from 'react'
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import Body from "@/components/Body"

const HomePage = () => (
  <div>
    <Header navData={navigation} />
    <Body>
      <>
        <h1
          className="
            mt-16
            text-center
            bg-blue-500
            hover:bg-red-500
            transition
            duration-500
            ease-in-out
            py-2
            px-4
            rounded-full
          "
        >
          Some initial text instead of 'Hello world!'
        </h1>
      </>
    </Body>
    <Footer />
  </div>
)

const navigation = [
  {text: '{rostislav.cv}', href: '/', type: 'logo'},
  {text: 'Experience', href: '/experience'},
  {text: 'Projects', href: '/projects'},
  {text: 'Contacts', href: '/contacts'},
]

export default HomePage