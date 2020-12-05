'use strict';

let numbersOfFilms;

const start = () => {
    numbersOfFilms = +prompt('Сколько фильмов вы уже просмотрели?', '');    

    while (!numbersOfFilms || isNaN(numbersOfFilms)) {
        numbersOfFilms = +prompt('Сколько фильмов вы уже просмотрели?', ''); 
    }
}

start();

const personalMovieDB = {
    count: numbersOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
};

const rememberMyFilms = () => {
    for (let i = 0; i < 2; i += 1) {
        let film;

        while(!film || film.str > 50) {
            film = prompt('Один из последних просмотренных фильмов', ''); 
        }

        let rank = +prompt('На сколько оцените его', '');
        personalMovieDB.movies[film] = rank;
    }
}

rememberMyFilms();

const detectPersonalLevel = () => {
    if (personalMovieDB.count < 10) {
        console.log('Просмотрено довольно мало фильмов');
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        console.log('Вы классический зритель');
    } else if (personalMovieDB.count >= 30) {
        console.log('Вы киноман');
    } else {
        console.log('Произошла ошибка');
    }
}

detectPersonalLevel();

const showMyDB = (hidden) => {
    if (!hidden) {
        console.log(personalMovieDB);
    }
}

showMyDB(personalMovieDB.privat);


const writeYourGenres = () => {
    for (let i = 0; i < 3; i += 1) {
        personalMovieDB.genres[i] = prompt(`Ваш любимый жанр под номером ${i + 1}`, '');
    }
}

writeYourGenres();
