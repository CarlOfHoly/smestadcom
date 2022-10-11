import React from "react"
import Layout from "../components/Layout/layout"
import ThemeContextProvider from "../components/Utils/ThemeContext"
import Header from "../components/Header/Header"

const Projects: React.FC = () => {
  return (
    <ThemeContextProvider>
      <Layout>
        <Header />
        PROJECTS
      </Layout>
    </ThemeContextProvider>
  )
}

export default Projects
