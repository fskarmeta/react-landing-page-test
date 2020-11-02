import React, {useState} from 'react'


export const Navlink = () => {
    const [state, setState] = useState(["Home", "About", "Services", "Contact"])
 
    return  (
        <ul className="navbar-nav">
        {state.map((link,i) => 
         <li className="nav-item active" key={i}>
            <a className="nav-link" href="#">{link}</a>
        </li>)}
    </ul>
    )
}
