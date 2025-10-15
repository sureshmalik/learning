import React from "react";

function Question7() {
  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold mb-6 text-blue-700">Exception Handling, Regular Expressions & File Handling</h2>
      
      <div className="space-y-8">
        {/* Question 1 */}
        <section className="border-l-4 border-blue-500 pl-4">
          <h3 className="text-2xl font-bold mb-3 text-green-700">Q1: What is Exception Handling in Python?</h3>
          <div className="bg-blue-50 p-4 rounded mb-4">
            <h4 className="font-semibold mb-2">Answer:</h4>
            <p className="mb-3">
              Exception handling allows you to gracefully handle errors that occur during program execution, 
              preventing the program from crashing and providing meaningful error messages.
            </p>
            
            <div className="space-y-4">
              <div className="bg-white p-4 rounded">
                <p className="font-semibold mb-2">1. try-except Block</p>
                <pre className="bg-gradient-to-r from-violet-50 to-purple-50 text-gray-800 border-2 border-violet-200 font-mono leading-relaxed p-3 rounded text-sm">
{`# Basic exception handling
try:
    x = 10 / 0  # This will cause ZeroDivisionError
except:
    print("An error occurred!")

# Catching specific exception
try:
    x = 10 / 0
except ZeroDivisionError:
    print("Cannot divide by zero!")

# Multiple except blocks
try:
    num = int(input("Enter a number: "))
    result = 10 / num
except ValueError:
    print("Invalid input! Please enter a number")
except ZeroDivisionError:
    print("Cannot divide by zero!")

# Catching exception object
try:
    x = 10 / 0
except ZeroDivisionError as e:
    print(f"Error: {e}")
    # Output: Error: division by zero`}
                </pre>
              </div>

              <div className="bg-white p-4 rounded">
                <p className="font-semibold mb-2">2. try-except-else-finally</p>
                <pre className="bg-gradient-to-r from-violet-50 to-purple-50 text-gray-800 border-2 border-violet-200 font-mono leading-relaxed p-3 rounded text-sm">
{`try:
    num = int(input("Enter a number: "))
    result = 10 / num
except ValueError:
    print("Invalid input!")
except ZeroDivisionError:
    print("Cannot divide by zero!")
else:
    # Executes if no exception occurs
    print(f"Result: {result}")
finally:
    # Always executes, regardless of exception
    print("Execution completed")

# Example with file handling
try:
    file = open("data.txt", "r")
    content = file.read()
except FileNotFoundError:
    print("File not found!")
finally:
    # Close file even if error occurs
    if 'file' in locals():
        file.close()
        print("File closed")`}
                </pre>
              </div>

              <div className="bg-white p-4 rounded">
                <p className="font-semibold mb-2">3. Raising Exceptions</p>
                <pre className="bg-gradient-to-r from-violet-50 to-purple-50 text-gray-800 border-2 border-violet-200 font-mono leading-relaxed p-3 rounded text-sm">
{`# Raise an exception
def check_age(age):
    if age < 0:
        raise ValueError("Age cannot be negative!")
    elif age < 18:
        raise Exception("Must be 18 or older")
    else:
        print("Age is valid")

try:
    check_age(-5)
except ValueError as e:
    print(f"ValueError: {e}")

# Re-raising exception
try:
    x = 10 / 0
except ZeroDivisionError:
    print("Handling error...")
    raise  # Re-raise the same exception`}
                </pre>
              </div>

              <div className="bg-white p-4 rounded">
                <p className="font-semibold mb-2">4. Custom Exceptions</p>
                <pre className="bg-gradient-to-r from-violet-50 to-purple-50 text-gray-800 border-2 border-violet-200 font-mono leading-relaxed p-3 rounded text-sm">
{`# Create custom exception class
class InsufficientFundsError(Exception):
    def __init__(self, balance, amount):
        self.balance = balance
        self.amount = amount
        self.message = f"Insufficient funds! Balance: {balance}, Required: {amount}"
        super().__init__(self.message)

class BankAccount:
    def __init__(self, balance):
        self.balance = balance
    
    def withdraw(self, amount):
        if amount > self.balance:
            raise InsufficientFundsError(self.balance, amount)
        self.balance -= amount
        return self.balance

# Using custom exception
account = BankAccount(100)
try:
    account.withdraw(150)
except InsufficientFundsError as e:
    print(e.message)`}
                </pre>
              </div>

              <div className="bg-white p-4 rounded">
                <p className="font-semibold mb-2">5. Common Built-in Exceptions</p>
                <pre className="bg-gradient-to-r from-violet-50 to-purple-50 text-gray-800 border-2 border-violet-200 font-mono leading-relaxed p-3 rounded text-sm">
{`# ZeroDivisionError
# 10 / 0

# ValueError
# int("abc")

# TypeError
# "hello" + 5

# IndexError
# my_list = [1, 2, 3]
# my_list[10]

# KeyError
# my_dict = {"name": "Alice"}
# my_dict["age"]

# FileNotFoundError
# open("nonexistent.txt")

# AttributeError
# "hello".append("world")

# ImportError
# import nonexistent_module`}
                </pre>
              </div>
            </div>
          </div>
        </section>

        {/* Question 2 */}
        <section className="border-l-4 border-green-500 pl-4">
          <h3 className="text-2xl font-bold mb-3 text-green-700">Q2: What are Regular Expressions (RegEx)?</h3>
          <div className="bg-green-50 p-4 rounded mb-4">
            <h4 className="font-semibold mb-2">Answer:</h4>
            <p className="mb-3">
              Regular expressions are patterns used to match character combinations in strings. 
              Python's <code>re</code> module provides regex functionality.
            </p>

            <div className="space-y-4">
              <div className="bg-white p-4 rounded">
                <p className="font-semibold mb-2">1. Basic Pattern Matching</p>
                <pre className="bg-gradient-to-r from-violet-50 to-purple-50 text-gray-800 border-2 border-violet-200 font-mono leading-relaxed p-3 rounded text-sm">
{`import re

# search() - Find first match
text = "The rain in Spain"
match = re.search("rain", text)
if match:
    print("Found:", match.group())  # Output: Found: rain
    print("Position:", match.span())  # Output: Position: (4, 8)

# match() - Match at beginning
text = "Hello World"
match = re.match("Hello", text)
if match:
    print("Match found!")

# fullmatch() - Match entire string
text = "Python"
match = re.fullmatch("Python", text)
if match:
    print("Full match!")`}
                </pre>
              </div>

              <div className="bg-white p-4 rounded">
                <p className="font-semibold mb-2">2. Finding All Matches</p>
                <pre className="bg-gradient-to-r from-violet-50 to-purple-50 text-gray-800 border-2 border-violet-200 font-mono leading-relaxed p-3 rounded text-sm">
{`import re

# findall() - Find all matches
text = "The rain in Spain falls mainly in the plain"
matches = re.findall("ain", text)
print(matches)  # Output: ['ain', 'ain', 'ain', 'ain']

# finditer() - Iterator of match objects
text = "cat bat rat"
for match in re.finditer(r"\\w+at", text):
    print(match.group(), match.span())
# Output:
# cat (0, 3)
# bat (4, 7)
# rat (8, 11)`}
                </pre>
              </div>

              <div className="bg-white p-4 rounded">
                <p className="font-semibold mb-2">3. Special Characters (Metacharacters)</p>
                <pre className="bg-gradient-to-r from-violet-50 to-purple-50 text-gray-800 border-2 border-violet-200 font-mono leading-relaxed p-3 rounded text-sm">
{`import re

# . - Any character except newline
re.findall("c.t", "cat cot cut c t")  # ['cat', 'cot', 'cut']

# ^ - Start of string
re.search("^Hello", "Hello World")  # Match

# $ - End of string
re.search("World$", "Hello World")  # Match

# * - 0 or more occurrences
re.findall("ab*", "a ab abb abbb")  # ['a', 'ab', 'abb', 'abbb']

# + - 1 or more occurrences
re.findall("ab+", "a ab abb abbb")  # ['ab', 'abb', 'abbb']

# ? - 0 or 1 occurrence
re.findall("colou?r", "color colour")  # ['color', 'colour']

# {n} - Exactly n occurrences
re.findall("a{3}", "aa aaa aaaa")  # ['aaa', 'aaa']

# {n,m} - Between n and m occurrences
re.findall("a{2,4}", "a aa aaa aaaa aaaaa")  # ['aa', 'aaa', 'aaaa', 'aaaa']

# [] - Character set
re.findall("[aeiou]", "hello")  # ['e', 'o']

# | - OR operator
re.findall("cat|dog", "I have a cat and a dog")  # ['cat', 'dog']`}
                </pre>
              </div>

              <div className="bg-white p-4 rounded">
                <p className="font-semibold mb-2">4. Character Classes</p>
                <pre className="bg-gradient-to-r from-violet-50 to-purple-50 text-gray-800 border-2 border-violet-200 font-mono leading-relaxed p-3 rounded text-sm">
{`import re

# \\d - Digit [0-9]
re.findall(r"\\d", "Room 123")  # ['1', '2', '3']
re.findall(r"\\d+", "Room 123")  # ['123']

# \\D - Non-digit
re.findall(r"\\D+", "Room 123")  # ['Room ']

# \\w - Word character [a-zA-Z0-9_]
re.findall(r"\\w+", "Hello_World 123")  # ['Hello_World', '123']

# \\W - Non-word character
re.findall(r"\\W+", "Hello, World!")  # [', ', '!']

# \\s - Whitespace
re.findall(r"\\s+", "Hello World")  # [' ']

# \\S - Non-whitespace
re.findall(r"\\S+", "Hello World")  # ['Hello', 'World']`}
                </pre>
              </div>

              <div className="bg-white p-4 rounded">
                <p className="font-semibold mb-2">5. Practical Examples</p>
                <pre className="bg-gradient-to-r from-violet-50 to-purple-50 text-gray-800 border-2 border-violet-200 font-mono leading-relaxed p-3 rounded text-sm">
{`import re

# Validate email
email = "user@example.com"
pattern = r"^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\\.[a-zA-Z0-9-.]+$"
if re.match(pattern, email):
    print("Valid email")

# Extract phone numbers
text = "Call me at 123-456-7890 or 987-654-3210"
phones = re.findall(r"\\d{3}-\\d{3}-\\d{4}", text)
print(phones)  # ['123-456-7890', '987-654-3210']

# Replace text
text = "Hello World"
new_text = re.sub("World", "Python", text)
print(new_text)  # Hello Python

# Split string
text = "apple,banana;cherry:date"
fruits = re.split(r"[,;:]", text)
print(fruits)  # ['apple', 'banana', 'cherry', 'date']

# Validate password (8+ chars, 1 uppercase, 1 lowercase, 1 digit)
password = "MyPass123"
pattern = r"^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d).{8,}$"
if re.match(pattern, password):
    print("Strong password")`}
                </pre>
              </div>
            </div>
          </div>
        </section>

        {/* Question 3 */}
        <section className="border-l-4 border-purple-500 pl-4">
          <h3 className="text-2xl font-bold mb-3 text-green-700">Q3: What is File Handling in Python?</h3>
          <div className="bg-purple-50 p-4 rounded mb-4">
            <h4 className="font-semibold mb-2">Answer:</h4>
            <p className="mb-3">
              File handling allows you to read from and write to files on your computer. 
              Python provides built-in functions for file operations.
            </p>

            <div className="space-y-4">
              <div className="bg-white p-4 rounded">
                <p className="font-semibold mb-2">1. Opening and Closing Files</p>
                <pre className="bg-gradient-to-r from-violet-50 to-purple-50 text-gray-800 border-2 border-violet-200 font-mono leading-relaxed p-3 rounded text-sm">
{`# Open file
file = open("example.txt", "r")  # Read mode
content = file.read()
file.close()  # Always close the file

# File modes:
# "r"  - Read (default)
# "w"  - Write (overwrites existing content)
# "a"  - Append (adds to end of file)
# "x"  - Create (fails if file exists)
# "r+" - Read and write
# "b"  - Binary mode (e.g., "rb", "wb")

# Better way: Using with statement (auto-closes file)
with open("example.txt", "r") as file:
    content = file.read()
    print(content)
# File automatically closed after with block`}
                </pre>
              </div>

              <div className="bg-white p-4 rounded">
                <p className="font-semibold mb-2">2. Reading Files</p>
                <pre className="bg-gradient-to-r from-violet-50 to-purple-50 text-gray-800 border-2 border-violet-200 font-mono leading-relaxed p-3 rounded text-sm">
{`# Read entire file
with open("example.txt", "r") as file:
    content = file.read()
    print(content)

# Read line by line
with open("example.txt", "r") as file:
    for line in file:
        print(line.strip())  # strip() removes newline

# Read specific number of characters
with open("example.txt", "r") as file:
    content = file.read(10)  # Read first 10 characters

# Read one line
with open("example.txt", "r") as file:
    line = file.readline()
    print(line)

# Read all lines into a list
with open("example.txt", "r") as file:
    lines = file.readlines()
    print(lines)  # ['line1\\n', 'line2\\n', ...]`}
                </pre>
              </div>

              <div className="bg-white p-4 rounded">
                <p className="font-semibold mb-2">3. Writing to Files</p>
                <pre className="bg-gradient-to-r from-violet-50 to-purple-50 text-gray-800 border-2 border-violet-200 font-mono leading-relaxed p-3 rounded text-sm">
{`# Write to file (overwrites existing content)
with open("output.txt", "w") as file:
    file.write("Hello, World!\\n")
    file.write("This is a new line\\n")

# Write multiple lines
lines = ["Line 1\\n", "Line 2\\n", "Line 3\\n"]
with open("output.txt", "w") as file:
    file.writelines(lines)

# Append to file
with open("output.txt", "a") as file:
    file.write("This is appended\\n")

# Write formatted data
name = "Alice"
age = 25
with open("data.txt", "w") as file:
    file.write(f"Name: {name}\\n")
    file.write(f"Age: {age}\\n")`}
                </pre>
              </div>

              <div className="bg-white p-4 rounded">
                <p className="font-semibold mb-2">4. Working with CSV Files</p>
                <pre className="bg-gradient-to-r from-violet-50 to-purple-50 text-gray-800 border-2 border-violet-200 font-mono leading-relaxed p-3 rounded text-sm">
{`import csv

# Reading CSV
with open("data.csv", "r") as file:
    csv_reader = csv.reader(file)
    for row in csv_reader:
        print(row)  # Each row is a list

# Reading CSV with headers
with open("data.csv", "r") as file:
    csv_reader = csv.DictReader(file)
    for row in csv_reader:
        print(row["name"], row["age"])  # Access by column name

# Writing CSV
data = [
    ["Name", "Age", "City"],
    ["Alice", "25", "NYC"],
    ["Bob", "30", "LA"]
]

with open("output.csv", "w", newline='') as file:
    csv_writer = csv.writer(file)
    csv_writer.writerows(data)

# Writing CSV with DictWriter
data = [
    {"name": "Alice", "age": 25, "city": "NYC"},
    {"name": "Bob", "age": 30, "city": "LA"}
]

with open("output.csv", "w", newline='') as file:
    fieldnames = ["name", "age", "city"]
    csv_writer = csv.DictWriter(file, fieldnames=fieldnames)
    csv_writer.writeheader()
    csv_writer.writerows(data)`}
                </pre>
              </div>

              <div className="bg-white p-4 rounded">
                <p className="font-semibold mb-2">5. Working with JSON Files</p>
                <pre className="bg-gradient-to-r from-violet-50 to-purple-50 text-gray-800 border-2 border-violet-200 font-mono leading-relaxed p-3 rounded text-sm">
{`import json

# Reading JSON
with open("data.json", "r") as file:
    data = json.load(file)
    print(data)

# Writing JSON
data = {
    "name": "Alice",
    "age": 25,
    "hobbies": ["reading", "coding"]
}

with open("output.json", "w") as file:
    json.dump(data, file, indent=4)

# Convert Python object to JSON string
json_string = json.dumps(data, indent=2)
print(json_string)

# Convert JSON string to Python object
data = json.loads(json_string)
print(data["name"])`}
                </pre>
              </div>

              <div className="bg-white p-4 rounded">
                <p className="font-semibold mb-2">6. File Operations (os module)</p>
                <pre className="bg-gradient-to-r from-violet-50 to-purple-50 text-gray-800 border-2 border-violet-200 font-mono leading-relaxed p-3 rounded text-sm">
{`import os

# Check if file exists
if os.path.exists("example.txt"):
    print("File exists")

# Get file size
size = os.path.getsize("example.txt")
print(f"Size: {size} bytes")

# Rename file
os.rename("old.txt", "new.txt")

# Delete file
os.remove("unwanted.txt")

# Create directory
os.mkdir("new_folder")

# Remove directory
os.rmdir("empty_folder")

# List files in directory
files = os.listdir(".")
print(files)

# Get current directory
cwd = os.getcwd()
print(cwd)

# Change directory
os.chdir("/path/to/directory")`}
                </pre>
              </div>
            </div>
          </div>
        </section>

        {/* Summary */}
        <section className="bg-gradient-to-r from-blue-100 to-purple-100 p-6 rounded-lg">
          <h3 className="text-xl font-bold mb-3">📚 Key Takeaways:</h3>
          <ul className="list-disc ml-6 space-y-2">
            <li><strong>Exception Handling:</strong> Use try-except-else-finally to handle errors gracefully</li>
            <li><strong>Custom Exceptions:</strong> Create your own exception classes for specific errors</li>
            <li><strong>Regular Expressions:</strong> Pattern matching with re module (search, findall, sub, split)</li>
            <li><strong>File Modes:</strong> "r" (read), "w" (write), "a" (append), "x" (create)</li>
            <li><strong>with statement:</strong> Automatically closes files, recommended for file operations</li>
            <li><strong>CSV & JSON:</strong> Use csv and json modules for structured data</li>
            <li><strong>os module:</strong> File system operations (exists, rename, remove, mkdir)</li>
          </ul>
        </section>
      </div>
    </div>
  );
}

export default Question7;
