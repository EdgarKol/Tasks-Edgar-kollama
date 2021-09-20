const makeARandomNumber = function() {
    return Math.floor((Math.random() * 100) + 1);
}
let randoms = Array(5).fill(0).map(makeARandomNumber); // generates random numbers array
const isEven = function(randoms) {
    if (randoms % 2 === 0) {
        return true
    } else {
        return false
    }
}
let random = randoms.map(isEven)
Array.max = function(randoms) {
    return Math.max.apply(Math, randoms) // checks highest number in array
}
Array.min = function(randoms) {
    return Math.min.apply(Math, randoms) // checks lowest number in array
}
const count = random.filter(Boolean).length;

console.log(randoms)
console.log(Math.max.apply(Math, randoms)) // logs out highest number in array
console.log(Math.min.apply(Math, randoms)) // logs out lowest number in array
console.log(random)
console.log("Falues of true" + ": " + count)