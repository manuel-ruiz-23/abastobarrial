import React from 'react'
import './Style.css'

function InitialBaner() {
    return (
        <div className="Header">
            <div className="Logo">
                <img src="/logo192.png" alt="Abasto Barrial Logo"/>
            </div>
            <div className="Title">Abasto<br/>Barrial</div>
            <div className="Menu">
                <ul>
                    <li>
                        <a href="#">Colabora</a>
                    </li>
                    <li>
                        <a href="#">Información</a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default InitialBaner