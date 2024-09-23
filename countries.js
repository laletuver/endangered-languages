document.addEventListener('DOMContentLoaded', function() {
    var countries = [
        { name: 'Spain', languages: [{ name: 'Aragonese', url: 'aragonese.html' }] },
        { name: 'Italy', languages: [
            { name: 'Algherese Catalan', url: 'algherese_catalan.html' }, 
            { name: 'Friulian', url: 'friulian.html' }, 
            { name: 'Ladin', url: 'ladin.html' }, 
            { name: 'Mocheno', url: 'mocheno.html' }] 
        },
        { name: 'Greece', languages: [
            { name: 'Aromanian', url: 'aromanian.html' }, 
            { name: 'Tsakonian', url: 'tsakonian.html' }] 
        },
        { name: 'Austria', languages: [{ name: 'Burgenland Croatian', url: 'burgenland_croatian.html' }] },
        { name: 'Denmark', languages: [{ name: 'Danish Sign Language', url: 'danish_sign_language.html' }] },
        { name: 'United Kingdom', languages: [
            { name: 'Guernésiais', url: 'guernesiais.html' }, 
            { name: 'Welsh', url: 'welsh.html' }] 
        },
        { name: 'Finland', languages: [{ name: 'Inari Saami', url: 'inari_saami.html' }] },
        { name: 'Poland', languages: [{ name: 'Kashubian', url: 'kashubian.html' }] },
        { name: 'Germany', languages: [{ name: 'Northern Frisian', url: 'northern_frisian.html' }] }
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
            var a = document.createElement('a');
            a.href = language.url;
            a.textContent = language.name;
            li.appendChild(a);
            
            languageList.appendChild(li);
        });
        languagesInCountry.style.display = 'block';
    }

    countryFilter.addEventListener('input', filterCountries);
    sortAlphabetically.addEventListener('click', sortCountriesAlphabetically);

    renderCountries(countries); 
    languagesInCountry.style.display = 'none'; 
});
