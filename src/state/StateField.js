import React from 'react'


export default class StateField extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            quantitiy: 10,
            price:140
        }
    }
    
    render() {
        const increment = () => {
            this.setState ({
                quantitiy: this.state.quantitiy + 5
            }) 
        }
        return (
            <div>
                <h1>Durum Tarlasi</h1>
                <p>{this.state.quantitiy}-{this.state.price}</p>
                <button onClick = {increment}>Artir</button>
            </div>
        )
    }
}
