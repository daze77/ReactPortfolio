import React from 'react'
import './NavLogo.css'
import LogoSymbol from '../../assets/images/PersonalLogo/BHLogoCircle.png'

function NavLogo(){
   
return (
  <>
    <img src={LogoSymbol} width="100px" height="auto" alt={"logo"}/>
    <span id="NavlogoNameL">bill</span>
    <span id="NavlogoNameR">hronis</span>
  </>
)
}

export default NavLogo