function greet(name) {
    let result1 = 'Hello, ';
    if (Array.isArray(name)) {
        result1 += name[0] + ' and ' + name[1];
    } else if (name) {
        result1 += name;

    } else {
        result1 += 'My Friend.';
    }
    return result1 + '.';

}
let result1 = greet('bob');
console.log(result1);

let result2 = greet();
console.log(result2);


let result3 = greet(["Jane", "Jill"]);
console.log(result3);