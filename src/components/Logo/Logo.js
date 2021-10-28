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
  
  // animation for the symbol part of the logo
  anime({
    targets: '.LogoSymbolContainer .el',
    translateX: function(el) {
      return el.getAttribute('data-x');
    },
    translateY: function(el, i) {
      return 150 + (-50 * i);
    },
    translateX: function(el, i) {
      return 200 + (-50 * i);
    },
    scale: function(el, i, l) {
      return (l - i) + 1;
    },
    rotate: function() { return anime.random(-360, 360); },
    borderRadius: function() { return ['50%', anime.random(10, 35) + '%']; },
    duration: function() { return anime.random(2200, 2800); },
    delay: function() { return anime.random(0, 400); },
    direction: 'alternate',
    loop: 2
  });
  
  // animation for the name part of the logo
  let animation = anime.timeline({loop: 2})
    .add({
      targets: '.LogoName .el',
      translateY: ["5.5em", 0],
      translateZ: 0,
      duration: 750,
      delay: (el, i) => 50 * i,
      direction: "alternate"
    }).add({
      targets: '.LogoName',
      opacity: 0,
      duration: 1000,
      easing: "easeOutExpo",
      delay: 1000
    })
  
  
  animation.finished.then(showText)
  
  // this function resets the opacity so the name part of the logo appears following the animation
  
  function showText(){
    anime.set(document.querySelector('.LogoName').style.opacity=1
    )
  }

}, [] )



  
return (
    <>
        <div className="Logocontainer">
            <div className="LogoSymbolContainer">
                <div className="logoimg el" data-x="300">
                    <svg width="155px" height="155px"
                        xmlns="http://www.w3.org/2000/svg">
                        <image href={LogoSymbol} height='100%' width="100%" />
                    </svg>
                </div>
            </div>

            <div className="LogoNameContainer">
                <div className="LogoName" >
                    <span id="logoNameL">bill</span>
                    &nbsp;
                    <span id="logoNameR">hronis</span>
                </div>
            </div>
        </div>


    </>
)


}



export default Logo