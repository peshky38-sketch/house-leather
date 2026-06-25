# Understanding JavaScript Variables

## What Are JavaScript Variables?

A JavaScript variable is a container used to store data that can be used or changed later in a program.

### Real-life Example

Think of a variable as a labeled container. For example, a container labeled **Age** can store the value **18**.

```javascript
let age = 18;
```

---

## How Do You Declare Variables in JavaScript?

JavaScript has three ways to declare variables: `let`, `const`, and `var`.

### `let`

`let` is used when the value of a variable may change later.

```javascript
let city = "Nairobi";
city = "Mombasa";

console.log(city);
```

### `const`

`const` is used when the value should remain the same throughout the program.

```javascript
const country = "Kenya";

console.log(country);
```

### `var`

`var` is the older way of declaring variables in JavaScript. It can be reassigned and has function scope.

```javascript
var school = "Moringa";
school = "Alliance";

console.log(school);
```

---

## Rules for Naming Variables

Variable names in JavaScript must follow these rules:

- They can contain letters, numbers, underscores (`_`), and dollar signs (`$`).
- They cannot start with a number.
- Spaces are not allowed.
- JavaScript reserved keywords cannot be used as variable names.
- Variable names are case-sensitive.

### Valid Variable Names

```javascript
let firstName;
let student_age;
let $price;
```

### Invalid Variable Names

```javascript
let 2name;      // Starts with a number
let first name; // Contains a space
let const;      // Reserved keyword

```

---

## Variable Naming Styles

### Camel Case

Camel case starts with a lowercase letter, and each new word begins with a capital letter.

**Examples**

```javascript
let firstName;
let totalMarks;
```

**Common Use**

Camel case is commonly used for variables and functions in JavaScript.

---

### Pascal Case

Pascal case starts each word with a capital letter.

**Examples**

```javascript
let FirstName;
let TotalMarks;
```

**Common Use**

Pascal case is commonly used for classes and constructor functions.

---

### Snake Case

Snake case uses lowercase letters and separates words with underscores.

**Examples**

```javascript
let first_name;
let total_marks;
```

**Common Use**

Snake case is commonly used in databases, configuration files, and Python programs.

---

## Summary

JavaScript variables are used to store data that can be accessed or modified during program execution. Variables can be declared using `let`, `const`, or `var`. I also learned the rules for naming variables and the differences between camel case, Pascal case, and snake case naming styles.
