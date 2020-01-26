import React from "react"
import Item from "../../../components/Item"
import { SubParam } from "typings"
import { ceilingParams, wallParams, floorParams } from "../../../mockup"
import Parameters from "../../../stores/Parameters"
import { observer } from "mobx-react"

export interface SubParamsProps {

}

export interface SubParamsState {

}

@observer
export default
class SubParams
extends React.Component {

    componentDidMount() {
        window.setTimeout(() => {
            Parameters.setParams("ceiling", ceilingParams)
            Parameters.setParams("wall", wallParams)
            Parameters.setParams("floor", floorParams)
        }, 1000)
    }

    render() {
        let { ceiling, wall, floor } = Parameters
        return <>
            <div className="param-item-wrap">
                <span className="sub-params-title">
                    Тип потолка
                </span>
                {!!Parameters.ceiling
                    ? ceiling.map((item, i) => {
                        return(
                            <Item
                                key={i}
                                item={item}
                                name="ceiling-param"
                            />
                        )
                    })
                    : "Loading..."
                }
            </div>
            <div className="param-item-wrap">
                <span className="sub-params-title">
                    Выравнивание стен
                </span>
                {!!Parameters.wall
                    ? wall.map((item, i) => {
                        return(
                            <Item
                                key={i}
                                item={item}
                                name="wall-param"
                            />
                        )
                    })
                    : "Loading..."
                }
            </div>
            <div className="param-item-wrap">
                <span className="sub-params-title">
                    Стяжка потолка
                </span>
                {!!Parameters.floor
                    ? floor.map((item, i) => {
                        return(
                            <Item
                                key={i}
                                item={item}
                                name="floor-param"
                            />
                        )
                    })
                    : "Loading..."
                }
            </div>
        </>
    }
}