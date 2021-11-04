import React, {useEffect} from 'react'
import anime from 'animejs'
import './Logo.css'
import LogoSymbol from '../../assets/images/PersonalLogo/BHLogoCircle.png'

function Logo(onClick){
    useEffect( function(){
    // Pull the name text from Logo and add span element around each letter for animation manipulation
    function logoAnimation(){
    const logoNameL = document.querySelector('#logoNameL').innerText.split("")
    const logoNameR = document.querySelector('#logoNameR').innerText.split("")

    document.querySelector('#logoNameL').innerText = ""
    document.querySelector('#logoNameR').innerText = ""
    
    function createLogo(){  
        let logoNames ={
            leftLogoName: [],
            rightLogoName: []
        }
        let randNum = Math.floor(Math.random()*350)
    
        logoNameL.forEach(element => {
            let spanEl = document.createElement('span')
            spanEl.classList.add('el')
            spanEl.setAttribute('data-x',`${randNum}`)
            spanEl.append(element)
            logoNames.leftLogoName.push(spanEl)
        })    
        logoNameR.forEach(elementt => {
            let spanEl = document.createElement('span')
            spanEl.classList.add('el')
            spanEl.setAttribute('data-x',`${randNum}`)
            spanEl.append(elementt)
            logoNames.rightLogoName.push(spanEl)
        })    
        
        // console.log(logoNames)
        return logoNames
    }
  
    document.querySelector('#logoNameL').append(...createLogo().leftLogoName)
    document.querySelector('#logoNameR').append(...createLogo().rightLogoName)
  
  }
      
      
  logoAnimation()
  
    anime({
      targets: '.logoName .el',
      translateX: function(el) {
        return el.getAttribute('data-x');
      },
      translateY: function(el, i) {
        return 50 + (-50 * i);
      },
      scale: function(el, i, l) {
        return (l - i) + .25;
      },
      rotate: function() { return anime.random(-360, 360); },
      borderRadius: function() { return ['50%', anime.random(10, 35) + '%']; },
      duration: function() { return anime.random(1200, 1800); },
      delay: function() { return anime.random(0, 400); },
      direction: 'alternate',
      loop: 1
    });



}, [] )



  
return (
  <>
    <div className="Logocontainer container">
      <div className="LogoSymbolContainer">
        <div className="logoimg el" data-x="300">

          <img src={LogoSymbol} width="100%" height="auto"/>
          <div className="logoName" >
              <span id="logoNameL">bill</span>
              <span id="logoNameR">hronis</span>
          </div>

        </div>
      </div>


    </div>
  </>


)


}



export default Logo