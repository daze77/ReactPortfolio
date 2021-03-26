import React from 'react' 
import { Navlink, Link } from "react-router-dom";


function NavBar(){
    return(

    <nav class="myname navbar navbar-expand-lg navbar-light bg-white">
        <div class="container-fluid">
            <Link to="/about" class="navbar-brand fs-1 text fw-bold text-muted" href="index.html"  >Bill Hronis</Link>
            <button class="navbar-toggler ms-auto" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false"
                aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
    
            <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
                <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <Link to="/contact" class="nav-link active" aria-current="page" href="contact.html">Contact</Link>
                    </li>
                    <li class="nav-item">
                        <Link to="/portfolio" class="nav-link active" href="portfolio.html">Portfolio</Link>
                    </li>
                    <li class="nav-item">
                        <Link to="/about" class="nav-link active" href="index.html" tabindex="-1" aria-disabled="true">About</Link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>


    )
    

}





export default NavBar