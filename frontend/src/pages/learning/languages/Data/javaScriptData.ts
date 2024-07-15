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
    content: `
**Promises** in JavaScript are used to handle asynchronous operations. A promise represents a value that may be available now, or in the future, or never.

**Key Concepts:**
1. **States of a Promise:**
   - **Pending:** Initial state, neither fulfilled nor rejected.
   - **Fulfilled:** The operation completed successfully.
   - **Rejected:** The operation failed.

2. **Creating and Using Promises:**
   - You create a promise using the Promise constructor and provide a function that contains asynchronous operations.
   - You handle the results of a promise using the .then() method for success and .catch() for errors.

**Example:**
The following example demonstrates creating and handling a promise.

`,
    code: `
let promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Success!');
  }, 1000);
});

promise
  .then(result => {
    console.log(result); // Outputs: Success!
  })
  .catch(error => {
    console.error(error);
  });
`
  },
  "Async/await": {
    title: "Async/await",
    content: `
**Async/await** is a syntax in JavaScript that allows you to work with asynchronous code more easily. It is built on top of promises and provides a cleaner way to write asynchronous code by using syntax that looks synchronous.

**Key Concepts:**
1. **Async Function:**
   - Declared using the async keyword before a function.
   - Always returns a promise. If the function returns a value, that value is wrapped in a promise.

2. **Await Expression:**
   - Used inside an async function to pause execution until a promise is resolved or rejected.
   - Makes asynchronous code look more like synchronous code, improving readability.

**Example:**
The following example demonstrates the use of async and await to handle asynchronous operations.

`,
    code: `
async function fetchData() {
  try {
    let response = await fetch('https://api.example.com/data');
    let data = await response.json();
    console.log(data);
  } catch (error) {
    console.error('Error:', error);
  }
}

fetchData();
`
  },
 "Callbacks": {
    title: "Callbacks",
    content: `
**Callbacks** in JavaScript are functions passed as arguments to other functions. They are called (or executed) inside the outer function to complete some kind of routine or action. Callbacks are used to handle asynchronous operations, ensuring that a function is not executed until the task is complete.

**Key Concepts:**
1. **Definition:** A callback is a function passed into another function as an argument, which is then invoked inside the outer function to complete some kind of action.
2. **Asynchronous Callbacks:** Often used for tasks like reading files, making API requests, and handling events, where the callback function is executed once the task is completed.

**Example:**
The following example demonstrates the use of a callback function to handle an asynchronous operation.

`,
    code: `
function fetchData(callback) {
  setTimeout(() => {
    let data = 'Sample data';
    callback(data);
  }, 1000);
}

function displayData(data) {
  console.log('Data:', data);
}

fetchData(displayData);
`
  },
  "Error handling": {
    title: "Error handling",
    content: `
**Error handling** in JavaScript refers to the process of responding to and managing errors that occur during the execution of code. JavaScript provides several mechanisms to handle errors, ensuring that the application can continue running smoothly or fail gracefully.

**Key Concepts:**
1. **try...catch Statement:** Used to handle exceptions. Code that might throw an error is placed inside the try block, and the catch block contains code that runs if an error occurs.
2. **throw Statement:** Used to create custom errors. When an error is thrown, control is passed to the nearest catch block.
3. **finally Block:** Optional block that executes after the try and catch blocks, regardless of whether an error was thrown or caught.

**Example:**
The following example demonstrates basic error handling using try, catch, and finally blocks.

`,
    code: `
<!DOCTYPE html>
<html>
<head>
  <title>JavaScript Error Handling</title>
</head>
<body>

<h2>JavaScript Error Handling</h2>

<p id="demo"></p>

<script>
try {
  // Code that may throw an error
  let result = riskyOperation();
  console.log('Result:', result);
} catch (error) {
  // Code to handle the error
  console.error('An error occurred:', error.message);
} finally {
  // Code that will always run, regardless of error
  document.getElementById("demo").innerHTML = "Error handling demonstration complete.";
}

function riskyOperation() {
  throw new Error('Something went wrong!');
}
</script>

</body>
</html>`
  },
  "Memory management": {
    title: "Memory management",
    content: `
**Memory management** in JavaScript involves the allocation and deallocation of memory during the execution of a program. JavaScript has an automatic memory management feature, but understanding how it works helps in writing efficient code.

**Key Concepts:**
1. **Garbage Collection:** JavaScript uses a garbage collector to automatically reclaim memory that is no longer in use. The most common garbage collection algorithm is the Mark-and-Sweep algorithm.
2. **Memory Leaks:** Memory that is no longer needed but is not released can lead to memory leaks, causing the application to consume more memory over time.
3. **Best Practices:** Avoid global variables, manage event listeners, and be cautious with closures to prevent memory leaks.

**Example:**
The following example demonstrates a scenario where memory management can be optimized.

`,
    code: `
<!DOCTYPE html>
<html>
<head>
  <title>JavaScript Memory Management</title>
</head>
<body>

<h2>JavaScript Memory Management</h2>

<p id="demo"></p>

<script>
function createLargeArray() {
  let largeArray = new Array(1000000).fill('Some data');
  return largeArray;
}

function useArray() {
  let array = createLargeArray();
  // Process the array
  console.log('Array created and used');
  // Dereference the array to free up memory
  array = null;
}

// Call the function
useArray();

// Check memory usage
document.getElementById("demo").innerHTML = "Memory management demonstration complete.";
</script>

</body>
</html>`
  },
  "Closures": {
    title: "Closures",
    content: `
**Closures** in JavaScript are functions that have access to variables from another function's scope. This is achieved through the function's ability to "close over" its environment and remember the scope in which it was created.

**Key Characteristics of Closures:**
1. **Scope Access:** Closures can access variables from their own scope, the scope of the outer function, and the global scope.
2. **Persistent State:** They allow a function to maintain a persistent state, making them useful for data privacy and stateful function logic.
3. **Lexical Environment:** Closures create a lexical environment where the function's scope at the time of definition is preserved.

**Basic Closure Operations:**
1. **Creating a Closure:**
   Closures are created when a function is defined inside another function, and the inner function references variables from the outer function.

**Example:**
The following example demonstrates the creation and use of closures.

`,
    code: `
<!DOCTYPE html>
<html>
<head>
  <title>JavaScript Closures</title>
</head>
<body>

<h2>JavaScript Closures</h2>

<p id="demo"></p>

<script>
function outerFunction(outerVariable) {
  return function innerFunction(innerVariable) {
    console.log('Outer Variable: ' + outerVariable);
    console.log('Inner Variable: ' + innerVariable);
  };
}

// Create a closure
let closure = outerFunction('outside');

// Use the closure
closure('inside');

// Display the results
document.getElementById("demo").innerHTML = "Check the console for closure demonstration.";
</script>

</body>
</html>`
  },
  "Arrow functions": {
    title: "Arrow functions",
    content: `
**Arrow functions** in JavaScript are a concise syntax for writing function expressions. They are also known as "fat arrow" functions due to the use of the => syntax. Arrow functions provide a shorter syntax compared to traditional function expressions and do not have their own this context.

**Key Characteristics of Arrow Functions:**
1. **Concise Syntax:** Arrow functions are more concise and readable than traditional function expressions.
2. **No this Binding:** Arrow functions do not have their own this context; they inherit this from the surrounding scope, making them useful for maintaining the correct this context in callbacks.
3. **Implicit Return:** If the function body consists of a single expression, the return keyword can be omitted, and the expression's value will be implicitly returned.

**Basic Arrow Function Operations:**
1. **Creating an Arrow Function:**
   Arrow functions can be created using the following syntax: (parameters) => { function body }

**Example:**
The following example demonstrates the creation and use of arrow functions.

`,
    code: `
<!DOCTYPE html>
<html>
<head>
  <title>JavaScript Arrow Functions</title>
</head>
<body>

<h2>JavaScript Arrow Functions</h2>

<p id="demo"></p>

<script>
// Traditional function expression
let traditionalFunc = function(a, b) {
  return a + b;
};

// Arrow function expression
let arrowFunc = (a, b) => a + b;

// Using arrow function with no parameters
let greet = () => 'Hello, World!';

// Using arrow function with one parameter
let double = x => x * 2;

// Display the results
document.getElementById("demo").innerHTML = "Traditional function: " + traditionalFunc(2, 3) + "<br>" +
                                             "Arrow function: " + arrowFunc(2, 3) + "<br>" +
                                             "Greet: " + greet() + "<br>" +
                                             "Double: " + double(4);

// Output the results to the console for verification
console.log("Traditional function:", traditionalFunc(2, 3));
console.log("Arrow function:", arrowFunc(2, 3));
console.log("Greet:", greet());
console.log("Double:", double(4));
</script>

</body>
</html>`
  },










































  "Higher-order functions": {
    title: "Higher-order functions",
    content: `
**Higher-order functions** in JavaScript are functions that either take other functions as arguments, return functions as their result, or both. They are a fundamental concept in functional programming and allow for powerful abstraction and code reuse.

**Key Characteristics of Higher-Order Functions:**
1. **Function as Argument:** Higher-order functions can accept other functions as parameters. This allows for passing custom behavior to functions.
2. **Function as Return Value:** Higher-order functions can return a function as their result. This enables the creation of function factories and partial application.

**Common Higher-Order Functions:**
1. **Array Methods:** Methods like map, filter, and reduce are higher-order functions that operate on arrays and take callback functions as arguments.
2. **Event Handlers:** Functions like addEventListener accept a callback function to handle events.

**Example:**
The following example demonstrates the use of higher-order functions by creating a custom higher-order function and using built-in array methods.

`,
    code: `
<!DOCTYPE html>
<html>
<head>
  <title>JavaScript Higher-Order Functions</title>
</head>
<body>

<h2>JavaScript Higher-Order Functions</h2>

<p id="demo"></p>

<script>
// Custom higher-order function
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

// Using built-in array methods
let numbers = [1, 2, 3, 4, 5];
let doubled = numbers.map(multiplyByTwo);
let even = numbers.filter(n => n % 2 === 0);
let sum = numbers.reduce((acc, curr) => acc + curr, 0);

// Display the results
document.getElementById("demo").innerHTML = "Result from custom higher-order function: " + result + "<br>" +
                                             "Doubled numbers: " + doubled.join(', ') + "<br>" +
                                             "Even numbers: " + even.join(', ') + "<br>" +
                                             "Sum of numbers: " + sum;

// Output the results to the console for verification
console.log("Result from custom higher-order function:", result);
console.log("Doubled numbers:", doubled);
console.log("Even numbers:", even);
console.log("Sum of numbers:", sum);
</script>

</body>
</html>`
  },



   "Event handling": {
    title: "Event handling",
    content: `
**Event handling** in JavaScript involves writing code that responds to user interactions or other events that occur within the browser. Events can include user actions such as clicks, key presses, mouse movements, and more.

**Key Concepts in Event Handling:**
1. **Event Types:** There are various types of events in JavaScript, including mouse events (click, dblclick, mouseover), keyboard events (keydown, keyup), form events (submit, change), and window events (load, resize).
2. **Event Listeners:** Event listeners are functions that are executed when a specific event occurs. They can be added to HTML elements using the addEventListener method.
3. **Event Object:** When an event occurs, an event object is created and passed to the event listener function, providing information about the event and the element that triggered it.

**Basic Event Handling Operations:**
1. **Adding an Event Listener:**
   Use the addEventListener method to attach an event listener to an HTML element.
   - Example: element.addEventListener('click', function);

2. **Removing an Event Listener:**
   Use the removeEventListener method to detach an event listener from an HTML element.
   - Example: element.removeEventListener('click', function);

3. **Event Propagation:**
   Events can propagate through the DOM in two phases: the capturing phase and the bubbling phase. You can control the event flow using event.stopPropagation and event.preventDefault.

**Example:**
The following example demonstrates basic event handling by adding a click event listener to a button element.

`,
    code: `
<!DOCTYPE html>
<html>
<head>
  <title>JavaScript Event Handling</title>
</head>
<body>

<h2>JavaScript Event Handling</h2>

<button id="myButton">Click Me</button>
<p id="demo"></p>

<script>
// Function to handle the click event
function handleClick(event) {
  document.getElementById("demo").innerHTML = "Button was clicked!";
  console.log("Button was clicked!", event);
}

// Get the button element
let button = document.getElementById("myButton");

// Add click event listener to the button
button.addEventListener('click', handleClick);

</script>

</body>
</html>`
  },




  "DOM manipulation": {
    title: "DOM manipulation",
    content: `
**DOM (Document Object Model) manipulation** refers to the practice of using JavaScript to dynamically alter the content, structure, and style of a web page. The DOM represents the HTML document as a tree of nodes, where each node is an object representing a part of the document.

**Key DOM Manipulation Concepts:**
1. **Selecting Elements:** Methods like getElementById, getElementsByClassName, getElementsByTagName, querySelector, and querySelectorAll are used to select HTML elements.
2. **Creating and Appending Elements:** Methods like createElement and appendChild are used to create and add new elements to the DOM.
3. **Modifying Element Content:** Properties like innerHTML, textContent, and innerText are used to change the content of an element.
4. **Modifying Element Attributes:** Methods like setAttribute and getAttribute are used to modify the attributes of an element.
5. **Styling Elements:** The style property is used to apply CSS styles to elements.
6. **Event Handling:** Adding event listeners to elements to handle user interactions.

**Basic DOM Manipulation Operations:**

1. **Selecting Elements:**
   - getElementById: Selects an element by its ID.
     Example: let element = document.getElementById("myElement");

   - getElementsByClassName: Selects elements by their class name.
     Example: let elements = document.getElementsByClassName("myClass");

   - getElementsByTagName: Selects elements by their tag name.
     Example: let elements = document.getElementsByTagName("div");

   - querySelector: Selects the first element that matches a CSS selector.
     Example: let element = document.querySelector(".myClass");

   - querySelectorAll: Selects all elements that match a CSS selector.
     Example: let elements = document.querySelectorAll(".myClass");

2. **Creating and Appending Elements:**
   - createElement: Creates a new element.
     Example: let newElement = document.createElement("div");

   - appendChild: Appends a new child element to a parent element.
     Example: parentElement.appendChild(newElement);

3. **Modifying Element Content:**
   - innerHTML: Sets or gets the HTML content of an element.
     Example: element.innerHTML = "<p>New Content</p>";

   - textContent: Sets or gets the text content of an element.
     Example: element.textContent = "New Content";

4. **Modifying Element Attributes:**
   - setAttribute: Sets a new attribute or changes the value of an existing attribute on an element.
     Example: element.setAttribute("src", "image.jpg");

   - getAttribute: Gets the value of an attribute on an element.
     Example: let src = element.getAttribute("src");

5. **Styling Elements:**
   - style: Accesses the style properties of an element.
     Example: element.style.color = "red";

6. **Event Handling:**
   - addEventListener: Attaches an event handler to an element.
     Example: element.addEventListener("click", function);

**Example:**
The following example demonstrates various DOM manipulation techniques by dynamically creating, modifying, and styling elements.

`,
    code: `
<!DOCTYPE html>
<html>
<head>
  <title>JavaScript DOM Manipulation</title>
</head>
<body>

<h2>JavaScript DOM Manipulation</h2>
<div id="content"></div>

<script>
// Selecting an element by ID
let contentDiv = document.getElementById("content");

// Creating a new paragraph element
let newParagraph = document.createElement("p");
newParagraph.textContent = "This is a new paragraph.";

// Appending the new paragraph to the content div
contentDiv.appendChild(newParagraph);

// Creating a new image element
let newImage = document.createElement("img");
newImage.setAttribute("src", "https://via.placeholder.com/150");
newImage.setAttribute("alt", "Placeholder Image");

// Appending the new image to the content div
contentDiv.appendChild(newImage);

// Creating a new button element
let newButton = document.createElement("button");
newButton.textContent = "Click Me";

// Appending the new button to the content div
contentDiv.appendChild(newButton);

// Adding a click event listener to the button
newButton.addEventListener("click", function() {
  alert("Button was clicked!");
  // Changing the button text
  newButton.textContent = "Clicked!";
  // Changing the button color
  newButton.style.backgroundColor = "lightblue";
});

// Modifying the content div's HTML directly
contentDiv.innerHTML += "<p>Added with innerHTML.</p>";

// Accessing and modifying an attribute
let imgSrc = newImage.getAttribute("src");
console.log("Image source:", imgSrc);
newImage.setAttribute("alt", "Updated Placeholder Image");

// Styling an element
contentDiv.style.border = "1px solid black";
contentDiv.style.padding = "10px";
contentDiv.style.backgroundColor = "#f9f9f9";

</script>

</body>
</html>`
  },





   "ES6 features": {
    title: "ES6 features",
    content:`
**ES6 (ECMAScript 2015)** introduced several new features and improvements to JavaScript, enhancing its functionality and making code more concise and easier to work with. Here are some key features introduced in ES6:

1. **Let and Const:**
   - let: Allows you to declare variables with block scope, meaning they are limited to the block in which they are defined.
   - const: Declares constants with block scope that cannot be reassigned.

2. **Arrow Functions:**
   - Provide a shorter syntax for writing functions and do not have their own this, arguments, or super bindings.

3. **Template Literals:**
   - Allow for multi-line strings and string interpolation using backticks ().

4. **Destructuring Assignment:**
   - Enables unpacking values from arrays or properties from objects into distinct variables.

5. **Default Parameters:**
   - Allows you to specify default values for function parameters.

6. **Rest and Spread Operators:**
   - Rest: Collects multiple elements into an array (used in function arguments).
   - Spread: Expands an array into individual elements (used in function calls and array literals).

7. **Classes:**
   - Introduces a more concise and readable syntax for creating objects and handling inheritance.

8. **Modules:**
   - Allows you to export and import functionality between different files.

9. **Promises:**
   - Provides a way to handle asynchronous operations more effectively than callbacks.

10. **Symbol:**
    - A new primitive type that can be used to create unique property keys.

11. **Iterators and Generators:**
    - Iterators: Provide a standard way to iterate over objects.
    - Generators: Functions that can be paused and resumed, yielding multiple values.

**Example:**
The following example demonstrates several ES6 features, including let, const, arrow functions, template literals, and destructuring assignment.

`,
    code: `
<!DOCTYPE html>
<html>
<head>
  <title>JavaScript ES6 Features</title>
</head>
<body>

<h2>JavaScript ES6 Features</h2>
<p id="demo"></p>

<script>
// ES6 Features

// let and const
let name = "Alice";
const age = 30;

// Arrow Function
const greet = (person) => \`Hello, \${person}!\`;

// Template Literals
let greeting = greet(name);

// Destructuring Assignment
const person = { firstName: "John", lastName: "Doe" };
const { firstName, lastName } = person;

// Default Parameters
function multiply(a, b = 1) {
  return a * b;
}

// Rest and Spread Operators
function sum(...numbers) {
  return numbers.reduce((acc, num) => acc + num, 0);
}
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
const animalSound = dog.speak();
const dogBark = dog.bark();

// Promises
const fetchData = new Promise((resolve, reject) => {
  setTimeout(() => resolve("Data fetched"), 1000);
});
fetchData.then((message) => console.log(message));

// Display results
document.getElementById("demo").innerHTML = \`
  Name: \${name}<br>
  Age: \${age}<br>
  Greeting: \${greeting}<br>
  Full Name: \${firstName} \${lastName}<br>
  Product of 4 and 5: \${multiply(4, 5)}<br>
  Total Sum: \${total}<br>
  Animal Sound: \${animalSound}<br>
  Dog Bark: \${dogBark}
\`;

// Output to console
console.log("Greeting:", greeting);
console.log("Full Name:", firstName, lastName);
console.log("Product:", multiply(4, 5));
console.log("Total Sum:", total);
console.log("Animal Sound:", animalSound);
console.log("Dog Bark:", dogBark);

</script>

</body>
</html>`
  },
  



















 "Prototypes and inheritance": {
    title: "Prototypes and inheritance",
    content:`In JavaScript, prototypes and inheritance are core concepts that enable objects to inherit properties and methods from other objects.

**Prototypes:**
1. **Purpose:** Every JavaScript object has a prototype. A prototype is also an object that can be used as a template to create new objects. Properties and methods defined on a prototype are inherited by objects that use this prototype.
2. **Accessing Prototypes:** You can access the prototype of an object using the Object.getPrototypeOf() method or the __proto__ property (though __proto__ is deprecated).
   - Example Usage:
     - let obj = {};
     - let prototype = Object.getPrototypeOf(obj);

**Inheritance:**
1. **Purpose:** Inheritance allows one object to inherit properties and methods from another. This can be achieved through prototypes or using class-based syntax introduced in ES6.
2. **Prototype-based Inheritance:** In prototype-based inheritance, you set the prototype of one object to be another object.
   - Example Usage:
     - let parent = { sayHello() { return "Hello"; } };
     - let child = Object.create(parent);
     - console.log(child.sayHello()); // Output: Hello

**Class-based Inheritance (ES6):**
1. **Purpose:** ES6 introduces classes, which are syntactic sugar over JavaScript's existing prototype-based inheritance.
2. **Syntax:**
   - Define a class with a constructor and methods.
   - Extend a class using the extends keyword.
   - Example Usage:
     - class Animal {
         constructor(name) {
           this.name = name;
         }
         speak() {
           return "$"{this .name} makes a noise.;
            // "" is not required 
         }
       }
     - class Dog extends Animal {
         speak() {
           return "$"{this  .name} barks.;
           // "" is not required 
         }
       }
     - let dog = new Dog("Rex");
     - console.log(dog.speak()); // Output: Rex barks.

**Example:**
The following example demonstrates both prototype-based and class-based inheritance in JavaScript.`,
    code: `<!DOCTYPE html>
<html>
<head>
  <title>Prototypes and Inheritance</title>
</head>
<body>

<h2>Prototypes and Inheritance</h2>
<p id="demo"></p>

<script>
// Prototype-based inheritance example
let parent = {
  sayHello() {
    return "Hello from parent";
  }
};

let child = Object.create(parent);
child.sayHello = function() {
  return "Hello from child";
};

document.getElementById("demo").innerHTML = "Parent says: " + parent.sayHello() + "<br>" +
                                           "Child says: " + child.sayHello();

// Class-based inheritance example
class Animal {
  constructor(name) {
    this.name = name;
  }
  speak() {
    return this.name + " makes a noise.";
  }
}

class Dog extends Animal {
  speak() {
    return this.name + " barks.";
  }
}

let dog = new Dog("Rex");

document.getElementById("demo").innerHTML += "<br>Class-based inheritance: " + dog.speak();

// Output results to the console
console.log("Parent says:", parent.sayHello());
console.log("Child says:", child.sayHello());
console.log("Class-based inheritance:", dog.speak());

</script>

</body>
</html>`
  },
 
  "Spread and rest operators": {
    "title": "Spread and rest operators",
    "content": `In JavaScript, the spread and rest operators provide convenient ways to handle arrays and objects. They use the same syntax (three dots: ...) but serve different purposes depending on the context.

**Spread Operator:**
1. **Purpose:** The spread operator is used to expand or spread elements of an iterable (like an array) into individual elements. It is useful for creating copies of arrays, merging arrays, or expanding elements into function arguments.
2. **Syntax:** The spread operator is written as three dots followed by the iterable.
   - Example Usage: 
     - To create a new array from an existing one: let newArray = [...oldArray];
     - To merge arrays: let combinedArray = [...array1, ...array2];
     - To expand array elements into function arguments: someFunction(...array);

**Rest Operator:**
1. **Purpose:** The rest operator is used to collect multiple elements into an array. It is commonly used in function parameter lists to handle an indefinite number of arguments or in array destructuring to gather remaining elements.
2. **Syntax:** The rest operator is written as three dots followed by a parameter name in function definitions or array destructuring.
   - Example Usage:
     - In function parameters: function myFunction(...args) { /* args is an array of all passed arguments */ }
     - In array destructuring: let [first, ...rest] = array; // rest contains all elements after the first

**Example:**
The following example demonstrates the use of both spread and rest operators in JavaScript.`,
    "code": `<!DOCTYPE html>
<html>
<head>
  <title>Spread and Rest Operators</title>
</head>
<body>

<h2>Spread and Rest Operators</h2>
<p id="demo"></p>

<script>
// Spread operator examples
let numbers = [1, 2, 3];
let moreNumbers = [...numbers, 4, 5]; // Merging arrays

function addNumbers(a, b, c) {
  return a + b + c;
}

let nums = [1, 2, 3];
let sum = addNumbers(...nums); // Expanding array elements into function arguments

// Rest operator examples
function logArguments(...args) {
  return args; // Collecting all arguments into an array
}

let [first, ...rest] = moreNumbers; // Destructuring with rest operator

// Display results
document.getElementById("demo").innerHTML = "Merged array: " + moreNumbers.join(', ') + "<br>" +
                                           "Sum of numbers: " + sum + "<br>" +
                                           "Collected arguments: " + logArguments(10, 20, 30).join(', ') + "<br>" +
                                           "First element: " + first + "<br>" +
                                           "Remaining elements: " + rest.join(', ');

// Output results to the console
console.log("Merged array:", moreNumbers);
console.log("Sum of numbers:", sum);
console.log("Collected arguments:", logArguments(10, 20, 30));
console.log("First element:", first);
console.log("Remaining elements:", rest);

</script>

</body>
</html>`
  },

  "Template literals": {
    title: "Template literals",
    content: `Template literals are a feature in JavaScript that allow for more powerful and flexible string operations compared to traditional string literals. They are defined using backticks () and offer several advantages:

**Multiline Strings:**
Template literals can span multiple lines without the need for escape sequences or concatenation.
   - Example Usage:
     - let multilineString = \This is a string
       that spans multiple lines.\;

**String Interpolation:**
Template literals allow for embedded expressions, which are evaluated and then concatenated into the resulting string.
   - Example Usage:
     - let name = "Alice";
       - let greeting = \Hello, \${name}!\;
       - console.log(greeting); // Output: Hello, Alice!

**Expression Evaluation:**
You can include any valid JavaScript expression inside a template literal using "$"{} syntax.
   - Example Usage:
     - let a = 5;
       - let b = 10;
       - let result = \`The sum of \${a} and \${b} is \${a + b}.\`;
       - console.log(result); // Output: The sum of 5 and 10 is 15.

**Tagged Templates:**
Tagged templates allow you to parse template literals with a function. This provides more control over how the template literal is processed.
   - Example Usage:
     - function tag(strings, ...expressions) {
         return strings.reduce((acc, str, i) => \`\${acc}\${str}\${expressions[i] || ""}\`, "");
       }
       - let name = "Bob";
       - let age = 25;
       - let message = tag\`Name: \${name}, Age: \${age}\`;
       - console.log(message); // Output: Name: Bob, Age: 25.

**Example:**
The following example demonstrates the use of template literals for multiline strings, interpolation, and expression evaluation.`,

  code: `<!DOCTYPE html>
<html>
<head>
  <title>Template Literals</title>
</head>
<body>

<h2>Template Literals</h2>
<p id="demo"></p>

<script>
// Multiline string example
let multilineString = \`This is a string
that spans multiple lines.\`;

// String interpolation example
let name = "Alice";
let greeting = \`Hello, \${name}!\`;

// Expression evaluation example
let a = 5;
let b = 10;
let result = \`The sum of \${a} and \${b} is \${a + b}.\`;

// Tagged template example
function tag(strings, ...expressions) {
  return strings.reduce((acc, str, i) => \`\${acc}\${str}\${expressions[i] || ""}\`, "");
}
let age = 25;
let message = tag\`Name: \${name}, Age: \${age}\`;

document.getElementById("demo").innerHTML = 
  "<p>Multiline string: " + multilineString + "</p>" +
  "<p>String interpolation: " + greeting + "</p>" +
  "<p>Expression evaluation: " + result + "</p>" +
  "<p>Tagged template: " + message + "</p>";

// Output results to the console
console.log("Multiline string:", multilineString);
console.log("String interpolation:", greeting);
console.log("Expression evaluation:", result);
console.log("Tagged template:", message);

</script>

</body>
</html>`
  },
































  "Map, filter, and reduce": {
    title: "Map, filter, and reduce",
    content: `In JavaScript, the map, filter, and reduce methods are used to work with arrays in a functional programming style. They allow for concise and expressive manipulation of array data.

**Map:**
The map method creates a new array with the results of calling a provided function on every element in the calling array.
   - **Purpose:** Use map when you need to transform the elements of an array.
   - **Example Usage:**
     - let numbers = [1, 2, 3, 4];
       - let squared = numbers.map(x => x * x);
       - console.log(squared); // Output: [1, 4, 9, 16]

**Filter:**
The filter method creates a new array with all elements that pass the test implemented by the provided function.
   - **Purpose:** Use filter when you need to select a subset of elements based on a condition.
   - **Example Usage:**
     - let numbers = [1, 2, 3, 4, 5];
       - let even = numbers.filter(x => x % 2 === 0);
       - console.log(even); // Output: [2, 4]

**Reduce:**
The reduce method executes a reducer function (that you provide) on each element of the array, resulting in a single output value.
   - **Purpose:** Use reduce when you need to accumulate or combine array elements into a single value.
   - **Example Usage:**
     - let numbers = [1, 2, 3, 4];
       - let sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
       - console.log(sum); // Output: 10

**Example:**
The following example demonstrates the use of map, filter, and reduce methods on an array of numbers.`,

    code: `<!DOCTYPE html>
<html>
<head>
  <title>Map, Filter, and Reduce</title>
</head>
<body>

<h2>Map, Filter, and Reduce</h2>
<p id="demo"></p>

<script>
// Map example
let numbers = [1, 2, 3, 4];
let squared = numbers.map(x => x * x);

// Filter example
let even = numbers.filter(x => x % 2 === 0);

// Reduce example
let sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

// Display results
document.getElementById("demo").innerHTML = 
  "<p>Squared numbers: " + squared.join(', ') + "</p>" +
  "<p>Even numbers: " + even.join(', ') + "</p>" +
  "<p>Sum of numbers: " + sum + "</p>";

// Output results to the console
console.log("Squared numbers:", squared);
console.log("Even numbers:", even);
console.log("Sum of numbers:", sum);

</script>

</body>
</html>`
  },

  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  "Set and Map objects": {
    title: "Set and Map objects",
    content: `In JavaScript, Set and Map are two new data structures introduced in ES6 that provide unique ways to store and manage collections of data.

**Set:**
1. **Purpose:** A Set is a collection of values where each value must be unique. It allows for the storage of unique values of any type.
2. **Characteristics:**
   - Values are stored in insertion order.
   - Duplicate values are automatically removed.
   - Useful for ensuring that a collection contains no duplicates.
3. **Example Usage:**
   - let mySet = new Set();
     - mySet.add(1);
     - mySet.add(2);
     - mySet.add(2); // Duplicate, will be ignored
     - console.log(mySet); // Output: Set { 1, 2 }

**Map:**
1. **Purpose:** A Map is a collection of key-value pairs where keys can be of any type, and values are associated with keys.
2. **Characteristics:**
   - Keys are stored in insertion order.
   - Allows for easy retrieval, updating, and deletion of key-value pairs.
   - Useful for storing data where each entry has a unique key.
3. **Example Usage:**
   - let myMap = new Map();
     - myMap.set("name", "Alice");
     - myMap.set("age", 30);
     - console.log(myMap.get('name')); // Output: Alice
     - console.log(myMap.has('age'));  // Output: true

**Example:**
The following example demonstrates basic operations with Set and Map objects.`,

    code: `<!DOCTYPE html>
<html>
<head>
  <title>Set and Map Objects</title>
</head>
<body>

<h2>Set and Map Objects</h2>
<p id="demo"></p>

<script>
// Set example
let mySet = new Set();
mySet.add(1);
mySet.add(2);
mySet.add(2); // Duplicate, will be ignored

// Map example
let myMap = new Map();
myMap.set('name', 'Alice');
myMap.set('age', 30);

// Display results
document.getElementById("demo").innerHTML = 
  "<p>Set values: " + Array.from(mySet).join(', ') + "</p>" +
  "<p>Name in Map: " + myMap.get('name') + "</p>" +
  "<p>Age in Map: " + myMap.get('age') + "</p>";

// Output results to the console
console.log("Set values:", Array.from(mySet));
console.log("Name in Map:", myMap.get('name'));
console.log("Age in Map:", myMap.get('age'));

</script>

</body>
</html>`
  }
  
  ,
};
