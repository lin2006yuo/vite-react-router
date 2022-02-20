import React from "react"
import ReactDOM from "react-dom"
import "./index.css"
import App from "./App"
import Index from './index'
import DesignEditor from "./design"

const designEditor = DesignEditor.createDesignEditor()

ReactDOM.render(
  <React.StrictMode>
    <Index />
  </React.StrictMode>,
  document.getElementById("root")
)
