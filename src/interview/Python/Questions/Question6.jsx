import React from "react";

function Question6() {
  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold mb-6 text-blue-700">Functions, Modules & Packages in Python</h2>
      
      <div className="space-y-8">
        {/* Question 1 */}
        <section className="border-l-4 border-blue-500 pl-4">
          <h3 className="text-2xl font-bold mb-3 text-green-700">Q1: What are Functions in Python?</h3>
          <div className="bg-blue-50 p-4 rounded mb-4">
            <h4 className="font-semibold mb-2">Answer:</h4>
            <p className="mb-3">
              A function is a reusable block of code that performs a specific task. Functions help organize code, 
              avoid repetition, and make programs more modular.
            </p>
            
            <div className="space-y-4">
              <div className="bg-white p-4 rounded">
                <p className="font-semibold mb-2">1. Defining and Calling Functions</p>
                <pre className="bg-gradient-to-r from-teal-50 to-cyan-50 text-gray-800 border-2 border-teal-200 font-mono leading-relaxed p-3 rounded text-sm">
{`# Define a function
def greet():
    print("Hello, World!")

# Call the function
greet()  # Output: Hello, World!

# Function with parameters
def greet_person(name):
    print(f"Hello, {name}!")

greet_person("Alice")  # Output: Hello, Alice!

# Function with return value
def add(a, b):
    return a + b

result = add(5, 3)
print(result)  # Output: 8`}
                </pre>
              </div>

              <div className="bg-white p-4 rounded">
                <p className="font-semibold mb-2">2. Function Arguments</p>
                <pre className="bg-gradient-to-r from-teal-50 to-cyan-50 text-gray-800 border-2 border-teal-200 font-mono leading-relaxed p-3 rounded text-sm">
{`# Default arguments
def greet(name="Guest"):
    print(f"Hello, {name}!")

greet()           # Output: Hello, Guest!
greet("Bob")      # Output: Hello, Bob!

# Keyword arguments
def introduce(name, age, city):
    print(f"{name} is {age} years old and lives in {city}")

introduce(age=25, name="Alice", city="NYC")

# *args - Variable number of positional arguments
def sum_all(*numbers):
    return sum(numbers)

print(sum_all(1, 2, 3))        # Output: 6
print(sum_all(1, 2, 3, 4, 5))  # Output: 15

# **kwargs - Variable number of keyword arguments
def print_info(**info):
    for key, value in info.items():
        print(f"{key}: {value}")

print_info(name="Alice", age=25, city="NYC")
# Output:
# name: Alice
# age: 25
# city: NYC`}
                </pre>
              </div>

              <div className="bg-white p-4 rounded">
                <p className="font-semibold mb-2">3. Lambda Functions (Anonymous Functions)</p>
                <pre className="bg-gradient-to-r from-teal-50 to-cyan-50 text-gray-800 border-2 border-teal-200 font-mono leading-relaxed p-3 rounded text-sm">
{`# Lambda syntax: lambda arguments: expression

# Regular function
def square(x):
    return x ** 2

# Lambda equivalent
square = lambda x: x ** 2
print(square(5))  # Output: 25

# Lambda with multiple arguments
add = lambda a, b: a + b
print(add(3, 5))  # Output: 8

# Lambda with map()
numbers = [1, 2, 3, 4, 5]
squared = list(map(lambda x: x**2, numbers))
print(squared)  # Output: [1, 4, 9, 16, 25]

# Lambda with filter()
numbers = [1, 2, 3, 4, 5, 6]
evens = list(filter(lambda x: x % 2 == 0, numbers))
print(evens)  # Output: [2, 4, 6]`}
                </pre>
              </div>

              <div className="bg-white p-4 rounded">
                <p className="font-semibold mb-2">4. Scope and Global Variables</p>
                <pre className="bg-gradient-to-r from-teal-50 to-cyan-50 text-gray-800 border-2 border-teal-200 font-mono leading-relaxed p-3 rounded text-sm">
{`# Local scope
def my_function():
    x = 10  # Local variable
    print(x)

my_function()  # Output: 10
# print(x)  # Error: x is not defined outside function

# Global scope
x = 20  # Global variable

def my_function():
    print(x)  # Can access global variable

my_function()  # Output: 20

# Modifying global variable
x = 20

def modify_global():
    global x
    x = 30

modify_global()
print(x)  # Output: 30`}
                </pre>
              </div>

              <div className="bg-white p-4 rounded">
                <p className="font-semibold mb-2">5. Recursive Functions</p>
                <pre className="bg-gradient-to-r from-teal-50 to-cyan-50 text-gray-800 border-2 border-teal-200 font-mono leading-relaxed p-3 rounded text-sm">
{`# Factorial using recursion
def factorial(n):
    if n == 0 or n == 1:
        return 1
    else:
        return n * factorial(n - 1)

print(factorial(5))  # Output: 120

# Fibonacci sequence
def fibonacci(n):
    if n <= 1:
        return n
    else:
        return fibonacci(n-1) + fibonacci(n-2)

for i in range(7):
    print(fibonacci(i), end=" ")
# Output: 0 1 1 2 3 5 8`}
                </pre>
              </div>
            </div>
          </div>
        </section>

        {/* Question 2 */}
        <section className="border-l-4 border-green-500 pl-4">
          <h3 className="text-2xl font-bold mb-3 text-green-700">Q2: What are Modules in Python?</h3>
          <div className="bg-green-50 p-4 rounded mb-4">
            <h4 className="font-semibold mb-2">Answer:</h4>
            <p className="mb-3">
              A module is a file containing Python code (functions, classes, variables) that can be imported and used in other programs. 
              Modules help organize code and promote reusability.
            </p>

            <div className="space-y-4">
              <div className="bg-white p-4 rounded">
                <p className="font-semibold mb-2">1. Creating a Module</p>
                <pre className="bg-gradient-to-r from-teal-50 to-cyan-50 text-gray-800 border-2 border-teal-200 font-mono leading-relaxed p-3 rounded text-sm">
{`# Save as mymodule.py
def greet(name):
    return f"Hello, {name}!"

def add(a, b):
    return a + b

PI = 3.14159

class Calculator:
    def multiply(self, a, b):
        return a * b`}
                </pre>
              </div>

              <div className="bg-white p-4 rounded">
                <p className="font-semibold mb-2">2. Importing Modules</p>
                <pre className="bg-gradient-to-r from-teal-50 to-cyan-50 text-gray-800 border-2 border-teal-200 font-mono leading-relaxed p-3 rounded text-sm">
{`# Method 1: Import entire module
import mymodule

print(mymodule.greet("Alice"))
print(mymodule.add(5, 3))
print(mymodule.PI)

# Method 2: Import specific items
from mymodule import greet, add

print(greet("Bob"))
print(add(10, 20))

# Method 3: Import with alias
import mymodule as mm

print(mm.greet("Charlie"))

# Method 4: Import all (not recommended)
from mymodule import *

print(greet("David"))
print(PI)`}
                </pre>
              </div>

              <div className="bg-white p-4 rounded">
                <p className="font-semibold mb-2">3. Built-in Modules</p>
                <pre className="bg-gradient-to-r from-teal-50 to-cyan-50 text-gray-800 border-2 border-teal-200 font-mono leading-relaxed p-3 rounded text-sm">
{`# math module
import math

print(math.sqrt(16))      # Output: 4.0
print(math.pi)            # Output: 3.141592653589793
print(math.ceil(4.3))     # Output: 5
print(math.floor(4.7))    # Output: 4

# random module
import random

print(random.randint(1, 10))        # Random integer
print(random.choice([1, 2, 3, 4]))  # Random choice
print(random.random())              # Random float 0-1

# datetime module
import datetime

now = datetime.datetime.now()
print(now)
print(now.year, now.month, now.day)

# os module
import os

print(os.getcwd())        # Current directory
print(os.listdir('.'))    # List files in directory`}
                </pre>
              </div>

              <div className="bg-white p-4 rounded">
                <p className="font-semibold mb-2">4. Module Search Path</p>
                <pre className="bg-gradient-to-r from-teal-50 to-cyan-50 text-gray-800 border-2 border-teal-200 font-mono leading-relaxed p-3 rounded text-sm">
{`import sys

# Python searches for modules in these locations:
for path in sys.path:
    print(path)

# Add custom path
sys.path.append('/my/custom/path')

# Check if module exists
import importlib.util

spec = importlib.util.find_spec("mymodule")
if spec is not None:
    print("Module found!")
else:
    print("Module not found")`}
                </pre>
              </div>

              <div className="bg-white p-4 rounded">
                <p className="font-semibold mb-2">5. __name__ and __main__</p>
                <pre className="bg-gradient-to-r from-teal-50 to-cyan-50 text-gray-800 border-2 border-teal-200 font-mono leading-relaxed p-3 rounded text-sm">
{`# mymodule.py
def greet(name):
    return f"Hello, {name}!"

# This code runs only when module is executed directly
if __name__ == "__main__":
    print("Module is being run directly")
    print(greet("Test"))
else:
    print("Module is being imported")

# When you run: python mymodule.py
# Output: Module is being run directly
#         Hello, Test!

# When you import: import mymodule
# Output: Module is being imported`}
                </pre>
              </div>
            </div>
          </div>
        </section>

        {/* Question 3 */}
        <section className="border-l-4 border-purple-500 pl-4">
          <h3 className="text-2xl font-bold mb-3 text-green-700">Q3: What are Packages in Python?</h3>
          <div className="bg-purple-50 p-4 rounded mb-4">
            <h4 className="font-semibold mb-2">Answer:</h4>
            <p className="mb-3">
              A package is a collection of modules organized in directories. Packages help structure large projects 
              by grouping related modules together.
            </p>

            <div className="space-y-4">
              <div className="bg-white p-4 rounded">
                <p className="font-semibold mb-2">1. Creating a Package</p>
                <pre className="bg-gradient-to-r from-teal-50 to-cyan-50 text-gray-800 border-2 border-teal-200 font-mono leading-relaxed p-3 rounded text-sm">
{`# Directory structure:
mypackage/
    __init__.py        # Makes it a package (can be empty)
    module1.py
    module2.py
    subpackage/
        __init__.py
        module3.py

# module1.py
def func1():
    return "Function from module1"

# module2.py
def func2():
    return "Function from module2"

# subpackage/module3.py
def func3():
    return "Function from module3"`}
                </pre>
              </div>

              <div className="bg-white p-4 rounded">
                <p className="font-semibold mb-2">2. Importing from Packages</p>
                <pre className="bg-gradient-to-r from-teal-50 to-cyan-50 text-gray-800 border-2 border-teal-200 font-mono leading-relaxed p-3 rounded text-sm">
{`# Import entire module from package
import mypackage.module1

print(mypackage.module1.func1())

# Import specific function
from mypackage.module1 import func1

print(func1())

# Import from subpackage
from mypackage.subpackage.module3 import func3

print(func3())

# Import with alias
from mypackage import module1 as m1

print(m1.func1())`}
                </pre>
              </div>

              <div className="bg-white p-4 rounded">
                <p className="font-semibold mb-2">3. __init__.py File</p>
                <pre className="bg-gradient-to-r from-teal-50 to-cyan-50 text-gray-800 border-2 border-teal-200 font-mono leading-relaxed p-3 rounded text-sm">
{`# mypackage/__init__.py

# Initialize package
print("Initializing mypackage")

# Import modules to make them available at package level
from .module1 import func1
from .module2 import func2

# Define what gets imported with "from mypackage import *"
__all__ = ['func1', 'func2']

# Package-level variable
VERSION = "1.0.0"

# Now you can use:
import mypackage
print(mypackage.func1())
print(mypackage.VERSION)`}
                </pre>
              </div>

              <div className="bg-white p-4 rounded">
                <p className="font-semibold mb-2">4. Popular Python Packages</p>
                <pre className="bg-gradient-to-r from-teal-50 to-cyan-50 text-gray-800 border-2 border-teal-200 font-mono leading-relaxed p-3 rounded text-sm">
{`# NumPy - Numerical computing
import numpy as np
arr = np.array([1, 2, 3, 4, 5])
print(arr.mean())

# Pandas - Data analysis
import pandas as pd
df = pd.DataFrame({'A': [1, 2, 3], 'B': [4, 5, 6]})
print(df)

# Requests - HTTP library
import requests
response = requests.get('https://api.github.com')
print(response.status_code)

# Matplotlib - Plotting
import matplotlib.pyplot as plt
plt.plot([1, 2, 3, 4])
plt.show()

# Django - Web framework
# Flask - Micro web framework
# TensorFlow - Machine learning
# Scikit-learn - Machine learning`}
                </pre>
              </div>

              <div className="bg-white p-4 rounded">
                <p className="font-semibold mb-2">5. Installing Packages with pip</p>
                <pre className="bg-gradient-to-r from-teal-50 to-cyan-50 text-gray-800 border-2 border-teal-200 font-mono leading-relaxed p-3 rounded text-sm">
{`# Install a package
$ pip install numpy

# Install specific version
$ pip install numpy==1.21.0

# Install from requirements.txt
$ pip install -r requirements.txt

# Uninstall a package
$ pip uninstall numpy

# List installed packages
$ pip list

# Show package information
$ pip show numpy

# Upgrade a package
$ pip install --upgrade numpy

# Create requirements.txt
$ pip freeze > requirements.txt`}
                </pre>
              </div>
            </div>
          </div>
        </section>

        {/* Question 4 */}
        <section className="border-l-4 border-orange-500 pl-4">
          <h3 className="text-2xl font-bold mb-3 text-green-700">Q4: What is the difference between Module and Package?</h3>
          <div className="bg-orange-50 p-4 rounded mb-4">
            <h4 className="font-semibold mb-2">Answer:</h4>
            
            <div className="bg-white p-4 rounded">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-gray-200">
                    <th className="border p-2 text-left">Aspect</th>
                    <th className="border p-2 text-left">Module</th>
                    <th className="border p-2 text-left">Package</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border p-2 font-semibold">Definition</td>
                    <td className="border p-2">A single .py file</td>
                    <td className="border p-2">A directory containing modules</td>
                  </tr>
                  <tr>
                    <td className="border p-2 font-semibold">Structure</td>
                    <td className="border p-2">mymodule.py</td>
                    <td className="border p-2">mypackage/__init__.py</td>
                  </tr>
                  <tr>
                    <td className="border p-2 font-semibold">Contains</td>
                    <td className="border p-2">Functions, classes, variables</td>
                    <td className="border p-2">Multiple modules and sub-packages</td>
                  </tr>
                  <tr>
                    <td className="border p-2 font-semibold">Import</td>
                    <td className="border p-2">import mymodule</td>
                    <td className="border p-2">import mypackage.module</td>
                  </tr>
                  <tr>
                    <td className="border p-2 font-semibold">Example</td>
                    <td className="border p-2">math.py, random.py</td>
                    <td className="border p-2">numpy, pandas, django</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Summary */}
        <section className="bg-gradient-to-r from-blue-100 to-purple-100 p-6 rounded-lg">
          <h3 className="text-xl font-bold mb-3">📚 Key Takeaways:</h3>
          <ul className="list-disc ml-6 space-y-2">
            <li><strong>Functions:</strong> Reusable code blocks with parameters and return values</li>
            <li><strong>*args:</strong> Variable number of positional arguments</li>
            <li><strong>**kwargs:</strong> Variable number of keyword arguments</li>
            <li><strong>Lambda:</strong> Anonymous one-line functions</li>
            <li><strong>Modules:</strong> Single .py files containing Python code</li>
            <li><strong>Packages:</strong> Directories containing multiple modules</li>
            <li><strong>__init__.py:</strong> Makes a directory a package</li>
            <li><strong>pip:</strong> Package manager for installing external packages</li>
          </ul>
        </section>
      </div>
    </div>
  );
}

export default Question6;
