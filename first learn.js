const numberOfFilms = +prompt('Скільки фільмів ви вже переглянули','');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false

};
const a = prompt('Один з останій переглянутих фільмів', ''),
      b = prompt('яка Ваша оцінка', ''),
      c = prompt('Один з останій переглянутих фільмів', ''),
      d = prompt('яка Ваша оцінка', '');

 personalMovieDB.movies[a]=b;
 personalMovieDB.movies[c]=d;
 
 console.log(personalMovieDB);     