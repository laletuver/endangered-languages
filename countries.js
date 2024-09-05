document.addEventListener('DOMContentLoaded', function() {
    var countries = [
        { name: 'Spain', languages: ['Aragonese'] },
        { name: 'Italy', languages: ['Algherese Catalan', 'Friulian', 'Ladin', 'Mocheno'] },
        { name: 'Greece', languages: ['Aromanian', 'Tsakonian'] },
        { name: 'Austria', languages: ['Burgenland Croation'] },
        { name: 'Denmark', languages: ['Danish Sign Language'] },
        { name: 'United Kingdom', languages: ['Guernésiais', 'Welsh'] },
        { name: 'Finland', languages: ['Inari Saami'] },
        { name: 'Poland', languages: ['Kashubian'] },
        { name: 'Germany', languages: ['Northern Frisian'] },
    ];

    var countryList = document.getElementById('countryList');
    var countryFilter = document.getElementById('countryFilter');
    var sortAlphabetically = document.getElementById('sortAlphabetically');
    var languagesInCountry = document.getElementById('languagesInCountry');
    var countryName = document.getElementById('countryName');
    var languageList = document.getElementById('languageList');

    function renderCountries(filteredCountries) {
        countryList.innerHTML = '';
        filteredCountries.forEach(function(country) {
            var li = document.createElement('li');
            li.textContent = country.name;
            li.addEventListener('click', function() {
                showLanguages(country);
            });
            countryList.appendChild(li);
        });
    }

    function filterCountries() {
        var filterText = countryFilter.value.toLowerCase();
        var filteredCountries = countries.filter(function(country) {
            return country.name.toLowerCase().includes(filterText);
        });
        renderCountries(filteredCountries);
    }

    function sortCountriesAlphabetically() {
        countries.sort(function(a, b) {
            return a.name.localeCompare(b.name);
        });
        renderCountries(countries);
    }

    function showLanguages(country) {
        countryName.textContent = country.name;
        languageList.innerHTML = '';
        country.languages.forEach(function(language) {
            var li = document.createElement('li');
            li.textContent = language;
            languageList.appendChild(li);
        });
        languagesInCountry.style.display = 'block';
    }

    countryFilter.addEventListener('input', filterCountries);
    sortAlphabetically.addEventListener('click', sortCountriesAlphabetically);

    renderCountries(countries); 
    languagesInCountry.style.display = 'none'; 
});
