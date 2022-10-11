import React from "react"
import Layout from "../components/Layout/layout"
import ThemeContextProvider from "../components/Utils/ThemeContext"
import Header from "../components/Header/Header"
import CV from "../components/CV"

const About: React.FC = () => {
  return (
    <ThemeContextProvider>
      <Layout>
        <Header />
        <CV />
      </Layout>
    </ThemeContextProvider>
  )
}

export default About
