"""
Object oriented programming.

Concept in programming to make
work easy, by using principles.

1.Incapsulation
   -hiding unnecessary complexity or importation of details.

2.Abstraction
   -While restricting direct access to internal data.
   -hiding unnecessary complexity or importation of details.

3.Inheritance
   -one class to reuse or extend propertie
   and methods of another class

4.Polymorphism
   -appearing in different forms. Method can
   have different behaviours.

JS and python are object oriented.
-> number.toString() .string-toLowerCase()
"""

# ***

# -> Class ->
# -blueprint for an object.<>

# -> Class could be an architectural drawing of a house.
#   object -> implentation of the drawing.

# ***

# #Is to have the name Capitalized
# #fields <properties>


class House:
    bedrooms = 3
    bathrooms = 2
    floors = 1
    area = 4
    owner = ""
    architect = "KIMARI"

    def config(self, owner, location):
        self.owner = owner
        self.location = location

    def print_self(self):
        print(f"the object: {self} <H> selfobject >")
        print(self)
        print(self.__dict__)  # dictionary print all properties


# @when access object properties use dot notation
# #Bracket notation is for dictionaries

rachel_house = House()
# rachel_house.owner="Rachel"
# rachel_house.location="Kikuyu"

rachel_house.config(owner="Rachel", location="Kikuyu")
print(f"Rachel's House Owner {rachel_house.owner}")
print(f"Rachel's House Location {rachel_house.location}")
print(f"Rachel's House Bedrooms {rachel_house.bedrooms}")
print(f"Rachel's House Floors {rachel_house.floors}")
print(f"Rachel's House Designer {rachel_house.architect}")
print("Printing rachel's house")
rachel_house.print_self()

print("End of print rachel's")

samson_house = House()
# samson_house.owner="Samson"
# samson_house.location="Miranga"

samson_house.config(owner="Samson", location="Miranga")
print(f"Samson's House Owner {samson_house.owner}")
print(f"Samson's House Location {samson_house.location}")
print(f"Samson's House Bedrooms {samson_house.bedrooms}")
print(f"Samson's House Floors {samson_house.floors}")
print(f"Samson's House Designer {samson_house.architect}")
print("Printing samson's house")
samson_house.print_self()
