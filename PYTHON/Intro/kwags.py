# Testing kwargs

# List of kwargs
# The list of kwargs
# kwargs = dictionary
# list all the kwargs


def myKwargs(**kwargs):
    print("Kwargs is ", type(kwargs))
    print(kwargs)

    # print("b is", kwargs["b"])


# Scenario a=23, b=30
# kwargs -> {"a": 23, "b": 30}

# myKwargs(a=23, b=30, c=40)


# Scenario bno 3

# name="Samson" email="Samson@gmail.com"
# myKwargs({"name": "Samson"})

myKwargs(
    name="Samson",
    email="Sam@sam.com",
    dict={"a": "a"}
)


def area_rectangle(length, width):
    area = length * width
    print(
        f"For rectangle with length {length} and Width {width} are is {area}"
    )


# Option 1: you call it directly with args

area_rectangle(5, 2)


width = 4
length = 39

area_rectangle(width, length)


# Option 2: kwargs

area_rectangle(width=width, length=length)


# Option 3: you use kwargs
# You have to match the parameter names with arguments

area_rectangle(width=10, length=55)

area_rectangle(width=10, length=55)

# area_rectangle(40)