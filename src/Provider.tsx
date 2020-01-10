import React from "react"
import { Switch, Route } from "react-router-dom"
import App from "./App"

export default
class Provider
extends React.Component {
    render() {
        return <>
            <Switch>
                <Route path="/" component={App}/>
            </Switch>
        </>
    }
}