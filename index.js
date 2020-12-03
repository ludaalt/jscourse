const numbersOfFilms = +prompt('Сколько фильмов вы уже просмотрели', '');

const personalMovieDB = {
    count: numbersOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
};

for (let i = 0; i < 2; i += 1) {
    let film = prompt('Один из последних просмотренных фильмов', '');
    let rank = +prompt('На сколько оцените его', '');
    personalMovieDB.movies[film] = rank;
}

console.log(personalMovieDB);