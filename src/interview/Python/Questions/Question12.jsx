import React from "react";

function Question12() {
  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold mb-6 text-blue-700">NumPy - Numerical Python Library</h2>
      
      <div className="space-y-8">
        {/* Question 1 */}
        <section className="border-l-4 border-blue-500 pl-4">
          <h3 className="text-2xl font-bold mb-3 text-green-700">Q1: What is NumPy?</h3>
          <div className="bg-blue-50 p-4 rounded mb-4">
            <h4 className="font-semibold mb-2">Answer:</h4>
            <p className="mb-3">
              NumPy (Numerical Python) is a fundamental library for scientific computing in Python. It provides support 
              for large, multi-dimensional arrays and matrices, along with mathematical functions to operate on these arrays.
            </p>
            
            <div className="space-y-4">
              <div className="bg-white p-4 rounded">
                <p className="font-semibold mb-2">1. Installing and Importing NumPy</p>
                <pre className="bg-gradient-to-r from-indigo-50 to-blue-50 text-gray-800 border-2 border-indigo-200 font-mono leading-relaxed p-3 rounded text-sm">
{`# Install NumPy
# pip install numpy

import numpy as np

# Check version
print(np.__version__)  # 1.24.3

# Why NumPy?
# 1. Fast: Written in C, much faster than Python lists
# 2. Memory efficient: Uses less memory than lists
# 3. Convenient: Built-in mathematical functions
# 4. Broadcasting: Automatic array operations

# Speed comparison
import time

# Python list
python_list = list(range(1000000))
start = time.time()
result = [x * 2 for x in python_list]
print(f"Python list: {time.time() - start:.4f} seconds")

# NumPy array
numpy_array = np.arange(1000000)
start = time.time()
result = numpy_array * 2
print(f"NumPy array: {time.time() - start:.4f} seconds")
# NumPy is 10-100x faster!`}
                </pre>
              </div>

              <div className="bg-white p-4 rounded">
                <p className="font-semibold mb-2">2. Creating NumPy Arrays</p>
                <pre className="bg-gradient-to-r from-indigo-50 to-blue-50 text-gray-800 border-2 border-indigo-200 font-mono leading-relaxed p-3 rounded text-sm">
{`import numpy as np

# From Python list
arr1 = np.array([1, 2, 3, 4, 5])
print(arr1)  # [1 2 3 4 5]

# 2D array (matrix)
arr2 = np.array([[1, 2, 3], [4, 5, 6]])
print(arr2)
# [[1 2 3]
#  [4 5 6]]

# 3D array
arr3 = np.array([[[1, 2], [3, 4]], [[5, 6], [7, 8]]])
print(arr3.shape)  # (2, 2, 2)

# Using arange (like range)
arr4 = np.arange(10)  # [0 1 2 3 4 5 6 7 8 9]
arr5 = np.arange(1, 11, 2)  # [1 3 5 7 9]

# Using linspace (evenly spaced)
arr6 = np.linspace(0, 10, 5)  # [0. 2.5 5. 7.5 10.]

# Zeros and Ones
zeros = np.zeros((3, 4))  # 3x4 array of zeros
ones = np.ones((2, 3))    # 2x3 array of ones
full = np.full((2, 2), 7)  # 2x2 array filled with 7

# Identity matrix
identity = np.eye(3)  # 3x3 identity matrix

# Random arrays
random1 = np.random.rand(3, 3)  # Random values [0, 1)
random2 = np.random.randint(1, 100, (3, 3))  # Random integers
random3 = np.random.randn(3, 3)  # Normal distribution

# Empty array (uninitialized)
empty = np.empty((2, 3))`}
                </pre>
              </div>

              <div className="bg-white p-4 rounded">
                <p className="font-semibold mb-2">3. Array Attributes and Data Types</p>
                <pre className="bg-gradient-to-r from-indigo-50 to-blue-50 text-gray-800 border-2 border-indigo-200 font-mono leading-relaxed p-3 rounded text-sm">
{`import numpy as np

arr = np.array([[1, 2, 3], [4, 5, 6]])

# Array attributes
print(arr.shape)      # (2, 3) - dimensions
print(arr.ndim)       # 2 - number of dimensions
print(arr.size)       # 6 - total elements
print(arr.dtype)      # int64 - data type
print(arr.itemsize)   # 8 - bytes per element
print(arr.nbytes)     # 48 - total bytes

# Data types
int_arr = np.array([1, 2, 3], dtype=np.int32)
float_arr = np.array([1.5, 2.5, 3.5], dtype=np.float64)
bool_arr = np.array([True, False, True], dtype=np.bool_)
str_arr = np.array(['a', 'b', 'c'], dtype=np.str_)

# Common data types:
# np.int8, np.int16, np.int32, np.int64
# np.uint8, np.uint16, np.uint32, np.uint64
# np.float16, np.float32, np.float64
# np.complex64, np.complex128
# np.bool_, np.str_

# Type conversion
arr_float = arr.astype(np.float64)
print(arr_float.dtype)  # float64

# Check type
print(type(arr))  # <class 'numpy.ndarray'>`}
                </pre>
              </div>

              <div className="bg-white p-4 rounded">
                <p className="font-semibold mb-2">4. View vs Copy</p>
                <pre className="bg-gradient-to-r from-indigo-50 to-blue-50 text-gray-800 border-2 border-indigo-200 font-mono leading-relaxed p-3 rounded text-sm">
{`import numpy as np

arr = np.array([1, 2, 3, 4, 5])

# VIEW - shares memory with original
view = arr.view()
view[0] = 100
print(arr)   # [100 2 3 4 5] - original changed!
print(view)  # [100 2 3 4 5]

# COPY - independent copy
arr = np.array([1, 2, 3, 4, 5])
copy = arr.copy()
copy[0] = 100
print(arr)   # [1 2 3 4 5] - original unchanged
print(copy)  # [100 2 3 4 5]

# Check if array owns data
print(arr.base)   # None - owns data
print(view.base)  # [1 2 3 4 5] - references original
print(copy.base)  # None - owns data

# Slicing creates view
arr = np.array([1, 2, 3, 4, 5])
slice_view = arr[1:4]
slice_view[0] = 100
print(arr)  # [1 100 3 4 5] - original changed!

# To avoid this, use copy
slice_copy = arr[1:4].copy()
slice_copy[0] = 200
print(arr)  # [1 100 3 4 5] - original unchanged`}
                </pre>
              </div>
            </div>
          </div>
        </section>

        {/* Question 2 */}
        <section className="border-l-4 border-green-500 pl-4">
          <h3 className="text-2xl font-bold mb-3 text-green-700">Q2: Indexing, Slicing and Iteration in NumPy</h3>
          <div className="bg-green-50 p-4 rounded mb-4">
            <h4 className="font-semibold mb-2">Answer:</h4>
            <p className="mb-3">
              NumPy provides powerful indexing and slicing capabilities for accessing and manipulating array elements.
            </p>

            <div className="space-y-4">
              <div className="bg-white p-4 rounded">
                <p className="font-semibold mb-2">1. Basic Indexing and Slicing</p>
                <pre className="bg-gradient-to-r from-indigo-50 to-blue-50 text-gray-800 border-2 border-indigo-200 font-mono leading-relaxed p-3 rounded text-sm">
{`import numpy as np

# 1D array indexing
arr = np.array([10, 20, 30, 40, 50])
print(arr[0])     # 10 - first element
print(arr[-1])    # 50 - last element
print(arr[1:4])   # [20 30 40] - slice
print(arr[::2])   # [10 30 50] - every 2nd element
print(arr[::-1])  # [50 40 30 20 10] - reverse

# 2D array indexing
arr2d = np.array([[1, 2, 3], [4, 5, 6], [7, 8, 9]])
print(arr2d[0, 0])      # 1 - row 0, col 0
print(arr2d[1, 2])      # 6 - row 1, col 2
print(arr2d[0])         # [1 2 3] - entire row 0
print(arr2d[:, 0])      # [1 4 7] - entire column 0
print(arr2d[0:2, 1:3])  # [[2 3] [5 6]] - subarray

# 3D array indexing
arr3d = np.array([[[1, 2], [3, 4]], [[5, 6], [7, 8]]])
print(arr3d[0, 1, 1])  # 4
print(arr3d[1])        # [[5 6] [7 8]]

# Negative indexing
print(arr2d[-1, -1])   # 9 - last row, last column
print(arr2d[-2:, -2:]) # [[5 6] [8 9]]`}
                </pre>
              </div>

              <div className="bg-white p-4 rounded">
                <p className="font-semibold mb-2">2. Advanced Indexing</p>
                <pre className="bg-gradient-to-r from-indigo-50 to-blue-50 text-gray-800 border-2 border-indigo-200 font-mono leading-relaxed p-3 rounded text-sm">
{`import numpy as np

arr = np.array([10, 20, 30, 40, 50])

# Boolean indexing
mask = arr > 25
print(mask)        # [False False True True True]
print(arr[mask])   # [30 40 50]

# Direct boolean condition
print(arr[arr > 25])  # [30 40 50]
print(arr[(arr > 20) & (arr < 50)])  # [30 40]

# Integer array indexing
indices = np.array([0, 2, 4])
print(arr[indices])  # [10 30 50]

# 2D boolean indexing
arr2d = np.array([[1, 2, 3], [4, 5, 6], [7, 8, 9]])
print(arr2d[arr2d > 5])  # [6 7 8 9]

# Fancy indexing (2D)
rows = np.array([0, 2])
cols = np.array([1, 2])
print(arr2d[rows, cols])  # [2 9]

# Where function
result = np.where(arr > 25, arr, 0)
print(result)  # [0 0 30 40 50]

# Replace values
arr[arr > 30] = 100
print(arr)  # [10 20 30 100 100]`}
                </pre>
              </div>

              <div className="bg-white p-4 rounded">
                <p className="font-semibold mb-2">3. Iterating Arrays</p>
                <pre className="bg-gradient-to-r from-indigo-50 to-blue-50 text-gray-800 border-2 border-indigo-200 font-mono leading-relaxed p-3 rounded text-sm">
{`import numpy as np

# 1D array iteration
arr = np.array([1, 2, 3, 4, 5])
for x in arr:
    print(x, end=' ')  # 1 2 3 4 5

# 2D array iteration (rows)
arr2d = np.array([[1, 2, 3], [4, 5, 6]])
for row in arr2d:
    print(row)  # [1 2 3], then [4 5 6]

# Iterate all elements
for x in arr2d.flat:
    print(x, end=' ')  # 1 2 3 4 5 6

# Using nditer
for x in np.nditer(arr2d):
    print(x, end=' ')  # 1 2 3 4 5 6

# Iterate with index
for idx, x in np.ndenumerate(arr2d):
    print(f"Index: {idx}, Value: {x}")
# Index: (0, 0), Value: 1
# Index: (0, 1), Value: 2
# ...

# Iterate columns
for col in arr2d.T:
    print(col)  # [1 4], then [2 5], then [3 6]

# Iterate with modification
arr = np.array([1, 2, 3, 4, 5])
for i in range(len(arr)):
    arr[i] = arr[i] * 2
print(arr)  # [2 4 6 8 10]`}
                </pre>
              </div>
            </div>
          </div>
        </section>

        {/* Question 3 */}
        <section className="border-l-4 border-purple-500 pl-4">
          <h3 className="text-2xl font-bold mb-3 text-green-700">Q3: Array Operations and Broadcasting</h3>
          <div className="bg-purple-50 p-4 rounded mb-4">
            <h4 className="font-semibold mb-2">Answer:</h4>
            <p className="mb-3">
              NumPy supports element-wise operations and broadcasting for efficient array computations.
            </p>

            <div className="space-y-4">
              <div className="bg-white p-4 rounded">
                <p className="font-semibold mb-2">1. Arithmetic Operations</p>
                <pre className="bg-gradient-to-r from-indigo-50 to-blue-50 text-gray-800 border-2 border-indigo-200 font-mono leading-relaxed p-3 rounded text-sm">
{`import numpy as np

arr1 = np.array([1, 2, 3, 4])
arr2 = np.array([10, 20, 30, 40])

# Element-wise operations
print(arr1 + arr2)   # [11 22 33 44]
print(arr1 - arr2)   # [-9 -18 -27 -36]
print(arr1 * arr2)   # [10 40 90 160]
print(arr1 / arr2)   # [0.1 0.1 0.1 0.1]
print(arr1 ** 2)     # [1 4 9 16]
print(arr1 % 2)      # [1 0 1 0]
print(arr1 // 2)     # [0 1 1 2]

# Scalar operations
print(arr1 + 10)     # [11 12 13 14]
print(arr1 * 2)      # [2 4 6 8]

# Mathematical functions
print(np.sqrt(arr1))      # [1. 1.41 1.73 2.]
print(np.exp(arr1))       # [2.71 7.38 20.08 54.59]
print(np.log(arr1))       # [0. 0.69 1.09 1.38]
print(np.sin(arr1))       # [0.84 0.90 0.14 -0.75]
print(np.cos(arr1))       # [0.54 -0.41 -0.98 -0.65]

# Aggregate functions
print(np.sum(arr1))       # 10
print(np.mean(arr1))      # 2.5
print(np.std(arr1))       # 1.118
print(np.min(arr1))       # 1
print(np.max(arr1))       # 4
print(np.argmin(arr1))    # 0 - index of min
print(np.argmax(arr1))    # 3 - index of max`}
                </pre>
              </div>

              <div className="bg-white p-4 rounded">
                <p className="font-semibold mb-2">2. Broadcasting</p>
                <pre className="bg-gradient-to-r from-indigo-50 to-blue-50 text-gray-800 border-2 border-indigo-200 font-mono leading-relaxed p-3 rounded text-sm">
{`import numpy as np

# Broadcasting allows operations on arrays of different shapes

# Example 1: Scalar broadcasting
arr = np.array([[1, 2, 3], [4, 5, 6]])
result = arr + 10
print(result)
# [[11 12 13]
#  [14 15 16]]

# Example 2: 1D array broadcasting
arr = np.array([[1, 2, 3], [4, 5, 6]])
row = np.array([10, 20, 30])
result = arr + row  # row broadcasts to each row
print(result)
# [[11 22 33]
#  [14 25 36]]

# Example 3: Column broadcasting
col = np.array([[10], [20]])
result = arr + col  # col broadcasts to each column
print(result)
# [[11 12 13]
#  [24 25 26]]

# Example 4: 2D broadcasting
a = np.array([[1], [2], [3]])  # (3, 1)
b = np.array([10, 20, 30])     # (3,)
result = a + b
print(result)
# [[11 21 31]
#  [12 22 32]
#  [13 23 33]]

# Broadcasting rules:
# 1. Arrays with fewer dimensions are padded with 1s
# 2. Arrays with size 1 in a dimension are stretched
# 3. If sizes don't match and neither is 1, error

# Example: Compatible shapes
# (3, 4) + (4,)   -> (3, 4) + (1, 4) -> OK
# (3, 4) + (3, 1) -> OK
# (3, 4) + (3, 2) -> ERROR (4 != 2)`}
                </pre>
              </div>

              <div className="bg-white p-4 rounded">
                <p className="font-semibold mb-2">3. Universal Functions (ufuncs)</p>
                <pre className="bg-gradient-to-r from-indigo-50 to-blue-50 text-gray-800 border-2 border-indigo-200 font-mono leading-relaxed p-3 rounded text-sm">
{`import numpy as np

arr = np.array([1, 4, 9, 16, 25])

# Mathematical ufuncs
print(np.sqrt(arr))       # [1. 2. 3. 4. 5.]
print(np.square(arr))     # [1 16 81 256 625]
print(np.abs([-1, -2]))   # [1 2]
print(np.power(arr, 2))   # [1 16 81 256 625]

# Trigonometric
angles = np.array([0, np.pi/2, np.pi])
print(np.sin(angles))     # [0. 1. 0.]
print(np.cos(angles))     # [1. 0. -1.]
print(np.tan(angles))     # [0. inf 0.]

# Exponential and logarithmic
print(np.exp([1, 2, 3]))  # [2.71 7.38 20.08]
print(np.log([1, 10, 100]))   # [0. 2.30 4.60]
print(np.log10([1, 10, 100])) # [0. 1. 2.]

# Rounding
arr = np.array([1.2, 2.5, 3.7, 4.9])
print(np.round(arr))      # [1. 2. 4. 5.]
print(np.floor(arr))      # [1. 2. 3. 4.]
print(np.ceil(arr))       # [2. 3. 4. 5.]

# Comparison
arr1 = np.array([1, 2, 3])
arr2 = np.array([2, 2, 2])
print(np.greater(arr1, arr2))     # [False False True]
print(np.less_equal(arr1, arr2))  # [True True False]
print(np.equal(arr1, arr2))       # [False True False]`}
                </pre>
              </div>
            </div>
          </div>
        </section>

        {/* Summary */}
        <section className="bg-gradient-to-r from-blue-100 to-purple-100 p-6 rounded-lg">
          <h3 className="text-xl font-bold mb-3">📚 Key Takeaways (Part 1):</h3>
          <ul className="list-disc ml-6 space-y-2">
            <li><strong>NumPy:</strong> Fast, memory-efficient library for numerical computing</li>
            <li><strong>Arrays:</strong> Create with np.array(), np.arange(), np.zeros(), np.ones(), np.random</li>
            <li><strong>Attributes:</strong> shape, ndim, size, dtype, itemsize</li>
            <li><strong>View vs Copy:</strong> View shares memory, copy is independent</li>
            <li><strong>Indexing:</strong> arr[0], arr[1:3], arr[arr &gt; 5] (boolean)</li>
            <li><strong>Broadcasting:</strong> Automatic array shape matching for operations</li>
            <li><strong>Operations:</strong> Element-wise arithmetic, mathematical functions, aggregations</li>
          </ul>
        </section>
      </div>
    </div>
  );
}

export default Question12;
