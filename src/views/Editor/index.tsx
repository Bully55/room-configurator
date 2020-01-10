import React from "react"
import { Switch, Route } from "react-router-dom"
import EditorRooms from "./components/EditorRooms"

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
            </div>
        </>
    }
}