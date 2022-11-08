import React from 'react' 
import ProfilePic from '../../assets/images/IMG_1070.png'
import './AboutCard.css'


function Card(props){
    const y = "fuck this"
    console.log(props)
    console.log(props.text)
    props.text.map(item => console.log(item.paragraph))
    let x = `this is a test ${y}`

    console.log(x)

    const profile = {"IMG_1070": ProfilePic}


    return(
        <section className="container-fluid aboutCard">     
            <main className="row pb-5">
                <div className="col py-5">
                    <div className="card mb-3" >
                        <div className="row testingbh g-0">
                            <div className="col-md-4 aboutImgContainer">
                                <img key={props.id} className="img-fluid profilePic" src={profile[props.pic]} alt="..."/>
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h1 className="card-title lh-lg header">{props.title}</h1>
                                    
                                    {props.text.map(item =>
                                     
                                    (
                                    <p className="card-text">{item.paragraph}
                                    
                                    {item.list?(<ul>
                                        {item.list.map(items => <li>{items.listitem}</li>)}

                                        </ul>
                                    ) 
                                    

                                    : console.log('no')}
                                    </p>

                                    ))
                                    
}
                                    

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