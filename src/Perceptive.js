import React from 'react'

 function Perceptive () {
    const handle = () => {
        alert('Kotariliyor')
    };
    const deal = (input) => {
        //hey
        alert('Ugrasiliyor ' + input )
    };
    return (
        <div>
            <h1>Algilayabilir</h1>
            <button onClick = { () => alert('Icleniyor') }>Bas 1</button>
            <button onClick = { handle } >Bas 2</button>
            <button onClick = { () => deal ('Girdi')} >Bas 3</button>
            <button onClick = { () => deal ('Aldi')} >Bas 4</button>

        </div>
    )
}
export default Perceptive;