let searchText = document.getElementByID('searchbar').value;
let searchButton = document.getElementByID('searchbutton').addEventListener('click',search());

async function search(){
  let results = await axios.get(`https://www.fishwatch.gov/api/species`)
  console.log(results);
  show(results);
}

function show(results){
    let tab = 
        <tr>
            <th>Species Name</th>
            <th>Scientific Name</th>
            <th>Habitat</th>
            <th>Image Gallery</th>
        </tr>

    