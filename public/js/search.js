

async function search () {

  let searchValue = await document.getElementById('searchs').value
  const searchV = {
    body: searchValue
  }
/*   console.log(JSON.stringify(searchV)) */
  const postValue = await fetch('http://localhost:3000/search', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(searchV)
  })
}
