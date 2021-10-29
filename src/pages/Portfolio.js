import React, {useState, useEffect} from 'react' 

import API from '../utils/GraphQL'
import Card from '../components/Card/Card'

function Portfoliocard(){
  
  const[results3, setresults3] = useState([])
  
  async function getItems(){
    const results2 = await API()
    setresults3(results2.data.data.viewer.pinnedItems.edges)
  }

  useEffect(()=> {
    getItems()
  },[])
  
  console.log('resutls 3 here', results3)

    return(

      <section class="container">
          <div class="row row-cols-1, row-cols-md-2 ">
            {results3.map(a =>(

            <Card
              title = {a.node.name}
              description = {a.node.description}
              link = {a.node.link}
              image = {a.node.openGraphImageUrl}


                />

            ))}
      
          </div>
      </section>
    )
}





export default Portfoliocard