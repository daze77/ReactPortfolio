
async function fetchGraphQL(token, query, variables){
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
  return  response.json();
}
 
export default fetchGraphQL
