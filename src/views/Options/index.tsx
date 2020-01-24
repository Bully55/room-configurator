import React from "react"
import { SubParam } from "../../typings/index"

import "../../styles/views/options"

import Item from "../../components/Item"
import {
    draftMaterials,
    soundInsulation,
    electricalPanel,
    designProj
} from "../../mockup/index"

export interface OptionsProps {}

export interface OptionsState {}

export default
class Options
extends React.Component<OptionsProps, OptionsState> {

    // draftMaterials: SubParam[] = [
    //     {
    //         text: "Черновые материалы Старатели / Перфекта",
    //         id: Math.random(),
    //         price: 214
    //     },
    //     {
    //         text: "Черновые материалы Кнауф Ротбанд / Weber / Sheetrock",
    //         id: Math.random(),
    //         price: 896
    //     },
    // ]

    // soundInsulation: SubParam[] = [
    //     {
    //         text: "Без шумоизоляции",
    //         id: Math.random(),
    //         price: 251
    //     },
    //     {
    //         text: "Шуманет-100 Гидро",
    //         id: Math.random(),
    //         price: 843
    //     },
    //     {
    //         text: "Шуманет-100 Супер",
    //         id: Math.random(),
    //         price: 1244
    //     },
    // ]

    // electricalPanel: SubParam[] = [
    //     {
    //         text: "Базовый",
    //         id: Math.random(),
    //         price: 299
    //     },
    //     {
    //         text: "Базовый+",
    //         id: Math.random(),
    //         price: 590
    //     },
    //     {
    //         text: "Максимальный",
    //         id: Math.random(),
    //         price: 1454
    //     },
    // ]

    // designProj: SubParam[] = [
    //     {
    //         text: 'Дизайн-проект "Базовый"',
    //         id: Math.random(),
    //         price: 299
    //     },
    //     {
    //         text: 'Дизайн-проект "Расширенный"',
    //         id: Math.random(),
    //         price: 550
    //     },
    //     {
    //         text: 'Дизайн-проект "Максимальный"',
    //         id: Math.random(),
    //         price: 1334
    //     },
    // ]

    render() {
        return <>
            <div className="v-options">
                <div className="options-container">
                    <div className="param-item-wrap">
                        <span className="title">Черновые материалы</span>
                        <div className="options-row">
                            {draftMaterials.map((item, i) => {
                                return (
                                    <Item
                                        key={item.id}
                                        item={item}
                                        name="draft"
                                        className="w48"
                                    />
                                )
                            })}
                        </div>
                    </div>
                    <div className="param-item-wrap">
                        <span className="title">Шумоизоляция пола</span>
                        <div className="options-row">
                            {soundInsulation.map((item, i) => {
                                return (
                                    <Item
                                        key={item.id}
                                        item={item}
                                        name="sound"
                                        className="w30"
                                    />
                                )
                            })}
                        </div>
                    </div>
                    <div className="param-item-wrap">
                        <span className="title">Электрощит</span>
                        <div className="options-row">
                            {electricalPanel.map((item, i) => {
                                return (
                                    <Item
                                        key={item.id}
                                        item={item}
                                        name="electrical"
                                        className="w30"
                                    />
                                )
                            })}
                        </div>
                    </div>
                    <div className="param-item-wrap">
                        <span className="title">Дизайн проект</span>
                        <div className="options-row">
                            {designProj.map((item, i) => {
                                return (
                                    <Item
                                        key={item.id}
                                        item={item}
                                        name="design"
                                        className="w30"
                                    />
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </>
    }
}