import React from 'react'
import "./Brands.css"
import {google,slack,atlassian,shopify,dropbox} from "./imports.js"

const Brands = () => {
  return (
    <div className="cs__brands">
      <div>
        <img src={slack} alt="slack" />
      </div>
      <div>
        <img src={atlassian} alt="atlassian" />
      </div>
      <div>
        <img src={google} alt="google" />
      </div>
      <div>
        <img src={shopify} alt="shopify" />
      </div>
      <div>
        <img src={dropbox} alt="dropbox" />
      </div>
    </div>
  )
}

export default Brands;