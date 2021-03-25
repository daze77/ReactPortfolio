// import logo from './logo.svg';
import './App.css';
import AboutPage from './pages/About'
import ContactPages from './pages/Contact'
import PortfolioPages from './pages/Portfolio'
import NavBar from './components/navBar/navBar'
import Footer from './components/footer/footer'

function App() {
  return (
    <div>
        <NavBar/>
          <AboutPage/>
          <ContactPages/>
          <PortfolioPages/>
        <Footer/>

    </div>
  );
}

export default App;
