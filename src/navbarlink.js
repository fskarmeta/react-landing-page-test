import React from 'react'


export const Navlink = () => {
let navLinks = ["Home", "About", "Services", "Contact"]
    return  (
        <ul className="navbar-nav">
        {navLinks.map((link,i) => 
         <li className="nav-item active" key={i}>
            <a className="nav-link" href="#">{link}</a>
        </li>)}
    </ul>
    )
}
