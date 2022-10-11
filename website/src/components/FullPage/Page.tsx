import React, { useEffect } from "react"
import Byline from "../UI/Byline"

import "../../../css/components/FullPage/Page.css"
import { initialAnimation } from "../Utils/Animations"

interface Props {
  title: String
  titlePosition: String
  shape?: String
  ingress?: String
}
const Page: React.FC<Props> = ({ title, titlePosition, shape, ingress }) => {
  const newTitle = title.split(" ")
  const splitIngress = ingress.split("/n")

  useEffect(() => {
    initialAnimation()
  }, [])

  return (
    <div className={"page " + titlePosition}>
      {newTitle.map((title, index) => (
        <h1 key={index} className="title">
          {title.toUpperCase()}
        </h1>
      ))}

      {shape && (
        <>
          <img
            src={require("../../images/" + shape + ".png")}
            className={shape + "-one"}
          />
          <img
            src={require("../../images/" + shape + ".png")}
            className={shape + "-two"}
          />
          <img
            src={require("../../images/" + shape + ".png")}
            className={shape + "-three"}
          />
        </>
      )}

      <div className={"" + shape}>
        <Byline />
      </div>
      {splitIngress.map((ingressPart, index) => (
        <p key={index} className="ingress">
          {ingressPart}
        </p>
      ))}
    </div>
  )
}

export default Page
