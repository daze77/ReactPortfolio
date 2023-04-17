import React, {useState, useEffect} from 'react' 

import fetchGRAPHQL from '../utils/GraphQL'
import Card from '../components/Card/Card'
import './Pages.css'
import fetchJSON from '../utils/FetchJSON'



function Portfoliocard(){
  
  const query = `{
    viewer {
        login
        pinnedItems(last: 10) {
            edges {
                node {
                    __typename
                    ... on Repository {
                        id
                        name
                        description
                        projectsUrl
                        object {
                            id
                        }
                        openGraphImageUrl
                        homepageUrl
                    }
                }
            }
        }
    }
}`
  const[projects, setProjects] = useState([])

  async function getToken(){
    const result = await fetchJSON('/api/portfolio')
    getItems(result)
    // console.log('we made it here and here are the results', result)
  }


  async function getItems(TOKEN){
    const results = await fetchGRAPHQL(TOKEN, query)

    setProjects(results.data.viewer.pinnedItems.edges)
  }


  useEffect(()=> {
      getToken()
    },[])
  

    return(
      <>

      <section className="portfolio py-4">
          <div className="row row-cols-1 row-cols-md-2 g-3">
            {projects.map(a =>(
                <Card
                    id={a.node.id}
                    title = {a.node.name}
                    description = {a.node.description}
                    link = {a.node.homepageUrl}
                    image = {a.node.openGraphImageUrl}
                    key = {a.node.id}
                    class = "portfolioCard"
                />
            ))}
      
          </div>
      </section>
      </>
    )
}





export default Portfoliocard