import React from 'react'

export default function Game() {
    return (
        <div className="skills__content">
            <h3 className="skills__title">Game Developer</h3>

            <div className="skills__box">
                <div className="skills__group">
                    <div className="skills__data">
                        <i className='bx bx-badge-check'></i>
                        <div>
                            <h3 className="skills__name">Unreal Engine 4</h3>
                            <span className="skills__level">Advanced</span>
                        </div>
                    </div>

                    <div className="skills__data">
                        <i className='bx bx-badge-check'></i>
                        <div>
                            <h3 className="skills__name">Unreal Engine 5</h3>
                            <span className="skills__level">Basic</span>
                        </div>
                    </div>
                </div>

                <div className="skills__group">
                    <div className="skills__data">
                        <i className='bx bx-badge-check'></i>
                        <div>
                            <h3 className="skills__name">C++</h3>
                            <span className="skills__level">Basic</span>
                        </div>
                    </div>
                    <div className="skills__data">
                        <i className='bx bx-badge-check'></i>
                        <div>
                            <h3 className="skills__name">Blender</h3>
                            <span className="skills__level">Intermediate</span>
                        </div>
                    </div>
                    <div className="skills__data">
                        <i className='bx bx-badge-check'></i>
                        <div>
                            <h3 className="skills__name">Photoshop</h3>
                            <span className="skills__level">Basic</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
