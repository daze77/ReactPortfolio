import React from 'react' 
import { NavLink } from "react-router-dom";
import './NavBar.css'
import NavLogo from '../NavLogo/NavLogo'


function NavBar(){
    return(
    <>

    <nav className="myname navbar navbar-expand-lg navbar-light bg-white">
        <div className="container-fluid">
            <NavLink to="/about" className="navbar-brand fs-1 text fw-bold text-muted">
                    <div className="NavLogoWrapper">
                        <NavLogo />
                    </div>
            </NavLink>

            <button className="navbar-toggler ms-auto" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false"
                aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
    
            <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <NavLink to="/contact" className="nav-link active" aria-current="page" >Contact</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/portfolio" className="nav-link active">Portfolio</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/about" className="nav-link active">About</NavLink>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    </>


    )
    

}





export default NavBar