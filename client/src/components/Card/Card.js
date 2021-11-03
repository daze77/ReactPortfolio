import React from 'react'
import './Card.css'

function card(props){

return(
    <>
      <div className="col">
        <a href={props.link} alt={props.link} target="_blank" rel="noreferrer" className ="">
            <div className={`card h-100 ${props.class ? props.class : ""}`} style={{width: "100%"}} key={props.id}>
                    <img src={props.image} className="card-img-top" alt={props.image}/>
                    <div className ="card-body">
                        <h5 className ="card-title">{props.title}</h5>
                        <p className ="card-text">{props.description}</p>
                    </div>
                    <div className="overlay"> <p>Click To Visit Page</p></div>
                </div>
            </a>
        </div>
    </>
)
}

export default card