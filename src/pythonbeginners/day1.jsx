import React from "react";
import { Link, Routes, Route } from "react-router-dom";

function Day1() {
  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1 style={{ textAlign: "center", fontSize: 40 }}><b><u>Input and Output in Python</u></b></h1>
      <br />
      <p>
        In Python, program output is displayed using the <code>print()</code>{" "}
        function, while user input is received through the{" "}
        <code>input()</code> function.    <br /> By default, <code>input()</code> treats
        all input as strings, so explicit type conversion is necessary when
        dealing with other data types like integers or floats.
      </p>
      <br />

      <h2 style={{ textAlign: "center", fontSize: 20 }}>Taking Input from the User in Python</h2>
      <br />
      <p>
        In earlier programs, you might have seen hardcoded values, which makes
        the programs less flexible. To make programs more interactive and allow
        users to define their own data, Python provides the <code>input()</code>{" "}
        function. This allows users to enter values during program execution.
      </p>
      <br />
      <h3>Basic Input Syntax</h3>
      <br />
      <pre style={{ backgroundColor: "#ffe0b2" }}>
        <code>input('prompt')</code>
      </pre>
      <p>
        The <code>prompt</code> is the string message displayed to the user
        before receiving their input. This is optional but often used to guide
        the user.
      </p>
      <br />

      <h2 style={{ textAlign: "center" }}>Examples</h2>
      <br />
      <br />
    
      <h3>1. User Input with a Prompt</h3>
      <pre style={{ backgroundColor: "#fff3e0" }}>
        <code>
          {`name = input("Enter your first name: ")
print("Hey! " + name)`}
        </code>
      </pre>
      <p><strong>Output:</strong></p>
      <pre style={{ backgroundColor: "#ffe0b2" }}>
        <code>
          Enter your first name: Prajit
          <br />
          Hey! Prajit
        </code>
      </pre>
      <br />

      <h3>2. Taking Integer Input</h3>
      <br />
      <pre style={{ backgroundColor: "#fff3e0" }}>
        <code>
          {`age = int(input("Enter your age: "))
new_age = age + 1
name = input("Enter your name: ")
print("Hey! " + name + ", next year you will be " + str(new_age))`}
        </code>
      </pre>
      <p><strong>Output:</strong></p>
      <pre style={{ backgroundColor: "#ffe0b2" }}>
        <code>
          Enter your age: 19
          <br />
          Enter your name: Ayush
          <br />
          Hey! Ayush, next year you will be 20
        </code>
      </pre>
      <br />

      <p>
        <strong>Explanation:</strong> The <code>int()</code> function is used to
        convert the user’s input (which is initially a string) into an integer.
        We then convert the <code>new_age</code> integer back into a string
        using <code>str()</code> for concatenation in the output.
      </p>
      <p>
        <strong>Note:</strong> If you expect decimal input, you can use the{" "}
        <code>float()</code> function instead of <code>int()</code>.
      </p>
      <br />

      <h2 style={{ textAlign: "center" }}>Taking Multiple Inputs in Python</h2>
      <br />
      <p>
        You can gather multiple inputs at once using the <code>input()</code>{" "}
        function combined with the <code>split()</code> method. This is
        especially useful when the user needs to input several pieces of data in
        a single line, separated by spaces.
      </p>

      <h3>Example: Multiple String Inputs</h3>
      <br />
      <pre style={{ backgroundColor: "#fff3e0" }}>
        <code>
          {`inputs = input("Enter three fruits separated by space: ").split()
print(f"Fruits: {inputs}")`}
        </code>
      </pre>
      <br />

      <h2 style={{ textAlign: "center" }}>Working with Sequence Data Types</h2>
      <br />
      <p>
        Python allows you to collect input directly as data types like lists,
        sets, and tuples. The user provides values, and you can convert them
        into the required data type after input.
      </p>

      <h3>1. List of Strings</h3>
      <br />
      <pre style={{ backgroundColor: "#ffe0b2" }}>
        <code>
          {`string_list = input("Enter elements separated by space: ").split()
print("List of strings:", string_list)`}
        </code>
      </pre>
      <br />

      <h3>2. Set of Integers</h3>
      <br />
      <pre style={{ backgroundColor: "#fff3e0" }}>
        <code>
          {`integer_set = set(map(int, input("Enter numbers separated by space: ").split()))
print("Set of integers:", integer_set)`}
        </code>
      </pre>
      <br />

      <h3>3. Tuple of Strings</h3>
      <br />
      <pre style={{ backgroundColor: "#ffe0b2" }}>
        <code>
          {`string_tuple = tuple(input("Enter elements separated by space: ").split())
print("Tuple of strings:", string_tuple)`}
        </code>
      </pre>
      <br />

      <h2 style={{ textAlign: "center" }}>Displaying Output in Python</h2>
      <br />
      <p>
        The <code>print()</code> function is used to display data on the screen
        or write it to a file. You can print strings, numbers, variables, or a
        combination of them. The basic syntax is:
      </p>

      <pre style={{ backgroundColor: "#fff3e0" }}>
        <code>print(object(s), sep=' ', end='\n', file=file, flush=False)</code>
      </pre>
      <br />

      <ul>
        <li>
          <strong>object(s):</strong> The values you want to print (strings,
          variables, etc.).
        </li>
        <li>
          <strong>sep:</strong> The separator between values (default is a
          space).
        </li>
        <li>
          <strong>end:</strong> The string that is printed at the end of the
          output (default is a newline).
        </li>
        <li>
          <strong>file:</strong> An optional parameter specifying a file-like
          object where the output should be written (default is{" "}
          <code>sys.stdout</code>).
        </li>
        <li>
          <strong>flush:</strong> If <code>True</code>, forces the output to be
          flushed (default is <code>False</code>).
        </li>
      </ul>
      <br />

      <h3>Example</h3>
      <br />
      <pre style={{ backgroundColor: "#ffe0b2" }}>
        <code>print("Welcome to Python Programming!")</code>
      </pre>
      <p><strong>Output:</strong></p>
      <pre style={{ backgroundColor: "#fff3e0" }}>
        <code>Welcome to Python Programming!</code>
      </pre>
      <br />

      <h3>Custom Output Example</h3>
      <pre style={{ backgroundColor: "#ffe0b2" }}>
        <code>print("Python", "is", "fun", sep="-", end="!!")</code>
      </pre>
      <p><strong>Output:</strong></p>
      <pre style={{ backgroundColor: "#fff3e0" }}>
        <code>Python-is-fun!!</code>
      </pre>
    </div>
  );
}

export default Day1;
