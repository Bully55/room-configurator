import React from "react"

import "../../styles/views/finish"

export interface FinishPageProps {}

export interface FinishPageState {}

export default
class FinishPage
extends React.Component<FinishPageProps, FinishPageState> {
    render() {
        return <>
            <div className="v-finish-page">
                <form className="finish-form">
                    <p className="descr">
                        Оставьте заявку и мы перезвоним вам, чтобы ответить на ваши вопросы и договориться о встрече в нашем офисе.
                    </p>
                    <div className="inp-wrap">
                        <input 
                            type="text"
                            placeholder="Ваше имя"
                        />
                    </div>
                    <div className="inp-wrap">
                        <input 
                            type="tel"
                            placeholder="Ваш телефон"
                        />
                    </div>
                    <div className="inp-wrap">
                        <input 
                            type="email"
                            placeholder="Эл. почта"
                        />
                    </div>
                    <button className="btn">
                        Отправить
                    </button>
                    <p className="sub-info">
                        Нажимая на кнопку, вы даете согласие на обработку персональных данных и соглашаетесь c 
                        <a href="/">политикой конфиденциальности</a>
                    </p>
                </form>
            </div>
        </>
    }
}