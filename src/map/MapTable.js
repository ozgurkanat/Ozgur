import React from 'react'


export const MapTable = () => {

    const products = [
        { id: 301, name: 'Cep Telefonu', price: 1300 },
        { id: 302, name: 'Bilgisayar', price: 1400 },
        { id: 303, name: 'Dizustu', price: 1500 },
    ]


    return (
        <div>
            <h1>Eslem Cizelgesi</h1>
            <table>
                {products.map((product) =>
                    <tr>
                        <td><strong>{product.id}</strong></td>
                        <td><strong>{product.name}</strong></td> 
                        <td><strong>{product.price}</strong></td>
                    </tr>
                )}
            </table>
        </div>
    )
}
