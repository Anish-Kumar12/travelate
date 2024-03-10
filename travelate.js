const dataStore = {}; // Dedicated object to store fetched data

function fetchData() {
  const url = "travelate_api.json"; // Replace with actual URL

  return fetch(url)
    .then((response) => response.json())
    .then((data) => {
      dataStore.data = data; // Store data in the dataStore object
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
    });
}
fetchData();
const scroll = document.querySelector(".scroll-section");
function display(list, str) {
  scroll.innerHTML= "";
  let res="";
  list.forEach((Element) => {
    if (str === "countries") {
      Element.cities.forEach((city) => {
        res += `<div class="card">
        <img class="card-image" src = ${city.imageUrl}>
        <div class="card-name">${city.name.split(",")[0]}</div>
        <div class="card-description">${city.description}</div>
        <div class="card-btn">Visit</div>
        </div>`;
      });
    } else {
      res += `<div class="card">
          <img class="card-image" src = ${Element.imageUrl}>
          <div class="card-name">${Element.name.split(",")[0]}</div>
          <div class="card-description">${Element.description}</div>
          <div class="card-btn">Visit</div>
          </div>`;
    }
  });
  scroll.innerHTML = res;
}
const clear = document.querySelector(".clear-btn");
clear.addEventListener('click' , function(){
  scroll.innerHTML = "";
})

const search = document.querySelector(".search-btn");
search.addEventListener("click", function (event) {
  event.preventDefault();
  const search = document.querySelector(".search-input");
  if (search.value.toLowerCase().includes("temple")) {
    display(dataStore.data.temples, "temples");
  } else if (search.value.toLowerCase().includes("countries")) {
    display(dataStore.data.countries, "countries");
  } else if (search.value.toLowerCase().includes("beaches")) {
    display(dataStore.data.beaches, "beaches");
  }
});
