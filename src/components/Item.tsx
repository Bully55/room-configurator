import React from "react"

import "../styles/components/item"
import Parameters from "../stores/Parameters"
import { SubParam } from "../typings/index"
import { toJS } from "mobx"

export interface ItemProps {
    image?: string,
    // text: string,
    // price?: number,
    // id: string | number,
    name: string,
    className?: string,
    // descr?: string,
    // defaultChecked?: boolean,
    item: SubParam,
    // materials?: string[],
    onChange?: () => void
}

export interface ItemState {

}

export default
class Item
extends React.Component<ItemProps, ItemState> {

    static defaultProps = {
        defaultChecked: false
    }

    componentDidMount() {
        // if(this.props.item.defaultChecked)
        //     Parameters.selectedParams
    }

    handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        Parameters.selectedParams(event.currentTarget.name, this.props.item)
        console.log("Selected: ", toJS(Parameters.ceilingSelected))
    }

    render() {
        let { item } = this.props
        return <>
            <div className={`parameter-item ${this.props.className}`}>
                <input 
                    type="radio"
                    id={`${item.id}`}
                    name={this.props.name}
                    defaultChecked={item.defaultChecked}
                    onChange={this.handleChange}
                />
                <label htmlFor={`${item.id}`}>
                    {this.props.image &&
                        <img 
                            src={this.props.image}
                            alt="image"
                            className="main-image"
                        />
                    }
                    <p className="text">
                        {item.text}
                    </p>
                    <div className="sub-info">
                        {this.props.item.materials &&
                            <div className="materials">
                                {this.props.item.materials 
                                    ? this.props.item.materials.map((image, i) => {
                                        return (
                                            <div
                                                key={i}
                                                style={{backgroundImage: `url(${image})`}}
                                                className="material-circle"
                                            />
                                        )
                                    })
                                    : null
                                }
                            </div>
                        }
                        <p className="descr">
                            {this.props.item.descr}
                        </p>
                    </div>
                    <div className="price-wrap">
                        <span>+ {item.price}</span>
                        <span>&#8372;</span>
                    </div>
                </label>
            </div>
        </>
    }
}