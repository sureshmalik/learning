import React from "react";

function Question3() {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4 text-green-700">Question 3: What is the difference between == and is?</h2>
      
      <div className="space-y-6">
        <section className="bg-blue-50 p-4 rounded">
          <h3 className="text-xl font-semibold mb-3">Answer:</h3>
          <div className="space-y-3">
            <div>
              <h4 className="font-semibold">== (Equality Operator):</h4>
              <ul className="list-disc ml-6">
                <li>Compares the <strong>values</strong> of two objects</li>
                <li>Returns True if values are equal</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold">is (Identity Operator):</h4>
              <ul className="list-disc ml-6">
                <li>Compares the <strong>memory addresses</strong> (identity) of two objects</li>
                <li>Returns True if both variables point to the same object</li>
              </ul>
            </div>
          </div>
        </section>

        <section>
          <h3 className="text-xl font-semibold mb-3">Code Examples:</h3>
          <pre className="bg-gradient-to-r from-green-50 to-emerald-50 text-gray-800 border-2 border-green-200 font-mono leading-relaxed p-4 rounded overflow-x-auto">
{`# Example 1: Lists
list1 = [1, 2, 3]
list2 = [1, 2, 3]
list3 = list1

print(list1 == list2)  # True (same values)
print(list1 is list2)  # False (different objects in memory)
print(list1 is list3)  # True (same object)

# Example 2: Strings (small strings are interned)
str1 = "hello"
str2 = "hello"
print(str1 == str2)  # True
print(str1 is str2)  # True (Python interns small strings)

# Example 3: None comparison
x = None
print(x == None)  # True (works but not recommended)
print(x is None)  # True (recommended way)

# Example 4: Numbers (small integers are cached)
a = 256
b = 256
print(a is b)  # True (Python caches small integers)

a = 257
b = 257
print(a is b)  # False (larger integers not cached)`}
          </pre>
        </section>

        <section className="bg-yellow-50 p-4 rounded">
          <h3 className="text-xl font-semibold mb-3">Key Points:</h3>
          <ul className="list-disc ml-6 space-y-1">
            <li>Use <code>==</code> to compare values</li>
            <li>Use <code>is</code> to check if two variables reference the same object</li>
            <li>Always use <code>is</code> when comparing with None: <code>if x is None:</code></li>
            <li>Python caches small integers (-5 to 256) and small strings</li>
          </ul>
        </section>
      </div>
    </div>
  );
}

export default Question3;
