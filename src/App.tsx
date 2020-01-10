import React from "react"
import { Switch, Route, Router, BrowserRouter } from "react-router-dom"

import "./styles/universal"
import "./styles/main"
import "./styles/fonts"

import Form from "./components/Form"
import Header from "./components/Header"
import Parameters from "./views/Parameters/index"
// import Parameters from "./views/Parameters"
import NotFound from "./views/NotFound"
import Editor from "./views/Editor/index"
import EditorRooms from "./views/Editor/components/EditorRooms"
import Footer from "./components/Footer"
import Options from "./views/Options"
import FinishPage from "./views/Finish"

export interface AppState {

}

export interface AppProps {

}

export default
class App
extends React.Component<AppProps, AppState> {

    render() {
        return <>
            <Header />
            <div className="main-content">
                <Switch>
                    <Route 
                        path="/"
                        exact
                        component={Parameters}
                    />
                    <Route 
                        path="/editor"
                        exact
                        component={Editor}
                    />
                    <Route 
                        path="/options"
                        exact
                        component={Options}
                    />
                    <Route 
                        path="/finish"
                        exact
                        component={FinishPage}
                    />
                    <Route component={NotFound}/>
                </Switch>
            </div>
            <Footer />
        </>
    }
}