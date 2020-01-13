import React from "react"
import { Switch, Route } from "react-router-dom"

import "../../styles/views/editor/editor"

import EditorRooms from "./views/EditorRooms"
import EditorSidebar from "./components/EditorSidebar"

export interface EditorProps {}

export interface EditorState {}

export default
class Editor
extends React.Component<EditorProps, EditorState> {
    render() {
        return <>
            <div className="v-editor">
                <Switch>
                    <Route 
                        path="/editor" 
                        exact 
                        component={EditorRooms}
                    />
                </Switch>
                <EditorSidebar />
            </div>
        </>
    }
}