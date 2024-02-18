import { createdCities, createCard, displayCard } from "./js/card.js";
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
    console.log(filteredCities);
    cardContainer.innerHTML = "";
    displayCard(await createCard(filteredCities[0]));
}

searchBarForm.addEventListener('submit', handleSearchBar);


// buscador
