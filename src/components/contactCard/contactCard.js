import React from 'react' 


function Contactcard(){
    return(

    <section class="container-fluid">
        <div class="row container-fluid pt-5">
            <div class="col-md-9">
                <div class="contactCard container ">
                    <h1 class="lh-lg">Contact</h1>
                    <div class="container ps-2">
                        <div class="row">
                            <div class="col-md-6 p-4">
                                <h2 class="d-inline display-4">Bill Hronis</h2>
                                <br/>
                                <a href="./assets/documents/BillHronisResume-Updated.pdf" target="_blank" >Resume</a>
                            </div>
                            <div class="col-md-6 py-4">
                                <div class="phone">
                                    <a href="tel:+14164569794"><i class="fas fa-phone-alt fa-2x"></i></a>
                                    <a id="phone" href="tel:+14164569794">&nbsp;&nbsp;416.456.9794</a>
                                </div>
                                <br/>
                                <div class="email">
                                    <a href="mailto:bill.hronis@outlook.com"><i class="fas fa-envelope-square fa-2x"></i></a>
                                    <a id="email" href="mailto:bill.hronis@outlook.com">&nbsp;&nbsp;bill.hronis@outlook.com</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="container">
                        <div class="row">
                            <div class="col">
                                <div class="float-end p\y-3" >
                                    <a  id="github" href="https://github.com/daze77" target="_blank" rel="noreferrer" ><i class="fab fa-github fa-2x"></i></a>
                                    <a href="https://www.linkedin.com/in/bill-hronis-8b9357155" target="_blank" rel="noreferrer"><i class="ps-2 fab fa-linkedin-in fa-2x "></i></a>
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