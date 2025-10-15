import React from "react";

function Question1() {
  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold mb-6 text-blue-700">Introduction to Programming Languages & Python</h2>
      
      <div className="space-y-8">
        {/* Question 1 */}
        <section className="border-l-4 border-blue-500 pl-4">
          <h3 className="text-2xl font-bold mb-3 text-green-700">Q1: What is a Programming Language?</h3>
          <div className="bg-blue-50 p-4 rounded mb-4">
            <h4 className="font-semibold mb-2">Answer:</h4>
            <p className="mb-3">
              A programming language is a formal language comprising a set of instructions that produce various kinds of output. 
              It's used to implement algorithms and communicate with computers.
            </p>
            <div className="bg-white p-3 rounded">
              <p className="font-semibold mb-2">Types of Programming Languages:</p>
              <ul className="list-disc ml-6 space-y-1">
                <li><strong>Low-Level:</strong> Machine Language, Assembly Language (close to hardware)</li>
                <li><strong>High-Level:</strong> Python, Java, C++, JavaScript (human-readable)</li>
                <li><strong>Compiled:</strong> C, C++, Go (converted to machine code before execution)</li>
                <li><strong>Interpreted:</strong> Python, JavaScript, Ruby (executed line by line)</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Question 2 */}
        <section className="border-l-4 border-green-500 pl-4">
          <h3 className="text-2xl font-bold mb-3 text-green-700">Q2: What is Python? Why is it popular?</h3>
          <div className="bg-green-50 p-4 rounded mb-4">
            <h4 className="font-semibold mb-2">Answer:</h4>
            <p className="mb-3">
              Python is a high-level, interpreted, general-purpose programming language created by Guido van Rossum in 1991. 
              It emphasizes code readability with significant indentation.
            </p>
            <div className="bg-white p-3 rounded mb-3">
              <p className="font-semibold mb-2">Why Python is Popular:</p>
              <ul className="list-disc ml-6 space-y-1">
                <li><strong>Easy to Learn:</strong> Simple, English-like syntax</li>
                <li><strong>Versatile:</strong> Web dev, AI/ML, Data Science, Automation, Game Development</li>
                <li><strong>Large Community:</strong> Extensive libraries and frameworks</li>
                <li><strong>Cross-Platform:</strong> Works on Windows, Mac, Linux</li>
                <li><strong>Open Source:</strong> Free to use and distribute</li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 p-5 rounded-xl border-2 border-indigo-200 shadow-md">
              <div className="flex items-center mb-3">
                <span className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-4 py-1.5 rounded-full text-xs font-bold shadow">
                  💻 PYTHON EXAMPLE
                </span>
              </div>
              <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg font-mono text-sm leading-loose overflow-x-auto border border-gray-700">
{`# Simple Python Example
print("Hello, World!")  # Easy to understand

# Python vs Other Languages
# Java: System.out.println("Hello, World!");
# C++: std::cout << "Hello, World!" << std::endl;
# Python: print("Hello, World!")  # Much simpler!`}
              </pre>
            </div>
          </div>
        </section>

        {/* Question 3 */}
        <section className="border-l-4 border-purple-500 pl-4">
          <h3 className="text-2xl font-bold mb-3 text-green-700">Q3: What are Python's key features?</h3>
          <div className="bg-purple-50 p-4 rounded mb-4">
            <h4 className="font-semibold mb-2">Answer:</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white p-3 rounded">
                <p className="font-semibold mb-2">1. Interpreted Language</p>
                <p className="text-sm">Code is executed line by line, no compilation needed</p>
              </div>
              <div className="bg-white p-3 rounded">
                <p className="font-semibold mb-2">2. Dynamically Typed</p>
                <p className="text-sm">No need to declare variable types</p>
              </div>
              <div className="bg-white p-3 rounded">
                <p className="font-semibold mb-2">3. Object-Oriented</p>
                <p className="text-sm">Supports classes, objects, inheritance</p>
              </div>
              <div className="bg-white p-3 rounded">
                <p className="font-semibold mb-2">4. Extensive Libraries</p>
                <p className="text-sm">NumPy, Pandas, Django, Flask, TensorFlow</p>
              </div>
            </div>
            <div className="bg-gradient-to-br from-purple-50 via-pink-50 to-rose-50 p-5 rounded-xl border-2 border-purple-200 shadow-md mt-4">
              <div className="flex items-center mb-3">
                <span className="bg-gradient-to-r from-purple-500 to-pink-600 text-white px-4 py-1.5 rounded-full text-xs font-bold shadow">
                  💻 PYTHON CODE
                </span>
              </div>
              <pre className="bg-white text-gray-800 p-4 rounded-lg font-mono text-sm leading-loose overflow-x-auto border-2 border-purple-100">
{`# Dynamically Typed - No type declaration needed
x = 10          # x is integer
x = "Hello"     # Now x is string - No error!
x = [1, 2, 3]   # Now x is list - Still works!

# Compare with Java (Statically Typed)
# int x = 10;
# x = "Hello";  // Error: incompatible types`}
              </pre>
            </div>
          </div>
        </section>

        {/* Question 4 */}
        <section className="border-l-4 border-orange-500 pl-4">
          <h3 className="text-2xl font-bold mb-3 text-green-700">Q4: What are the different modes of working with Python?</h3>
          <div className="bg-orange-50 p-4 rounded mb-4">
            <h4 className="font-semibold mb-2">Answer:</h4>
            <div className="space-y-4">
              <div className="bg-white p-4 rounded">
                <p className="font-semibold mb-2">1. Interactive Mode (REPL)</p>
                <p className="mb-2">Execute commands one at a time, get immediate results</p>
                <pre className="bg-gradient-to-r from-blue-50 to-cyan-50 text-gray-800 p-4 rounded-lg text-sm border-2 border-blue-200 font-mono leading-relaxed">
{`$ python
>>> print("Hello")
Hello
>>> 2 + 3
5
>>> exit()`}
                </pre>
                <p className="text-sm mt-2"><strong>Use Case:</strong> Testing small code snippets, learning, debugging</p>
              </div>

              <div className="bg-white p-4 rounded">
                <p className="font-semibold mb-2">2. Script Mode (File Execution)</p>
                <p className="mb-2">Write code in .py files and execute them</p>
                <pre className="bg-gradient-to-r from-blue-50 to-cyan-50 text-gray-800 p-4 rounded-lg text-sm border-2 border-blue-200 font-mono leading-relaxed">
{`# Save as hello.py
print("Hello, World!")
for i in range(5):
    print(i)

# Run from terminal
$ python hello.py`}
                </pre>
                <p className="text-sm mt-2"><strong>Use Case:</strong> Building applications, projects, automation scripts</p>
              </div>

              <div className="bg-white p-4 rounded">
                <p className="font-semibold mb-2">3. IDE Mode (Integrated Development Environment)</p>
                <p className="mb-2">Use IDEs like PyCharm, VS Code, Jupyter Notebook</p>
                <ul className="list-disc ml-6 text-sm space-y-1">
                  <li><strong>PyCharm:</strong> Full-featured IDE with debugging, testing</li>
                  <li><strong>VS Code:</strong> Lightweight with extensions</li>
                  <li><strong>Jupyter Notebook:</strong> Interactive notebooks for data science</li>
                  <li><strong>IDLE:</strong> Python's built-in IDE</li>
                </ul>
                <p className="text-sm mt-2"><strong>Use Case:</strong> Professional development, large projects</p>
              </div>
            </div>
          </div>
        </section>

        {/* Question 5 */}
        <section className="border-l-4 border-red-500 pl-4">
          <h3 className="text-2xl font-bold mb-3 text-green-700">Q5: How to install Python and set up the environment?</h3>
          <div className="bg-red-50 p-4 rounded mb-4">
            <h4 className="font-semibold mb-2">Answer:</h4>
            <div className="space-y-3">
              <div className="bg-white p-3 rounded">
                <p className="font-semibold mb-2">Step 1: Download Python</p>
                <p className="text-sm">Visit python.org → Downloads → Choose your OS</p>
              </div>
              <div className="bg-white p-3 rounded">
                <p className="font-semibold mb-2">Step 2: Install</p>
                <ul className="list-disc ml-6 text-sm">
                  <li>Windows: Run installer, check "Add Python to PATH"</li>
                  <li>Mac: Use installer or <code>brew install python3</code></li>
                  <li>Linux: Usually pre-installed or <code>sudo apt install python3</code></li>
                </ul>
              </div>
              <div className="bg-white p-3 rounded">
                <p className="font-semibold mb-2">Step 3: Verify Installation</p>
                <pre className="bg-gray-800 text-white p-3 rounded text-sm mt-2">
{`$ python --version
Python 3.11.5

$ python
>>> print("Python is installed!")
Python is installed!`}
                </pre>
              </div>
              <div className="bg-white p-3 rounded">
                <p className="font-semibold mb-2">Step 4: Install Packages (Optional)</p>
                <pre className="bg-gray-800 text-white p-3 rounded text-sm mt-2">
{`# pip is Python's package manager
$ pip install numpy
$ pip install pandas
$ pip list  # See installed packages`}
                </pre>
              </div>
            </div>
          </div>
        </section>

        {/* Summary */}
        <section className="bg-gradient-to-r from-blue-100 to-purple-100 p-6 rounded-lg">
          <h3 className="text-xl font-bold mb-3">📚 Key Takeaways:</h3>
          <ul className="list-disc ml-6 space-y-2">
            <li>Python is a high-level, interpreted, easy-to-learn programming language</li>
            <li>It's popular for its simplicity, versatility, and large community</li>
            <li>Three modes: Interactive (quick testing), Script (applications), IDE (professional)</li>
            <li>Python is dynamically typed - no need to declare variable types</li>
            <li>Used in web development, AI/ML, data science, automation, and more</li>
          </ul>
        </section>
      </div>
    </div>
  );
}

export default Question1;
