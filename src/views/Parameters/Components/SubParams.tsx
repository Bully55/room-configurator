import React from "react"
import Item from "../../../components/Item"
import { SubParam } from "typings"

export interface SubParamsProps {

}

export interface SubParamsState {

}

export default
class SubParams
extends React.Component {

    ceilingParams: SubParam[] = [
        {
            id: Math.random(),
            text: "Натяжной потолок ПВХ белый матовый",
            price: 145.947
        },
        {
            id: Math.random(),
            text: "Гипсокартонный потолок",
            price: 145.947
        },
        {
            id: Math.random(),
            text: "Оштукатуренный потолок",
            price: 92.516
        },
    ]

    wallParams: SubParam[] = [
        {
            id: Math.random(),
            text: "Оштукатуривание стен по маякам толщиной до 2 см",
            price: 8.089
        },
        {
            id: Math.random(),
            text: "Оштукатуривание стен по маякам толщиной до 3 см",
            price: 8.089
        },
        {
            id: Math.random(),
            text: "Оштукатуривание стен по маякам толщиной до 4 см",
            price: 46.089
        },
        {
            id: Math.random(),
            text: "Оштукатуривание стен по маякам толщиной до 5 см",
            price: 63.089
        },
    ]

    floorParams: SubParam[] = [
        {
            id: Math.random(),
            text: "Базовая стяжка (до 60мм)",
            price: 12.500
        },
        {
            id: Math.random(),
            text: "Повышенная стяжка (до 100мм)",
            price: 12.500
        },
        {
            id: Math.random(),
            text: "Базовая стяжка (до 150мм)",
            price: 23.500
        },
    ]

    render() {
        return <>
            <div className="param-item-wrap">
                <span className="sub-params-title">
                    Тип потолка
                </span>
                {this.ceilingParams.map((item, i) => {
                    return(
                        <Item
                            key={i}
                            text={item.text}
                            price={item.price}
                            id={item.id}
                            name="ceileng-param"
                        />
                    )
                })}
            </div>
            <div className="param-item-wrap">
                <span className="sub-params-title">
                    Выравнивание стен
                </span>
                {this.wallParams.map((item, i) => {
                    return(
                        <Item
                            key={i}
                            text={item.text}
                            price={item.price}
                            id={item.id}
                            name="wall-param"
                        />
                    )
                })}
            </div>
            <div className="param-item-wrap">
                <span className="sub-params-title">
                    Стяжка потолка
                </span>
                {this.floorParams.map((item, i) => {
                    return(
                        <Item
                            key={i}
                            text={item.text}
                            price={item.price}
                            id={item.id}
                            name="floor-param"
                        />
                    )
                })}
            </div>
        </>
    }
}