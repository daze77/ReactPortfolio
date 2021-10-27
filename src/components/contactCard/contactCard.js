import React from 'react' 
import Resume from '../../assets/documents/BillHronisResume-Updated.pdf'
import './contactCard.css'



function Contactcard(){
    return(

    <section id="contactCard" class="container-fluid">
        <div class="row  pt-5">
            <div class="col-md-9">
                <div class="contactCard container ">
                    <div class="header">
                        <h1 class="lh-lg">Contact</h1>
                        <div class="float-end p-3" >
                            <a  id="github" href="https://github.com/daze77" target="_blank" rel="noreferrer" ><i class="fab fa-github fa-2x"></i></a>
                            <a href="https://www.linkedin.com/in/bill-hronis-8b9357155" target="_blank" rel="noreferrer"><i class="ps-2 fab fa-linkedin-in fa-2x "></i></a>
                        </div>
                    </div>
                    <div class=" ps-2">
                        <div class="row">
                            <div class="col-sm-6 p-4">
                                <h2 class="d-inline display-4">Bill Hronis</h2>
                                <br/>
                                <a href={Resume} target="_blank" rel="noreferrer" >Resume</a>
                            </div>
                            <div class="col-sm-6 py-4" id="contact">
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
        </div>
    </section>
    )
    

}





export default Contactcard