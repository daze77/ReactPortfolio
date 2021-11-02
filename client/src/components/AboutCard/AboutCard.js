import React from 'react' 
import ProfilePic from '../../assets/images/IMG_1070.png'
import './AboutCard.css'


function Card(){
    return(
        <section className="container-fluid">     
            <main className="row row-col-1 row-col-md-12 pb-5">
                <div className="col py-5">
                    <div className="card mb-3" >
                        <div className="row g-0">
                            <div className="col-md-4">
                                <img className="img-fluid profilePic" src={ProfilePic} alt="..."/>
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h1 className="card-title lh-lg header">About Me</h1>
                                    <p className="card-text">Full Stack Web Developer with a background in Project Management and a passion for learning. Effective at combining creativity and problem solving to develop user-friendly applications.  Known among staff and collogues for strong leadership, attention to detail and a positive attitude no matter the complexity of the problem or task.</p>
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