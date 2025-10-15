import React from "react";

function Question4() {
  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold mb-6 text-blue-700">Python I/O Operations & Operators</h2>
      
      <div className="space-y-8">
        {/* Question 1 */}
        <section className="border-l-4 border-blue-500 pl-4">
          <h3 className="text-2xl font-bold mb-3 text-green-700">Q1: What are Input/Output operations in Python?</h3>
          <div className="bg-blue-50 p-4 rounded mb-4">
            <h4 className="font-semibold mb-2">Answer:</h4>
            <p className="mb-3">
              I/O operations allow programs to interact with users and external data sources. 
              Python provides <code>input()</code> for taking input and <code>print()</code> for displaying output.
            </p>
            
            <div className="bg-white p-4 rounded mb-3">
              <p className="font-semibold mb-2">1. Output using print()</p>
              <pre className="bg-gradient-to-r from-amber-50 to-yellow-50 text-gray-800 border-2 border-amber-200 font-mono leading-relaxed p-3 rounded text-sm">
{`# Basic print
print("Hello, World!")

# Multiple values
print("Name:", "Alice", "Age:", 25)
# Output: Name: Alice Age: 25

# Custom separator
print("Python", "Java", "C++", sep=" | ")
# Output: Python | Java | C++

# Custom end character
print("Hello", end=" ")
print("World")
# Output: Hello World

# Formatted output
name = "Bob"
age = 30
print(f"My name is {name} and I am {age} years old")
# Output: My name is Bob and I am 30 years old`}
              </pre>
            </div>

            <div className="bg-white p-4 rounded">
              <p className="font-semibold mb-2">2. Input using input()</p>
              <pre className="bg-gradient-to-r from-amber-50 to-yellow-50 text-gray-800 border-2 border-amber-200 font-mono leading-relaxed p-3 rounded text-sm">
{`# Basic input (always returns string)
name = input("Enter your name: ")
print(f"Hello, {name}!")

# Taking integer input
age = int(input("Enter your age: "))
print(f"Next year you will be {age + 1}")

# Taking float input
price = float(input("Enter price: "))
print(f"With tax: {price * 1.1}")

# Multiple inputs in one line
x, y = input("Enter two numbers: ").split()
print(f"Sum: {int(x) + int(y)}")

# Taking list input
numbers = list(map(int, input("Enter numbers: ").split()))
print(f"Numbers: {numbers}")`}
              </pre>
            </div>
          </div>
        </section>

        {/* Question 2 */}
        <section className="border-l-4 border-green-500 pl-4">
          <h3 className="text-2xl font-bold mb-3 text-green-700">Q2: What are Operators in Python?</h3>
          <div className="bg-green-50 p-4 rounded mb-4">
            <h4 className="font-semibold mb-2">Answer:</h4>
            <p className="mb-3">
              Operators are special symbols that perform operations on variables and values.
            </p>

            <div className="space-y-4">
              {/* Arithmetic Operators */}
              <div className="bg-white p-4 rounded">
                <p className="font-semibold mb-2">1. Arithmetic Operators</p>
                <pre className="bg-gradient-to-r from-amber-50 to-yellow-50 text-gray-800 border-2 border-amber-200 font-mono leading-relaxed p-3 rounded text-sm">
{`a = 10
b = 3

print(a + b)   # Addition: 13
print(a - b)   # Subtraction: 7
print(a * b)   # Multiplication: 30
print(a / b)   # Division: 3.333...
print(a // b)  # Floor Division: 3
print(a % b)   # Modulus (remainder): 1
print(a ** b)  # Exponentiation: 1000`}
                </pre>
              </div>

              {/* Comparison Operators */}
              <div className="bg-white p-4 rounded">
                <p className="font-semibold mb-2">2. Comparison (Relational) Operators</p>
                <pre className="bg-gradient-to-r from-amber-50 to-yellow-50 text-gray-800 border-2 border-amber-200 font-mono leading-relaxed p-3 rounded text-sm">
{`x = 5
y = 10

print(x == y)  # Equal to: False
print(x != y)  # Not equal to: True
print(x > y)   # Greater than: False
print(x < y)   # Less than: True
print(x >= y)  # Greater than or equal: False
print(x <= y)  # Less than or equal: True`}
                </pre>
              </div>

              {/* Logical Operators */}
              <div className="bg-white p-4 rounded">
                <p className="font-semibold mb-2">3. Logical Operators</p>
                <pre className="bg-gradient-to-r from-amber-50 to-yellow-50 text-gray-800 border-2 border-amber-200 font-mono leading-relaxed p-3 rounded text-sm">
{`a = True
b = False

print(a and b)  # AND: False (both must be True)
print(a or b)   # OR: True (at least one True)
print(not a)    # NOT: False (inverts boolean)

# Practical example
age = 25
has_license = True

if age >= 18 and has_license:
    print("Can drive")  # Output: Can drive`}
                </pre>
              </div>

              {/* Assignment Operators */}
              <div className="bg-white p-4 rounded">
                <p className="font-semibold mb-2">4. Assignment Operators</p>
                <pre className="bg-gradient-to-r from-amber-50 to-yellow-50 text-gray-800 border-2 border-amber-200 font-mono leading-relaxed p-3 rounded text-sm">
{`x = 10        # Simple assignment
x += 5        # x = x + 5  → 15
x -= 3        # x = x - 3  → 12
x *= 2        # x = x * 2  → 24
x /= 4        # x = x / 4  → 6.0
x //= 2       # x = x // 2 → 3.0
x %= 2        # x = x % 2  → 1.0
x **= 3       # x = x ** 3 → 1.0`}
                </pre>
              </div>

              {/* Bitwise Operators */}
              <div className="bg-white p-4 rounded">
                <p className="font-semibold mb-2">5. Bitwise Operators</p>
                <pre className="bg-gradient-to-r from-amber-50 to-yellow-50 text-gray-800 border-2 border-amber-200 font-mono leading-relaxed p-3 rounded text-sm">
{`a = 5   # Binary: 0101
b = 3   # Binary: 0011

print(a & b)   # AND: 1 (0001)
print(a | b)   # OR: 7 (0111)
print(a ^ b)   # XOR: 6 (0110)
print(~a)      # NOT: -6 (inverts bits)
print(a << 1)  # Left shift: 10 (1010)
print(a >> 1)  # Right shift: 2 (0010)`}
                </pre>
              </div>

              {/* Membership Operators */}
              <div className="bg-white p-4 rounded">
                <p className="font-semibold mb-2">6. Membership Operators</p>
                <pre className="bg-gradient-to-r from-amber-50 to-yellow-50 text-gray-800 border-2 border-amber-200 font-mono leading-relaxed p-3 rounded text-sm">
{`fruits = ["apple", "banana", "cherry"]

print("apple" in fruits)      # True
print("mango" in fruits)       # False
print("mango" not in fruits)   # True

# Works with strings too
text = "Hello World"
print("Hello" in text)         # True
print("Python" not in text)    # True`}
                </pre>
              </div>

              {/* Identity Operators */}
              <div className="bg-white p-4 rounded">
                <p className="font-semibold mb-2">7. Identity Operators</p>
                <pre className="bg-gradient-to-r from-amber-50 to-yellow-50 text-gray-800 border-2 border-amber-200 font-mono leading-relaxed p-3 rounded text-sm">
{`a = [1, 2, 3]
b = [1, 2, 3]
c = a

print(a is c)      # True (same object in memory)
print(a is b)      # False (different objects)
print(a == b)      # True (same values)
print(a is not b)  # True

# Note: 'is' checks identity, '==' checks equality`}
                </pre>
              </div>
            </div>
          </div>
        </section>

        {/* Question 3 */}
        <section className="border-l-4 border-purple-500 pl-4">
          <h3 className="text-2xl font-bold mb-3 text-green-700">Q3: What is Operator Precedence?</h3>
          <div className="bg-purple-50 p-4 rounded mb-4">
            <h4 className="font-semibold mb-2">Answer:</h4>
            <p className="mb-3">
              Operator precedence determines the order in which operations are performed in an expression.
            </p>
            
            <div className="bg-white p-4 rounded mb-3">
              <p className="font-semibold mb-2">Precedence Order (Highest to Lowest):</p>
              <ol className="list-decimal ml-6 space-y-1 text-sm">
                <li><strong>Parentheses:</strong> <code>()</code></li>
                <li><strong>Exponentiation:</strong> <code>**</code></li>
                <li><strong>Unary:</strong> <code>+x, -x, ~x</code></li>
                <li><strong>Multiplication/Division:</strong> <code>*, /, //, %</code></li>
                <li><strong>Addition/Subtraction:</strong> <code>+, -</code></li>
                <li><strong>Bitwise Shift:</strong> <code>&lt;&lt;, &gt;&gt;</code></li>
                <li><strong>Bitwise AND:</strong> <code>&</code></li>
                <li><strong>Bitwise XOR:</strong> <code>^</code></li>
                <li><strong>Bitwise OR:</strong> <code>|</code></li>
                <li><strong>Comparison:</strong> <code>==, !=, &gt;, &lt;, &gt;=, &lt;=, is, in</code></li>
                <li><strong>Logical NOT:</strong> <code>not</code></li>
                <li><strong>Logical AND:</strong> <code>and</code></li>
                <li><strong>Logical OR:</strong> <code>or</code></li>
              </ol>
            </div>

            <div className="bg-white p-4 rounded">
              <p className="font-semibold mb-2">Examples:</p>
              <pre className="bg-gradient-to-r from-amber-50 to-yellow-50 text-gray-800 border-2 border-amber-200 font-mono leading-relaxed p-3 rounded text-sm">
{`# Without parentheses
result = 2 + 3 * 4
print(result)  # 14 (not 20, because * has higher precedence)

# With parentheses
result = (2 + 3) * 4
print(result)  # 20

# Complex expression
result = 2 + 3 * 4 ** 2 / 2
# Step 1: 4 ** 2 = 16
# Step 2: 3 * 16 = 48
# Step 3: 48 / 2 = 24.0
# Step 4: 2 + 24.0 = 26.0
print(result)  # 26.0

# Logical operators
result = 5 > 3 and 10 < 20 or False
# Step 1: 5 > 3 = True
# Step 2: 10 < 20 = True
# Step 3: True and True = True
# Step 4: True or False = True
print(result)  # True`}
              </pre>
            </div>
          </div>
        </section>

        {/* Question 4 */}
        <section className="border-l-4 border-orange-500 pl-4">
          <h3 className="text-2xl font-bold mb-3 text-green-700">Q4: What are Expressions in Python?</h3>
          <div className="bg-orange-50 p-4 rounded mb-4">
            <h4 className="font-semibold mb-2">Answer:</h4>
            <p className="mb-3">
              An expression is a combination of values, variables, operators, and function calls that Python evaluates to produce a result.
            </p>

            <div className="bg-white p-4 rounded">
              <p className="font-semibold mb-2">Types of Expressions:</p>
              <pre className="bg-gradient-to-r from-amber-50 to-yellow-50 text-gray-800 border-2 border-amber-200 font-mono leading-relaxed p-3 rounded text-sm">
{`# 1. Arithmetic Expression
result = 10 + 5 * 2  # 20

# 2. String Expression
greeting = "Hello" + " " + "World"  # "Hello World"

# 3. Relational Expression
is_adult = age >= 18  # True or False

# 4. Logical Expression
can_vote = age >= 18 and is_citizen  # True or False

# 5. Function Call Expression
length = len("Python")  # 6

# 6. List Comprehension Expression
squares = [x**2 for x in range(5)]  # [0, 1, 4, 9, 16]

# 7. Conditional Expression (Ternary)
status = "Adult" if age >= 18 else "Minor"

# 8. Lambda Expression
square = lambda x: x**2
print(square(5))  # 25`}
              </pre>
            </div>
          </div>
        </section>

        {/* Summary */}
        <section className="bg-gradient-to-r from-blue-100 to-purple-100 p-6 rounded-lg">
          <h3 className="text-xl font-bold mb-3">📚 Key Takeaways:</h3>
          <ul className="list-disc ml-6 space-y-2">
            <li><code>input()</code> takes user input as string, use type conversion for numbers</li>
            <li><code>print()</code> displays output with customizable separator and end character</li>
            <li>7 types of operators: Arithmetic, Comparison, Logical, Assignment, Bitwise, Membership, Identity</li>
            <li>Operator precedence follows PEMDAS (Parentheses, Exponents, Multiplication/Division, Addition/Subtraction)</li>
            <li>Use <code>is</code> for identity comparison, <code>==</code> for value comparison</li>
            <li>Expressions combine values, variables, and operators to produce results</li>
          </ul>
        </section>
      </div>
    </div>
  );
}

export default Question4;
