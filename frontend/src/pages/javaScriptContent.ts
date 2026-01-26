import type { LearnLanguage } from "@/data/mockData";

export const topicsOfJavaScript = [
  "Introduction",
  "Basic syntax and structure",
  "Data types and variables",
  "Operators",
  "Control flow",
  "for loop",
  "while loop",
  "do while loop",
  "Functions",
  "Arrays",
  "Objects",
  "Strings",
  "Input/output",
  "Basic file handling",
  "Classes and objects",
  "Constructors and destructors",

  "Function overloading",
  "Modules",
  "Promises",
  "Async/await",
  "Callbacks",
  "Error handling",
  "Memory management",
  "Closures",
  "Arrow functions",
  "Higher-order functions",
  "Event handling",
  "DOM manipulation",
  "ES6 features",
  
  "Prototypes and inheritance",
  

  "Spread and rest operators",
  "Template literals",
  "Map, filter, and reduce",
  "Set and Map objects",
 
];

export const topicContentsOfJavaScript: {
  [key: string]: { title: string; content: string;  code?: string };
} = {
  
  "Introduction": {
    title: "Introduction",
    content: `
    JavaScript is a high-level, interpreted programming language that is widely used for creating interactive and dynamic web pages. It is one of the core technologies of the World Wide Web, alongside HTML and CSS. JavaScript was initially created to "make web pages alive". The programs in this language are called scripts. They can be written right in a web page’s HTML and run automatically as the page loads.
    
    JavaScript is versatile and beginner-friendly. With more experience, you can build games, animated 2D and 3D graphics, comprehensive database-driven apps, and much more!
    
    Key Features of JavaScript:
    1. **Lightweight**: JavaScript is designed to be easy to use and integrate seamlessly into web pages.
    2. **Interpreted**: JavaScript code can be executed directly by the browser without the need for prior compilation.
    3. **Object-Oriented**: JavaScript supports object-oriented programming concepts such as inheritance and encapsulation.
    4. **First-Class Functions**: Functions in JavaScript are treated as first-class citizens, allowing them to be assigned to variables, passed as arguments, and returned from other functions.
    5. **Event-Driven**: JavaScript is particularly well-suited for creating interactive web pages that respond to user actions, such as clicks and key presses.
    
    Use Cases of JavaScript:
    - Creating interactive web pages
    - Building web and mobile applications
    - Server-side development using Node.js
    - Game development
    - Developing browser extensions
    `,
    code: `
<!DOCTYPE html>
<html>
<head>
  <title>JavaScript Introduction</title>
</head>
<body>

<h2>Welcome to JavaScript!</h2>

<p id="demo"></p>

<script>
  // This is a single line comment in JavaScript
  /* This is a 
     multi-line comment in JavaScript */

  // Output "Hello, World!" to the HTML element with id="demo"
  document.getElementById("demo").innerHTML = "Hello, World!";
</script>

</body>
</html>
`
  },

  

 "Basic syntax and structure": {
    title: "Basic syntax and structure",
    content: `
    JavaScript syntax is the set of rules that define a correctly structured JavaScript program. A JavaScript program is a list of programming statements, where each statement is an instruction to be executed by the browser.

    **Example of Basic Syntax and Structure:**
    - Declaring a variable
    - Using an if statement
    - Creating a function
    - Writing a comment

    JavaScript is case-sensitive, which means that identifiers (variable names, function names, etc.) must always be typed with a consistent capitalization of letters.
    `,
    code: `
<!DOCTYPE html>
<html>
<head>
  <title>JavaScript Basic Syntax and Structure</title>
</head>
<body>

<h2>JavaScript Basic Syntax and Structure</h2>

<p id="demo"></p>

<script>
  // Declaring a variable
  let greeting = "Hello, World!";

  // Using an if statement
  if (greeting) {
    console.log(greeting); // Outputs: Hello, World!
  }

  // Creating a function
  function greet(name) {
    return "Hello, " + name + "!";
  }

  // Calling the function
  let message = greet("JavaScript");
  document.getElementById("demo").innerHTML = message; // Outputs: Hello, JavaScript!

  /* 
   * This is a multi-line comment 
   * explaining that the above function 
   * concatenates "Hello, " with the name provided
   */
</script>

</body>
</html>
`
  },
 /////

"Data types and variables": {
    title: "Data types and variables",
    content: 
    `JavaScript supports various data types that allow you to store different kinds of values. Here are the primary data types in JavaScript:

    1. **Number**: Represents both integer and floating-point numbers.
    2. **String**: Represents sequences of characters enclosed in single quotes ('') or double quotes ("").
    3. **Boolean**: Represents logical values: true and false.
    4. **Undefined**: Represents a variable that has been declared but not yet assigned a value.
    5. **Null**: Represents the intentional absence of any object value.
    6. **Object**: Represents collections of key-value pairs.
    7. **Symbol**: Represents a unique and immutable primitive value and may be used as the key of an object property.
    8. **BigInt**: Represents whole numbers larger than Number.MAX_SAFE_INTEGER.

    Variables in JavaScript can be declared using the var, let, and const keywords:

    - var: Function-scoped or globally-scoped variable, can be redeclared.
    - let: Block-scoped variable, cannot be redeclared in the same scope.
    - const: Block-scoped constant, must be initialized at the time of declaration and cannot be reassigned.`,
    code: 
    `<!DOCTYPE html>
<html>
<head>
  <title>JavaScript Data Types and Variables</title>
</head>
<body>

<h2>JavaScript Data Types and Variables</h2>

<p id="demo"></p>

<script>
// Number
let age = 25;
console.log(age); // Outputs: 25

// String
let name = "John";
console.log(name); // Outputs: John

// Boolean
let isStudent = true;
console.log(isStudent); // Outputs: true

// Undefined
let unassigned;
console.log(unassigned); // Outputs: undefined

// Null
let emptyValue = null;
console.log(emptyValue); // Outputs: null

// Object
let person = { firstName: "Jane", lastName: "Doe" };
console.log(person); // Outputs: { firstName: "Jane", lastName: "Doe" }

// Symbol
let symbol = Symbol("unique");
console.log(symbol); // Outputs: Symbol(unique)

// BigInt
let bigIntNumber = 1234567890123456789012345678901234567890n;
console.log(bigIntNumber); // Outputs: 1234567890123456789012345678901234567890n
</script>

</body>
</html>`
  },


  "Operators": {
    title: "Operators",
    content: 
    `Operators in JavaScript are symbols used to perform operations on variables and values. They are classified into different types based on the operation they perform. Common types of operators include arithmetic, comparison, logical, assignment, and bitwise operators.

    Examples:

    1. Arithmetic Operators:
    Arithmetic operators are used to perform arithmetic calculations like addition, subtraction, multiplication, division, and modulus.
    
    \`\`\`javascript
    // Addition
    let sum = 10 + 5;
    console.log(sum); // Outputs: 15

    // Subtraction
    let difference = 10 - 5;
    console.log(difference); // Outputs: 5

    // Multiplication
    let product = 10 * 5;
    console.log(product); // Outputs: 50

    // Division
    let quotient = 10 / 5;
    console.log(quotient); // Outputs: 2

    // Modulus (Remainder)
    let remainder = 10 % 3;
    console.log(remainder); // Outputs: 1
    \`\`\`
    `,
    code: 
    `<!DOCTYPE html>
<html>
<head>
  <title>JavaScript Operators</title>
</head>
<body>

<h2>JavaScript Operators</h2>

<p id="demo"></p>

<script>
// Addition
let sum = 10 + 5;
console.log(sum); // Outputs: 15

// Subtraction
let difference = 10 - 5;
console.log(difference); // Outputs: 5

// Multiplication
let product = 10 * 5;
console.log(product); // Outputs: 50

// Division
let quotient = 10 / 5;
console.log(quotient); // Outputs: 2

// Modulus (Remainder)
let remainder = 10 % 3;
console.log(remainder); // Outputs: 1
</script>

</body>
</html>`
  },
  
  "Control flow": {
    title: "Control flow",
    content: `
Control flow in JavaScript refers to the order in which the statements in a script are executed. JavaScript provides several control flow statements to manage the execution flow of a program:

1. **Conditional Statements**: These are used to perform different actions based on different conditions.
   - **if**: Executes a block of code if a specified condition is true.
   - **else**: Executes a block of code if the same condition is false.
   - **else if**: Specifies a new condition to test if the first condition is false.
   
2. **Switch Statement**: Used to perform different actions based on different conditions. It evaluates an expression, matching the expression's value to a case clause, and executes statements associated with that case.
 
`,
    "code": 
`<!DOCTYPE html>
<html>
<head>
  <title>JavaScript Control Flow</title>
</head>
<body>

<h2>JavaScript Control Flow</h2>

<p id="demo"></p>

<script>
// Conditional Statements
let hour = 10;
let greeting;

if (hour < 12) {
  greeting = "Good morning!";
} else if (hour < 18) {
  greeting = "Good afternoon!";
} else {
  greeting = "Good evening!";
}
console.log(greeting); // Outputs: Good morning!

// Switch Statement
let day = 2;
let dayName;

switch (day) {
  case 0:
    dayName = "Sunday";
    break;
  case 1:
    dayName = "Monday";
    break;
  case 2:
    dayName = "Tuesday";
    break;
  case 3:
    dayName = "Wednesday";
    break;
  case 4:
    dayName = "Thursday";
    break;
  case 5:
    dayName = "Friday";
    break;
  case 6:
    dayName = "Saturday";
    break;
  default:
    dayName = "Invalid day";
}
console.log(dayName); // Outputs: Tuesday


</body>
</html>`
  },
  
  "for loop": {
    "title": "for loop",
    content: `
The **for loop** is used to execute a block of code a certain number of times. It is typically used when the number of iterations is known before the loop starts.

**Syntax:**
\`\`\`javascript
for (initialization; condition; increment) {
  // code to be executed
}
\`\`\`

**Example:**
The following example uses a for loop to iterate from 0 to 4 and print each number.

`,
    code: 
`<!DOCTYPE html>
<html>
<head>
  <title>JavaScript for loop</title>
</head>
<body>

<h2>JavaScript for loop</h2>

<p id="demo"></p>

<script>
let text = "";
for (let i = 0; i < 5; i++) {
  text += "The number is " + i + "<br>";
}
document.getElementById("demo").innerHTML = text;
</script>

</body>
</html>`
  },
  "while loop": {
    title: "while loop",
    content: `
The **while loop** is used to execute a block of code as long as a specified condition is true. It is generally used when the number of iterations is not known and the loop should continue until a certain condition is met.

**Syntax:**
\`\`\`javascript
while (condition) {
  // code to be executed
}
\`\`\`

**Example:**
The following example uses a while loop to print numbers from 0 to 4.

`,
    code: 
`<!DOCTYPE html>
<html>
<head>
  <title>JavaScript while loop</title>
</head>
<body>

<h2>JavaScript while loop</h2>

<p id="demo"></p>

<script>
let text = "";
let i = 0;
while (i < 5) {
  text += "The number is " + i + "<br>";
  i++;
}
document.getElementById("demo").innerHTML = text;
</script>

</body>
</html>`
  },
  "do while loop": {
    title: "do while loop",
    content: `
The **do...while loop** is similar to the while loop, but it guarantees that the block of code will be executed at least once before the condition is tested. This is useful when you want the code to run at least once, regardless of the condition.

**Syntax:**
\`\`\`javascript
do {
  // code to be executed
} while (condition);
\`\`\`

**Example:**
The following example uses a do...while loop to print numbers from 0 to 4.

`,
    code: 
`<!DOCTYPE html>
<html>
<head>
  <title>JavaScript do...while loop</title>
</head>
<body>

<h2>JavaScript do...while loop</h2>

<p id="demo"></p>

<script>
let text = "";
let i = 0;
do {
  text += "The number is " + i + "<br>";
  i++;
} while (i < 5);
document.getElementById("demo").innerHTML = text;
</script>

</body>
</html>`
  },
  "Functions": {
    title: "Functions",
    content: `
**Functions** in JavaScript are blocks of code designed to perform a particular task. Functions are executed when they are called. They can accept parameters, perform operations, and return a result.

**Syntax:**
\`\`\`javascript
function functionName(parameters) {
  // code to be executed
  return result;
}
\`\`\`

**Example:**
The following example demonstrates how to define and use a function in JavaScript.

1. **Defining a Function:**
   - The function addNumbers takes two parameters a and b, adds them together, and returns the result.

2. **Calling a Function:**
   - The function is called with arguments 5 and 10, and the result is displayed.

`,
    code: 
`<!DOCTYPE html>
<html>
<head>
  <title>JavaScript Functions</title>
</head>
<body>

<h2>JavaScript Functions</h2>

<p id="demo"></p>

<script>
// Function definition
function addNumbers(a, b) {
  return a + b;
}

// Function call
let result = addNumbers(5, 10);
document.getElementById("demo").innerHTML = "The result is: " + result;
</script>

</body>
</html>`
  },
  Arrays: {
    title: "Arrays",
    content: `
**Arrays** in JavaScript are used to store multiple values in a single variable. They are one of the most commonly used data structures in JavaScript, allowing you to organize and manipulate collections of data.

**Key Characteristics of Arrays:**
1. **Indexed:** Arrays are zero-based, meaning the first element is accessed at index 0, the second at index 1, and so on.
2. **Dynamic Size:** Unlike some other programming languages, JavaScript arrays can grow and shrink dynamically.
3. **Heterogeneous:** Arrays can contain elements of different types, including numbers, strings, objects, and even other arrays.

**Basic Array Operations:**
1. **Creating an Array:**
   Arrays can be created using array literals or the Array constructor.
   - Literal: let fruits = ["apple", "banana", "cherry"];
   - Constructor: let fruits = new Array("apple", "banana", "cherry");

2. **Accessing Elements:**
   Access array elements using their index. For example, fruits[0] returns "apple".

3. **Modifying Elements:**
   You can modify an element by assigning a new value to a specific index, like fruits[1] = "blueberry";.

4. **Array Methods:**
   Arrays come with built-in methods to perform common operations such as push(), pop(), shift(), unshift(), slice(), splice(), and more.

**Example:**
The following example demonstrates creating an array, accessing its elements, and using some array methods.
    `,
    code: 
`<!DOCTYPE html>
<html>
<head>
  <title>JavaScript Arrays</title>
</head>
<body>

<h2>JavaScript Arrays</h2>

<p id="demo"></p>

<script>
// Create an array
let fruits = ["apple", "banana", "cherry"];

// Access elements
let firstFruit = fruits[0]; // "apple"
let secondFruit = fruits[1]; // "banana"

// Modify an element
fruits[2] = "blueberry";

// Add a new element to the end
fruits.push("date");

// Remove the last element
fruits.pop();

// Display the results
document.getElementById("demo").innerHTML = "Fruits: " + fruits.join(", ");

// Output the results to the console for verification
console.log("First fruit:", firstFruit);
console.log("Second fruit:", secondFruit);
console.log("Updated fruits array:", fruits);
</script>

</body>
</html>`
  }
,
Objects: {
  title: "Objects",
  content: `
**Objects** in JavaScript are collections of key-value pairs where each key (or property) is a string (or Symbol) and the value can be any data type, including other objects. Objects are a fundamental aspect of JavaScript and are used to store and manage data.

**Key Characteristics of Objects:**
1. **Key-Value Pairs:** Each object consists of key-value pairs. The key is a string (or Symbol), and the value can be of any data type.
2. **Dynamic Properties:** Properties of an object can be added, modified, or deleted dynamically.
3. **Methods:** Objects can have functions as their values. These functions are called methods.

**Basic Object Operations:**
1. **Creating an Object:**
 Objects can be created using object literals or the Object constructor.
 - Literal: let person = { "name": "Alice", "age": 30 };
 - Constructor: let person = new Object(); person["name"] = "Alice"; person["age"] = 30;

2. **Accessing Properties:**
 Properties can be accessed using dot notation or bracket notation. For example, person["name"] or person["age"].

3. **Modifying Properties:**
 You can modify an object's properties by assigning new values to them, like person["age"] = 31;.

4. **Adding and Deleting Properties:**
 - Add: person["email"] = "alice@example.com";
 - Delete: delete person["age"];

**Example:**
The following example demonstrates creating an object, accessing its properties, and using methods.

  `,
  code: 
`<!DOCTYPE html>
<html>
<head>
<title>JavaScript Objects</title>
</head>
<body>

<h2>JavaScript Objects</h2>

<p id="demo"></p>

<script>
// Create an object
let person = {
"name": "Alice",
"age": 30,
"greet": function() {
  return "Hello, " + this["name"] + "!";
}
};

// Access properties
let name = person["name"]; // "Alice"
let age = person["age"]; // 30

// Modify a property
person["age"] = 31;

// Add a new property
person["email"] = "alice@example.com";

// Delete a property
delete person["age"];

// Display the results
document.getElementById("demo").innerHTML = "Name: " + name + "<br>" +
                                           "Greet: " + person["greet"]() + "<br>" +
                                           "Email: " + person["email"];

// Output the results to the console for verification
console.log("Name:", name);
console.log("Greet:", person["greet"]());
console.log("Email:", person["email"]);
</script>

</body>
</html>`
},


























/// wrtie more content later Mir NIyazul Haque 















"Strings" :{
title: "Strings",
content: `
**Strings** in JavaScript are sequences of characters used to represent text. They are a fundamental data type in JavaScript and are enclosed in double quotes ("") or single quotes (''). 

**Key Characteristics of Strings:**
1. **Immutable:** Strings are immutable, meaning that once created, their values cannot be changed. Operations on strings result in the creation of new strings.
2. **Index-Based:** Each character in a string has a specific index, starting from 0 for the first character.
3. **String Methods:** JavaScript provides numerous built-in methods for manipulating and inspecting strings, such as length, slice, substring, and more.

**Basic String Operations:**
1. **Creating a String:**
 Strings can be created using double quotes, single quotes, or template literals (using backticks).
 - Double Quotes: let greeting = "Hello, World!";
 - Single Quotes: let greeting = 'Hello, World!';
 - Template Literals: let greeting = Hello, World!;

2. **Accessing Characters:**
 Access individual characters using bracket notation: let firstChar = greeting[0]; // 'H'

3. **Modifying Strings:**
 Since strings are immutable, modifying them involves creating new strings based on the original: let newGreeting = greeting.replace("World", "JavaScript");

4. **String Methods:**
 Common methods include toUpperCase(), toLowerCase(), trim(), charAt(), indexOf(), and concat().

**Example:**
The following example demonstrates basic string operations and methods.

`,
code: 
`<!DOCTYPE html>
<html>
<head>
<title>JavaScript Strings</title>
</head>
<body>

<h2>JavaScript Strings</h2>

<p id="demo"></p>

<script>
// Create a string
let greeting = "Hello, World!";

// Access characters
let firstChar = greeting[0]; // 'H'
let lastChar = greeting[greeting.length - 1]; // '!'

// Modify the string
let newGreeting = greeting.replace("World", "JavaScript");

// Display the results
document.getElementById("demo").innerHTML = "Original greeting: " + greeting + "<br>" +
                                           "First character: " + firstChar + "<br>" +
                                           "Last character: " + lastChar + "<br>" +
                                           "Modified greeting: " + newGreeting;

// Output the results to the console for verification
console.log("Original greeting:", greeting);
console.log("First character:", firstChar);
console.log("Last character:", lastChar);
console.log("Modified greeting:", newGreeting);
</script>

</body>
</html>`
},
  
























"Input/output": {
    title: "Input/output",
    content: `
**Input and output operations** are essential for interacting with users and handling data in JavaScript. These operations allow you to receive input from users and display information back to them.

**Key Aspects of Input/Output in JavaScript:**
1. **Output Operations:**
   - console.log(): This method is used to print messages to the console, which is useful for debugging and logging information.
   - document.write(): This method writes directly to the HTML document. It's less commonly used in modern web development because it can overwrite the entire document content if used after the page has loaded.
   - innerHTML: This property allows you to update the content of HTML elements dynamically, which is commonly used to display results or interact with users.

2. **Input Operations:**
   - prompt(): This method displays a dialog box that prompts the user to enter input. The value entered by the user is returned as a string.
   - Form Inputs: HTML forms can be used to gather user input through various elements like text fields, checkboxes, radio buttons, and submit buttons.

**Example:**
The following example demonstrates basic input and output operations using console.log(), document.write(), and prompt().

`,
    code: `
<!DOCTYPE html>
<html>
<head>
  <title>JavaScript Input/Output</title>
</head>
<body>

<h2>JavaScript Input/Output</h2>

<p id="demo"></p>

<script>
// Output using console.log()
console.log("This is a message logged to the console.");

// Output using document.write()
document.write("<h3>This is a message written to the document.</h3>");

// Input using prompt()
let userName = prompt("Enter your name:");

// Output using innerHTML
document.getElementById("demo").innerHTML = "Hello, " + userName + "!";

// Output the results to the console for verification
console.log("User's name:", userName);
</script>

</body>
</html>
`
  },












  "Basic file handling": {
    title: "Basic file handling",
    content: `
**Basic File Handling** in JavaScript is primarily concerned with reading and writing files. However, JavaScript running in a browser has limited capabilities for direct file manipulation due to security reasons. File handling is more commonly performed in Node.js, a server-side JavaScript environment.

**Key Concepts:**
1. **Reading Files:**
   - In a browser, you can use the File API to handle file input from users. This involves using HTML file input elements and JavaScript to read the file's content.
   - In Node.js, you can use the "fs" (file system) module to read files synchronously or asynchronously.

2. **Writing Files:**
   - In a browser, you cannot write files directly to the user's file system for security reasons. Instead, you can create downloadable links for files generated in the browser.
   - In Node.js, you can use the "fs" module to write data to files on the server.

**Example in Node.js:**
The following example demonstrates basic file handling operations such as reading and writing files using the "fs" module in Node.js.

`,
    code: `
const fs = require('fs');

// Write data to a file
fs.writeFile('example.txt', 'Hello, World!', (err) => {
  if (err) throw err;
  console.log('File has been written.');
});

// Read data from a file
fs.readFile('example.txt', 'utf8', (err, data) => {
  if (err) throw err;
  console.log('File content:', data);
});
`
  },



















  "Classes and objects": {
    title: "Classes and objects",
    content: `
**Classes and Objects** in JavaScript are used to create and manage complex data structures. They are a fundamental part of object-oriented programming (OOP), which allows you to model real-world entities and their behaviors.

**Key Concepts:**
1. **Classes:**
   - A class is a blueprint for creating objects. It defines a set of properties and methods that the created objects will have.
   - In JavaScript, classes are defined using the class keyword. A class can include a constructor method for initializing new objects and other methods to define behaviors.

2. **Objects:**
   - An object is an instance of a class. It holds data in the form of key-value pairs and can use the methods defined in its class.
   - Objects can be created using the new keyword followed by the class name.

**Basic Operations:**
1. **Creating a Class:**
   - Use the class keyword to define a class and the constructor method to initialize its properties.

2. **Creating an Object:**
   - Instantiate an object using the new keyword followed by the class name.

3. **Accessing Properties and Methods:**
   - Use dot notation to access and modify properties and call methods on an object.

**Example:**
The following example demonstrates defining a class, creating an object, and using its properties and methods.

`,
    code: `
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    return 'Hello, my name is ' + this.name;
  }

  getAge() {
    return 'I am ' + this.age + ' years old';
  }
}

// Create an instance of the Person class
let person1 = new Person('Alice', 30);

// Access properties and methods
console.log(person1.greet()); // Outputs: Hello, my name is Alice
console.log(person1.getAge()); // Outputs: I am 30 years old
`
  },








"Constructors and destructors": {
    title: "Constructors and destructors",
    content: `
**Constructors and Destructors** are special methods in object-oriented programming that manage object initialization and cleanup.

**Constructors:**
- A constructor is a special method that is automatically called when an instance of a class is created.
- Its primary purpose is to initialize the object's properties.
- In JavaScript, constructors are defined using the constructor keyword within a class.

**Destructors:**
- A destructor is a special method that is automatically called when an object is destroyed.
- It is used to perform cleanup operations, such as releasing resources or performing finalization tasks.
- JavaScript does not have a built-in destructor mechanism like some other languages, but you can simulate cleanup using finalization techniques such as event listeners or weak references.

**Example:**
The following example demonstrates the use of a constructor to initialize an object.

`,
    code: `
class Car {
  constructor(make, model) {
    this.make = make;
    this.model = model;
  }

  displayInfo() {
    return 'Car: ' + this.make + ' ' + this.model;
  }
}

// Create an instance of the Car class
let myCar = new Car('Toyota', 'Corolla');

// Access the method
console.log(myCar.displayInfo()); // Outputs: Car: Toyota Corolla
`
  },

  "Function overloading": {
    title: "Function overloading",
    content: `
**Function Overloading** refers to the ability to define multiple functions with the same name but different parameters. This allows for different implementations based on the provided arguments.

**In JavaScript:**
- JavaScript does not support function overloading in the traditional sense. Instead, you can use a single function with conditional logic to handle different parameter types or counts.
- You can check the number and types of arguments within the function and execute different code paths accordingly.

**Example:**
The following example demonstrates a function that simulates overloading by handling different numbers of arguments.

`,
    code: `
function greet(name, greeting) {
  if (arguments.length === 1) {
    return 'Hello, ' + name;
  } else if (arguments.length === 2) {
    return greeting + ', ' + name;
  } else {
    return 'Invalid number of arguments';
  }
}

console.log(greet('Alice')); // Outputs: Hello, Alice
console.log(greet('Alice', 'Good morning')); // Outputs: Good morning, Alice
`
  },

  "Modules": {
    title: "Modules",
    content: `
**Modules** in JavaScript allow you to break up your code into smaller, reusable pieces. Modules help in organizing code into separate files and namespaces, improving maintainability and readability.

**Key Concepts:**
1. **Importing and Exporting:**
   - **Exporting:** You can export functions, objects, or primitives from a module using the export keyword. 
   - **Importing:** You can import functions, objects, or primitives into another module using the import keyword.

2. **Types of Exports:**
   - **Named Exports:** Export multiple values from a module. Each value is exported with a specific name.
   - **Default Exports:** Export a single value or function as the default export of a module. 

**Example:**
The following example demonstrates exporting and importing a function.

`,
    code: `
/* math.js (Module) */
export function add(a, b) {
  return a + b;
}

/* main.js */
import { add } from './math.js';

console.log(add(2, 3)); // Outputs: 5
`
  },

  "Promises": {
    title: "Promises",
    content: `Promises in JavaScript are used to handle asynchronous operations. A promise represents a value that may be available now, or in the future, or never.

Promise States:
- Pending: Initial state, neither fulfilled nor rejected
- Fulfilled: The operation completed successfully
- Rejected: The operation failed

Creating and Using Promises:
- Use the Promise constructor to create a promise with a function containing asynchronous operations
- Use .then() method for handling success
- Use .catch() method for handling errors
- Use .finally() for cleanup code

Promises enable clean handling of asynchronous code and form the foundation for async/await.`,
    code: `// Create a promise
const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Success!');
  }, 1000);
});

// Handle promise
promise
  .then(result => {
    console.log(result); // Success!
  })
  .catch(error => {
    console.error('Error:', error);
  })
  .finally(() => {
    console.log('Promise settled');
  });

// Chaining promises
fetch('https://api.example.com/data')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error(error));`
  },
  "Async/await": {
    title: "Async/await",
    content: `Async/await is a syntax that allows working with asynchronous code more easily. It's built on top of promises and provides cleaner code that looks synchronous.

Async Functions:
- Declared using the async keyword before a function
- Always return a promise
- If a value is returned, it's automatically wrapped in a resolved promise

Await Expression:
- Used inside async functions to pause execution until a promise settles
- Makes asynchronous code look and behave like synchronous code
- Improves readability and error handling

Async/await is preferred over .then().catch() for most modern JavaScript applications.`,
    code: `// Basic async/await
async function fetchData() {
  try {
    const response = await fetch('https://api.example.com/data');
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error('Error:', error);
  }
}

fetchData();

// Async function returning value
async function getValue() {
  return 42; // Automatically wrapped in Promise.resolve(42)
}

getValue().then(value => console.log(value));

// Multiple awaits
async function processMultiple() {
  const user = await fetchUser();
  const posts = await fetchPosts(user.id);
  return { user, posts };
}`
  },
 "Callbacks": {
    title: "Callbacks",
    content: `Callbacks in JavaScript are functions passed as arguments to other functions. They execute inside the outer function to complete some routine or action. Callbacks are fundamental for handling asynchronous operations.

Callback Concept:
- A callback is a function passed into another function as an argument
- The outer function invokes the callback to complete some action
- Used for asynchronous operations like file reading, API requests, and events

Callback Patterns:
- Success/error callbacks: Two callbacks for success and error cases
- Event callbacks: Functions that execute when events occur
- Continuation callbacks: Functions that execute after an operation completes

Note: Promises and async/await are now preferred over callbacks for most async operations.`,
    code: `// Basic callback pattern
function fetchData(callback) {
  setTimeout(() => {
    const data = 'Sample data';
    callback(null, data); // error-first pattern
  }, 1000);
}

fetchData((error, data) => {
  if (error) {
    console.error('Error:', error);
  } else {
    console.log('Data:', data);
  }
});

// Array method callbacks
const numbers = [1, 2, 3, 4, 5];
numbers.forEach((num) => {
  console.log(num);
});

// Event callbacks
button.addEventListener('click', (event) => {
  console.log('Button clicked!', event);
});`
  },
  "Error handling": {
    title: "Error handling",
    content: `Error handling in JavaScript refers to responding to and managing errors during code execution. JavaScript provides several mechanisms to handle errors and ensure applications fail gracefully.

Error Handling Blocks:
- try: Contains code that may throw an error
- catch: Executes if an error is thrown in the try block
- finally: Optional block that always executes after try/catch
- throw: Creates and throws custom errors

Error Types:
- SyntaxError: Code syntax problem
- TypeError: Unexpected type
- ReferenceError: Undefined variable
- RangeError: Value out of range
- Custom errors: Application-specific errors

Best Practices:
- Always use try/catch for risky operations
- Provide meaningful error messages
- Clean up resources in finally block
- Create specific error types for different scenarios`,
    code: `// Basic try/catch/finally
try {
  riskyOperation();
} catch (error) {
  console.error('Error:', error.message);
} finally {
  console.log('Cleanup code here');
}

// Custom error throwing
function validateAge(age) {
  if (age < 0) {
    throw new Error('Age cannot be negative');
  }
  return age;
}

try {
  validateAge(-5);
} catch (error) {
  console.error(error.message);
}

// Error types
try {
  const result = undefinedVar.property; // ReferenceError
} catch (error) {
  console.log(error instanceof ReferenceError); // true
}`
  },
  "Memory management": {
    title: "Memory management",
    content: `Memory management in JavaScript involves allocation and deallocation of memory during program execution. JavaScript has automatic memory management, but understanding it helps write efficient code.

Garbage Collection:
- JavaScript automatically reclaims memory no longer in use
- Uses Mark-and-Sweep algorithm (most common)
- Runs periodically, not deterministic

Memory Leaks:
- Memory no longer needed but not released
- Causes applications to consume more memory over time
- Common causes: circular references, forgotten timers, detached DOM nodes

Best Practices to Avoid Memory Leaks:
- Minimize global variables
- Remove event listeners when no longer needed
- Clear timers and intervals
- Nullify references to large objects
- Avoid unnecessary closures holding references`,
    code: `// Memory leak example - event listener not removed
button.addEventListener('click', handler);
// Memory leak: listener never removed

// Correct: Remove listener when done
button.addEventListener('click', handler);
// Later...
button.removeEventListener('click', handler);

// Timer leak
const interval = setInterval(() => {
  console.log('Running');
}, 1000);
// Clear timer to prevent memory leak
clearInterval(interval);

// Nullify references
let largeArray = new Array(1000000).fill('data');
// Process array
largeArray = null; // Allow garbage collection

// Closure holding reference
function createCounter() {
  let count = 0;
  return {
    increment: () => count++,
    getCount: () => count
  }; // Closure retains count reference
}`
  },
  "Closures": {
    title: "Closures",
    content: `Closures in JavaScript are functions that have access to variables from another function's scope. This is achieved through the function's ability to close over its environment and remember its creation scope.

Closure Characteristics:
- Scope Access: Access to own scope, outer function scope, and global scope
- Persistent State: Maintain state across function calls
- Lexical Environment: Preserve the scope at definition time
- Private Variables: Create data privacy and encapsulation

Closure Uses:
- Data privacy: Encapsulate private variables
- Function factories: Create functions with preset configurations
- Event handlers: Maintain state in callbacks
- Module pattern: Create modules with private and public methods

Closures are fundamental to JavaScript and enable powerful patterns.`,
    code: `// Basic closure
function outer(x) {
  return function inner(y) {
    return x + y; // Accesses outer's x
  };
}

const add5 = outer(5);
console.log(add5(3)); // 8

// Data privacy with closure
function createCounter() {
  let count = 0; // Private variable
  return {
    increment: () => ++count,
    decrement: () => --count,
    getCount: () => count
  };
}

const counter = createCounter();
counter.increment(); // count = 1
counter.increment(); // count = 2
console.log(counter.getCount()); // 2

// Module pattern
const calculator = (function() {
  const private = 'secret';
  return {
    add: (a, b) => a + b,
    multiply: (a, b) => a * b
  };
})();`
  },
  "Arrow functions": {
    title: "Arrow functions",
    content: `Arrow functions in JavaScript provide concise syntax for writing function expressions. Known as fat arrow functions due to the => syntax, they're shorter than traditional function expressions.

Key Characteristics:
- Concise Syntax: Shorter and more readable than traditional functions
- No this Binding: Inherit this from surrounding scope (lexical this)
- Implicit Return: Single expressions return without return keyword
- No arguments object: Use rest parameters instead

Arrow Function Syntax:
- No parameters: () => expression
- One parameter: x => expression
- Multiple parameters: (x, y) => expression
- Block body: (x, y) => { statements; return result; }

Arrow functions are ideal for callbacks and modern JavaScript.`,
    code: `// Different arrow function syntaxes
const add = (a, b) => a + b;
const greet = () => 'Hello';
const double = x => x * 2;
const full = (name, age) => {
  return \`\${name} is \${age}\`;
};

// Using with array methods
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map(x => x * 2); // [2, 4, 6, 8, 10]
const evens = numbers.filter(x => x % 2 === 0); // [2, 4]

// Lexical this binding
const obj = {
  name: 'John',
  greet: function() {
    const arrow = () => \`Hello, \${this.name}\`; // this refers to obj
    return arrow();
  }
};

console.log(obj.greet()); // Hello, John`
  },

  "Event handling": {
    title: "Event handling",
    content: `Event handling in JavaScript involves writing code that responds to user interactions or events that occur within the browser. Events can include user actions such as clicks, key presses, mouse movements, and more.

Key Concepts:
- Event Types: Mouse events (click, dblclick, mouseover), keyboard events (keydown, keyup), form events (submit, change), and window events (load, resize)
- Event Listeners: Functions that execute when a specific event occurs, added via addEventListener()
- Event Object: Created when an event occurs and passed to the listener, providing event information

Basic Event Operations:
- Adding: Use addEventListener() to attach a listener to an HTML element
- Removing: Use removeEventListener() to detach a listener
- Propagation: Events propagate through the DOM in two phases - you can control flow with stopPropagation() and preventDefault()

Event handling enables you to create interactive, responsive web applications.`,
    code: `// Basic event listener
const button = document.getElementById("myButton");

// Function to handle the click event
function handleClick(event) {
  console.log("Button clicked!");
  console.log("Event object:", event);
  document.getElementById("demo").innerHTML = "Button was clicked!";
}

// Add click event listener
button.addEventListener('click', handleClick);

// Remove event listener (if needed)
// button.removeEventListener('click', handleClick);

// Event with preventDefault
const form = document.querySelector('form');
form.addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent default form submission
  console.log("Form submission prevented");
});

// Event with stopPropagation
const parent = document.getElementById('parent');
parent.addEventListener('click', function(event) {
  event.stopPropagation(); // Stop event from bubbling up
  console.log("Parent clicked");
});`
  },

  "DOM manipulation": {
    title: "DOM manipulation",
    content: `DOM (Document Object Model) manipulation refers to using JavaScript to dynamically alter the content, structure, and style of a web page. The DOM represents the HTML document as a tree of nodes where each node is an object.

Key DOM Concepts:
- Selecting Elements: Use getElementById, getElementsByClassName, getElementsByTagName, querySelector, querySelectorAll
- Creating/Appending: Use createElement() and appendChild() to add new elements
- Modifying Content: Use innerHTML, textContent, innerText to change element content
- Modifying Attributes: Use setAttribute() and getAttribute() for attributes
- Styling: Use the style property to apply CSS styles
- Event Handling: Add listeners to elements for interactivity

Common DOM Selection Methods:
- getElementById("id"): Select element by ID
- querySelector(".class"): Select first matching CSS selector
- querySelectorAll(".class"): Select all matching elements
- getElementsByClassName("class"): Select by class name

DOM manipulation enables dynamic, interactive web experiences.`,
    code: `// Selecting elements
const contentDiv = document.getElementById("content");
const items = document.querySelectorAll(".item");
const firstItem = document.querySelector(".item");

// Creating and appending elements
const newParagraph = document.createElement("p");
newParagraph.textContent = "This is a new paragraph.";
contentDiv.appendChild(newParagraph);

// Modifying content
contentDiv.innerHTML += "<p>Added with innerHTML</p>";
newParagraph.textContent = "Updated text";

// Modifying attributes
const image = document.createElement("img");
image.setAttribute("src", "image.jpg");
image.setAttribute("alt", "Description");
contentDiv.appendChild(image);

// Styling elements
contentDiv.style.backgroundColor = "#f9f9f9";
contentDiv.style.padding = "20px";

// Event listener on button
const button = document.createElement("button");
button.textContent = "Click me";
button.addEventListener("click", () => {
  contentDiv.style.color = "red";
});
contentDiv.appendChild(button);`
  },
























  "Higher-order functions": {
    title: "Higher-order functions",
    content: `Higher-order functions in JavaScript are functions that either take other functions as arguments, return functions as their result, or both. They are a fundamental concept in functional programming and allow for powerful abstraction and code reuse.

Key Characteristics:
- Function as Argument: Higher-order functions can accept other functions as parameters for custom behavior
- Function as Return Value: Higher-order functions can return a function, enabling function factories and partial application

Common Examples:
- Array Methods: map(), filter(), and reduce() operate on arrays and take callback functions as arguments
- Event Handlers: addEventListener() accepts a callback function to handle events

Higher-order functions enable cleaner, more modular code by allowing you to pass behavior as data.`,
    code: `// Custom higher-order function
function higherOrderFunction(callback) {
  let result = callback(5);
  return result;
}

// Callback function
function multiplyByTwo(x) {
  return x * 2;
}

// Using the higher-order function
let result = higherOrderFunction(multiplyByTwo);
console.log(result); // Output: 10

// Using built-in array methods
let numbers = [1, 2, 3, 4, 5];
let doubled = numbers.map(multiplyByTwo);
let even = numbers.filter(n => n % 2 === 0);
let sum = numbers.reduce((acc, curr) => acc + curr, 0);

console.log("Doubled:", doubled); // [2, 4, 6, 8, 10]
console.log("Even:", even); // [2, 4]
console.log("Sum:", sum); // 15`
  },





   "ES6 features": {
    title: "ES6 features",
    content:`ES6 (ECMAScript 2015) introduced several new features and improvements to JavaScript, making code more concise and easier to work with.

Key ES6 Features:
- Let and Const: Block-scoped variables, const for constants
- Arrow Functions: Shorter syntax with lexical this binding
- Template Literals: String interpolation with backticks and template expressions
- Destructuring Assignment: Unpacking values from arrays or objects
- Default Parameters: Specify default values for function parameters
- Rest and Spread Operators: Collect or expand elements in arrays and functions
- Classes: Syntactic sugar over prototype-based inheritance
- Modules: Export and import functionality between files
- Promises: Better asynchronous operation handling
- Symbol: New primitive type for unique property keys
- Iterators and Generators: Functions that can pause and resume

ES6 Features Impact:
- Improved code readability and maintainability
- Better suited for modern JavaScript development
- Enables functional programming patterns
- Simplified object-oriented programming with classes`,
    code: `// let and const
let name = "Alice";
const age = 30;

// Arrow functions
const greet = (person) => \`Hello, \${person}!\`;

// Template literals
let greeting = greet(name);

// Destructuring assignment
const person = { firstName: "John", lastName: "Doe" };
const { firstName, lastName } = person;

// Default parameters
function multiply(a, b = 1) {
  return a * b;
}

// Rest operator
function sum(...numbers) {
  return numbers.reduce((acc, num) => acc + num, 0);
}

// Spread operator
let nums = [1, 2, 3, 4, 5];
let total = sum(...nums);

// Classes
class Animal {
  constructor(name) {
    this.name = name;
  }
  speak() {
    return \`The \${this.name} makes a sound.\`;
  }
}

class Dog extends Animal {
  bark() {
    return \`The \${this.name} barks.\`;
  }
}

const dog = new Dog("dog");
console.log(dog.speak()); // The dog makes a sound.
console.log(dog.bark()); // The dog barks.`
  },
  



















 "Prototypes and inheritance": {
    title: "Prototypes and inheritance",
    content:`In JavaScript, prototypes and inheritance are core concepts enabling objects to inherit properties and methods from other objects.

Prototypes:
- Every JavaScript object has a prototype that serves as a template for creating new objects
- Properties and methods defined on a prototype are inherited by objects using that prototype
- Access prototypes using Object.getPrototypeOf() or the deprecated __proto__ property

Prototype-based Inheritance:
- Set the prototype of one object to be another object
- Creates a chain where child objects inherit from parent objects
- Enables code reuse through inheritance

Class-based Inheritance (ES6):
- ES6 introduces classes as syntactic sugar over prototype-based inheritance
- Define classes with constructors and methods
- Use extends keyword to create inheritance relationships
- Much clearer and more intuitive than manual prototype manipulation

Key Points:
- JavaScript is prototype-based, not class-based at runtime
- ES6 classes make inheritance patterns clearer and easier to use
- Both patterns achieve the same end goal: object inheritance and code reuse`,
    code: `// Prototype-based inheritance
const parent = {
  sayHello() {
    return "Hello from parent";
  }
};

const child = Object.create(parent);
console.log(child.sayHello()); // Inherits from parent

// Class-based inheritance (ES6)
class Animal {
  constructor(name) {
    this.name = name;
  }
  speak() {
    return this.name + " makes a noise.";
  }
}

class Dog extends Animal {
  constructor(name) {
    super(name);
  }
  speak() {
    return this.name + " barks.";
  }
}

const dog = new Dog("Rex");
console.log(dog.speak()); // Rex barks.

// Multiple levels of inheritance
class WorkingDog extends Dog {
  work() {
    return this.name + " is working.";
  }
}

const workingDog = new WorkingDog("Buddy");
console.log(workingDog.speak()); // Buddy barks.
console.log(workingDog.work()); // Buddy is working.`
  },
 
  "Spread and rest operators": {
    "title": "Spread and rest operators",
    "content": `The spread and rest operators use the same syntax (three dots: ...) but serve different purposes depending on context.

Spread Operator:
- Expands or spreads elements of an iterable into individual elements
- Used to copy arrays, merge arrays, or expand array elements into function arguments
- Makes code more concise and readable

Rest Operator:
- Collects multiple elements into an array
- Used in function parameter lists to handle indefinite number of arguments
- Used in array destructuring to gather remaining elements

Key Differences:
- Spread: Expands an array into separate elements (right side of assignment/call)
- Rest: Collects elements into an array (left side of assignment/parameters)

Common Use Cases:
- Spread: Copying arrays, merging arrays, expanding function arguments
- Rest: Collecting function arguments, destructuring with remaining elements`,
    "code": `// Spread operator examples
const numbers = [1, 2, 3];
const moreNumbers = [...numbers, 4, 5]; // Merging arrays

function addNumbers(a, b, c) {
  return a + b + c;
}

const sum = addNumbers(...numbers); // Expanding array into function arguments

// Copy array
const copy = [...numbers];

// Merge multiple arrays
const array1 = [1, 2];
const array2 = [3, 4];
const merged = [...array1, ...array2]; // [1, 2, 3, 4]

// Rest operator examples
function logArguments(...args) {
  return args; // args is an array of all arguments
}

const [first, ...rest] = moreNumbers; // Destructuring with rest
// Collecting function arguments
function multiply(...values) {
  return values.reduce((acc, val) => acc * val, 1);
}

console.log(sum); // 6
console.log(logArguments(10, 20, 30)); // [10, 20, 30]
console.log(first, rest); // 1 [2, 3, 4, 5]
console.log(multiply(2, 3, 4)); // 24`
  },

  "Template literals": {
    title: "Template literals",
    content: `Template literals are a JavaScript feature that allow powerful and flexible string operations. Defined using backticks, they offer several advantages over traditional string literals.

Multiline Strings:
- Template literals can span multiple lines without escape sequences or concatenation- Clean, readable multi-line string definitions

String Interpolation:
- Embedded expressions evaluated and concatenated into the string
- Use template expression syntax to insert variables and expressions
- Cleaner than traditional string concatenation

Expression Evaluation:
- Include any valid JavaScript expression inside template literals
- Expressions are evaluated at runtime
- Perfect for dynamic string generation

Tagged Templates:
- Parse template literals with a function
- Provides control over template literal processing
- Advanced pattern for custom string transformations

Use Cases:
- HTML generation in frameworks like React
- SQL queries and database operations
- String formatting and templating
- Logging and debugging messages`,

  code: `// Multiline strings
const multilineString = \`This is a string
that spans multiple lines.
No need for concatenation!\`;

// String interpolation
const name = "Alice";
const greeting = \`Hello, \${name}!\`;

// Expression evaluation
const a = 5;
const b = 10;
const result = \`The sum of \${a} and \${b} is \${a + b}.\`;

// Template with conditions
const age = 25;
const message = \`\${name} is \${age >= 18 ? 'an adult' : 'a minor'}\`;

// Tagged templates
function tag(strings, ...expressions) {
  return strings.reduce((acc, str, i) => \`\${acc}\${str}\${expressions[i] || ''}\`, '');
}

const tagged = tag\`Name: \${name}, Age: \${age}\`;

console.log(greeting);          // Hello, Alice!
console.log(result);            // The sum of 5 and 10 is 15.
console.log(message);           // Alice is an adult
console.log(multilineString);   // Multi-line string (formatted)`
  },
































  "Map, filter, and reduce": {
    title: "Map, filter, and reduce",
    content: `The map, filter, and reduce methods are used to work with arrays in a functional programming style, allowing concise and expressive manipulation of array data.

Map Method:
- Creates a new array with results of calling a function on every element
- Transforms array elements without changing the original array
- Returns new array with same length as original

Filter Method:
- Creates a new array with elements that pass the test implemented by a function
- Selects a subset of elements based on a condition
- Returns new array with fewer or equal number of elements

Reduce Method:
- Executes a reducer function on each element to produce a single output value
- Accumulates or combines array elements into a single result
- Can start with an initial accumulator value

Use Cases:
- Map: Transform data, extract values, format arrays
- Filter: Search arrays, remove duplicates, validate data
- Reduce: Calculate totals, group data, build objects`,

    code: `// Map example - transform array
const numbers = [1, 2, 3, 4, 5];
const squared = numbers.map(x => x * x); // [1, 4, 9, 16, 25]
const doubled = numbers.map(x => x * 2); // [2, 4, 6, 8, 10]

// Filter example - select elements
const even = numbers.filter(x => x % 2 === 0); // [2, 4]
const large = numbers.filter(x => x > 2); // [3, 4, 5]

// Reduce example - accumulate value
const sum = numbers.reduce((acc, curr) => acc + curr, 0); // 15
const product = numbers.reduce((acc, curr) => acc * curr, 1); // 120

// Chaining methods
const result = numbers
  .filter(x => x > 2)
  .map(x => x * 2)
  .reduce((acc, curr) => acc + curr, 0);
// Filters [3,4,5], maps to [6,8,10], reduces to 24

// Map with objects
const people = [
  { name: 'Alice', age: 25 },
  { name: 'Bob', age: 30 }
];
const names = people.map(p => p.name); // ['Alice', 'Bob']

// Reduce to create object
const grouped = numbers.reduce((acc, num) => {
  acc[num % 2 === 0 ? 'even' : 'odd'].push(num);
  return acc;
}, { even: [], odd: [] });`
  },

  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  "Set and Map objects": {
    title: "Set and Map objects",
    content: `Set and Map are data structures introduced in ES6 that provide unique ways to store and manage collections of data.

Set Objects:
- A collection of unique values of any type
- Values are stored in insertion order
- Duplicate values are automatically removed
- Methods: add(), remove(), has(), clear(), size property

Map Objects:
- A collection of key-value pairs where keys can be of any type
- Keys are stored in insertion order
- Allows easy retrieval, updating, and deletion
- Methods: set(), get(), has(), delete(), clear(), size property

Key Differences from Objects and Arrays:
- Set ensures all values are unique automatically
- Map allows non-string keys (objects as keys)
- Better performance for large collections
- Cleaner API compared to object manipulation

Common Use Cases:
- Set: Remove duplicates, check membership, store unique items
- Map: Cache data, store related key-value pairs, metadata`,

    code: `// Set example
const mySet = new Set();
mySet.add(1);
mySet.add(2);
mySet.add(2); // Duplicate, ignored

console.log(mySet.size); // 2
console.log(mySet.has(1)); // true
console.log(mySet.has(3)); // false

// Remove duplicates from array
const numbers = [1, 2, 2, 3, 3, 3, 4];
const unique = [...new Set(numbers)]; // [1, 2, 3, 4]

// Map example
const myMap = new Map();
myMap.set('name', 'Alice');
myMap.set('age', 30);
myMap.set(1, 'one'); // Non-string key

console.log(myMap.get('name')); // Alice
console.log(myMap.get('age')); // 30
console.log(myMap.has('name')); // true

// Map with objects as keys
const user = { id: 1 };
const userData = new Map();
userData.set(user, { role: 'admin', active: true });

console.log(userData.get(user)); // { role: 'admin', active: true }

// Iterate over Set
for (const value of mySet) {
  console.log(value);
}

// Iterate over Map
for (const [key, value] of myMap) {
  console.log(key, value);
}`
  }
};

// Convert JavaScript content to LearnLanguage format
export const getJavaScriptLanguageContent = (): LearnLanguage => {
  return {
    id: "javascript",
    name: "JavaScript",
    icon: "FileCode",
    topics: topicsOfJavaScript.map((topic) => ({
      id: `js-${topic.toLowerCase().replace(/\s+/g, "-")}`,
      title: topic,
      content: topicContentsOfJavaScript[topic]?.content || "",
      code: topicContentsOfJavaScript[topic]?.code,
    })),
  };
};

