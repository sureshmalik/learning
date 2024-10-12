function PythonList() {
  return (
      <div>
          <h1>List</h1>
          <ul>
              <li className="bg-yellow-100 p-4 my-2">
                  <p className="bg-gray-100 p-4 rounded">
                      <b>List Creation (`+`):</b>.
                      <pre>
                          <code>
{`# Creating a list
my_list = [1, 2, 3, 4, 5]

# Creating an empty list
empty_list = []`}
                          </code>
                      </pre>
                  </p>
              </li>
              <li className="bg-orange-100 p-4 my-2">
                  <p className="bg-gray-100 p-4 rounded">
                      <b>Accessing Elements (`*`):</b>
                      <pre>
                          <code>
{`# Accessing elements by index
first_element = my_list[0]     # 1
last_element = my_list[-1]     # 5`}
                          </code>
                      </pre>
                  </p>
              </li>
              <li className="bg-yellow-100 p-4 my-2">
                  <p className="bg-gray-100 p-4 rounded">
                      <b>Slicing (`len()`):</b>
                      <pre>
                          <code>
{`# Slicing a list
sub_list = my_list[1:3]        # [2, 3]`}
                          </code>
                      </pre>
                  </p>
              </li>
              <li className="bg-orange-100 p-4 my-2">
                  <p className="bg-gray-100 p-4 rounded">
                      <b>Modifying Elements:</b> 
                      <pre>
                          <code>
{`# Modifying an element by index
my_list[0] = 10                # [10, 2, 3, 4, 5]`}
                          </code>
                      </pre>
                  </p>
              </li>
              <li className="bg-yellow-100 p-4 my-2">
                  <p className="bg-gray-100 p-4 rounded">
                      <b>Adding Elements:</b>
                      <pre>
                          <code>
{`# Appending an element to the end
my_list.append(6)              # [10, 2, 3, 4, 5, 6]

# Inserting an element at a specific position
my_list.insert(1, 20)          # [10, 20, 2, 3, 4, 5, 6]

# Extending a list with another list
my_list.extend([7, 8, 9])      # [10, 20, 2, 3, 4, 5, 6, 7, 8, 9]`}
                          </code>
                      </pre>
                  </p>
              </li>
              <li className="bg-orange-100 p-4 my-2">
                  <p className="bg-gray-100 p-4 rounded">
                      <b>Removing Elements:</b>
                      <pre>
                          <code>
{`# Removing an element by value
my_list.remove(20)             # [10, 2, 3, 4, 5, 6, 7, 8, 9]

# Removing an element by index
del my_list[0]                 # [2, 3, 4, 5, 6, 7, 8, 9]

# Using pop to remove and return the last element
last_element = my_list.pop()   # 9, my_list becomes [2, 3, 4, 5, 6, 7, 8]

# Using pop to remove and return an element at a specific index
element = my_list.pop(1)       # 3, my_list becomes [2, 4, 5, 6, 7, 8]

# Removing all elements
my_list.clear()                # []`}
                          </code>
                      </pre>
                  </p>
              </li>
              <li className="bg-yellow-100 p-4 my-2">
                  <p className="bg-gray-100 p-4 rounded">
                      <b> Searching Elements:</b> 
                      <pre>
                          <code>
{`# Finding the index of an element
index = my_list.index(4)       # 1

# Counting occurrences of an element
count = my_list.count(4)       # 1`}
                          </code>
                      </pre>
                  </p>
              </li>
              <li className="bg-orange-100 p-4 my-2">
                  <p className="bg-gray-100 p-4 rounded">
                      <b>Sorting and Reversing :</b>
                      <pre>
                          <code>
{`# Sorting a list
my_list.sort()                 # [2, 3, 4, 5, 6, 7, 8]

# Sorting a list in reverse order
my_list.sort(reverse=True)     # [8, 7, 6, 5, 4, 3, 2]

# Reversing a list
my_list.reverse()              # [2, 3, 4, 5, 6, 7, 8]`}
                          </code>
                      </pre>
                  </p>
              </li>
              <li className="bg-yellow-100 p-4 my-2">
                  <p className="bg-gray-100 p-4 rounded">
                      <b>List Comprehensions :</b>
                      <pre>
                          <code>
{`# Creating a list with a comprehension
squares = [x**2 for x in range(10)]  # [0, 1, 4, 9, 16, 25, 36, 49, 64, 81]`}
                          </code>
                      </pre>
                  </p>
              </li>
              <li className="bg-orange-100 p-4 my-2">
                  <p className="bg-gray-100 p-4 rounded">
                      <b>List Iteration :</b>
                      <pre>
                          <code>
{`# Iterating over a list
for item in my_list:
    print(item)

# Iterating with index
for index, value in enumerate(my_list):
    print(index, value)`}
                          </code>
                      </pre>
                  </p>
              </li>
              <li className="bg-orange-100 p-4 my-2">
                  <p className="bg-gray-100 p-4 rounded">
                      <b>List Conversion :</b>
                      <pre>
                          <code>
{`# Converting a string to a list of characters
char_list = list("hello")      # ['h', 'e', 'l', 'l', 'o']

# Converting a list of characters to a string
string = ''.join(char_list)    # "hello"`}
                          </code>
                      </pre>
                  </p>
              </li>
              <li className="bg-orange-100 p-4 my-2">
                  <p className="bg-gray-100 p-4 rounded">
                      <b>Other Useful Methods :</b>
                      <pre>
                          <code>
{`# Copying a list
copied_list = my_list.copy()   # [2, 3, 4, 5, 6, 7, 8]

# Finding the length of a list
length = len(my_list)          # 7

# Finding the minimum and maximum values
min_value = min(my_list)       # 2
max_value = max(my_list)       # 8

# Summing all elements
total = sum(my_list)           # 35`}
                          </code>
                      </pre>
                  </p>
              </li>
          </ul>
      </div>
  );
}

export default PythonList;
