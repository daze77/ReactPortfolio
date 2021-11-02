require( 'dotenv' ).config()



async function fetchGraphQL(token, query, variables){

    console.log('did we find it', token.token)
    console.log('did we find it', query)


  // Fetch data from GitHub's GraphQL API:
  const response = await fetch('https://api.github.com/graphql', {
    method: 'POST',
    headers: {
      Authorization: 'bearer ' + token.token,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: query,
      variables,
    }),
  });

  // Get the response as JSON
  return await response.json();
}
 


export default fetchGraphQL
