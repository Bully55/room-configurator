import React from "react"
import Item from "../../../components/Item"
import { SubParam } from "typings"
import { ceilingParams, wallParams, floorParams } from "../../../mockup"

export interface SubParamsProps {

}

export interface SubParamsState {

}

export default
class SubParams
extends React.Component {

    handleChange = () => {
        
    }

    render() {
        return <>
            <div className="param-item-wrap">
                <span className="sub-params-title">
                    Тип потолка
                </span>
                {ceilingParams.map((item, i) => {
                    return(
                        <Item
                            key={i}
                            text={item.text}
                            price={item.price}
                            id={item.id}
                            defaultChecked={item.defaultChecked}
                            name="ceileng-param"
                            onChange={this.handleChange}
                        />
                    )
                })}
            </div>
            <div className="param-item-wrap">
                <span className="sub-params-title">
                    Выравнивание стен
                </span>
                {wallParams.map((item, i) => {
                    return(
                        <Item
                            key={i}
                            text={item.text}
                            price={item.price}
                            id={item.id}
                            defaultChecked={item.defaultChecked}
                            name="wall-param"
                            onChange={this.handleChange}
                        />
                    )
                })}
            </div>
            <div className="param-item-wrap">
                <span className="sub-params-title">
                    Стяжка потолка
                </span>
                {floorParams.map((item, i) => {
                    return(
                        <Item
                            key={i}
                            text={item.text}
                            price={item.price}
                            id={item.id}
                            defaultChecked={item.defaultChecked}
                            name="floor-param"
                            onChange={this.handleChange}
                        />
                    )
                })}
            </div>
        </>
    }
}