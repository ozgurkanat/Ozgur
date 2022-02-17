import React from 'react'


export const MapList = () => {

    const names = ['HTML', 'CSS', 'JavaScript', 'JSON', 'AJAX']


    return (
        <div>
            <h1>Eslem Dizelgesi</h1>
            <ul>
            {names.map((name) => 
               <li><strong>{name}</strong></li>
            )}
            </ul>
        </div>
    )
}
