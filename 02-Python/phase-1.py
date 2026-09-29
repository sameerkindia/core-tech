# FizzFuzz

# def fizz_fuzz(n=100):
#     for i in range(1, n + 1):
#         print(i)
#         if i % 3 == 0 and i % 5 == 0:
#             print("FizzFuzz")
#         elif i % 3 == 0:
#             print("Fizz")
#         elif i % 5 == 0:
#             print("Fuzz")
#         else :
#             print(i)


# fizz_fuzz()



#####################################################################################
# Challenge 2: String Reversal

# My Answer 

# def string_reverse(text=""):
#     reversedString = ""

#     for i in range(1, len(text) + 1):
#         print(i)
#         reversedString += text[len(text) - i]

#     return reversedString

# print(string_reverse("sameer"))


# AI's Answer

# def reverse_string(text):
#     reversed_str = ""
    
#     # Text ke har character par loop chalayenge
#     for char in text:
#         # Naye character ko purani string ke AAGE jod rahe hain
#         reversed_str = char + reversed_str 
        
#     return reversed_str

# print(reverse_string("hello"))




#####################################################################################
# Challenge 3 Palindrome Checker

def palindrome_checker(word=""):
    clean_word = word.lower().replace(' ', '')
    last_index = len(clean_word) - 1

    for char in clean_word:
        if char is not clean_word[last_index]:
            return "This is not a palindrome word"

        last_index -= 1
    else :
        return "This is a Palindrome word"



# AI's Answer

def is_palindrome(text):
    # Step 1: String ko clean karna (Sirf alphabets/numbers rakhna aur lowercase karna)
    # isalnum() check karta hai ki character alphabet ya number hai (spaces/symbols nahi)
    cleaned = ''.join(char.lower() for char in text if char.isalnum())
    
    # Step 2: Two Pointers initialize karna
    left = 0
    right = len(cleaned) - 1
    
    while left < right:
        # Agar characters match nahi karte, toh palindrome nahi hai
        if cleaned[left] != cleaned[right]:
            return False
            
        # Pointers ko move karna
        left += 1
        right -= 1
        
    return True


# print(palindrome_checker("pattap"))
# print(palindrome_checker("pat t ap"))
# print(palindrome_checker("123421"))
# print(palindrome_checker("123ab321"))
# print(palindrome_checker("No lemon, no melon"))






#####################################################################################
# Challenge 4 (Factorial - Loop vs Recursion)

def factorial(n):
    sum = 1

    for i in range(1,n):
        sum += i * sum

    return sum


def factorial_recursive(n):
    if n < 0:
        return "Invalid Input"
        
    # BASE CASE (Rukne ka point)
    if n == 0 or n == 1:
        return 1
        
    # RECURSIVE CALL
    return n * factorial_recursive(n - 1)



# print(factorial(5))



#####################################################################################
# Challenge 5 (Max & Min)

def custom_min(arr=[]):
    min_num = arr[0]

    for num in arr:
        # print(f'{min_num} and {num} and min num is {min_num}')
        if min_num > num:
            min_num = num

    return min_num

def custom_max(arr=[]):
    max_num = arr[0]

    for num in arr:
        if max_num < num:
            max_num = num
        

    return max_num

# print(custom_min([10,20,2,3,4,5]))
# print(custom_min([-50, -10, -2, -100]))
# print(custom_max([10,20,2,3,4,5]))
# print(custom_max([-50, -10, -2, -100]))







#####################################################################################
# Challenge 6 (Sum of Digits)

def sum_of_digits(num):
    sum = 0
    num_list = str(num)
    # print(num_list)


    for num in num_list:
        try :
            num_str = int(num)
            if type(num_str) is str:
                continue
            else :
                sum += int(num)
        except :
            continue

    return sum

# print(sum_of_digits(1234))
# print(sum_of_digits(-12345678))


def sum_of_digits_2(num):
    num = abs(num)
    total_sum = 0

    while num > 0:
        total_sum += num % 10

        num = num // 10

    return total_sum



# print(sum_of_digits_2(1234))
# print(sum_of_digits_2(-123456789))












#####################################################################################
# Challenge 7 (Vowel & Consonant Counter)

import re

def vowel_and_consonant_counter(text=''):
    cleanText = re.sub(r'[^a-zA-Z]', '', text).lower()
    vowels = 0
    consonants = 0

    for char in cleanText:
        if char == 'a' or char == 'e' or char == 'i' or char == 'o' or char == 'u':
            vowels+= 1
        else:
            consonants+= 1

    return vowels, consonants
    

# print(vowel_and_consonant_counter("@!sameerKhan123"))
# print(vowel_and_consonant_counter("12345 !@#$"))


def count_vowels_consonants(text=""):
    vowels = 'aeiou'
    v_count = 0
    c_count = 0


    for char in text.lower():

        if char.isalpha():

            if char in vowels:
                v_count += 1
            else:
                c_count += 1

    
    return v_count, c_count


# v, c = count_vowels_consonants("Hello World 123!")
# v, c = count_vowels_consonants("12345 !@#$")
# v, c = count_vowels_consonants("")
# print(f"Vowels: {v}, Consonants: {c}")
