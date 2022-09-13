import React from 'react' 
import Resume from '../../assets/documents/Bill Hronis - ResumePM.pdf'
import './ContactCard.css'

import Logo from '../Logo/Logo'


function Contactcard(){
    return(
    <>

    <section id="contactCard" className="container-fluid">

        
        <div className="row pt-5">
                <div className="container col-lg-9 contactCard ">
                    <div className="container">
                        <div className="contactTop">
                            <h1 className="lh-lg header">Contact</h1>
                            <div id="social" className=" px-3 pt-3" >
                                <a  id="github" href="https://github.com/daze77" target="_blank" rel="noreferrer" ><i className="fab fa-github fa-2x"></i></a>
                                <a href="https://www.linkedin.com/in/billhronis/" target="_blank" rel="noreferrer"><i className="ps-2 fab fa-linkedin-in fa-2x "></i></a>
                            </div>
                        </div>
                        <div className="row row-cols-1 row-cols-md-2 align-items-center">
                            <div id="logo" className="col">
                                <Logo />
                            </div>
                            <div id="contact" className="col">
                                <h2 className="display-6">Bill Hronis</h2>
                                <div id="resume" ><a  href={Resume} target="_blank" rel="noreferrer">Resume</a> </div>
                                <div className="phone">
                                    <a  href="tel:+14164569794"><i className="fas fa-phone-alt "></i>416.456.9794</a>
                                </div>
                                <div className="email">
                                    <a  href="mailto:bill.hronis@outlook.com"><i className="fas fa-envelope-square"></i>bill.hronis@outlook.com</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    </section>
    </>
    )
    

}





export default Contactcard