const numberOfFilms = +prompt('Скільки фільмів ви вже переглянули?','');

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

    if(personalMovieDB.count < 10){
        console.log(' Переглянуто занадто мало фільмів! ');
    }else if(personalMovieDB >= 10 && personalMovieDB < 30 ){
         console.log(' Ви класичниий глядач!');
    }else if( personalMovieDB > 30){
        console.log(' Ви затятий кіноман ');
    }else {
        console.log(' Відбулася помилка');
    }

 console.log(personalMovieDB);     