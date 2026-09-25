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

// fizzBuzz(100)





///////////////////////////////////////////////////////////////////////////////
// Challenge 2: String Reversal

function stringReversal(text=""){
    let reversedString = ""

    // for(let i = 1; i <= text.length ; i++){
    //     reversedString += text[text.length - i]
    // }
    for(let i = text.length - 1; i >= 0 ; i--){
        reversedString += text[i]
    }

    return reversedString
}

// console.log(stringReversal("Sameer"))


///////////////////////////////////////////////////////////////////////////////
// Challenge 3 Palindrome Checker

function palindromeChecker(word=""){
    let cleanWord = word.toLowerCase().split(" ").join('')
    let lastIndex = cleanWord.length - 1
    let isPalindrome = false

    for(let i = 0 ; i < Math.round(cleanWord.length / 2); i++){
        if(cleanWord[i] !== cleanWord[lastIndex]){
            return "this is not a palindrome word"
        }
        isPalindrome = true
        lastIndex--
    }

    if(isPalindrome === true){
        return "This a palindrome word"
    }
}

// console.log(palindromeChecker("pat t ap"))
// console.log(palindromeChecker("No lemon, no melon"))