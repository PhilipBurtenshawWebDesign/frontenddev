$(function () {
    initButtons();
})

function initButtons() {

    $('#btnLoadMovies').on('click', function () {

        let url = 'https://college-movies.herokuapp.com/';

        $.getJSON(url, function (data) {

            renderMovieData(data);

        })
        console.log('stuff');
    })

    $('#btnLoadData').on('click', function () {

        const contract_name = `dublin`;
        const api_key = `d10018bfc02258bad20291e24b9c16b7420064b2`;
        const url = `https://api.jcdecaux.com/vls/v1/stations?contract=${contract_name}&apiKey=${api_key}`;
        $.getJSON(url, function (jsonData) {
            console.log(jsonData);
           
        });


    });
}

function renderMovieData(content) {

    console.log(content);

    htmlString = [];
    htmlString.push("<ol>");
    for (const movie of content) {


        /*
        let title = movie.title;
        let year = movie.year;
        let director = movie.director;
        let id = movie.id
        let cast = movie.cast
        */

        // object destructuring 

        const { title, year, director, id, cast, ...rest } = movie;


        // console.log(`${id} : ${title}: ${year} : ${director}`)
        htmlString.push(`<li>${title}`);

        htmlString.push(`<ul>`);

        let castMembers = cast.split(',');

        for (const castMember of castMembers) {
            htmlString.push(`<li>${castMember}</li>`);

           
        }

        htmlString.push(`</ul></li>`);

    }

    htmlString.push(`</ol>`);

    populateMovies(htmlString.join(''));

}


function populateMovies(content) {

    $('#messagePanel').html(content);

}