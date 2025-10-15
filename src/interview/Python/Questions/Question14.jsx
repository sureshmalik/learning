import React from "react";

function Question14() {
  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold mb-6 text-blue-700">NumPy - Matrix Operations, Linear Algebra & Statistics</h2>
      
      <div className="space-y-8">
        {/* Question 1 */}
        <section className="border-l-4 border-blue-500 pl-4">
          <h3 className="text-2xl font-bold mb-3 text-green-700">Q1: Matrix Operations and Linear Algebra</h3>
          <div className="bg-blue-50 p-4 rounded mb-4">
            <h4 className="font-semibold mb-2">Answer:</h4>
            <p className="mb-3">
              NumPy provides powerful matrix operations and linear algebra functions through the linalg module.
            </p>
            
            <div className="space-y-4">
              <div className="bg-white p-4 rounded">
                <p className="font-semibold mb-2">1. Matrix Multiplication</p>
                <pre className="bg-gradient-to-r from-fuchsia-50 to-pink-50 text-gray-800 border-2 border-fuchsia-200 font-mono leading-relaxed p-3 rounded text-sm">
{`import numpy as np

# Matrix multiplication using dot()
A = np.array([[1, 2], [3, 4]])
B = np.array([[5, 6], [7, 8]])

# Method 1: dot()
C = np.dot(A, B)
print(C)
# [[19 22]
#  [43 50]]

# Method 2: @ operator (Python 3.5+)
C = A @ B
print(C)
# [[19 22]
#  [43 50]]

# Method 3: matmul()
C = np.matmul(A, B)
print(C)

# Element-wise multiplication (NOT matrix multiplication)
C = A * B
print(C)
# [[5 12]
#  [21 32]]

# Matrix-vector multiplication
v = np.array([1, 2])
result = np.dot(A, v)
print(result)  # [5 11]

# Multiple matrix multiplication
A = np.array([[1, 2]])      # 1x2
B = np.array([[3], [4]])    # 2x1
C = np.dot(A, B)
print(C)  # [[11]] (1x1)

# Batch matrix multiplication
A = np.random.rand(10, 3, 4)  # 10 matrices of 3x4
B = np.random.rand(10, 4, 5)  # 10 matrices of 4x5
C = np.matmul(A, B)
print(C.shape)  # (10, 3, 5)`}
                </pre>
              </div>

              <div className="bg-white p-4 rounded">
                <p className="font-semibold mb-2">2. Matrix Class in NumPy</p>
                <pre className="bg-gradient-to-r from-fuchsia-50 to-pink-50 text-gray-800 border-2 border-fuchsia-200 font-mono leading-relaxed p-3 rounded text-sm">
{`import numpy as np

# Create matrix (deprecated, use ndarray instead)
# But good to know for legacy code
M = np.matrix([[1, 2], [3, 4]])
print(M)
# [[1 2]
#  [3 4]]

# Matrix multiplication with *
M1 = np.matrix([[1, 2], [3, 4]])
M2 = np.matrix([[5, 6], [7, 8]])
result = M1 * M2  # Matrix multiplication (not element-wise)
print(result)
# [[19 22]
#  [43 50]]

# Matrix transpose
print(M.T)
# [[1 3]
#  [2 4]]

# Matrix inverse
print(M.I)
# [[-2.   1. ]
#  [ 1.5 -0.5]]

# Convert matrix to array
arr = np.asarray(M)
print(type(arr))  # <class 'numpy.ndarray'>

# Modern approach: Use ndarray with @ operator
A = np.array([[1, 2], [3, 4]])
B = np.array([[5, 6], [7, 8]])
C = A @ B  # Preferred over matrix class`}
                </pre>
              </div>

              <div className="bg-white p-4 rounded">
                <p className="font-semibold mb-2">3. Linear Algebra Functions (linalg module)</p>
                <pre className="bg-gradient-to-r from-fuchsia-50 to-pink-50 text-gray-800 border-2 border-fuchsia-200 font-mono leading-relaxed p-3 rounded text-sm">
{`import numpy as np
from numpy import linalg as LA

A = np.array([[1, 2], [3, 4]])

# Determinant
det = LA.det(A)
print(det)  # -2.0

# Matrix inverse
inv = LA.inv(A)
print(inv)
# [[-2.   1. ]
#  [ 1.5 -0.5]]

# Verify: A @ inv(A) = I
print(A @ inv)
# [[1. 0.]
#  [0. 1.]]

# Matrix rank
rank = LA.matrix_rank(A)
print(rank)  # 2

# Trace (sum of diagonal)
trace = np.trace(A)
print(trace)  # 5

# Eigenvalues and eigenvectors
eigenvalues, eigenvectors = LA.eig(A)
print("Eigenvalues:", eigenvalues)
print("Eigenvectors:", eigenvectors)

# Singular Value Decomposition (SVD)
U, S, Vt = LA.svd(A)
print("U:", U)
print("S:", S)
print("Vt:", Vt)

# Matrix norm
norm = LA.norm(A)
print(norm)  # 5.477

# Frobenius norm
frobenius = LA.norm(A, 'fro')
print(frobenius)  # 5.477

# Solve linear equations: Ax = b
A = np.array([[3, 1], [1, 2]])
b = np.array([9, 8])
x = LA.solve(A, b)
print(x)  # [2. 3.]

# Verify solution
print(A @ x)  # [9. 8.]

# Matrix power
A_squared = LA.matrix_power(A, 2)
print(A_squared)  # A @ A

# QR decomposition
Q, R = LA.qr(A)
print("Q:", Q)
print("R:", R)`}
                </pre>
              </div>
            </div>
          </div>
        </section>

        {/* Question 2 */}
        <section className="border-l-4 border-green-500 pl-4">
          <h3 className="text-2xl font-bold mb-3 text-green-700">Q2: I/O Operations and File Handling</h3>
          <div className="bg-green-50 p-4 rounded mb-4">
            <h4 className="font-semibold mb-2">Answer:</h4>
            <p className="mb-3">
              NumPy provides functions to save and load arrays from files in various formats.
            </p>

            <div className="space-y-4">
              <div className="bg-white p-4 rounded">
                <p className="font-semibold mb-2">1. Saving and Loading Binary Files</p>
                <pre className="bg-gradient-to-r from-fuchsia-50 to-pink-50 text-gray-800 border-2 border-fuchsia-200 font-mono leading-relaxed p-3 rounded text-sm">
{`import numpy as np

# Create array
arr = np.array([[1, 2, 3], [4, 5, 6]])

# Save to binary file (.npy)
np.save('array.npy', arr)

# Load from binary file
loaded = np.load('array.npy')
print(loaded)
# [[1 2 3]
#  [4 5 6]]

# Save multiple arrays (.npz)
arr1 = np.array([1, 2, 3])
arr2 = np.array([4, 5, 6])
np.savez('arrays.npz', a=arr1, b=arr2)

# Load multiple arrays
data = np.load('arrays.npz')
print(data['a'])  # [1 2 3]
print(data['b'])  # [4 5 6]

# Compressed save
np.savez_compressed('arrays_compressed.npz', a=arr1, b=arr2)

# Save with automatic naming
np.savez('arrays.npz', arr1, arr2)
data = np.load('arrays.npz')
print(data['arr_0'])  # arr1
print(data['arr_1'])  # arr2`}
                </pre>
              </div>

              <div className="bg-white p-4 rounded">
                <p className="font-semibold mb-2">2. Text File Operations</p>
                <pre className="bg-gradient-to-r from-fuchsia-50 to-pink-50 text-gray-800 border-2 border-fuchsia-200 font-mono leading-relaxed p-3 rounded text-sm">
{`import numpy as np

arr = np.array([[1, 2, 3], [4, 5, 6]])

# Save to text file
np.savetxt('array.txt', arr)

# Save with formatting
np.savetxt('array.txt', arr, fmt='%d', delimiter=',')

# Save with header
np.savetxt('array.txt', arr, header='Column1,Column2,Column3', 
           delimiter=',', comments='')

# Load from text file
loaded = np.loadtxt('array.txt', delimiter=',')
print(loaded)

# Load with specific columns
data = np.loadtxt('array.txt', delimiter=',', usecols=(0, 2))
print(data)  # Columns 0 and 2 only

# Load with skip rows
data = np.loadtxt('array.txt', delimiter=',', skiprows=1)

# Load CSV file
data = np.genfromtxt('data.csv', delimiter=',', skip_header=1)

# Handle missing values
data = np.genfromtxt('data.csv', delimiter=',', 
                     filling_values=0, missing_values='NA')

# Load with different dtypes
data = np.genfromtxt('data.csv', delimiter=',', 
                     dtype=[('name', 'U10'), ('age', 'i4'), ('score', 'f8')])

# Write to CSV
np.savetxt('output.csv', arr, delimiter=',', fmt='%.2f')`}
                </pre>
              </div>

              <div className="bg-white p-4 rounded">
                <p className="font-semibold mb-2">3. Memory-Mapped Files</p>
                <pre className="bg-gradient-to-r from-fuchsia-50 to-pink-50 text-gray-800 border-2 border-fuchsia-200 font-mono leading-relaxed p-3 rounded text-sm">
{`import numpy as np

# Create memory-mapped file (for large arrays)
# Useful when array doesn't fit in RAM
mmap = np.memmap('large_array.dat', dtype='float32', 
                 mode='w+', shape=(1000, 1000))

# Write data
mmap[:] = np.random.rand(1000, 1000)
mmap.flush()

# Read memory-mapped file
mmap = np.memmap('large_array.dat', dtype='float32', 
                 mode='r', shape=(1000, 1000))

# Access like normal array (but stored on disk)
print(mmap[0, 0])

# Modify memory-mapped file
mmap = np.memmap('large_array.dat', dtype='float32', 
                 mode='r+', shape=(1000, 1000))
mmap[0, 0] = 999
mmap.flush()`}
                </pre>
              </div>
            </div>
          </div>
        </section>

        {/* Question 3 */}
        <section className="border-l-4 border-purple-500 pl-4">
          <h3 className="text-2xl font-bold mb-3 text-green-700">Q3: Statistics and Mathematical Functions</h3>
          <div className="bg-purple-50 p-4 rounded mb-4">
            <h4 className="font-semibold mb-2">Answer:</h4>
            <p className="mb-3">
              NumPy provides comprehensive statistical and mathematical functions for data analysis.
            </p>

            <div className="space-y-4">
              <div className="bg-white p-4 rounded">
                <p className="font-semibold mb-2">1. Basic Statistics</p>
                <pre className="bg-gradient-to-r from-fuchsia-50 to-pink-50 text-gray-800 border-2 border-fuchsia-200 font-mono leading-relaxed p-3 rounded text-sm">
{`import numpy as np

arr = np.array([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])

# Mean (average)
mean = np.mean(arr)
print(mean)  # 5.5

# Median (middle value)
median = np.median(arr)
print(median)  # 5.5

# Standard deviation
std = np.std(arr)
print(std)  # 2.872

# Variance
var = np.var(arr)
print(var)  # 8.25

# Min and Max
print(np.min(arr))  # 1
print(np.max(arr))  # 10

# Percentiles
p25 = np.percentile(arr, 25)  # 25th percentile
p75 = np.percentile(arr, 75)  # 75th percentile
print(p25, p75)  # 3.25 7.75

# Quantiles
q = np.quantile(arr, [0.25, 0.5, 0.75])
print(q)  # [3.25 5.5 7.75]

# Sum
total = np.sum(arr)
print(total)  # 55

# Cumulative sum
cumsum = np.cumsum(arr)
print(cumsum)  # [1 3 6 10 15 21 28 36 45 55]

# Cumulative product
cumprod = np.cumprod([1, 2, 3, 4])
print(cumprod)  # [1 2 6 24]

# 2D array statistics
arr2d = np.array([[1, 2, 3], [4, 5, 6]])

# Along axis
print(np.mean(arr2d, axis=0))  # [2.5 3.5 4.5] - column means
print(np.mean(arr2d, axis=1))  # [2. 5.] - row means
print(np.sum(arr2d, axis=0))   # [5 7 9] - column sums`}
                </pre>
              </div>

              <div className="bg-white p-4 rounded">
                <p className="font-semibold mb-2">2. Correlation and Covariance</p>
                <pre className="bg-gradient-to-r from-fuchsia-50 to-pink-50 text-gray-800 border-2 border-fuchsia-200 font-mono leading-relaxed p-3 rounded text-sm">
{`import numpy as np

x = np.array([1, 2, 3, 4, 5])
y = np.array([2, 4, 5, 4, 5])

# Correlation coefficient
corr = np.corrcoef(x, y)
print(corr)
# [[1.    0.775]
#  [0.775 1.   ]]

# Covariance
cov = np.cov(x, y)
print(cov)
# [[2.5  1.75]
#  [1.75 1.7 ]]

# Correlation (single value)
corr_value = np.corrcoef(x, y)[0, 1]
print(corr_value)  # 0.775

# Histogram
data = np.random.randn(1000)
hist, bins = np.histogram(data, bins=10)
print("Counts:", hist)
print("Bins:", bins)

# Bincount (count occurrences)
arr = np.array([1, 1, 2, 2, 2, 3, 3, 3, 3])
counts = np.bincount(arr)
print(counts)  # [0 2 3 4] - 0 zeros, 2 ones, 3 twos, 4 threes`}
                </pre>
              </div>

              <div className="bg-white p-4 rounded">
                <p className="font-semibold mb-2">3. Mathematical Functions</p>
                <pre className="bg-gradient-to-r from-fuchsia-50 to-pink-50 text-gray-800 border-2 border-fuchsia-200 font-mono leading-relaxed p-3 rounded text-sm">
{`import numpy as np

arr = np.array([1, 4, 9, 16, 25])

# Trigonometric functions
angles = np.array([0, 30, 45, 60, 90]) * np.pi / 180
print(np.sin(angles))
print(np.cos(angles))
print(np.tan(angles))

# Inverse trigonometric
print(np.arcsin([0, 0.5, 1]))
print(np.arccos([1, 0.5, 0]))
print(np.arctan([0, 1, np.inf]))

# Hyperbolic functions
print(np.sinh([0, 1, 2]))
print(np.cosh([0, 1, 2]))
print(np.tanh([0, 1, 2]))

# Exponential and logarithmic
print(np.exp([1, 2, 3]))      # e^x
print(np.log([1, 10, 100]))   # Natural log
print(np.log10([1, 10, 100])) # Base 10 log
print(np.log2([1, 2, 4, 8]))  # Base 2 log

# Power and roots
print(np.sqrt(arr))           # Square root
print(np.cbrt([1, 8, 27]))    # Cube root
print(np.power(arr, 2))       # Power
print(np.square(arr))         # Square

# Rounding
arr = np.array([1.2, 2.5, 3.7, 4.9])
print(np.round(arr))          # [1. 2. 4. 5.]
print(np.floor(arr))          # [1. 2. 3. 4.]
print(np.ceil(arr))           # [2. 3. 4. 5.]
print(np.trunc(arr))          # [1. 2. 3. 4.]

# Absolute value
print(np.abs([-1, -2, 3]))    # [1 2 3]

# Sign function
print(np.sign([-5, 0, 5]))    # [-1 0 1]

# Clip values
arr = np.array([1, 5, 10, 15, 20])
clipped = np.clip(arr, 5, 15)
print(clipped)  # [5 5 10 15 15]

# Greatest common divisor
print(np.gcd(12, 18))         # 6
print(np.gcd.reduce([12, 18, 24]))  # 6

# Least common multiple
print(np.lcm(12, 18))         # 36`}
                </pre>
              </div>

              <div className="bg-white p-4 rounded">
                <p className="font-semibold mb-2">4. Advanced Statistics</p>
                <pre className="bg-gradient-to-r from-fuchsia-50 to-pink-50 text-gray-800 border-2 border-fuchsia-200 font-mono leading-relaxed p-3 rounded text-sm">
{`import numpy as np

# Random sampling
np.random.seed(42)  # For reproducibility

# Normal distribution
normal = np.random.normal(loc=0, scale=1, size=1000)
print(f"Mean: {np.mean(normal):.2f}")
print(f"Std: {np.std(normal):.2f}")

# Uniform distribution
uniform = np.random.uniform(low=0, high=10, size=1000)

# Random integers
integers = np.random.randint(1, 100, size=1000)

# Random choice
choices = np.random.choice([1, 2, 3, 4, 5], size=100, p=[0.1, 0.2, 0.3, 0.2, 0.2])

# Shuffle array
arr = np.arange(10)
np.random.shuffle(arr)
print(arr)

# Random permutation
perm = np.random.permutation(10)
print(perm)

# Weighted average
values = np.array([1, 2, 3, 4, 5])
weights = np.array([1, 2, 3, 4, 5])
weighted_avg = np.average(values, weights=weights)
print(weighted_avg)  # 3.666

# Moving average
def moving_average(arr, window):
    return np.convolve(arr, np.ones(window)/window, mode='valid')

data = np.array([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
ma = moving_average(data, 3)
print(ma)  # [2. 3. 4. 5. 6. 7. 8. 9.]

# Interpolation
x = np.array([1, 2, 3, 4, 5])
y = np.array([2, 4, 6, 8, 10])
x_new = 2.5
y_new = np.interp(x_new, x, y)
print(y_new)  # 5.0`}
                </pre>
              </div>
            </div>
          </div>
        </section>

        {/* Summary */}
        <section className="bg-gradient-to-r from-blue-100 to-purple-100 p-6 rounded-lg">
          <h3 className="text-xl font-bold mb-3">📚 Key Takeaways (Part 3):</h3>
          <ul className="list-disc ml-6 space-y-2">
            <li><strong>Matrix Multiplication:</strong> dot(), @, matmul() for matrix operations</li>
            <li><strong>Linear Algebra:</strong> det(), inv(), eig(), svd(), solve() from linalg module</li>
            <li><strong>I/O Operations:</strong> save(), load() for binary, savetxt(), loadtxt() for text</li>
            <li><strong>Statistics:</strong> mean(), median(), std(), var(), percentile(), corrcoef()</li>
            <li><strong>Math Functions:</strong> sin(), cos(), exp(), log(), sqrt(), power()</li>
            <li><strong>Random:</strong> random.normal(), random.uniform(), random.choice()</li>
            <li><strong>Aggregations:</strong> sum(), cumsum(), min(), max() with axis parameter</li>
          </ul>
        </section>
      </div>
    </div>
  );
}

export default Question14;
