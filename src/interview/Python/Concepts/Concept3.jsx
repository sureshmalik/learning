import React from "react";

function Concept3() {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Advanced Topics</h2>
      
      <div className="space-y-6">
        <section>
          <h3 className="text-xl font-semibold mb-2">1. Decorators</h3>
          <pre className="bg-gray-800 text-white p-4 rounded overflow-x-auto">
{`def my_decorator(func):
    def wrapper():
        print("Before function")
        func()
        print("After function")
    return wrapper

@my_decorator
def say_hello():
    print("Hello!")

say_hello()`}
          </pre>
        </section>

        <section>
          <h3 className="text-xl font-semibold mb-2">2. Generators</h3>
          <pre className="bg-gray-800 text-white p-4 rounded overflow-x-auto">
{`def fibonacci(n):
    a, b = 0, 1
    for _ in range(n):
        yield a
        a, b = b, a + b

# Usage
for num in fibonacci(10):
    print(num)`}
          </pre>
        </section>

        <section>
          <h3 className="text-xl font-semibold mb-2">3. Context Managers</h3>
          <pre className="bg-gray-800 text-white p-4 rounded overflow-x-auto">
{`# Using with statement
with open('file.txt', 'r') as f:
    content = f.read()
    # File automatically closed

# Custom context manager
class MyContext:
    def __enter__(self):
        print("Entering")
        return self
    
    def __exit__(self, exc_type, exc_val, exc_tb):
        print("Exiting")`}
          </pre>
        </section>
      </div>
    </div>
  );
}

export default Concept3;
