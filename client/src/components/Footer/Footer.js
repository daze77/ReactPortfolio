import React from 'react' 
import './Footer.css'


function Footer(){

const currentDate = new Date()
const currentYear = currentDate.getFullYear()





    return(
    <>
        <footer className="footer navbar navbar-light bg-secondary">
            <div className="d-block text-center container-fluid">
                <span className="navbar-brand mb-0"><small>&#169;Copyright {currentYear} </small></span>
            </div>
        </footer>
    </>
    )
}





export default Footer