import React from 'react' 
import Resume from '../../assets/documents/BillHronisResume-Updated.pdf'
import './contactCard.css'

import Logo from '../../components/Logo/Logo'


function Contactcard(){
    return(

    <section id="contactCard" class="container-fluid">

        
        <div class="row pt-5">
                <div class="container col-lg-9 contactCard ">
                    <div class="container">
                        <div class="contactTop">
                            <h1 class="lh-lg header">Contact</h1>
                            <div id="social" class=" px-3 pt-3" >
                                <a  id="github" href="https://github.com/daze77" target="_blank" rel="noreferrer" ><i class="fab fa-github fa-2x"></i></a>
                                <a href="https://www.linkedin.com/in/bill-hronis-8b9357155" target="_blank" rel="noreferrer"><i class="ps-2 fab fa-linkedin-in fa-2x "></i></a>
                            </div>
                        </div>
                        <div class="row align-items-center row-cols-1 row-cols-md-2 ">
                            <div id="logo" class="col ">
                                <Logo />
                        </div>
                            <div class="col" id="contact">
                                <h2 class="display-6">Bill Hronis</h2>
                                <div id="resume" ><a  href={Resume} target="_blank" rel="noreferrer">Resume</a> </div>
                                <div class="phone">
                                    <a  href="tel:+14164569794"><i class="fas fa-phone-alt "></i>416.456.9794</a>
                                </div>
                                <div class="email">
                                    <a  href="mailto:bill.hronis@outlook.com"><i class="fas fa-envelope-square"></i>bill.hronis@outlook.com</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    </section>
    )
    

}





export default Contactcard