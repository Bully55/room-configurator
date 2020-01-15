import React from "react"

import "../styles/components/item"

export interface ItemProps {
    image?: string,
    text: string,
    price?: number,
    id: string | number,
    name: string,
    className?: string,
    descr?: string,
    defaultChecked?: boolean,
    materials?: string[],
    onChange?: () => void
}

export interface ItemState {

}

export default
class Item
extends React.Component<ItemProps, ItemState> {

    private defaultProps = {
        defaultChecked: false
    }

    render() {
        return <>
            <div className={`parameter-item ${this.props.className}`}>
                <input 
                    type="radio"
                    id={`${this.props.id}`}
                    name={this.props.name}
                    defaultChecked={this.props.defaultChecked}
                />
                <label htmlFor={`${this.props.id}`}>
                    {this.props.image &&
                        <img 
                            src={this.props.image}
                            alt="image"
                            className="main-image"
                        />
                    }
                    <p className="text">
                        {this.props.text}
                    </p>
                    <div className="sub-info">
                        {this.props.materials &&
                            <div className="materials">
                                {this.props.materials 
                                    ? this.props.materials.map((image, i) => {
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
                            {this.props.descr}
                        </p>
                    </div>
                    <div className="price-wrap">
                        <span>+ {this.props.price}</span>
                        <span>&#8372;</span>
                    </div>
                </label>
            </div>
        </>
    }
}