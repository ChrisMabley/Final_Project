let searchText = document.getElementByID('searchbar').value;
let searchButton = document.getElementByID('searchbutton').addEventListener('click',search());

async function search(){
  let results = await axios.get(`https://www.fishwatch.gov/api/species`)
  console.log(results);
  show(results);
}

function show(results){
    let tab = 
        `<tr>
            <th>SpeciesName</th>
            <th>ScientificName</th>
            <th>Habitat</th>
            <th>ImageGallery</th>
        </tr>`;
    for (let a of results.list){
        tab += `<tr>
        <td>${a.SpeciesName}</td>
        <td>${a.ScientificName}</td>
        <td>${a.Habitat}</td>
        <td>${a.ImageGallery}</td>
        </tr>`;
    }
    document.getElementById("fishinfo").innerHTML = tab;
}