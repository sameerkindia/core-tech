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