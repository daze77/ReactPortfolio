import React from 'react' 
import { Link } from "react-router-dom";


function NavBar(){
    return(

    <nav className="myname navbar navbar-expand-lg navbar-light bg-white">
        <div className="container-fluid">
            <Link to="/about" className="navbar-brand fs-1 text fw-bold text-muted" href="index.html" >Bill Hronis</Link>
            <button className="navbar-toggler ms-auto" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false"
                aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
    
            <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <Link to="/contact" className="nav-link active" aria-current="page" href="contact.html">Contact</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/portfolio" className="nav-link active" href="portfolio.html">Portfolio</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/about" className="nav-link active" href="index.html" tabindex="-1" aria-disabled="true">About</Link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>


    )
    

}





export default NavBar