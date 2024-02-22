import { createdCities, createCard, displayCard } from "./card.js";
const searchBarForm = document.getElementById('searchForm');
const cardContainer = document.querySelector('.card-container');

function handleSearchBar(event) {
    event.preventDefault();

    const searchInput = document.getElementById('searchCity');
    const searchTerm = searchInput.value.trim();

    filterCities(searchTerm);
    searchInput.value = '';
}

async function filterCities(searchTerm) {
    const filteredCities = createdCities.filter(city => {
        return city.name.toLowerCase() === searchTerm.toLowerCase();
    });

    console.log(searchTerm.toLowerCase());
    // console.log(createdCities);
    console.log(filteredCities, "filterCities");
    cardContainer.innerHTML = "";
    displayCard(await createCard(filteredCities[0]));
    console.log(filteredCities[0], "filteredCities[]")
}

searchBarForm.addEventListener('submit', handleSearchBar);


// buscador
