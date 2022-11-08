let numberOfFilms;

const personalMovieDB = {
  count: 0,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
  start: function () {
    personalMovieDB.count = +prompt("Скільки фільмів ви вже переглянули?", "");

    while (
        personalMovieDB.count == "" || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
        personalMovieDB.count = +prompt("Скільки фільмів ви вже переглянули?", "");
    }
  },
  remembberMyFilms: function () {
    for (let i = 0; i < 2; i++) {
      const a = prompt("Один з останій переглянутих фільмів?", ""),
        b = prompt("Яка Ваша оцінка?", "");

      if (a != null && b != null && a != "" && b != "" && a.length < 50) {
        personalMovieDB.movies[a] = b;
        console.log(" done");
      } else {
        console.log("error");
        i--;
      }
    }
  },
  detectPersonalLevel: function () {
    if (personalMovieDB.count < 10) {
      console.log(" Переглянуто занадто мало фільмів! ");
    } else if (personalMovieDB >= 10 && personalMovieDB < 30) {
      console.log(" Ви класичниий глядач!");
    } else if (personalMovieDB > 30) {
      console.log(" Ви затятий кіноман ");
    } else {
      console.log(" Відбулася помилка");
    }
  },
  showMyDB: function (hidden) {
    if (!hidden) {
      console.log(personalMovieDB);
    }
  },

  toggleVisibleMyDB: function() {
if(personalMovieDB.privat) { 
personalMovieDB.privat = false;
} else {
    personalMovieDB.privat = true;

}
  },

  writeYourGenres: function () {
    for (let i = 1; i <= 3; i++) {
      const genre = prompt(`Ваш улюблений жанр під номером ${i}`);
    
      if (genre === "" || genre == null){
        return alert('Ви ввели не коректні данні');
        i--
      } else {
        personalMovieDB.genres[i - 1] = genre;
      }
    }
    personalMovieDB.genres.forEach (( item, i) => {
        console.log( `Ваш улюблений жанр ${ i + 1 } - це ${ item }`)
    });
  }
};