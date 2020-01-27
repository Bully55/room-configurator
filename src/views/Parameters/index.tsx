import React from "react"

import "../../styles/views/parameters"

import { observer } from "mobx-react"
import { Link } from "react-router-dom"
import Item from "../../components/Item"
import { Rooms, SubParam } from "typings"
import SubParams from "./Components/SubParams"
import ParametersStore from "../../stores/ParametersStore"
import SubParameters from "../../stores/Parameters"
import { wallParams, floorParams, ceilingParams } from "../../mockup"

export interface ParametersProps {
    
}

export interface ParametersState {
    showSubParam: boolean
}

@observer
export default
class Parameters
extends React.Component<ParametersProps, ParametersState> {

    state = {
        showSubParam: false
    }

    componentDidMount() {
        window.setTimeout(() => {
            SubParameters.setParams("ceiling", ceilingParams)
            SubParameters.setParams("wall", wallParams)
            SubParameters.setParams("floor", floorParams)
        }, 1000)
    }

    rooms: Rooms[] = [
        {
            value: 1,
            text: "Студия"
        },
        {
            value: 1,
            text: "1"
        },
        {
            value: 2,
            text: "2"
        },
        {
            value: 3,
            text: "3"
        },
        {
            value: 4,
            text: "4"
        },
        {
            value: 5,
            text: "5"
        },
    ]

    handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        console.log(event.currentTarget.name)
        ParametersStore.parameterChange(event.currentTarget.name, +event.currentTarget.value)
    }

    showSubParams = () => {
        this.setState({
            showSubParam: !this.state.showSubParam
        })
    }

    render() {
        console.log(this.state.showSubParam)
        return <>
            <div className="v-parameters">
                <div className="parameters-form">
                    <div className="row">
                        <div>
                            <p className="param-title">Площадь</p>
                            <input 
                                type="text"
                                name="area"
                                defaultValue="50"
                                className="area-inp"
                                onChange={this.handleChange}
                            />
                            <span>M<sup>2</sup></span>
                        </div>
                        <div className="rooms-quantity ml">
                            <p className="param-title">Количество комнат</p>
                            {/* {this.rooms.map((item, i) => {
                                return(
                                    <label
                                        key={i} 
                                        className="param-label"
                                    >
                                        <input 
                                            type="radio"
                                            value={item.value}
                                            name="rooms"
                                            onChange={this.handleChange}
                                        />
                                        <span className="text">
                                            {item.text}
                                        </span>
                                    </label>
                                )
                            })} */}
                            <label className="param-label">
                                <input 
                                    type="radio"
                                    value="0.6"
                                    name="rooms"
                                    onChange={this.handleChange}
                                    defaultChecked
                                />
                                <span className="text">
                                    Cтудия
                                </span>
                            </label>
                            <label className="param-label">
                                <input 
                                    type="radio"
                                    value="1"
                                    name="rooms"
                                    onChange={this.handleChange}
                                />
                                <span className="text">
                                    1
                                </span>
                            </label>
                            <label className="param-label">
                                <input 
                                    type="radio"
                                    value="2"
                                    name="rooms"
                                    onChange={this.handleChange}
                                />
                                <span className="text">
                                    2
                                </span>
                            </label>
                            <label className="param-label">
                                <input 
                                    type="radio"
                                    value="3"
                                    name="rooms"
                                    onChange={this.handleChange}
                                />
                                <span className="text">
                                    3
                                </span>
                            </label>
                            <label className="param-label">
                                <input 
                                    type="radio"
                                    value="4"
                                    name="rooms"
                                    onChange={this.handleChange}
                                />
                                <span className="text">
                                    4
                                </span>
                            </label>
                            <label className="param-label">
                                <input 
                                    type="radio"
                                    value="5"
                                    name="rooms"
                                    onChange={this.handleChange}
                                />
                                <span className="text">
                                    5
                                </span>
                            </label>
                        </div>
                    </div>
                    <div className="row">
                        <div>
                            <p className="param-title">Количество дверей</p>
                            {[...Array(8)].map((_, i) => {
                                i++
                                return(
                                    <label
                                        key={i}
                                        className="param-label"
                                    >
                                        {i == 1 
                                            ? <input 
                                                type="radio"
                                                value={i}
                                                name="doors"
                                                onChange={this.handleChange}
                                                defaultChecked
                                            />
                                            : <input 
                                                type="radio"
                                                value={i}
                                                name="doors"
                                                onChange={this.handleChange}
                                            />
                                        }
                                        
                                        <span className="text">
                                            {i}
                                        </span>
                                    </label>
                                )
                            })}
                        </div>
                        <div className="ml">
                            <p className="param-title">Высота потолка</p>
                            <select 
                                name="ceiling" 
                                className="ceiling-select"
                                onChange={this.handleChange}
                                defaultValue="2.4 м"
                            >
                                {/* {[...Array(22)].map((_, i) => {
                                    let ceilingHeight: number = 2.3
                                    ceilingHeight += 0.1
                                    return(
                                        <option key={i} value={ceilingHeight.toFixed(1)}>
                                            {ceilingHeight.toFixed(1)}м
                                        </option>
                                    )
                                })} */}
                                <option value="2.4">2.4 м</option>
                                <option value="2.5">2.5 м</option>
                                <option value="2.6">2.6 м</option>
                                <option value="2.7">2.7 м</option>
                                <option value="2.8">2.8 м</option>
                                <option value="2.9">2.9 м</option>
                                <option value="3">3.0 м</option>
                                <option value="3.1">3.1 м</option>
                                <option value="3.2">3.2 м</option>
                                <option value="3.3">3.3 м</option>
                                <option value="3.4">3.4 м</option>
                                <option value="3.5">3.5 м</option>
                                <option value="3.6">3.6 м</option>
                                <option value="3.7">3.7 м</option>
                                <option value="3.8">3.8 м</option>
                                <option value="3.9">3.9 м</option>
                                <option value="3">4.0 м</option>
                                <option value="4.5">4.5 м</option>
                            </select>
                        </div>
                    </div>
                    {/* <div 
                        className="param-btn"
                        onClick={this.showSubParams}
                    >
                        Выбор черновой отделки
                    </div>
                    {this.state.showSubParam && */}
                        <SubParams />
                    {/* } */}
                    <div>
                        <Link 
                            to="/editor" 
                            className="sub-param param-btn"
                        >
                            Продолжить
                        </Link>
                    </div>
                </div>
            </div>
        </>
    }
}