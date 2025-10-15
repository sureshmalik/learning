import React from "react";

function Question5() {
  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold mb-6 text-blue-700">Flow Control Statements in Python</h2>
      
      <div className="space-y-8">
        {/* Question 1 */}
        <section className="border-l-4 border-blue-500 pl-4">
          <h3 className="text-2xl font-bold mb-3 text-green-700">Q1: What are Flow Control Statements?</h3>
          <div className="bg-blue-50 p-4 rounded mb-4">
            <h4 className="font-semibold mb-2">Answer:</h4>
            <p className="mb-3">
              Flow control statements determine the order in which code is executed. They allow you to make decisions, 
              repeat actions, and control the flow of your program.
            </p>
            
            <div className="bg-white p-3 rounded">
              <p className="font-semibold mb-2">Types of Flow Control:</p>
              <ul className="list-disc ml-6 space-y-1">
                <li><strong>Conditional Statements:</strong> if, elif, else</li>
                <li><strong>Looping Statements:</strong> for, while</li>
                <li><strong>Control Statements:</strong> break, continue, pass</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Question 2 */}
        <section className="border-l-4 border-green-500 pl-4">
          <h3 className="text-2xl font-bold mb-3 text-green-700">Q2: Explain if, elif, else statements</h3>
          <div className="bg-green-50 p-4 rounded mb-4">
            <h4 className="font-semibold mb-2">Answer:</h4>
            <p className="mb-3">
              Conditional statements execute different code blocks based on whether conditions are True or False.
            </p>

            <div className="space-y-4">
              <div className="bg-white p-4 rounded">
                <p className="font-semibold mb-2">1. Simple if Statement</p>
                <pre className="bg-gradient-to-r from-rose-50 to-pink-50 text-gray-800 border-2 border-rose-200 font-mono leading-relaxed p-3 rounded text-sm">
{`age = 20

if age >= 18:
    print("You are an adult")
    print("You can vote")

# Output: You are an adult
#         You can vote`}
                </pre>
              </div>

              <div className="bg-white p-4 rounded">
                <p className="font-semibold mb-2">2. if-else Statement</p>
                <pre className="bg-gradient-to-r from-rose-50 to-pink-50 text-gray-800 border-2 border-rose-200 font-mono leading-relaxed p-3 rounded text-sm">
{`age = 15

if age >= 18:
    print("You are an adult")
else:
    print("You are a minor")

# Output: You are a minor`}
                </pre>
              </div>

              <div className="bg-white p-4 rounded">
                <p className="font-semibold mb-2">3. if-elif-else Statement</p>
                <pre className="bg-gradient-to-r from-rose-50 to-pink-50 text-gray-800 border-2 border-rose-200 font-mono leading-relaxed p-3 rounded text-sm">
{`marks = 75

if marks >= 90:
    print("Grade: A")
elif marks >= 80:
    print("Grade: B")
elif marks >= 70:
    print("Grade: C")
elif marks >= 60:
    print("Grade: D")
else:
    print("Grade: F")

# Output: Grade: C`}
                </pre>
              </div>

              <div className="bg-white p-4 rounded">
                <p className="font-semibold mb-2">4. Nested if Statement</p>
                <pre className="bg-gradient-to-r from-rose-50 to-pink-50 text-gray-800 border-2 border-rose-200 font-mono leading-relaxed p-3 rounded text-sm">
{`age = 25
has_license = True

if age >= 18:
    if has_license:
        print("You can drive")
    else:
        print("You need a license")
else:
    print("You are too young to drive")

# Output: You can drive`}
                </pre>
              </div>

              <div className="bg-white p-4 rounded">
                <p className="font-semibold mb-2">5. Ternary Operator (One-line if-else)</p>
                <pre className="bg-gradient-to-r from-rose-50 to-pink-50 text-gray-800 border-2 border-rose-200 font-mono leading-relaxed p-3 rounded text-sm">
{`age = 20
status = "Adult" if age >= 18 else "Minor"
print(status)  # Output: Adult

# Multiple conditions
num = 15
result = "Positive" if num > 0 else "Negative" if num < 0 else "Zero"
print(result)  # Output: Positive`}
                </pre>
              </div>
            </div>
          </div>
        </section>

        {/* Question 3 */}
        <section className="border-l-4 border-purple-500 pl-4">
          <h3 className="text-2xl font-bold mb-3 text-green-700">Q3: Explain for loop in Python</h3>
          <div className="bg-purple-50 p-4 rounded mb-4">
            <h4 className="font-semibold mb-2">Answer:</h4>
            <p className="mb-3">
              The <code>for</code> loop iterates over a sequence (list, tuple, string, range) and executes code for each item.
            </p>

            <div className="space-y-4">
              <div className="bg-white p-4 rounded">
                <p className="font-semibold mb-2">1. Iterating over a list</p>
                <pre className="bg-gradient-to-r from-rose-50 to-pink-50 text-gray-800 border-2 border-rose-200 font-mono leading-relaxed p-3 rounded text-sm">
{`fruits = ["apple", "banana", "cherry"]

for fruit in fruits:
    print(fruit)

# Output:
# apple
# banana
# cherry`}
                </pre>
              </div>

              <div className="bg-white p-4 rounded">
                <p className="font-semibold mb-2">2. Using range()</p>
                <pre className="bg-gradient-to-r from-rose-50 to-pink-50 text-gray-800 border-2 border-rose-200 font-mono leading-relaxed p-3 rounded text-sm">
{`# range(stop)
for i in range(5):
    print(i, end=" ")
# Output: 0 1 2 3 4

# range(start, stop)
for i in range(2, 6):
    print(i, end=" ")
# Output: 2 3 4 5

# range(start, stop, step)
for i in range(0, 10, 2):
    print(i, end=" ")
# Output: 0 2 4 6 8`}
                </pre>
              </div>

              <div className="bg-white p-4 rounded">
                <p className="font-semibold mb-2">3. Iterating with index using enumerate()</p>
                <pre className="bg-gradient-to-r from-rose-50 to-pink-50 text-gray-800 border-2 border-rose-200 font-mono leading-relaxed p-3 rounded text-sm">
{`fruits = ["apple", "banana", "cherry"]

for index, fruit in enumerate(fruits):
    print(f"{index}: {fruit}")

# Output:
# 0: apple
# 1: banana
# 2: cherry

# Start index from 1
for index, fruit in enumerate(fruits, start=1):
    print(f"{index}: {fruit}")`}
                </pre>
              </div>

              <div className="bg-white p-4 rounded">
                <p className="font-semibold mb-2">4. Iterating over dictionary</p>
                <pre className="bg-gradient-to-r from-rose-50 to-pink-50 text-gray-800 border-2 border-rose-200 font-mono leading-relaxed p-3 rounded text-sm">
{`student = {"name": "Alice", "age": 20, "grade": "A"}

# Iterate over keys
for key in student:
    print(key)

# Iterate over values
for value in student.values():
    print(value)

# Iterate over key-value pairs
for key, value in student.items():
    print(f"{key}: {value}")

# Output:
# name: Alice
# age: 20
# grade: A`}
                </pre>
              </div>

              <div className="bg-white p-4 rounded">
                <p className="font-semibold mb-2">5. Nested for loops</p>
                <pre className="bg-gradient-to-r from-rose-50 to-pink-50 text-gray-800 border-2 border-rose-200 font-mono leading-relaxed p-3 rounded text-sm">
{`# Multiplication table
for i in range(1, 4):
    for j in range(1, 4):
        print(f"{i} x {j} = {i*j}")
    print()  # Empty line

# Pattern printing
for i in range(1, 6):
    for j in range(i):
        print("*", end=" ")
    print()

# Output:
# * 
# * * 
# * * * 
# * * * * 
# * * * * *`}
                </pre>
              </div>
            </div>
          </div>
        </section>

        {/* Question 4 */}
        <section className="border-l-4 border-orange-500 pl-4">
          <h3 className="text-2xl font-bold mb-3 text-green-700">Q4: Explain while loop in Python</h3>
          <div className="bg-orange-50 p-4 rounded mb-4">
            <h4 className="font-semibold mb-2">Answer:</h4>
            <p className="mb-3">
              The <code>while</code> loop executes code repeatedly as long as a condition is True.
            </p>

            <div className="space-y-4">
              <div className="bg-white p-4 rounded">
                <p className="font-semibold mb-2">1. Basic while loop</p>
                <pre className="bg-gradient-to-r from-rose-50 to-pink-50 text-gray-800 border-2 border-rose-200 font-mono leading-relaxed p-3 rounded text-sm">
{`count = 0

while count < 5:
    print(count)
    count += 1

# Output: 0 1 2 3 4`}
                </pre>
              </div>

              <div className="bg-white p-4 rounded">
                <p className="font-semibold mb-2">2. while with user input</p>
                <pre className="bg-gradient-to-r from-rose-50 to-pink-50 text-gray-800 border-2 border-rose-200 font-mono leading-relaxed p-3 rounded text-sm">
{`password = ""

while password != "python123":
    password = input("Enter password: ")

print("Access granted!")

# User keeps entering until correct password`}
                </pre>
              </div>

              <div className="bg-white p-4 rounded">
                <p className="font-semibold mb-2">3. Infinite loop (use with caution!)</p>
                <pre className="bg-gradient-to-r from-rose-50 to-pink-50 text-gray-800 border-2 border-rose-200 font-mono leading-relaxed p-3 rounded text-sm">
{`# Infinite loop - runs forever
while True:
    user_input = input("Enter 'quit' to exit: ")
    if user_input == "quit":
        break
    print(f"You entered: {user_input}")`}
                </pre>
              </div>

              <div className="bg-white p-4 rounded">
                <p className="font-semibold mb-2">4. while-else statement</p>
                <pre className="bg-gradient-to-r from-rose-50 to-pink-50 text-gray-800 border-2 border-rose-200 font-mono leading-relaxed p-3 rounded text-sm">
{`count = 0

while count < 5:
    print(count)
    count += 1
else:
    print("Loop completed normally")

# Output: 0 1 2 3 4
#         Loop completed normally

# else block executes when loop completes without break`}
                </pre>
              </div>
            </div>
          </div>
        </section>

        {/* Question 5 */}
        <section className="border-l-4 border-red-500 pl-4">
          <h3 className="text-2xl font-bold mb-3 text-green-700">Q5: Explain break, continue, and pass statements</h3>
          <div className="bg-red-50 p-4 rounded mb-4">
            <h4 className="font-semibold mb-2">Answer:</h4>
            <p className="mb-3">
              These statements control the flow within loops.
            </p>

            <div className="space-y-4">
              <div className="bg-white p-4 rounded">
                <p className="font-semibold mb-2">1. break - Exit the loop immediately</p>
                <pre className="bg-gradient-to-r from-rose-50 to-pink-50 text-gray-800 border-2 border-rose-200 font-mono leading-relaxed p-3 rounded text-sm">
{`# Find first even number
numbers = [1, 3, 5, 8, 9, 10]

for num in numbers:
    if num % 2 == 0:
        print(f"First even number: {num}")
        break

# Output: First even number: 8

# Search in list
fruits = ["apple", "banana", "cherry"]
search = "banana"

for fruit in fruits:
    if fruit == search:
        print(f"Found {search}!")
        break
else:
    print(f"{search} not found")`}
                </pre>
              </div>

              <div className="bg-white p-4 rounded">
                <p className="font-semibold mb-2">2. continue - Skip current iteration, continue with next</p>
                <pre className="bg-gradient-to-r from-rose-50 to-pink-50 text-gray-800 border-2 border-rose-200 font-mono leading-relaxed p-3 rounded text-sm">
{`# Print only odd numbers
for i in range(10):
    if i % 2 == 0:
        continue  # Skip even numbers
    print(i, end=" ")

# Output: 1 3 5 7 9

# Skip negative numbers
numbers = [1, -2, 3, -4, 5, -6]

for num in numbers:
    if num < 0:
        continue
    print(num, end=" ")

# Output: 1 3 5`}
                </pre>
              </div>

              <div className="bg-white p-4 rounded">
                <p className="font-semibold mb-2">3. pass - Do nothing (placeholder)</p>
                <pre className="bg-gradient-to-r from-rose-50 to-pink-50 text-gray-800 border-2 border-rose-200 font-mono leading-relaxed p-3 rounded text-sm">
{`# Placeholder for future code
for i in range(5):
    if i == 2:
        pass  # TODO: Add logic later
    else:
        print(i)

# Empty function
def my_function():
    pass  # Will implement later

# Empty class
class MyClass:
    pass  # Will add methods later

# pass is useful during development`}
                </pre>
              </div>

              <div className="bg-white p-4 rounded">
                <p className="font-semibold mb-2">4. Comparison: break vs continue vs pass</p>
                <pre className="bg-gradient-to-r from-rose-50 to-pink-50 text-gray-800 border-2 border-rose-200 font-mono leading-relaxed p-3 rounded text-sm">
{`# break - stops the loop
for i in range(5):
    if i == 3:
        break
    print(i, end=" ")
# Output: 0 1 2

print()

# continue - skips current iteration
for i in range(5):
    if i == 3:
        continue
    print(i, end=" ")
# Output: 0 1 2 4

print()

# pass - does nothing
for i in range(5):
    if i == 3:
        pass
    print(i, end=" ")
# Output: 0 1 2 3 4`}
                </pre>
              </div>
            </div>
          </div>
        </section>

        {/* Summary */}
        <section className="bg-gradient-to-r from-blue-100 to-purple-100 p-6 rounded-lg">
          <h3 className="text-xl font-bold mb-3">📚 Key Takeaways:</h3>
          <ul className="list-disc ml-6 space-y-2">
            <li><strong>if-elif-else:</strong> Make decisions based on conditions</li>
            <li><strong>for loop:</strong> Iterate over sequences (lists, strings, range)</li>
            <li><strong>while loop:</strong> Repeat while condition is True</li>
            <li><strong>break:</strong> Exit loop immediately</li>
            <li><strong>continue:</strong> Skip current iteration, move to next</li>
            <li><strong>pass:</strong> Placeholder that does nothing</li>
            <li><strong>else with loops:</strong> Executes when loop completes without break</li>
          </ul>
        </section>
      </div>
    </div>
  );
}

export default Question5;
