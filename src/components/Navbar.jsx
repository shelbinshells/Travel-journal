import React from "react"
import navImg from "../images/Earth-logo.png"

export default function Navbar() {
    return (
        <nav>
            <img className="nav-logo"  src={navImg} alt="Earth logo"/>
            <p className="nav-text">my travel journal</p>
        </nav>
    )
}