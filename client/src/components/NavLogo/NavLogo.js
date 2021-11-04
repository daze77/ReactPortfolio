import React from 'react'
import './NavLogo.css'
import LogoSymbol from '../../assets/images/PersonalLogo/BHLogoCircle.png'

function NavLogo(){
   
return (
  <>
    <div className="NavLogocontainer container">
      <div className="NavLogoSymbolContainer">
        <div className="Navlogoimg el" data-x="300">

          <img src={LogoSymbol} width="100%" height="auto"/>
          <div className="NavlogoName" >
              <span id="NavlogoNameL">bill</span>
              <span id="NavlogoNameR">hronis</span>
          </div>

        </div>
      </div>


    </div>
  </>


)


}



export default NavLogo