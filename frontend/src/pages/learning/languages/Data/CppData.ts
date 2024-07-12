// this file contains all the data for C++
// written by Mir Niyazul Haque

export const topicsOfCpp = [
  "Introduction", //1
  "Basic syntax and structure", //2
  "Data types and variables", //3
  "Operators", //4
  "Control flow",
  "for loop",
  "while loop",
  "do while loop",
  "Functions",
  "Arrays",
  "Pointers",
  "Strings",
  "Input/output",
  "Basic file handling",
  "Classes and objects",
  "Constructors and destructors",
  "Inheritance",
  "Polymorphism",
  "Operator overloading",
  "Function overloading",
  "Encapsulation",
  "Templates",
  "Standard Template Library",
  "Exception handling",
  "Memory management",
  "Smart pointers",
  "Recursion",
  "Virtual functions",
  "Static keyword",
];
export const topicContentsOfCpp: {
  [key: string]: { title: string; content: string; code?: string };
} = {
  Introduction: {
    title: "Introduction to C++",
    content:
      "C++ is a powerful, high-performance programming language that supports both procedural and object-oriented programming paradigms. Developed as an extension of the C language, C++ introduces object-oriented features such as classes and inheritance. It is widely used for system/software development, game programming, and in performance-critical applications. C++ provides fine-grained control over system resources and memory, making it a preferred choice for applications where performance is crucial.",
    code: `#include <iostream>

int main() {
    std::cout << "Hello, World!" << std::endl;
    return 0;
}`,
  },

  "Basic syntax and structure": {
  "title": "Basic syntax and structure",
  "content": "C++ is a statically-typed, compiled programming language with a syntax that builds upon C. It uses semicolons to terminate statements and curly braces to define blocks of code. The basic structure of a C++ program includes headers, a `main()` function where execution begins, and standard input/output operations. Understanding these fundamental aspects is essential for writing and compiling C++ programs.",
  "code": `#include <iostream>  // Preprocessor directive to include input-output stream library

int main() {
    std::cout << "Welcome to C++ programming!" << std::endl;  // Output to console
    return 0;  // Return statement indicating successful execution
}`
},
  "Data types and variables": {
  title: "Data types and variables",
  content: "In C++, data types specify the type of data a variable can store, and variables are used to hold data. C++ supports several fundamental data types including `int` for integers, `float` for floating-point numbers, `char` for characters, and `bool` for boolean values. Variables must be declared with a specific type before they can be used. Understanding these concepts is crucial for effective programming in C++.",
  code: `#include <iostream>

int main() {
    int age = 30;              // Integer variable
    float height = 5.9;        // Floating-point variable
    char initial = 'R';        // Character variable
    bool isStudent = true;     // Boolean variable

    std::cout << "Age: " << age << std::endl;
    std::cout << "Height: " << height << std::endl;
    std::cout << "Initial: " << initial << std::endl;
    std::cout << "Is Student: " << isStudent << std::endl;

    return 0;
}`
},
"Operators": {
  title: "Operators",
  content: "Operators in C++ are symbols that perform operations on variables and values. They include arithmetic operators like `+`, `-`, `*`, and `/`, which perform mathematical operations; comparison operators like `==`, `!=`, `<`, and `>`, which compare values; and logical operators like `&&`, `||`, and `!`, which perform logical operations. Understanding operators is fundamental for writing expressions and performing calculations in C++.",
  code: `#include <iostream>

int main() {
    int a = 15;
    int b = 4;

    std::cout << "a + b = " << (a + b) << std::endl; // Addition
    std::cout << "a - b = " << (a - b) << std::endl; // Subtraction
    std::cout << "a * b = " << (a * b) << std::endl; // Multiplication
    std::cout << "a / b = " << (a / b) << std::endl; // Division
    std::cout << "a % b = " << (a % b) << std::endl; // Modulus
    std::cout << "a == b: " << (a == b) << std::endl; // Comparison
    std::cout << "a != b: " << (a != b) << std::endl; // Comparison
    std::cout << "a > b: " << (a > b) << std::endl;   // Comparison
    std::cout << "a < b: " << (a < b) << std::endl;   // Comparison
    std::cout << "a && b: " << (a && b) << std::endl; // Logical AND

    return 0;
}`
},

  "Control flow": {
  title: "Control flow",
  content: "Control flow statements in C++ determine the order in which code statements are executed based on certain conditions or loops. The primary control flow statements include `if`, `else`, `switch`, `for`, `while`, and `do-while`. These statements allow you to make decisions, repeat code blocks, and manage the execution flow of your program. Understanding control flow is essential for writing complex and functional programs in C++.",
  code: `#include <iostream>

int main() {
    int number = 20;

    // If-Else Statement
    if (number > 0) {
        std::cout << "The number is positive." << std::endl;
    } else if (number < 0) {
        std::cout << "The number is negative." << std::endl;
    } else {
        std::cout << "The number is zero." << std::endl;
    }

    // Switch Statement
    int day = 3;
    switch (day) {
        case 1:
            std::cout << "Monday" << std::endl;
            break;
        case 2:
            std::cout << "Tuesday" << std::endl;
            break;
        case 3:
            std::cout << "Wednesday" << std::endl;
            break;
        default:
            std::cout << "Invalid day" << std::endl;
            break;
    }

    // For Loop
    for (int i = 0; i < 5; ++i) {
        std::cout << "Iteration " << i << std::endl;
    }

    // While Loop
    int count = 0;
    while (count < 3) {
        std::cout << "Count is " << count << std::endl;
        ++count;
    }

    // Do-While Loop
    int num = 0;
    do {
        std::cout << "Number is " << num << std::endl;
        ++num;
    } while (num < 2);

    return 0;
}`
},

  "for loop": {
  title: "for loop",
  content: "The `for` loop in C++ is used for repeating a block of code a specific number of times. It is typically used when the number of iterations is known beforehand. The `for` loop consists of three parts: initialization, condition, and increment/decrement. These parts are combined in a single line and executed in sequence.",
  code: `#include <iostream>

int main() {
    // For Loop Example
    for (int i = 0; i < 5; ++i) {
        std::cout << "Iteration " << i << std::endl;
    }

    return 0;
}`
},
"while loop": {
  title: "while loop",
  content: "The `while` loop in C++ is used to execute a block of code as long as a specified condition is true. It is generally used when the number of iterations is not known before entering the loop. The condition is evaluated before each iteration, and the loop will continue as long as the condition remains true.",
  code: `#include <iostream>

int main() {
    int count = 0;

    // While Loop Example
    while (count < 5) {
        std::cout << "Count is " << count << std::endl;
        ++count;
    }

    return 0;
}`
},
"do while loop": {
  title: "do while loop",
  content: "The `do-while` loop in C++ is similar to the `while` loop but ensures that the block of code is executed at least once before checking the condition. This loop is useful when the initial execution of the loop body is required before evaluating the condition for subsequent iterations.",
  code: `#include <iostream>

int main() {
    int num = 0;

    // Do-While Loop Example
    do {
        std::cout << "Number is " << num << std::endl;
        ++num;
    } while (num < 5);

    return 0;
}`
},

  "Functions": {
  title: "Functions",
  content: "Functions in C++ are blocks of code designed to perform a specific task. They help in organizing code by breaking down complex problems into smaller, manageable pieces. Functions are defined with a return type, a name, and optionally, parameters. They can return values to the caller or perform actions without returning a value. Functions enhance code reusability and maintainability.",
  code: `#include <iostream>

// Function declaration
int add(int a, int b);

int main() {
    int result = add(5, 3);  // Function call
    std::cout << "The sum is " << result << std::endl;
    return 0;
}

// Function definition
int add(int a, int b) {
    return a + b;  // Return the sum of a and b
}`
},

  "Arrays": {
  title: "Arrays",
  content: "Arrays in C++ are collections of elements of the same type stored in contiguous memory locations. They allow you to store multiple values under a single variable name and access them using an index. Arrays are fixed in size, meaning the size must be known at compile time and cannot be changed during runtime.",
  code: `#include <iostream>

int main() {
    // Array declaration and initialization
    int numbers[5] = {1, 2, 3, 4, 5};

    // Accessing and modifying array elements
    for (int i = 0; i < 5; ++i) {
        std::cout << "Element at index " << i << " is " << numbers[i] << std::endl;
    }

    return 0;
}`
},
"Pointers": {
  title: "Pointers",
  content: "Pointers in C++ are variables that store memory addresses of other variables. They allow you to directly access and manipulate memory locations. Pointers are useful for dynamic memory allocation, array manipulation, and efficient function arguments. Understanding pointers is crucial for advanced C++ programming.",
  code: `#include <iostream>

int main() {
    int value = 10;
    int *ptr = &value;  // Pointer to the variable 'value'

    std::cout << "Value: " << value << std::endl;
    std::cout << "Pointer address: " << ptr << std::endl;
    std::cout << "Value via pointer: " << *ptr << std::endl;

    *ptr = 20;  // Modifying the value through the pointer
    std::cout << "Modified value: " << value << std::endl;

    return 0;
}`
},
"Strings": {
  title: "Strings",
  content: "In C++, strings are used to store sequences of characters. The standard library provides the `std::string` class, which simplifies string manipulation and avoids the complexity of C-style strings. `std::string` supports various operations like concatenation, substring extraction, and searching, making string handling more efficient and easier to use.",
  code: `#include <iostream>
#include <string>

int main() {
    // String declaration and initialization
    std::string greeting = "Hello, World!";
    std::string name = "Alice";

    // String operations
    std::string message = greeting + " My name is " + name;
    std::cout << message << std::endl;

    std::cout << "Length of the message: " << message.length() << std::endl;
    std::cout << "Substring (0, 5): " << message.substr(0, 5) << std::endl;

    return 0;
}`
},

  "Input/output": {
  title: "Input/output",
  content: "In C++, input and output operations are primarily handled using the `iostream` library, which provides functionality for reading from and writing to the console. The `cin` object is used for input, while the `cout` object is used for output. These objects are part of the C++ Standard Library and allow for easy and efficient data exchange between the program and the user.",
  code: `#include <iostream>

int main() {
    std::string name;
    int age;

    // Output
    std::cout << "Enter your name: ";
    std::cin >> name;  // Input

    std::cout << "Enter your age: ";
    std::cin >> age;  // Input

    // Output
    std::cout << "Hello, " << name << "! You are " << age << " years old." << std::endl;

    return 0;
}`
},
"Basic file handling": {
  title: "Basic file handling",
  content: "Basic file handling in C++ is managed through the `fstream` library, which provides functionality to read from and write to files. The `ifstream` class is used for input file operations, `ofstream` is used for output file operations, and `fstream` is used for both input and output. File handling allows programs to persist data beyond their execution and read data from files.",
  code: `#include <iostream>
#include <fstream>

int main() {
    // Writing to a file
    std::ofstream outFile("example.txt");
    if (outFile.is_open()) {
        outFile << "Hello, file!" << std::endl;
        outFile << "This is a sample file handling example in C++." << std::endl;
        outFile.close();  // Close the file
    } else {
        std::cerr << "Unable to open file for writing" << std::endl;
    }

    // Reading from a file
    std::ifstream inFile("example.txt");
    std::string line;
    if (inFile.is_open()) {
        while (getline(inFile, line)) {
            std::cout << line << std::endl;  // Output each line from the file
        }
        inFile.close();  // Close the file
    } else {
        std::cerr << "Unable to open file for reading" << std::endl;
    }

    return 0;
}`
},

  "Classes and objects": {
  title: "Classes and objects",
  content: "In C++, classes are fundamental to object-oriented programming. A class defines a blueprint for creating objects, which are instances of the class. Each class encapsulates data and methods that operate on that data. By using classes, you can model real-world entities and their behaviors in a more manageable and modular way. Classes support key object-oriented principles such as encapsulation, inheritance, and polymorphism.",
  code: `#include <iostream>

// Class definition
class Rectangle {
private:
    // Data members
    double width;
    double height;

public:
    // Constructor to initialize the object
    Rectangle(double w, double h) : width(w), height(h) {}

    // Member function to calculate area
    double getArea() const {
        return width * height;
    }

    // Member function to display dimensions
    void displayDimensions() const {
        std::cout << "Width: " << width << ", Height: " << height << std::endl;
    }
};

int main() {
    // Creating an object of the Rectangle class
    Rectangle myRectangle(5.0, 3.0);

    // Using member functions
    myRectangle.displayDimensions();
    std::cout << "Area: " << myRectangle.getArea() << std::endl;

    return 0;
}`
},

  "Constructors and destructors": {
  title: "Constructors and destructors",
  content: "In C++, constructors and destructors are special member functions that are automatically called when objects are created and destroyed, respectively. Constructors are used to initialize objects and allocate resources, while destructors are used to clean up and release resources when the object is no longer needed. Proper use of constructors and destructors ensures that resources are managed efficiently and that the object’s lifecycle is handled correctly.",
  code: `#include <iostream>

class Sample {
private:
    int *data;

public:
    // Constructor: Allocates resources and initializes data
    Sample(int value) {
        data = new int;
        *data = value;
        std::cout << "Constructor called: Data initialized to " << *data << std::endl;
    }

    // Destructor: Releases allocated resources
    ~Sample() {
        delete data;
        std::cout << "Destructor called: Data memory released" << std::endl;
    }

    // Member function to display data
    void displayData() const {
        std::cout << "Data: " << *data << std::endl;
    }
};

int main() {
    // Creating an object of the Sample class
    Sample obj(42);

    // Using member function
    obj.displayData();

    // Destructor will be automatically called when obj goes out of scope
    return 0;
}`
},
  "Inheritance": {
  title: "Inheritance",
  content: "Inheritance is a key feature of object-oriented programming in C++ that allows one class (the derived class) to inherit attributes and methods from another class (the base class). This promotes code reusability and establishes a hierarchical relationship between classes. Inheritance supports different access specifiers (public, protected, and private) that control the visibility of base class members in the derived class.",
  code: `#include <iostream>

// Base class
class Animal {
public:
    void speak() const {
        std::cout << "Animal makes a sound" << std::endl;
    }
};

// Derived class
class Dog : public Animal {
public:
    void bark() const {
        std::cout << "Dog barks" << std::endl;
    }
};

int main() {
    Dog myDog;
    myDog.speak();  // Inherited method from Animal
    myDog.bark();   // Method of Dog

    return 0;
}`
},
"Polymorphism": {
  title: "Polymorphism",
  content: "Polymorphism is a feature of C++ that allows methods to do different things based on the object that is invoking them. There are two types of polymorphism: compile-time (or static) polymorphism achieved through function overloading and operator overloading, and runtime (or dynamic) polymorphism achieved through virtual functions and inheritance. Polymorphism enables a single interface to be used for different underlying data types.",
  code: `#include <iostream>

// Base class with virtual function
class Base {
public:
    virtual void show() const {
        std::cout << "Base class" << std::endl;
    }
};

// Derived class overrides the virtual function
class Derived : public Base {
public:
    void show() const override {
        std::cout << "Derived class" << std::endl;
    }
};

int main() {
    Base* ptr;
    Derived derivedObj;
    ptr = &derivedObj;

    // Calls the Derived class's show() method
    ptr->show();

    return 0;
}`
},
"Operator overloading": {
  title: "Operator overloading",
  content: "Operator overloading in C++ allows you to define custom behaviors for operators (like `+`, `-`, `*`, etc.) for user-defined classes. By overloading operators, you can make objects of your classes work with operators in a natural and intuitive way. This can improve code readability and functionality by allowing objects to be used with standard operators.",
  code: `#include <iostream>

class Complex {
private:
    double real;
    double imag;

public:
    // Constructor
    Complex(double r = 0, double i = 0) : real(r), imag(i) {}

    // Overload + operator
    Complex operator+(const Complex& other) const {
        return Complex(real + other.real, imag + other.imag);
    }

    // Display function
    void display() const {
        std::cout << real << " + " << imag << "i" << std::endl;
    }
};

int main() {
    Complex c1(2.0, 3.0);
    Complex c2(1.5, 4.5);
    Complex c3 = c1 + c2;  // Using overloaded + operator

    c3.display();  // Output: 3.5 + 7.5i

    return 0;
}`
},

  "Function overloading": {
  title: "Function overloading",
  content: "Function overloading in C++ allows you to define multiple functions with the same name but different parameter lists. The correct function to call is determined based on the number and types of arguments passed. This feature enables you to perform different operations using the same function name, which can make your code more readable and intuitive.",
  code: `#include <iostream>

// Function overloads
int add(int a, int b) {
    return a + b;
}

double add(double a, double b) {
    return a + b;
}

int add(int a, int b, int c) {
    return a + b + c;
}

int main() {
    std::cout << "Sum of 2 and 3: " << add(2, 3) << std::endl;       // Calls int add(int, int)
    std::cout << "Sum of 2.5 and 3.5: " << add(2.5, 3.5) << std::endl; // Calls double add(double, double)
    std::cout << "Sum of 1, 2, and 3: " << add(1, 2, 3) << std::endl;   // Calls int add(int, int, int)

    return 0;
}`
},
"Encapsulation": {
  title: "Encapsulation",
  content: "Encapsulation is a fundamental concept in C++ that involves bundling data and methods that operate on that data within a single unit or class. It restricts direct access to some of the object's components and provides a controlled interface for interacting with the data. This helps in protecting the integrity of the data and hides the internal implementation details from the outside world.",
  code: `#include <iostream>

class BankAccount {
private:
    double balance;

public:
    // Constructor to initialize balance
    BankAccount(double initialBalance) : balance(initialBalance) {}

    // Function to deposit money
    void deposit(double amount) {
        if (amount > 0) {
            balance += amount;
        }
    }

    // Function to withdraw money
    void withdraw(double amount) {
        if (amount > 0 && amount <= balance) {
            balance -= amount;
        }
    }

    // Function to get the current balance
    double getBalance() const {
        return balance;
    }
};

int main() {
    BankAccount myAccount(1000.0);

    myAccount.deposit(500.0);
    myAccount.withdraw(200.0);

    std::cout << "Current balance: " << myAccount.getBalance() << std::endl;

    return 0;
}`
},
"Templates": {
  title: "Templates",
  content: "Templates in C++ provide a way to create functions and classes that can operate with any data type. By using templates, you can write generic and reusable code that is type-safe. Templates allow you to define a function or class with placeholder types, which are specified when the function or class is instantiated. This enables the creation of functions and classes that work with any data type without rewriting code for each type.",
  code: `#include <iostream>

// Function template
template <typename T>
T max(T a, T b) {
    return (a > b) ? a : b;
}

// Class template
template <class T>
class Pair {
private:
    T first;
    T second;

public:
    Pair(T f, T s) : first(f), second(s) {}

    T getMax() const {
        return (first > second) ? first : second;
    }
};

int main() {
    // Using function template
    std::cout << "Max of 10 and 20: " << max(10, 20) << std::endl;
    std::cout << "Max of 10.5 and 20.5: " << max(10.5, 20.5) << std::endl;

    // Using class template
    Pair<int> intPair(5, 10);
    std::cout << "Max of 5 and 10: " << intPair.getMax() << std::endl;

    Pair<double> doublePair(5.5, 10.5);
    std::cout << "Max of 5.5 and 10.5: " << doublePair.getMax() << std::endl;

    return 0;
}`
},
"Standard Template Library": {
  title: "Standard Template Library",
  content: "The Standard Template Library (STL) in C++ provides a set of common data structures and algorithms that are generic and efficient. It includes template classes and functions for commonly used data structures like vectors, lists, and maps, as well as algorithms for sorting, searching, and manipulating data. STL helps to avoid reinventing the wheel by providing well-tested, optimized implementations of common data structures and algorithms.",
  code: `#include <iostream>
#include <vector>
#include <algorithm>

// Function to print elements of a vector
void printVector(const std::vector<int>& vec) {
    for (int elem : vec) {
        std::cout << elem << " ";
    }
    std::cout << std::endl;
}

int main() {
    // Creating a vector and adding elements
    std::vector<int> vec = {4, 1, 8, 3, 7};

    // Sorting the vector
    std::sort(vec.begin(), vec.end());

    // Printing the sorted vector
    std::cout << "Sorted vector: ";
    printVector(vec);

    return 0;
}`
},
"Exception handling": {
  title: "Exception handling",
  content: "Exception handling in C++ allows programs to handle runtime errors gracefully without crashing. It uses the `try`, `catch`, and `throw` keywords to manage exceptions. When an error occurs, an exception is thrown, and the program searches for a `catch` block that can handle the exception. This helps in maintaining the normal flow of execution and handling errors in a controlled manner.",
  code: `#include <iostream>
#include <stdexcept>

// Function that throws an exception
void riskyFunction(int value) {
    if (value < 0) {
        throw std::invalid_argument("Negative value not allowed");
    }
    std::cout << "Value is " << value << std::endl;
}

int main() {
    try {
        riskyFunction(10);    // This will work fine
        riskyFunction(-5);    // This will throw an exception
    } catch (const std::invalid_argument& e) {
        std::cerr << "Exception caught: " << e.what() << std::endl;
    }

    return 0;
}`
},
"Memory management": {
  title: "Memory management",
  content: "Memory management in C++ involves allocating and deallocating memory for objects and data. C++ provides direct control over memory through operators like `new` and `delete`. Proper memory management is crucial to prevent memory leaks, dangling pointers, and undefined behavior. Smart pointers, such as `std::unique_ptr` and `std::shared_ptr`, are part of the C++ Standard Library and help manage memory more safely and automatically.",
  code: `#include <iostream>
#include <memory>

// Function to demonstrate manual memory management
void manualMemoryManagement() {
    // Allocating memory
    int* ptr = new int(10);

    // Using allocated memory
    std::cout << "Value: " << *ptr << std::endl;

    // Deallocating memory
    delete ptr;
}

// Function to demonstrate smart pointers
void smartPointerDemo() {
    // Using unique_ptr for automatic memory management
    std::unique_ptr<int> ptr = std::make_unique<int>(20);

    std::cout << "Value: " << *ptr << std::endl;
    // No need to manually delete; memory is automatically managed
}

int main() {
    manualMemoryManagement();
    smartPointerDemo();

    return 0;
}`
},
"Smart pointers": {
  title: "Smart pointers",
  content: "Smart pointers in C++ are wrapper classes that manage the lifetime of dynamically allocated objects. They provide automatic memory management and help prevent memory leaks and dangling pointers. The C++ Standard Library provides several smart pointers, including `std::unique_ptr`, `std::shared_ptr`, and `std::weak_ptr`. Smart pointers ensure that memory is properly deallocated when no longer needed, reducing the risk of memory-related issues.",
  code: `#include <iostream>
#include <memory>

// Function to demonstrate smart pointers
void smartPointerDemo() {
    // Using unique_ptr for automatic memory management
    std::unique_ptr<int> uniquePtr = std::make_unique<int>(30);
    std::cout << "Value of unique_ptr: " << *uniquePtr << std::endl;

    // Using shared_ptr to manage shared ownership
    std::shared_ptr<int> sharedPtr1 = std::make_shared<int>(40);
    {
        std::shared_ptr<int> sharedPtr2 = sharedPtr1; // sharedPtr2 shares ownership with sharedPtr1
        std::cout << "Value of shared_ptr2: " << *sharedPtr2 << std::endl;
    } // sharedPtr2 goes out of scope, but sharedPtr1 still owns the object

    std::cout << "Value of shared_ptr1: " << *sharedPtr1 << std::endl;
}

int main() {
    smartPointerDemo();
    return 0;
}`
},
"Recursion": {
  title: "Recursion",
  content: "Recursion in C++ is a technique where a function calls itself in order to solve a problem. A recursive function typically has a base case to terminate the recursion and a recursive case that breaks the problem into smaller subproblems. Recursion is a powerful tool for solving problems that can be broken down into similar subproblems, such as computing factorials, traversing trees, and more.",
  code: `#include <iostream>

// Recursive function to calculate factorial
int factorial(int n) {
    if (n <= 1) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}

int main() {
    int number = 5;
    std::cout << "Factorial of " << number << " is " << factorial(number) << std::endl;
    return 0;
}`
},
"Virtual functions": {
  title: "Virtual functions",
  content: "Virtual functions in C++ enable dynamic polymorphism, allowing derived classes to override functions in a base class. When a base class pointer points to a derived class object, a virtual function call will invoke the derived class's version of the function, ensuring that the most derived implementation is executed. This mechanism is crucial for achieving runtime polymorphism and designing flexible systems that can be extended without modifying existing code.",
  code: `#include <iostream>

class Base {
public:
    virtual void show() const {
        std::cout << "Base class show function" << std::endl;
    }
};

class Derived : public Base {
public:
    void show() const override {
        std::cout << "Derived class show function" << std::endl;
    }
};

int main() {
    Base* basePtr = new Derived();
    basePtr->show(); // Calls Derived's show function

    delete basePtr; // Clean up memory
    return 0;
}`
},
"Static keyword": {
  title: "Static keyword",
  content: "The `static` keyword in C++ is used to control the visibility and lifetime of variables and functions. In the context of a class, `static` members belong to the class itself rather than to any specific object, and they are shared among all instances of the class. For local variables within functions, `static` extends their lifetime to the duration of the program, preserving their value between function calls.",
  code: `#include <iostream>

class Counter {
private:
    static int count; // Static member variable

public:
    Counter() {
        ++count;
    }

    static int getCount() {
        return count;
    }
};

// Definition of the static member variable
int Counter::count = 0;

int main() {
    Counter c1, c2, c3;

    std::cout << "Number of Counter objects created: " << Counter::getCount() << std::endl;

    return 0;
}`
}

};
