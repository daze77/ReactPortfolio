import React, {useState, useEffect} from 'react' 

import API from '../utils/GraphQL'
import Card from '../components/Card/Card'
import './Pages.css'

function Portfoliocard(){
  
  const[results3, setresults3] = useState([])
  
  async function getItems(){
    const results2 = await API()
    setresults3(results2.data.data.viewer.pinnedItems.edges)
  }


  useEffect(()=> {
    getItems()
  },[])
  

    return(

      <section className="portfolio py-4">
          <div className="row row-cols-1 row-cols-md-2 g-3">
            {results3.map(a =>(
                <Card
                    title = {a.node.name}
                    description = {a.node.description}
                    link = {a.node.link}
                    image = {a.node.openGraphImageUrl}
                    key = {a.node.id}
                />
            ))}
      
          </div>
      </section>
    )
}





export default Portfoliocard