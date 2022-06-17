import React from 'react'

export const CityList = ({changeCity}) => {
    return (
    <>
        <ul className="city-list">
            <li className="city-list-item" onClick={() => changeCity('Nikolajew')}>
                Mykolaiv
            </li>
            <li className="city-list-item" onClick={() => changeCity('Kharkiv')}>
                Kharkiv
            </li >
            <li className="city-list-item" onClick={() => changeCity('Lviv')}>
                Lviv
            </li>
            <li className="city-list-item" onClick={() => changeCity('Odesa')}>
                Odesa
            </li>
        </ul>
    </>
  )
}

