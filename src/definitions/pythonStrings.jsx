function PythonStrings() {
  return (
      <div>
          <h1>Strings</h1>
          <ul>
              <li className="bg-yellow-100 p-4 my-2">
                  <p className="bg-gray-100 p-4 rounded">
                      <b>Concatenation (`+`):</b> Concatenates two strings.
                      <pre>
                          <code>
{`str1 = "Hello"
str2 = "World"
result = str1 + " " + str2
print(result)  # Output: Hello World`}
                          </code>
                      </pre>
                  </p>
              </li>
              <li className="bg-orange-100 p-4 my-2">
                  <p className="bg-gray-100 p-4 rounded">
                      <b>Repetition (`*`):</b> Repeats a string a specified number of times.
                      <pre>
                          <code>
{`str1 = "abc"
result = str1 * 3
print(result)  # Output: abcabcabc`}
                          </code>
                      </pre>
                  </p>
              </li>
              <li className="bg-yellow-100 p-4 my-2">
                  <p className="bg-gray-100 p-4 rounded">
                      <b>Length (`len()`):</b> Returns the length of the string.
                      <pre>
                          <code>
{`str1 = "Python"
length = len(str1)
print(length)  # Output: 6`}
                          </code>
                      </pre>
                  </p>
              </li>
              <li className="bg-orange-100 p-4 my-2">
                  <p className="bg-gray-100 p-4 rounded">
                      <b>Indexing:</b> Accesses individual characters in a string using index.
                      <pre>
                          <code>
{`str1 = "Python"
print(str1[0])   # Output: P
print(str1[-1])  # Output: n`}
                          </code>
                      </pre>
                  </p>
              </li>
              <li className="bg-yellow-100 p-4 my-2">
                  <p className="bg-gray-100 p-4 rounded">
                      <b>Slicing:</b> Extracts a substring from a string.
                      <pre>
                          <code>
{`str1 = "Python Programming"
print(str1[0:6])   # Output: Python
print(str1[7:])    # Output: Programming
print(str1[:6])    # Output: Python
print(str1[-11:-1])  # Output: Programmin`}
                          </code>
                      </pre>
                  </p>
              </li>
              <li className="bg-orange-100 p-4 my-2">
                  <p className="bg-gray-100 p-4 rounded">
                      <b>Upper (`upper()`), Lower (`lower()`), Capitalize (`capitalize()`):</b> Changes the case of the string.
                      <pre>
                          <code>
{`str1 = "hello World"
print(str1.upper())       # Output: HELLO WORLD
print(str1.lower())       # Output: hello world
print(str1.capitalize())  # Output: Hello world`}
                          </code>
                      </pre>
                  </p>
              </li>
              <li className="bg-yellow-100 p-4 my-2">
                  <p className="bg-gray-100 p-4 rounded">
                      <b>Strip (`strip()`), Lstrip (`lstrip()`), Rstrip (`rstrip()`):</b> Removes leading and trailing whitespace characters.
                      <pre>
                          <code>
{`str1 = "   Hello   "
print(str1.strip())    # Output: Hello
print(str1.lstrip())   # Output: Hello   
print(str1.rstrip())   # Output:    Hello`}
                          </code>
                      </pre>
                  </p>
              </li>
              <li className="bg-orange-100 p-4 my-2">
                  <p className="bg-gray-100 p-4 rounded">
                      <b>Split (`split()`):</b> Splits the string into a list of substrings based on a delimiter.
                      <pre>
                          <code>
{`str1 = "Python is awesome"
words = str1.split()
print(words)  # Output: ['Python', 'is', 'awesome']

str2 = "apple,banana,cherry"
fruits = str2.split(",")
print(fruits)  # Output: ['apple', 'banana', 'cherry']`}
                          </code>
                      </pre>
                  </p>
              </li>
              <li className="bg-yellow-100 p-4 my-2">
                  <p className="bg-gray-100 p-4 rounded">
                      <b>Join (`join()`):</b> Concatenates elements of an iterable (e.g., list) into a string.
                      <pre>
                          <code>
{`words = ['Python', 'is', 'awesome']
str1 = ' '.join(words)
print(str1)  # Output: Python is awesome

characters = ['a', 'b', 'c']
str2 = '-'.join(characters)
print(str2)  # Output: a-b-c`}
                          </code>
                      </pre>
                  </p>
              </li>
              <li className="bg-orange-100 p-4 my-2">
                  <p className="bg-gray-100 p-4 rounded">
                      <b>Replace (`replace()`):</b> Replaces occurrences of a substring with another substring.
                      <pre>
                          <code>
{`str1 = "Hello, World!"
new_str = str1.replace("Hello", "Hi")
print(new_str)  # Output: Hi, World!`}
                          </code>
                      </pre>
                  </p>
              </li>
          </ul>
      </div>
  );
}

export default PythonStrings;
