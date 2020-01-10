import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter } from "react-router-dom"

import App from "./App"
import Provider from "./Provider"

ReactDOM.render(
    <Provider />,
    document.getElementById("__root")
)