const movies = require('./moviedata.json')

// Ex 1
// filter movies between 1962 and 1972
const moviesByYear = movies.filter(function(el) {
    return el.Year >= 1962 &&
        el.Year <= 1972;
})

function getItems(Title) {
    return movies.filter((movie) => {
        return movie.Title === Title
    })
}


//console.log(moviesByYear)

const highestRating = moviesByYear.reduce(function(prev, current) {
    return (prev.imdbRating > current.imdbRating) ? prev : current
})
const highestVotes = moviesByYear.reduce(function(prev, current) {
        return (prev.imdbVotes > current.imdbVotes) ? prev : current
    })
    //console.log('highestRating', highestRating)
    //console.log('higestVotes', highestVotes)
    //Best rated
console.log("Best rated movie is " +
    highestRating.Title + ', ' +
    "Directed by " +
    highestRating.Director +
    "and was relased in " +
    highestRating.Released)

// Most rated
console.log("Most rated movie is " +
    highestVotes.Title + ', ' +
    "Directed by " +
    highestVotes.Director +
    "and was relased in " +
    highestVotes.Released)

// Ex 2
const inDrama = movies.filter((d) => {
    if (d.Genre.includes('Drama')) {
        return d
    }
})
const highestDrama = inDrama.reduce(function(prev, current) {
    return (prev.imdbRating > current.imdbRating) ? prev : current
})
const highestVotedDrama = inDrama.reduce(function(prev, current) {
    return (prev.imdbVotes > current.imdbVotes) ? prev : current
})
console.log("Best rated Drama is " +
    highestDrama.Title + ', ' +
    "Directed by " +
    highestDrama.Director +
    "and was relased in " +
    highestDrama.Released)

//Most rated
console.log("Most rated Drama is " +
    highestVotedDrama.Title + ', ' +
    "Directed by " +
    highestVotedDrama.Director +
    "and was relased in " +
    highestVotedDrama.Released)

// Ex 3
const ratedR = movies.filter(function(r) {
    return r.Rated = 'R'
})

const titlesR = ratedR.map(function(el) { return el.Title; })

console.log("Movies that are rated R are: " + titlesR)

const actorR = ratedR.map(function(el) { return el.Actors })

const actorRsorted = actorR
actorRsorted.sort()
    //console.log(actorRsorted)
let actorList = actorRsorted
let sort = []
actorRsorted.forEach(function(item, index, actorList) {
    item.split(',').forEach(function(item, index, actorList) {
        sort.push(item);
    });
});
//console.log(sort)
let dubActors = sort
let findDubActors = arr => arr.filter((item, index) => arr.indexOf(item) != index)

//console.log("Dub actors " + findDubActors(dubActors))
console.log("Actors that played in those movies: " + [...new Set(findDubActors(dubActors))]) // Unique duplicates


//Ex 4*
const rated9AndAbove = movies.filter(function(el) {
        return el.imdbRating >= 9 &&
            el.imdbRating <= 10;
    })
    //console.log(rated9AndAbove)
const titlesAbove9R = rated9AndAbove.map(function(el) { return el.Title; })
    //console.log("There are count movies that have rated more than 9.0. These movies are: " +
    //   titlesAbove9R)

// Ex5

const leoPlayed = movies.filter((l) => {
    if (l.Actors.includes('Leonardo DiCaprio')) {
        return l
    }
})

const inception = leoPlayed[0]
const theDeparted = leoPlayed[1]
const djangoUnChanged = leoPlayed[2]
console.log("Movie title: " + inception.Title +
    " " + "Director: " + inception.Director +
    " Plot: " + inception.Plot)

console.log("Movie title: " + theDeparted.Title +
    " " + "Director: " + theDeparted.Director +
    " Plot: " + theDeparted.Plot)

console.log("Movie title: " + djangoUnChanged.Title +
        " " + "Director: " + djangoUnChanged.Director +
        " Plot: " + djangoUnChanged.Plot)
    // checks genres
const lGenres = leoPlayed.map(function(el) { return el.Genre; })
    //console.log(lGenres)
const genresSorted = lGenres
genresSorted.sort()
    //console.log(genresSorted)

// make array to list
var arr1 = []
genresSorted.forEach(function(item, index, arr) {
    item.split(',').forEach(function(item, index, arr) {
        arr1.push(item);
    });
});

//console.log(arr1);


let matchingGenres = arr1
let findDuplicates = arr => arr.filter((item, index) => arr.indexOf(item) != index)

console.log("Matching genre(s): " + findDuplicates(matchingGenres)) // All duplicates
    //console.log([...new Set(findDuplicates(strArray))]) // Unique duplicates

const lReleased = leoPlayed.map(function(el) { return el.Year; })
    //console.log(lReleased)
const lReleasedsorted = lReleased
lReleasedsorted.sort()
let maxOfArray = Math.max.apply(Math, lReleasedsorted)
let minOfArray = Math.min.apply(Math, lReleasedsorted)
let yearsApart = maxOfArray - minOfArray
console.log("First Leonardo DiCaprio movie in this list was released on " +
    minOfArray +
    ", " + "last one was released on " +
    maxOfArray + ", " + "and they have " +
    yearsApart + " years apart")
const limdbRating = leoPlayed.map(function(el) { return el.imdbRating })
    //console.log(limdbRating)
const maximdb = Math.max.apply(Math, limdbRating)
const minimdb = Math.min.apply(Math, limdbRating)

const limdbVotes = leoPlayed.map(function(el) { return el.imdbVotes })
    //console.log(limdbVotes)
let maxRate = Math.max.apply(Math, limdbVotes)
let minRate = Math.min.apply(Math, limdbVotes)
console.log("Best rating for Leonardo DiCaprio movie in this list is: " +
    maximdb + " and worse is " + minimdb)