

function greet(name){
    let result = 'Hello, ';
    if(Array.isArray(name)){
        result += name[0] + ' and ' + name[1];
    }
   else if (name){
       result += name;

    }
    else{
      result +='My Friend.';
    }
    return result + '.';
    
}
const result = greet('bob');
console.log(result);

const result = greet();
console.log(result);

const result2 = greet (["Jane", "Jill"]);
return 'Hello' + result2[0] + result2[1] + '.';
console.log(result2);
