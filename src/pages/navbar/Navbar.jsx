import React from "react";
import './navbar.css'
import {useNavigate,NavLink} from 'react-router-dom'
import { Button, ButtonGroup } from '@chakra-ui/react'

const Navbar = ({isloggedIn,setIsloggedIn})=>{
    
    return(
        <div className="nav">
            <a href="" className="logo">
                University
            </a>
            <div className="navmenu">
                <NavLink to="/" className="home">
                    <span className="span">FORM</span>
                </NavLink>
                <NavLink to="/table" className="home">
                    <span className="span">TABLE</span>
                </NavLink>
                
            </div>
        </div>
    )
}

export default Navbar;