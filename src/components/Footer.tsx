import React from "react"
import { Link } from "react-router-dom"

import "../styles/components/footer"

import ParametersStore from "../stores/ParametersStore"
import { observer } from "mobx-react"

@observer
export default
class Footer
extends React.Component {
    render() {
        return <>
            <footer className="main-footer">
                <span className="total-price">
                    Total price: {ParametersStore.totalPrice} грн.
                </span>
                <Link 
                    to="/"
                    className="footer-btn"
                >
                    Продолжить
                </Link>
            </footer>
        </>
    }
}