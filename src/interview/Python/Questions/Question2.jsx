import React from "react";

function Question2() {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4 text-green-700">Question 2: Explain *args and **kwargs</h2>
      
      <div className="space-y-6">
        <section className="bg-blue-50 p-4 rounded">
          <h3 className="text-xl font-semibold mb-3">Answer:</h3>
          <div className="space-y-3">
            <div>
              <h4 className="font-semibold">*args (Non-keyword Arguments):</h4>
              <ul className="list-disc ml-6">
                <li>Used to pass variable number of positional arguments</li>
                <li>Arguments are received as a tuple</li>
                <li>The name 'args' is convention, * is important</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold">**kwargs (Keyword Arguments):</h4>
              <ul className="list-disc ml-6">
                <li>Used to pass variable number of keyword arguments</li>
                <li>Arguments are received as a dictionary</li>
                <li>The name 'kwargs' is convention, ** is important</li>
              </ul>
            </div>
          </div>
        </section>

        <section>
          <h3 className="text-xl font-semibold mb-3">Code Examples:</h3>
          <pre className="bg-gradient-to-r from-blue-50 to-cyan-50 text-gray-800 p-4 rounded-lg text-sm border-2 border-blue-200 font-mono leading-relaxed overflow-x-auto">
{`# *args example
def sum_numbers(*args):
    total = 0
    for num in args:
        total += num
    return total

print(sum_numbers(1, 2, 3))  # 6
print(sum_numbers(1, 2, 3, 4, 5))  # 15

# **kwargs example
def print_info(**kwargs):
    for key, value in kwargs.items():
        print(f"{key}: {value}")

print_info(name="Alice", age=30, city="NYC")
# Output:
# name: Alice
# age: 30
# city: NYC

# Combined usage
def mixed_function(arg1, arg2, *args, **kwargs):
    print(f"arg1: {arg1}")
    print(f"arg2: {arg2}")
    print(f"args: {args}")
    print(f"kwargs: {kwargs}")

mixed_function(1, 2, 3, 4, 5, name="Bob", age=25)`}
          </pre>
        </section>

        <section className="bg-yellow-50 p-4 rounded">
          <h3 className="text-xl font-semibold mb-3">Key Points:</h3>
          <ul className="list-disc ml-6 space-y-1">
            <li>*args must come before **kwargs in function definition</li>
            <li>Regular arguments come before *args</li>
            <li>Can use any name with * and **, but args/kwargs is convention</li>
          </ul>
        </section>
      </div>
    </div>
  );
}

export default Question2;
