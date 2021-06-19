import { NavLink } from "react-router-dom"

import React from 'react'

const Navbar = () => {
    return (
        <div>
            <div>
                <NavLink to="/">Homepage</NavLink>
            </div>
            <div>
                <NavLink to="board">Board</NavLink>
            </div>
            <div>
                <NavLink to="settings">Settings</NavLink>
            </div>
        </div>
    )
}

export default Navbar
