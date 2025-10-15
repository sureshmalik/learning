import React from "react";

function Question8() {
  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold mb-6 text-blue-700">Advanced Python - OOP Principles & OS Module</h2>
      
      <div className="space-y-8">
        {/* Question 1 */}
        <section className="border-l-4 border-blue-500 pl-4">
          <h3 className="text-2xl font-bold mb-3 text-green-700">Q1: What are the 4 Pillars of OOP?</h3>
          <div className="bg-blue-50 p-4 rounded mb-4">
            <h4 className="font-semibold mb-2">Answer:</h4>
            <p className="mb-3">
              Object-Oriented Programming is built on four fundamental principles: Encapsulation, Inheritance, 
              Polymorphism, and Abstraction.
            </p>
            
            <div className="space-y-4">
              <div className="bg-white p-4 rounded">
                <p className="font-semibold mb-2">1. Encapsulation - Data Hiding</p>
                <p className="text-sm mb-2">Bundling data and methods together, restricting direct access to some components.</p>
                <pre className="bg-gradient-to-r from-sky-50 to-blue-50 text-gray-800 border-2 border-sky-200 font-mono leading-relaxed p-3 rounded text-sm">
{`class BankAccount:
    def __init__(self, account_number, balance):
        self.__account_number = account_number  # Private attribute
        self.__balance = balance  # Private attribute
    
    # Getter method
    def get_balance(self):
        return self.__balance
    
    # Setter method with validation
    def deposit(self, amount):
        if amount > 0:
            self.__balance += amount
            print(f"Deposited ${'{'}{amount}{'}'}. New balance: ${'{'}{self.__balance}{'}'}")
        else:
            print("Invalid amount!")
    
    def withdraw(self, amount):
        if 0 < amount <= self.__balance:
            self.__balance -= amount
            print(f"Withdrew ${'{'}{amount}{'}'}. Remaining: ${'{'}{self.__balance}{'}'}")
        else:
            print("Insufficient funds!")

# Usage
account = BankAccount("12345", 1000)
# print(account.__balance)  # Error: Cannot access private attribute
print(account.get_balance())  # Output: 1000
account.deposit(500)  # Output: Deposited $500. New balance: $1500
account.withdraw(200)  # Output: Withdrew $200. Remaining: $1300`}
                </pre>
              </div>

              <div className="bg-white p-4 rounded">
                <p className="font-semibold mb-2">2. Inheritance - Code Reusability</p>
                <p className="text-sm mb-2">Child class inherits properties and methods from parent class.</p>
                <pre className="bg-gradient-to-r from-sky-50 to-blue-50 text-gray-800 border-2 border-sky-200 font-mono leading-relaxed p-3 rounded text-sm">
{`class Animal:
    def __init__(self, name):
        self.name = name
    
    def speak(self):
        pass  # To be overridden
    
    def info(self):
        print(f"I am {self.name}")

class Dog(Animal):
    def speak(self):
        return "Woof!"
    
    def fetch(self):
        return f"{self.name} is fetching the ball"

class Cat(Animal):
    def speak(self):
        return "Meow!"
    
    def scratch(self):
        return f"{self.name} is scratching"

# Usage
dog = Dog("Buddy")
cat = Cat("Whiskers")

dog.info()  # Output: I am Buddy
print(dog.speak())  # Output: Woof!
print(dog.fetch())  # Output: Buddy is fetching the ball

cat.info()  # Output: I am Whiskers
print(cat.speak())  # Output: Meow!
print(cat.scratch())  # Output: Whiskers is scratching`}
                </pre>
              </div>

              <div className="bg-white p-4 rounded">
                <p className="font-semibold mb-2">3. Polymorphism - Many Forms</p>
                <p className="text-sm mb-2">Same method name behaves differently in different classes.</p>
                <pre className="bg-gradient-to-r from-sky-50 to-blue-50 text-gray-800 border-2 border-sky-200 font-mono leading-relaxed p-3 rounded text-sm">
{`class Shape:
    def area(self):
        pass

class Rectangle(Shape):
    def __init__(self, width, height):
        self.width = width
        self.height = height
    
    def area(self):
        return self.width * self.height

class Circle(Shape):
    def __init__(self, radius):
        self.radius = radius
    
    def area(self):
        return 3.14 * self.radius ** 2

class Triangle(Shape):
    def __init__(self, base, height):
        self.base = base
        self.height = height
    
    def area(self):
        return 0.5 * self.base * self.height

# Polymorphism in action
def print_area(shape):
    print(f"Area: {shape.area()}")

# Same function works with different shapes
shapes = [
    Rectangle(5, 10),
    Circle(7),
    Triangle(6, 8)
]

for shape in shapes:
    print_area(shape)

# Output:
# Area: 50
# Area: 153.86
# Area: 24.0`}
                </pre>
              </div>

              <div className="bg-white p-4 rounded">
                <p className="font-semibold mb-2">4. Abstraction - Hiding Complexity</p>
                <p className="text-sm mb-2">Showing only essential features, hiding implementation details.</p>
                <pre className="bg-gradient-to-r from-sky-50 to-blue-50 text-gray-800 border-2 border-sky-200 font-mono leading-relaxed p-3 rounded text-sm">
{`from abc import ABC, abstractmethod

class PaymentProcessor(ABC):
    @abstractmethod
    def process_payment(self, amount):
        pass
    
    @abstractmethod
    def refund(self, transaction_id):
        pass

class CreditCardProcessor(PaymentProcessor):
    def process_payment(self, amount):
        print(f"Processing credit card payment of ${'{'}{amount}{'}'}")
        # Complex credit card logic hidden
        return "CC-" + str(amount)
    
    def refund(self, transaction_id):
        print(f"Refunding transaction {'{'}{transaction_id}{'}'}")
        return True

class PayPalProcessor(PaymentProcessor):
    def process_payment(self, amount):
        print(f"Processing PayPal payment of ${'{'}{amount}{'}'}")
        # Complex PayPal logic hidden
        return "PP-" + str(amount)
    
    def refund(self, transaction_id):
        print(f"Refunding PayPal transaction {transaction_id}")
        return True

# Usage - User doesn't need to know implementation details
def checkout(processor: PaymentProcessor, amount):
    transaction_id = processor.process_payment(amount)
    return transaction_id

# Works with any payment processor
cc_processor = CreditCardProcessor()
paypal_processor = PayPalProcessor()

checkout(cc_processor, 100)  # Output: Processing credit card payment of $100
checkout(paypal_processor, 50)  # Output: Processing PayPal payment of $50`}
                </pre>
              </div>
            </div>
          </div>
        </section>

        {/* Question 2 */}
        <section className="border-l-4 border-green-500 pl-4">
          <h3 className="text-2xl font-bold mb-3 text-green-700">Q2: What is the OS Module in Python?</h3>
          <div className="bg-green-50 p-4 rounded mb-4">
            <h4 className="font-semibold mb-2">Answer:</h4>
            <p className="mb-3">
              The OS module provides functions to interact with the operating system - file operations, 
              directory management, process management, and environment variables.
            </p>

            <div className="space-y-4">
              <div className="bg-white p-4 rounded">
                <p className="font-semibold mb-2">1. Directory Operations</p>
                <pre className="bg-gradient-to-r from-sky-50 to-blue-50 text-gray-800 border-2 border-sky-200 font-mono leading-relaxed p-3 rounded text-sm">
{`import os

# Get current working directory
current_dir = os.getcwd()
print(f"Current directory: {current_dir}")

# Change directory
os.chdir('/path/to/directory')

# Create a new directory
os.mkdir('new_folder')

# Create nested directories
os.makedirs('parent/child/grandchild')

# Remove directory
os.rmdir('empty_folder')

# Remove directory tree
import shutil
shutil.rmtree('folder_with_contents')

# List files and directories
items = os.listdir('.')
print(items)

# List only files
files = [f for f in os.listdir('.') if os.path.isfile(f)]
print(files)

# List only directories
dirs = [d for d in os.listdir('.') if os.path.isdir(d)]
print(dirs)`}
                </pre>
              </div>

              <div className="bg-white p-4 rounded">
                <p className="font-semibold mb-2">2. File Operations</p>
                <pre className="bg-gradient-to-r from-sky-50 to-blue-50 text-gray-800 border-2 border-sky-200 font-mono leading-relaxed p-3 rounded text-sm">
{`import os

# Check if file/directory exists
if os.path.exists('file.txt'):
    print("File exists")

# Check if it's a file
if os.path.isfile('file.txt'):
    print("It's a file")

# Check if it's a directory
if os.path.isdir('folder'):
    print("It's a directory")

# Get file size
size = os.path.getsize('file.txt')
print(f"Size: {size} bytes")

# Rename file
os.rename('old_name.txt', 'new_name.txt')

# Delete file
os.remove('unwanted.txt')

# Get file stats
stats = os.stat('file.txt')
print(f"Size: {stats.st_size}")
print(f"Created: {stats.st_ctime}")
print(f"Modified: {stats.st_mtime}")

# Get absolute path
abs_path = os.path.abspath('file.txt')
print(abs_path)`}
                </pre>
              </div>

              <div className="bg-white p-4 rounded">
                <p className="font-semibold mb-2">3. Path Operations</p>
                <pre className="bg-gradient-to-r from-sky-50 to-blue-50 text-gray-800 border-2 border-sky-200 font-mono leading-relaxed p-3 rounded text-sm">
{`import os

# Join paths (works on any OS)
path = os.path.join('folder', 'subfolder', 'file.txt')
print(path)  # folder/subfolder/file.txt (Unix) or folder\\subfolder\\file.txt (Windows)

# Split path
directory, filename = os.path.split('/home/user/file.txt')
print(directory)  # /home/user
print(filename)   # file.txt

# Get filename without extension
name, ext = os.path.splitext('document.pdf')
print(name)  # document
print(ext)   # .pdf

# Get directory name
dirname = os.path.dirname('/home/user/file.txt')
print(dirname)  # /home/user

# Get base name
basename = os.path.basename('/home/user/file.txt')
print(basename)  # file.txt

# Check if path is absolute
is_abs = os.path.isabs('/home/user')
print(is_abs)  # True`}
                </pre>
              </div>

              <div className="bg-white p-4 rounded">
                <p className="font-semibold mb-2">4. Environment Variables</p>
                <pre className="bg-gradient-to-r from-sky-50 to-blue-50 text-gray-800 border-2 border-sky-200 font-mono leading-relaxed p-3 rounded text-sm">
{`import os

# Get environment variable
home = os.environ.get('HOME')
print(home)

# Get with default value
api_key = os.environ.get('API_KEY', 'default_key')

# Set environment variable
os.environ['MY_VAR'] = 'my_value'

# Get all environment variables
all_vars = os.environ
for key, value in all_vars.items():
    print(f"{key}: {value}")

# Common environment variables
print(os.environ.get('PATH'))
print(os.environ.get('USER'))
print(os.environ.get('HOME'))`}
                </pre>
              </div>

              <div className="bg-white p-4 rounded">
                <p className="font-semibold mb-2">5. Process Management</p>
                <pre className="bg-gradient-to-r from-sky-50 to-blue-50 text-gray-800 border-2 border-sky-200 font-mono leading-relaxed p-3 rounded text-sm">
{`import os

# Get process ID
pid = os.getpid()
print(f"Current process ID: {pid}")

# Get parent process ID
ppid = os.getppid()
print(f"Parent process ID: {ppid}")

# Execute system command
os.system('ls -l')  # Unix
os.system('dir')    # Windows

# Better way: using subprocess
import subprocess

# Run command and get output
result = subprocess.run(['ls', '-l'], capture_output=True, text=True)
print(result.stdout)

# Run Python script
os.system('python script.py')

# Get system information
print(f"OS Name: {os.name}")  # 'posix', 'nt', 'java'
print(f"Platform: {os.sys.platform}")  # 'linux', 'darwin', 'win32'`}
                </pre>
              </div>

              <div className="bg-white p-4 rounded">
                <p className="font-semibold mb-2">6. Practical Example: File Manager</p>
                <pre className="bg-gradient-to-r from-sky-50 to-blue-50 text-gray-800 border-2 border-sky-200 font-mono leading-relaxed p-3 rounded text-sm">
{`import os
import shutil
from datetime import datetime

class FileManager:
    def __init__(self, base_path='.'):
        self.base_path = base_path
    
    def list_files(self, extension=None):
        """List all files with optional extension filter"""
        files = []
        for item in os.listdir(self.base_path):
            path = os.path.join(self.base_path, item)
            if os.path.isfile(path):
                if extension is None or item.endswith(extension):
                    files.append(item)
        return files
    
    def create_backup(self, filename):
        """Create backup of a file"""
        if not os.path.exists(filename):
            print(f"File {filename} not found")
            return
        
        timestamp = datetime.now().strftime('%Y%m%d_%H%M%S')
        backup_name = f"{filename}.backup_{timestamp}"
        shutil.copy2(filename, backup_name)
        print(f"Backup created: {backup_name}")
    
    def organize_by_extension(self):
        """Organize files into folders by extension"""
        for filename in os.listdir(self.base_path):
            if os.path.isfile(filename):
                _, ext = os.path.splitext(filename)
                if ext:
                    ext_folder = ext[1:]  # Remove dot
                    if not os.path.exists(ext_folder):
                        os.mkdir(ext_folder)
                    shutil.move(filename, os.path.join(ext_folder, filename))
        print("Files organized!")
    
    def get_directory_size(self, path='.'):
        """Calculate total size of directory"""
        total_size = 0
        for dirpath, dirnames, filenames in os.walk(path):
            for filename in filenames:
                filepath = os.path.join(dirpath, filename)
                total_size += os.path.getsize(filepath)
        return total_size

# Usage
fm = FileManager()
print(fm.list_files('.py'))  # List all Python files
fm.create_backup('important.txt')
size = fm.get_directory_size()
print(f"Directory size: {size / 1024:.2f} KB")`}
                </pre>
              </div>
            </div>
          </div>
        </section>

        {/* Summary */}
        <section className="bg-gradient-to-r from-blue-100 to-purple-100 p-6 rounded-lg">
          <h3 className="text-xl font-bold mb-3">📚 Key Takeaways:</h3>
          <ul className="list-disc ml-6 space-y-2">
            <li><strong>4 OOP Pillars:</strong> Encapsulation (data hiding), Inheritance (reusability), Polymorphism (many forms), Abstraction (hiding complexity)</li>
            <li><strong>OS Module:</strong> Interact with operating system - files, directories, processes</li>
            <li><strong>os.path:</strong> Cross-platform path operations (join, split, exists, isfile, isdir)</li>
            <li><strong>Environment Variables:</strong> Access with os.environ.get()</li>
            <li><strong>Process Management:</strong> os.getpid(), os.system(), subprocess module</li>
            <li><strong>Best Practice:</strong> Use os.path.join() for cross-platform compatibility</li>
          </ul>
        </section>
      </div>
    </div>
  );
}

export default Question8;
