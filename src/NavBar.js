import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <div className='NavbarContainer'>
            <div className='NavbarContent'>
                <div>
                    <img src="/Images/logo.png" alt="Design image" />
                </div>
                <div className='rightNav'>
                    <Link to={"/"}>
                        Home
                    </Link>
                    <Link to={"/about"}>
                        About
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default NavBar