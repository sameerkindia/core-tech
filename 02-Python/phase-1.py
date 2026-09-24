# FizzFuzz

def fizz_fuzz(n=100):
    for i in range(1, n + 1):
        print(i)
        if i % 3 == 0 and i % 5 == 0:
            print("FizzFuzz")
        elif i % 3 == 0:
            print("Fizz")
        elif i % 5 == 0:
            print("Fuzz")
        else :
            print(i)


fizz_fuzz()