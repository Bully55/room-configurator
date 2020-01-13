import React from "react"

import "../../../styles/views/editor/components/editor-item"

export interface EditorItemProps {
    image: string,
    title: string,
    colors: string[]
}

export interface EditorItemState {}

export default
class EditorItem
extends React.Component<EditorItemProps, EditorItemState> {
    render() {
        return <>
            <div className="editor-item">
                <img src={this.props.image} alt="image" className="image" />
                <p className="title">
                    {this.props.title}
                </p>
                <div className="colors">
                    {this.props.colors.map((item, i) => {
                        return (
                            <div
                                key={i}
                                className="color-circle"
                                style={{background: item}}
                            />
                        )
                    })}
                </div>
            </div>
        </>
    }
}