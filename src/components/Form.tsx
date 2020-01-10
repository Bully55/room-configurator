import React from "react"

export default
class Form
extends React.Component {

    handleSubmit = (event) => {
        event.preventDefault()

        console.log(event.currentTarget)
        
        return false
    }

    render() {
        return <>
            <form onSubmit={this.handleSubmit}>
                <div>
                    <input type="text" placeholder="text1"/>
                </div>
                <div>
                    <input type="text" placeholder="text2"/>
                </div>
                <button>Submit</button>
            </form>
        </>
    }
}