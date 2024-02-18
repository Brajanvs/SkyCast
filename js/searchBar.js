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

/* <form class="form__box">
<p class="form__title">Agregar  una ciudad:</p>
<input class="form__search" type="search" name="" id="cityInput" placeholder="Nombre de la ciudad...">
<input class="form__submit"type="submit" value="Añadir" id="submitButton" >
</form>

*/

/*
<form class="searchBar-container" id="searchForm">
<input class="searchBar-input" type="text" id="searchCity" placeholder="Buscar...">
<button type="submit" id="searchButton" class="searchBar-icon">
    <i class="bi bi-search"></i>
</button>
</form>
*/



// buscador
