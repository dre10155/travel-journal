import  React from 'react'
import Globe from '../assets/worldwide.png'
import './Header.css'

export default function Header() {
    return (
        <> 
            <div className="header">
                <img className="globe" src={Globe} alt="" width="24" height="24" />
                <span>My Travel Journal </span>
                </div>
        </>
    )
}