import React from 'react' 
import './Footer.css'


function Footer(){

const currentDate = new Date()
const currentYear = currentDate.getFullYear()





    return(
    <>
        <footer className="footer navbar navbar-light bg-secondary">
            <div className="d-block text-center container-fluid">
                <span className="navbar-brand mb-0 copyright">
                    Copyright <small>&#169; </small>
                    {currentYear} Bill Hronis Ltd.  All rights reserved.
                </span>
            </div>
        </footer>
    </>
    )
}





export default Footer