import React from 'react'
import './Card.css'

function card(props){

return(
    <>
      <div className="col">
            <div className="card h-100" style={{width: "100%"}} key={props.id}>
                <img src={props.image} className="card-img-top" alt={props.image}/>
                <div className ="card-body">
                    <h5 className ="card-title">{props.title}</h5>
                    <p className ="card-text">{props.description}</p>
                    <a href={props.link} className ="btn btn-primary">{props.link}</a>
                </div>
            </div>
        </div>
    </>
)
}

export default card