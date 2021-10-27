import React from 'react' 
import Resume from '../../assets/documents/BillHronisResume-Updated.pdf'
import './contactCard.css'

import Logo from '../../components/Logo/Logo'


function Contactcard(){
    return(

    <section id="contactCard" class="container-fluid">
        <div class="row  pt-5">
            <div class="col-md-9">
                <div class="contactCard container">
                    <div class="header">
                        <h1 class="lh-lg">Contact</h1>
                        <div class="float-end p-3" >
                            <a  id="github" href="https://github.com/daze77" target="_blank" rel="noreferrer" ><i class="fab fa-github fa-2x"></i></a>
                            <a href="https://www.linkedin.com/in/bill-hronis-8b9357155" target="_blank" rel="noreferrer"><i class="ps-2 fab fa-linkedin-in fa-2x "></i></a>
                        </div>
                    </div>
                    <div class="row ps-2">
                        <div class="col-lg-6 p-4">
                            <Logo />






                   
                            

                        </div>
                        <div class="col-lg-6 p-4" id="contact">
                        <h2 class="display-4 m-0">Bill Hronis</h2>
                            <a href={Resume} target="_blank" rel="noreferrer">Resume</a>
                            <div class="phone">
                                <a id="phone" href="tel:+14164569794"><i class="fas fa-phone-alt "></i>416.456.9794</a>
                            </div>
                            <div class="email">
                                <a id="email" href="mailto:bill.hronis@outlook.com"><i class="fas fa-envelope-square"></i>bill.hronis@outlook.com</a>
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