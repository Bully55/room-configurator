import React from "react"
import { Switch, Route, BrowserRouter } from "react-router-dom"
import App from "./App"

export default
class Provider
extends React.Component {
    render() {
        return <>
            <BrowserRouter>
                <Switch>
                    <Route path="/" component={App}/>
                </Switch>
            </BrowserRouter>
        </>
    }
}