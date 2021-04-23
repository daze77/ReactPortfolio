import { useEffect, useState } from "react";
import API from "../../utils/API";

// import Pics from '../../assets/images'




function PortfolioCard(){
    const [gitpullUser, setgitPullUser] = useState([]);
    const [gitpullRepo, setgitPullRepo] = useState([]);
    // const [pics, setPics] = useState ([Pics])

    // console.log(pics)

    async function getMyProfile(){
        const res = await API.getGitHubUser()
        setgitPullUser(res);
        console.log(`this is stored in gitpullUser`, gitpullUser)
    }

    useEffect( function(){
        getMyProfile()
        getGitHub()
    }, [] )



    async function getGitHub(event){
        await API.getGitHub()
        .then((response) => {
        setgitPullRepo(response);
        console.log(`this is stored in gitpullRepo`, gitpullRepo) 
        })
        .catch((error) => {
            console.log(error)
        })

    }

   

    return(
 
   
        <h1 onClick={getGitHub}>Testing</h1>
    
    
    )



}


export default PortfolioCard





