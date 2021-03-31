$(function () {


    setup();

})

function setup() {

    $('#btnLoadData').on('click', function () {

        const contract_name = `dublin`;
        const api_key = `d10018bfc02258bad20291e24b9c16b7420064b2`;
        const url = `https://api.jcdecaux.com/vls/v1/stations?contract=${contract_name}&apiKey=${api_key}`;
        $.getJSON(url, function (jsonData) {
            console.log(jsonData);
            renderJsonData(jsonData);
        });


    });
}


function renderJsonData(jsonData) {
    console.log(jsonData);
    htmlString = [];

    for (const station of jsonData) {
        
        let { number, name, address, position, available_bike_stands, available_bikes } = station;

        htmlString.push(`<tr>`);
        htmlString.push(`<td>${number}</td>`);
        htmlString.push(`<td>${name}</td>`);
        htmlString.push(`<td>${address}</td>`);
        htmlString.push(`<td>${position.lat}</td>`);
        htmlString.push(`<td>${position.lng}</td>`);
        htmlString.push(`<td>${available_bike_stands}</td>`);
        htmlString.push(`<td>${available_bikes}</td>`);
        htmlString.push(`</tr>`);



    }

    $('#tableDublinBikes').append(htmlString.join(' '));

}

function sendMessage(message) {

    $('#messagePanel').html(message)

}