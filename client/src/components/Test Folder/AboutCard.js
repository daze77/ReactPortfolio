import React from 'react' 
import ProfilePic from '../../assets/images/IMG_1070.png'
import './AboutCard.css'


function Card(props){
    const profile = {"IMG_1070": ProfilePic}


    return(
        <section className="container-fluid ">     
            <main className="row pb-5 aboutCard">
                <div className="col py-5">
                    <div className="card mb-3" >
                        <div className="row g-0">
                            <div className="col-md-4">
                                <img key={props.id} className="img-fluid profilePic" src={profile[props.pic]} alt="..."/>
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h1 className="card-title lh-lg header">{props.title}</h1>
                                    <p className="card-text">{props.text}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>     
            </main>     









            <div class="card mb-3" >
                <div class="row g-0">
                    <div class="col-md-4">
                    <img src="..." class="img-fluid rounded-start" alt="..."/>
                    </div>
                    <div class="col-md-8">
                    <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                    </div>
                    </div>
                </div>
            </div>       
        </section>    
    )
}





export default Card