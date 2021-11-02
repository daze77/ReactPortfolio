require( 'dotenv' ).config()



async function fetchGraphQL(token, query, variables){
    const TEST = process.env.TEST
    console.log("bbb", TEST)

    console.log('did we find it', token)

  // Fetch data from GitHub's GraphQL API:
  const response = await fetch('https://api.github.com/graphql', {
    method: 'POST',
    headers: {
      Authorization: `bearer ${token}`,
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
