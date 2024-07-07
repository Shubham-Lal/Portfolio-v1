import React from 'react'

export default function WorkItems({ item }) {
    return (
        <div className="work__card" key={item.id}>
            <div target="_blank" rel="noopener noreferrer">
                <img src={item.image} alt="" className='work__img' />
            </div>
            <h3 className="work__title">{item.title}</h3>
            <p className="work__framework">{item.framework}</p>
            <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                {item.repo && (
                    <a href={item.repo} className="work__button" target="_blank" rel="noopener noreferrer">
                        GitHub
                        <i className="bx bx-right-arrow-alt work__button-icon"></i>
                    </a>
                )}
                {item.site && (
                    <a href={item.site} className="work__button" target="_blank" rel="noopener noreferrer">
                        Visit
                        <i className="bx bx-right-arrow-alt work__button-icon"></i>
                    </a>
                )}
            </div>
        </div>
    )
}
