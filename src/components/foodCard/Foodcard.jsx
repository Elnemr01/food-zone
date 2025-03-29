import React from 'react'
import "./foodcard.css"

const Foodcard = ({card}) => {

    return (
        <div className='card'>
            <div className="image">
                <img src={card.image} alt="check internet connection" loading='lazy'/>
            </div>
            <div className="info">
                <h1 className="name">{card.name}</h1>
                <div className="text">{card.text}</div>
                <div className="price"><span>${card.price}</span></div>
            </div>
        </div>
    )
}

export default Foodcard
