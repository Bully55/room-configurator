import React from "react"

import "../../../styles/views/editor/components/editor-sidebar"
import EditorItem from "./EditorItem"
import Item, { ItemProps } from "../../../components/Item"
import { wallDecoration, floor, skirtingBoard, cornice } from "../../../mockup/index"

export type ItemEditor = {
    image: string,
    title: string,
    colors: string[]
}

export interface SidebarProps {}

export interface SidebarState {}

export default
class Sidebar
extends React.Component<SidebarProps, SidebarState> {

    items: ItemEditor[] = [
        {
            image: "/static/img/legrand.jpg",
            title: "Legrand Etica",
            colors: ["white", "black"]
        },
        {
            image: "/static/img/legrand.jpg",
            title: "Legrand",
            colors: ["white", "black"]
        },
        {
            image: "/static/img/legrand.jpg",
            title: "Etika",
            colors: ["white", "black", "red"]
        },
    ]

    wallColors: string[] = [
        "white",
        "black",
        "red",
        "pink",
        "green",
        "yellow",
        "orange"
    ]

    render() {
        return <>
            <div className="editor-sidebar">
                <div>
                    <span className="title">Отделка стен</span>
                    <div className="item-wrap">
                        {wallDecoration.map((item, i) => {
                            return (
                                <Item
                                    key={i}
                                    name="wall-decoration"
                                    className="wall-decoration"
                                    item={item}
                                />
                            )
                        })}
                    </div>
                </div>
                <div>
                    <span className="title">Цвет стен</span>
                    <div className="circle-wrap">
                        {this.wallColors.map((item, i) => {
                            return (
                                <div
                                    key={i}
                                    style={{backgroundColor: item}}
                                    className="color-circle"
                                ></div>
                            )
                        })}
                    </div>
                </div>
                <div>
                    <span className="title">Пол</span>
                    <div className="item-wrap">
                        {floor.map((item, i) => {
                            return (
                                <Item
                                    key={i}
                                    name="floor"
                                    className="w100"
                                    item={item}
                                />
                            )
                        })}
                    </div>
                </div>
                <div>
                    <span className="title">Плинтус</span>
                    <div className="item-wrap">
                        {skirtingBoard.map((item, i) => {
                            return (
                                <Item
                                    key={i}
                                    name="skirting-board"
                                    className="w100"
                                    item={item}
                                />
                            )
                        })}
                    </div>
                </div>
                <div>
                    <span className="title">Потолочный карниз</span>
                    <div className="item-wrap">
                        {cornice.map((item, i) => {
                            return (
                                <Item
                                    key={i}
                                    image={item.image}
                                    name="cornice"
                                    className="cornice"
                                    item={item}
                                />
                            )
                        })}
                    </div>
                </div>
                <div>
                    <span className="title">Розетки и выключатели</span>
                    <div className="item-wrap">
                        {this.items.map((item, i) => {
                            return (
                                <EditorItem
                                    key={i}
                                    image={item.image}
                                    title={item.title}
                                    colors={item.colors}
                                />
                            )
                        })}
                    </div>
                </div>
            </div>
        </>
    }
}