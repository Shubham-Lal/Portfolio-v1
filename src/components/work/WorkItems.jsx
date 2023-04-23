import React from 'react'

export default function WorkItems({ item }) {
    return (
        <div className="work__card" key={item.id}>
            <div target="_blank" rel="noopener noreferrer">
                <img src={item.image} alt="" className='work__img' />
            </div>
            <div className="work__flex-column">
                <h3 className="work__title">{item.title}</h3>
                <span className="work__framework">{item.framework}</span>
            </div>
            <a href={item.link} className="work__button" target="_blank" rel="noopener noreferrer">
                {item.button}
                <i className="bx bx-right-arrow-alt work__button-icon"></i>
            </a>
        </div>
    )
}
