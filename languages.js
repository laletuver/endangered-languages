document.addEventListener('DOMContentLoaded', function() {
    var languages = [
        { name: 'Algherese Catalan', url: 'algherese_catalan.html'},
        { name: 'Aragonese', url: 'aragonese.html' },
        { name: 'Aromanian', url: 'aromanian.html'},
        { name: 'Burgenland Croation', url: 'burgenland_croation.html'},
        { name: 'Danish Sign Language', url: 'danish_sign_language.html'},
        { name: 'Friulian', url: 'friulian.html'},
        { name: 'Guernésiais', url: 'guernesiais.html'},
        { name: 'Inari Saami', url: 'inari_saami.html'},
        { name: 'Kashubian', url: 'kashubian.html'},
        { name: 'Ladin', url: 'ladin.html'},
        { name: 'Mócheno', url: 'mocheno.html'},
        { name: 'Northern Frisian', url: 'northern_frisian.html'},
        { name: 'Tsakonian', url: 'tsakonian.html'},
        { name: 'Welsh', url: 'welsh.html'},
        ];

    var languageList = document.getElementById('languageList');
    var languageFilter = document.getElementById('languageFilter');
    var sortAlphabetically = document.getElementById('sortAlphabetically');

    function renderLanguages(filteredLanguages) {
        languageList.innerHTML = '';
        filteredLanguages.forEach(function(language) {
            var li = document.createElement('li');
            li.textContent = language.name;
            li.addEventListener('click', function() {
                window.location.href = language.url;
            });
            languageList.appendChild(li);
        });
    }

    function filterLanguages() {
        var filterText = languageFilter.value.toLowerCase();
        var filteredLanguages = languages.filter(function(language) {
            return language.name.toLowerCase().includes(filterText);
        });
        renderLanguages(filteredLanguages);
    }

    function sortLanguagesAlphabetically() {
        languages.sort(function(a, b) {
            return a.name.localeCompare(b.name);
        });
        renderLanguages(languages);
    }

    languageFilter.addEventListener('input', filterLanguages);
    sortAlphabetically.addEventListener('click', sortLanguagesAlphabetically);

    renderLanguages(languages); // Initial render
});
