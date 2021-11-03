import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import './Pages/Pages.css'
import AboutPage from './Pages/About'
import ContactPages from './Pages/Contact'
import PortfolioPages from './Pages/Portfolio'
import NavBar from './components/NavBar/NavBar'
import Footer from './components/Footer/Footer'

function App() {
  return (
    <div >
    <BrowserRouter>
      <NavBar/>
      <div className="container">
        <Route exact path="/" component={AboutPage}/> 
        <Route exact path="/reactportfolio" component={AboutPage}/>
        <Route exact path="/about" component={AboutPage}/>
        <Route exact path="/Portfolio" component={PortfolioPages}/> 
        <Route exact path="/Contact" component={ContactPages}/>  
      </div>
      <Footer/>
    </BrowserRouter>

  </div>
  );
}

export default App;
