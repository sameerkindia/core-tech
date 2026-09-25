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

# print(palindrome_checker("pattap"))
# print(palindrome_checker("pat t ap"))
# print(palindrome_checker("123421"))
# print(palindrome_checker("123ab321"))
# print(palindrome_checker("No lemon, no melon"))