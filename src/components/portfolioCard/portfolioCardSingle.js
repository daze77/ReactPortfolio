import { useEffect, useState } from "react";
import API from "../../utils/API";


function PortfolioCard(){
    const [gitpull, setgitPull] = useState([]);




    async function getMyProfile(){
        const res = await API.getGitHubUser()
        setgitPull(res);
        console.log(res)
    }




    useEffect( function(){
        getMyProfile()
    }, [] )



    return(
 
   
        <h1>Testing</h1>
    
    
    )



}


export default PortfolioCard





