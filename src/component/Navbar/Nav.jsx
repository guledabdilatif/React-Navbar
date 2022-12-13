import React from 'react'
import './Nav.css'
import { useState } from 'react'
import {CgWebsite} from 'react-icons/cg'
import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai'

const Nav = () => {
    const[open, setOpen]=useState(false)
  return (
    <div className='nav'>
        
        <CgWebsite className='icon'/>
            <nav className={` hello ${open ? 'top-20':'top-490'}`}>
                <p>Home</p>
                <p>Sevices</p>
                <p>Contact</p>
                <p>Portfopo</p>
                <p>Testimonials</p>
            </nav>
            <div className="toggle-icon" onClick={()=>setOpen(!open)}>
                {open?<AiOutlineClose className='icon'/>:<AiOutlineMenu className='icon'/>}
            
            
            </div>
    </div>
  )
}

export default Nav