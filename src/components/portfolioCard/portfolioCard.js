import React from 'react' 


function Portfoliocard(){
    return(

    <section class="container pb-5">
        <div class="row gx-5 pb-5">
            <div class="pt-5 col-12 col-md-9">
                <div class="card1 container">
                                           
                    <h1 class="lh-lg header">Portfolio</h1>
                    <br/>

                    <div class="row row-cols-1 row-cols-md-2 g-4">
                      <div class="col">
                        <div class="card">
                          <img src="/assets/images/bappBurgerDevoured.png" class="card-img-top" alt="..."/>
                          <div class="card-body">
                            <h5 class="card-title">Burger App</h5>
                            <p class="card-text">This burger application will tracker your burger creations and once devoured will move the burger to the devoured list to easily keep track of burger creations and supply left to be devoured.</p>
                          </div>
                        </div>
                      </div>
                      <div class="col">
                        <div class="card">
                          <img src="/assets/images//noteTakerHome.png" class="card-img-top" alt="..."/>
                          <div class="card-body">
                            <h5 class="card-title">Note Taker App</h5>
                            <p class="card-text">This note taker application will keep track of your notes.  Add, updated and delete notes as needed.</p>
                          </div>
                        </div>
                      </div>
                      <div class="col">
                        <div class="card">
                          <img src="/assets/images//CanadasGameScreenshot.png" class="card-img-top" alt="..."/>
                          <div class="card-body">
                            <h5 class="card-title">Canada's Game</h5>
                            <p class="card-text">A hockey registration application that allows users to register, add a photo to their registration and update any registration information as needed.  Team profiles are populated by registered users pulled from the database.</p>
                          </div>
                        </div>
                      </div>
                      <div class="col">
                        <div class="card">
                          <img src="/assets/images/tpg-output.png" class="card-img-top" alt="..."/>
                          <div class="card-body">
                            <h5 class="card-title">Team Profile Generator App</h5>
                            <p class="card-text">A simple application that runs through the console.  Users can enter their team information that will be logged to the database and will produce a team organization chart based on those inputs.</p>
                          </div>
                        </div>
                      </div>


                        <div class="col">
                          <div class="card">
                            <img src="https://api.github.com/repos/daze77/bthportfolio/deployments" class="card-img-top" alt="..."/>
                            <div class="card-body">
                              <h5 class="card-title">Weather App</h5>
                              <p class="card-text">This is a weather app allowing you to search for weather in any city from the search bar located at the top right.  Each search is saved and you can click on saved searches to retrieve and view the weather of that city at some future point in time.</p>
                            </div>
                          </div>
                        </div>
                        <div class="col">
                          <div class="card">
                            <img src="/assets/images/wdScheduler.png" class="card-img-top" alt="..."/>
                            <div class="card-body">
                              <h5 class="card-title">Work Day Scheduler</h5>
                              <p class="card-text">The work day scheduler application allows to you keep track of items to the day planner by hour. Items can be added, removed and updated as needed.</p>
                            </div>
                          </div>
                        </div>
                        <div class="col">
                          <div class="card">
                            <img src="/assets/images/mfn.png" class="card-img-top" alt="..."/>
                            <div class="card-body">
                              <h5 class="card-title">Money For Nothing</h5>
                              <p class="card-text">This application allows you to quickly search and keep track of stocks of interest to the user.  Top business news is also included to help with the decision making process of stock to monitor. </p>
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





export default Portfoliocard