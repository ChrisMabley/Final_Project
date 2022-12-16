let searchText = document.getElementByID('searchbar').value;
let searchBtn = document.getElementByID('searchbutton').addEventListener('click',search());

async function search(){
  let results = await axios.get(`https://www.fishwatch.gov/api/species`)
  console.log(results);
}
