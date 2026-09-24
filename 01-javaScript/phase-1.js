// 1. FizzBuzz

function fizzBuzz(n) {
    for(let i = 1; i <= n; i++){

        if(i % 3 === 0 && i % 5 === 0){
            console.log("FizzFuzz")
        }
        else if(i % 3 === 0){
            console.log("Fizz")
        }
        else if(i % 5 === 0){
            console.log("Fuzz")
        }
        else {
            print(i)
        }
    }
}

fizzBuzz(100)