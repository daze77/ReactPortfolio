import React from 'react' 
import ProfilePic from '../../../src/assets/images/IMG_1070.png'
import './card.css'


function Card(){
    return(
        <section class="container-fluid">     
            <main class="row pb-5">
                <div class="col-12 col-md-8 py-5">
                    <div class="card mb-3" >
                        <div class="row g-0">
                            <div class="col-md-4">
                                <img class="img-fluid profilePic" src={ProfilePic} alt="..."/>
                            </div>
                            <div class="col-md-8">
                                <div class="card-body">
                                    <h1 class="card-title lh-lg">About Me</h1>
                                    <p class="card-text">Full Stack Web Developer with a background in Project Management and a passion for learning. Effective at combining creativity and problem solving to develop user-friendly applications.  Known among staff and collogues for strong leadership, attention to detail and a positive attitude no matter the complexity of the problem or task.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>     
            </main>            
        </section>    
    )
}





export default Card