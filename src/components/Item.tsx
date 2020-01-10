import React from "react"

import "../styles/components/item"

export interface ItemProps {
    text: string,
    price: number,
    id: string | number,
    name: string,
    className?: string
}

export interface ItemState {

}

export default
class Item
extends React.Component<ItemProps, ItemState> {
    render() {
        return <>
            <div className={`parameter-item ${this.props.className}`}>
                <input 
                    type="radio"
                    id={`${this.props.id}`}
                    name={this.props.name}
                />
                <label htmlFor={`${this.props.id}`}>
                    <p className="text">
                        {this.props.text}
                    </p>
                    <div>
                        <span>+ {this.props.price}</span>
                        <span>&#8372;</span>
                    </div>
                </label>
            </div>
        </>
    }
}