'use strict';

const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function() {
        personalMovieDB.count = +prompt('Сколько фильмов вы уже просмотрели?', '');    

        while (!personalMovieDB.count || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt('Сколько фильмов вы уже просмотрели?', ''); 
        }
    },
    rememberMyFilms: function() {
        for (let i = 0; i < 2; i += 1) {
            let film;
    
            while(!film || film.str > 50) {
                film = prompt('Один из последних просмотренных фильмов', ''); 
            }
    
            let rank = +prompt('На сколько оцените его', '');
            personalMovieDB.movies[film] = rank;
        } 
    },
    detectPersonalLevel: function() {
        if (personalMovieDB.count < 10) {
            console.log('Просмотрено довольно мало фильмов');
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
            console.log('Вы классический зритель');
        } else if (personalMovieDB.count >= 30) {
            console.log('Вы киноман');
        } else {
            console.log('Произошла ошибка');
        } 
    },
    showMyDB: function(hidden) {
        if (!hidden) {
            console.log(personalMovieDB);
        } 
    },
    writeYourGenres: function() {
        let arr = personalMovieDB.genres;
        for (let i = 0; i < 3; i += 1) {
            while (!arr[i]) {
                arr[i] = prompt(`Ваш любимый жанр под номером ${i + 1}`, '');
            }             
        }
        arr.forEach((item, i) => {
            console.log(`Любимый жанр #${i + 1} -- это ${item}`);
        });
    },
    toggleVisibleMyDB: function() {
        if (personalMovieDB.privat) {
            personalMovieDB.privat = false;
        } else {
            personalMovieDB.privat = true;
        }
    }
};
