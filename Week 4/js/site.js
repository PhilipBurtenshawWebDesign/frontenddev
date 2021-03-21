let listOfCities = ['Dublin', 'Cork', 'Limerick', 'Killarney'];

//
let listOfCitiesAsObjects = [
    { city: 'Dublin', id: 100 },
    { city: 'Cork', id: 200 },
    { city: 'Limerick', id: 400 },
    { city: 'Killarney', id: 500 }
];

function init() {


    renderCityListing();

    /*
    for(let i = 0; i < listOfCities.length; i++) {
        let option = document.createElement("option");
        option.value = i;
        option.text = listOfCities[i];
        selectedObject.add(option,null);
    }
    */

    /*
    listOfCities.forEach( function(currentItem, index) {
        let option = document.createElement("option");
        option.value = index;
        option.text = currentItem;
        selectedObject.add(option,null);
    })
    */

    /*
    for(let city of listOfCities) {
        let option = document.createElement("option");
        option.value = city;
        option.text = city;
        selectedObject.add(option,null);
    }
    */




}
function addCity(e) {
    //carry out varous checks
    listOfCities.push(e.value);

    e.value = '';

    renderCityListing();

}
function renderCityListing() {

    const selectedObject = document.querySelector('#myListOfCities');

    selectedObject.length = 0;

    listOfCities.forEach((city, index) => {
        let option = document.createElement("option");
        option.value = index;
        option.text = city;
        selectedObject.add(option, null);

    })

    const selectedHTMLObject = document.querySelector('#listGroup');

    selectedHTMLObject.innerHTML = renderCityListingHTML();

}

function renderCityListingHTML() {

    let html = [];
    html.push('<ul class="list-group">')

    listOfCities.forEach((city, index) => {
        html.push(`<li class="list-group-item">${city}</li>`)
    })

    html.push('</ul>')
    return html.join(' ');
}


function onSelectChange(e) {

    console.log(`Select List has changed`);

    const currentIndex = e.selectedIndex;

    console.log(`Chosen index is ${currentIndex}`);

    if (currentIndex > 0) {

        const value = e.value;
        console.log(`Chosen value is ${value}`);

        const textValue = e.options[currentIndex].text;
        ///  const textValue = e.options.currentText;
        console.log(`Chosen text value is ${textValue}`);

    }

}


function clearItems() {
    console.log(`clearItems() is called`);

    // similar to document.getElementById - we use # to get by id, and a dot (.) to retrieve by class
    //  const selectedObject = document.querySelector('#myListOfCities');
    const selectedObject = document.querySelector('.cityListing');

    selectedObject.options.length = 0;

}

function loadItems() {
    console.log(`loadItems() is called`);

    // Choosing by # to illustrate different techniques
    const selectedObject = document.querySelector('#myListOfCities');

    let option1 = document.createElement("option");
    let option2 = document.createElement("option");

    option1.value = '300';
    option1.text = 'Limerick';

    option2.value = '400';
    option2.text = 'Galway';

    selectedObject.add(option1, null);
    selectedObject.add(option2, null);

    let countItems = selectedObject.options.length;

    console.log(`Total Items is ${countItems}`);

}
