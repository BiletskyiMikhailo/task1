let numberOfFilms ;

function start() {
 numberOfFilms = +prompt('Скільки фільмів ви вже переглянули?', '');

while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
    numberOfFilms = +prompt('Скільки фільмів ви вже переглянули?', '');
    }
}

start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false

};
/*const a = prompt('Один з останій переглянутих фільмів', ''),
      b = prompt('яка Ваша оцінка', ''),
      c = prompt('Один з останій переглянутих фільмів', ''),
      d = prompt('яка Ваша оцінка', '');

 personalMovieDB.movies[a]=b;
 personalMovieDB.movies[c]=d;*/

 function remembberMyFilms() {
for( let i = 0; i < 2; i++){
    const a = prompt('Один з останій переглянутих фільмів?', ''),
          b = prompt('Яка Ваша оцінка?', '');
    
          if( a != null && b != null && a != '' && b != '' && a.length < 50){
            personalMovieDB.movies[a] = b;
            console.log(' done');
          } else {
            console.log( 'error' );
            i--;
        }
    }
}
remembberMyFilms();

function detectPersonalLevel() {
    

    if(personalMovieDB.count < 10){
        console.log(' Переглянуто занадто мало фільмів! ');
    }else if(personalMovieDB >= 10 && personalMovieDB < 30 ){
         console.log(' Ви класичниий глядач!');
    }else if( personalMovieDB > 30){
        console.log(' Ви затятий кіноман ');
    }else {
        console.log(' Відбулася помилка');

    }
}detectPersonalLevel();

function showMyDB(hidden) {
    if(!hidden) {
        console.log(personalMovieDB)

    }
}
showMyDB(personalMovieDB.privat);

function writeYourGenres() {
    for( let i = 1; i <= 3; i++ ) {
        const genre = prompt(`Ваш улюблений жанр під номером ${i}`);
        personalMovieDB.genres[i - 1] = genre
    }


}
writeYourGenres();
 console.log(personalMovieDB);     