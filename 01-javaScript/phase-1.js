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



// AI's Answer

// function isPalindrome(text) {
//     // Step 1: Regex ka use karke a-z aur 0-9 ke alawa sab kuch ('') empty string se replace kar do
//     // /[^a-z0-9]/gi ka matlab: g = global (puri string mein), i = case insensitive
//     const cleaned = text.replace(/[^a-z0-9]/gi, '').toLowerCase();
    
//     // Step 2: Two Pointers
//     let left = 0;
//     let right = cleaned.length - 1;
    
//     while (left < right) {
//         if (cleaned[left] !== cleaned[right]) {
//             return false;
//         }
//         left++;
//         right--;
//     }
    
//     return true;
// }

// console.log(palindromeChecker("pat t ap"))
// console.log(palindromeChecker("No lemon, no melon"))






///////////////////////////////////////////////////////////////////////////////
// Challenge 4 (Factorial - Loop vs Recursion)


// Loop
function factorial(n){
    sum = 1

    for(let i = 1; i < n; i++){
        // console.log(`${sum} * ${i}`)
        sum += sum * i
    }
    return sum
}

function factorialRecursive(n) {
    if (n < 0) return "Invalid input";
    
    // BASE CASE
    if (n === 0 || n === 1) {
        return 1;
    }
    
    // RECURSIVE CALL
    return n * factorialRecursive(n - 1);
}

// console.log(factorial(1))
// console.log(factorial(2))
// console.log(factorial(3))
// console.log(factorial(4))
// console.log(factorial(5))
// console.log(factorial(10))