import React from "react";
import { useState } from "react";
import {Link} from "react-router-dom";

function Nav(){
    const [menu,setMenu]=useState('false')
    const open=()=>{
        setMenu(!menu)
    }
    return(
    <nav className="">
        <h1 className="logo">SocialDev</h1>
        <ul className={menu?`menu`:`show`}>
            <li>
            <Link to='/' className='nav-link'>Qui sommes-nous</Link></li>
            <li>
            <Link to='/Services' className='nav-link'>Services</Link></li>
            <li>
            <Link to='/Contact' className='nav-link'>Contact</Link></li>
        </ul>
        <div className="burger" onClick={open}>
        <i class="fa-solid fa-bars fa-2xl"></i>
        </div>
    </nav>
    )
}

export default Nav ;