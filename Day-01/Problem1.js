let numbers = [10, 20, 30, 20, 50];

let count = 0 ;

for(let i = 0 ; i< numbers.length ; i++){

    if(numbers[i] === 20){
        count ++ ;
    }
}

console.log(`I found number 20 exactly ${count} times`);