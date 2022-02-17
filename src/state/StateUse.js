import React, { useState } from 'react'


export const StateUse = (props) => {
    
    const [quantitiy, setQuantity] = useState (parseInt(props.initial))

    const increment = () => {
        setQuantity(quantitiy+5)
    }

    return (
        <div>
            <h1>Durum Kullanim</h1>
            <p>{quantitiy}</p>
            <button onClick = {increment}>Artir</button>  
        </div>
    )
}
