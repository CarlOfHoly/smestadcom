import React from "react"
import Layout from "../components/Layout/layout"
import FullPage from "../components/FullPage/FullPage"
import Page from "../components/FullPage/Page"
import Header from "../components/Header/Header"
import ThemeContextProvider from "../components/Utils/ThemeContext"
import Spinner from "../components/UI/Spinner"
import useSpinner from "../components/CustomHooks/useSpinner"
import Blobs from "../components/UI/Canvas/Blobs"

import "../../css/pages/index.css"

const IndexPage: React.FC = () => {
  return (
    <ThemeContextProvider>
      <Layout>
        <Blobs />
        {useSpinner(
          <div className="spinner">
            <Spinner />
          </div>,
          <>
            <Header />
            <FullPage scrollingSpeed={1500}>
              <Page
                title="Carl Smestad"
                titlePosition="left"
                shape="circle"
                ingress={"full-stack developer / /n linux enthusiast"}
              />
              <Page
                title="About Me"
                titlePosition="left"
                shape="triangle"
                ingress="click the triangles to check /n out my resume"
              />
              <Page
                title="My Projects"
                titlePosition="left"
                shape="square"
                ingress="check out some of /n my projects"
              />
              <Page
                title="Contact Me"
                titlePosition="left"
                ingress="feel free to contact me"
              />
            </FullPage>
          </>,
          0
        )}
      </Layout>
    </ThemeContextProvider>
  )
}

export default IndexPage
