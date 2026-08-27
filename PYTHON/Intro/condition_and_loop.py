age = 20

# if(<condition>){
#
# }

if age > 18:
    print("You can drink")
    print("Something Else")

    if age == 23:
        print("This is awesome")

    print("Another line")

# else if
elif age == 44:
    print("You are not that young")

else:
    print("Last else")


# While loop

k = 0

while k < 30:
    k = k + 1
    print("K is ", k)


# range(start, stop, step)

for i in range(0, 5, 1):
    print("I is ", i)


ar = [23, "hello", 67, 45, 40]

# for(let i=0; i<array.length; i++){}

for i in range(0, len(ar)):
    single_item = ar[i]
    print(single_item)


# for(let singleItem of arr)

for single_item in ar:
    print("Single item", single_item)