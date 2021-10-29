import React from 'react'

function cardTemplate(props){

return(
    <>
      <div class="col">
            <div class="card" style={{width: "100%"}}>
                <img src={props.image} class="card-img-top" alt={props.image}/>
                <div class ="card-body">
                    <h5 class ="card-title">{props.title}</h5>
                    <p class ="card-text">{props.description}</p>
                    <a href={props.link} class ="btn btn-primary">{props.link}</a>
                </div>
            </div>
        </div>
    </>
)
}

export default cardTemplate