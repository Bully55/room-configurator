import React from "react"

import "../../../styles/views/editor/components/editor-sidebar"
import EditorItem from "./EditorItem"
import Item, { ItemProps } from "../../../components/Item"

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

    wallDecoration: ItemProps[] = [
        {
            text: "Покраска",
            id: Math.random(),
            name: "wallDecoration",
            price: 0,
            defaultChecked: true
        },
        {
            text: "Обои под покраску",
            id: Math.random(),
            name: "wallDecoration",
            price: 23.791
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

    floor: ItemProps[] = [
        {
            id: Math.random(),
            name: "floor",
            price: 0,
            text: "Ламинат",
            materials: ["/static/img/texture.jpg", "/static/img/texture2.jpg"],
            descr: "description",
            defaultChecked: true
        },
        {
            id: Math.random(),
            name: "floor",
            price: 0,
            text: "Ламинат",
            materials: ["/static/img/texture2.jpg", "/static/img/texture.jpg", "/static/img/texture.jpg"],
            descr: "description"
        },
        {
            id: Math.random(),
            name: "floor",
            price: 0,
            text: "Ламинат",
            materials: ["/static/img/texture2.jpg", "/static/img/texture2.jpg"],
            descr: "description"
        },
        {
            id: Math.random(),
            name: "floor",
            price: 0,
            text: "Ламинат",
            materials: ["/static/img/texture.jpg", "/static/img/texture2.jpg", "/static/img/texture.jpg"],
            descr: "description"
        },
    ]

    skirtingBoard: ItemProps[] = [
        {
            id: Math.random(),
            name: "skirtingBoard",
            price: 0,
            text: "Плинтус в цвет стен",
            descr: "description 2",
            defaultChecked: true
        },
        {
            id: Math.random(),
            name: "skirtingBoard",
            price: 0,
            text: "Современный плинтус",
            descr: "description 3"
        },
        {
            id: Math.random(),
            name: "skirtingBoard",
            price: 0,
            text: "Классический плинтус",
            descr: "description 4"
        },
        {
            id: Math.random(),
            name: "skirtingBoard",
            price: 0,
            text: "Современный высокий плинтус",
            descr: "description 5"
        },
        {
            id: Math.random(),
            name: "skirtingBoard",
            price: 0,
            text: "Классический высокий плинтус",
            descr: "description 6"
        },
    ]

    cornice: ItemProps[] = [
        {
            image: "/static/img/texture.jpg",
            id: Math.random(),
            name: "cornice",
            price: 0,
            text: "Без карниза",
            descr: "descript",
            defaultChecked: true
        },
        {
            image: "/static/img/texture.jpg",
            id: Math.random(),
            name: "cornice",
            price: 0,
            text: "Orac Decor CX109",
            descr: "descript" 
        },
        {
            image: "/static/img/texture.jpg",
            id: Math.random(),
            name: "cornice",
            price: 0,
            text: "Orac Decor CX100",
            descr: "descript" 
        },
        {
            image: "/static/img/texture.jpg",
            id: Math.random(),
            name: "cornice",
            price: 0,
            text: "Orac Decor CX119",
            descr: "descript" 
        },
    ]

    render() {
        return <>
            <div className="editor-sidebar">
                <div>
                    <span className="title">Отделка стен</span>
                    <div className="item-wrap">
                        {this.wallDecoration.map((item, i) => {
                            return (
                                <Item
                                    key={i}
                                    text={item.text}
                                    id={item.id}
                                    name={item.name}
                                    price={item.price}
                                    defaultChecked={item.defaultChecked}
                                    className="wall-decoration"
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
                        {this.floor.map((item, i) => {
                            return (
                                <Item
                                    key={i}
                                    id={item.id}
                                    name={item.name}
                                    price={item.price}
                                    text={item.text}
                                    materials={item.materials}
                                    descr={item.descr}
                                    defaultChecked={item.defaultChecked}
                                    className="w100"
                                />
                            )
                        })}
                    </div>
                </div>
                <div>
                    <span className="title">Плинтус</span>
                    <div className="item-wrap">
                        {this.skirtingBoard.map((item, i) => {
                            return (
                                <Item
                                    key={i}
                                    id={item.id}
                                    name={item.name}
                                    price={item.price}
                                    text={item.text}
                                    materials={item.materials}
                                    descr={item.descr}
                                    defaultChecked={item.defaultChecked}
                                    className="w100"
                                />
                            )
                        })}
                    </div>
                </div>
                <div>
                    <span className="title">Потолочный карниз</span>
                    <div className="item-wrap">
                        {this.cornice.map((item, i) => {
                            return (
                                <Item
                                    key={i}
                                    image={item.image}
                                    id={item.id}
                                    name={item.name}
                                    price={item.price}
                                    text={item.text}
                                    materials={item.materials}
                                    descr={item.descr}
                                    defaultChecked={item.defaultChecked}
                                    className="cornice"
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