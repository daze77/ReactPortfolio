import React from 'react'
import './App.css';
import './pages/Pages.css'
import { BrowserRouter as Router, Route } from "react-router-dom";
import AboutPage from './pages/About'
import ContactPages from './pages/Contact'
import PortfolioPages from './pages/Portfolio'
import NavBar from './components/navBar/navBar'
import Footer from './components/footer/footer'
import MyFunction from './components/portfolioCard/portfolioCardSingle';

function App() {
  return (
      <div >
        {/* <MyFunction/> */}
        <Router>
          <NavBar/>
          <div className="container">
            <Route exact path="/" component={AboutPage}/> 
            <Route exact path="/reactportfolio" component={AboutPage}/>
            <Route exact path="/about" component={AboutPage}/>
            <Route exact path="/Portfolio" component={PortfolioPages}/> 
            <Route exact path="/Contact" component={ContactPages}/>  
          </div>
          <Footer/>
        </Router>

      </div>
  );
}

export default App;
