const APIFilms = "https://swapi.py4e.com/api/films/"
const APIPeople = "https://swapi.dev/api/people/"

let arrayFilms = [];

const getFilmNames = async (API) => {
    try {
        let response = await fetch(API)
        let dataResponse = await response.json()
        let {results} = dataResponse
        let titles = results.map(element => element.title);
        let years = results.map(year => year.release_date.split("-")[0])
        let data = {            
            labels: titles,
            series: [years]
        }
        new Chartist.Line('#chart1', data);

    } catch (error) {
        console.log(`ERROR! -> ${error}`);
    }
}

getFilmNames(APIFilms).then(film => film);

  const getFilmCharacters = async (API) => {
    try {
        let response = await fetch(API)
        let dataResponse = await response.json()
        let {results} = dataResponse
        let names = results.map(element => element.name);
        let films_count = results.map(element => element.films.length);

        let data = {            
            labels: names,
            series: [films_count]
        }
        new Chartist.Bar('#chart2', data);

    } catch (error) {
        console.log(`ERROR! -> ${error}`);
    }
}

getFilmCharacters(APIPeople).then(film => film);