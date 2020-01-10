import React from "react"

import "../styles/components/header.sass"
import { Link, NavLink } from "react-router-dom"

export type Step = {
    text: string,
    link: string
}

export default
class Header
extends React.Component {

    steps: Step[] = [
        {
            text: "Параметры",
            link: "/"
        },
        {
            text: "Редактор",
            link: "/editor"
        },
        {
            text: "Опции",
            link: "/options"
        },
        {
            text: "Итог",
            link: "/finish"
        }
    ]

    render() {
        return <>
            <header className="main-head">
                <div className="container">
                    <Link 
                        to="/"
                        className="logo"
                    >
                        <img src="/static/img/logo.png" alt="logo"/>
                    </Link>
                    <ul className="steps-list">
                        {this.steps.map((step, i) => {
                            return (
                                <li key={i}>
                                    <NavLink to={step.link}>
                                        {step.text}
                                    </NavLink>
                                </li>
                            )
                        })}
                    </ul>
                    <Link 
                        to="phone:+380500333111"
                        className="phone"
                    >
                        +380500333111
                    </Link>
                </div>
            </header>
        </>
    }
}