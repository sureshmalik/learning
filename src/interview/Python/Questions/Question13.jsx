import React from "react";

function Question13() {
  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold mb-6 text-blue-700">NumPy - Array Manipulation & Advanced Operations</h2>
      
      <div className="space-y-8">
        {/* Question 1 */}
        <section className="border-l-4 border-blue-500 pl-4">
          <h3 className="text-2xl font-bold mb-3 text-green-700">Q1: Array Manipulation Functions</h3>
          <div className="bg-blue-50 p-4 rounded mb-4">
            <h4 className="font-semibold mb-2">Answer:</h4>
            <p className="mb-3">
              NumPy provides various functions to reshape, transpose, flatten, and manipulate arrays.
            </p>
            
            <div className="space-y-4">
              <div className="bg-white p-4 rounded">
                <p className="font-semibold mb-2">1. Reshaping Arrays</p>
                <pre className="bg-gradient-to-r from-lime-50 to-green-50 text-gray-800 border-2 border-lime-200 font-mono leading-relaxed p-3 rounded text-sm">
{`import numpy as np

# Reshape
arr = np.arange(12)  # [0 1 2 3 4 5 6 7 8 9 10 11]
reshaped = arr.reshape(3, 4)
print(reshaped)
# [[0  1  2  3]
#  [4  5  6  7]
#  [8  9 10 11]]

# Reshape to 3D
arr3d = arr.reshape(2, 3, 2)
print(arr3d.shape)  # (2, 3, 2)

# Automatic dimension (-1)
reshaped = arr.reshape(3, -1)  # 3 rows, auto columns
print(reshaped.shape)  # (3, 4)

# Flatten (1D array)
flattened = reshaped.flatten()
print(flattened)  # [0 1 2 3 4 5 6 7 8 9 10 11]

# Ravel (flattened view)
raveled = reshaped.ravel()
print(raveled)  # [0 1 2 3 4 5 6 7 8 9 10 11]

# Transpose
arr = np.array([[1, 2, 3], [4, 5, 6]])
transposed = arr.T
print(transposed)
# [[1 4]
#  [2 5]
#  [3 6]]

# Swap axes
arr3d = np.arange(24).reshape(2, 3, 4)
swapped = np.swapaxes(arr3d, 0, 2)
print(swapped.shape)  # (4, 3, 2)`}
                </pre>
              </div>

              <div className="bg-white p-4 rounded">
                <p className="font-semibold mb-2">2. Adding/Removing Dimensions</p>
                <pre className="bg-gradient-to-r from-lime-50 to-green-50 text-gray-800 border-2 border-lime-200 font-mono leading-relaxed p-3 rounded text-sm">
{`import numpy as np

arr = np.array([1, 2, 3, 4])
print(arr.shape)  # (4,)

# Add dimension with newaxis
arr_2d = arr[np.newaxis, :]
print(arr_2d.shape)  # (1, 4)

arr_2d = arr[:, np.newaxis]
print(arr_2d.shape)  # (4, 1)

# Using expand_dims
expanded = np.expand_dims(arr, axis=0)
print(expanded.shape)  # (1, 4)

# Remove single-dimensional entries
arr = np.array([[[1, 2, 3]]])
print(arr.shape)  # (1, 1, 3)
squeezed = np.squeeze(arr)
print(squeezed.shape)  # (3,)

# Resize (changes original array)
arr = np.array([1, 2, 3, 4])
arr.resize(2, 3)  # Pads with zeros if needed
print(arr)
# [[1 2 3]
#  [4 0 0]]`}
                </pre>
              </div>

              <div className="bg-white p-4 rounded">
                <p className="font-semibold mb-2">3. Stacking and Repeating</p>
                <pre className="bg-gradient-to-r from-lime-50 to-green-50 text-gray-800 border-2 border-lime-200 font-mono leading-relaxed p-3 rounded text-sm">
{`import numpy as np

arr = np.array([1, 2, 3])

# Repeat elements
repeated = np.repeat(arr, 3)
print(repeated)  # [1 1 1 2 2 2 3 3 3]

# Tile (repeat entire array)
tiled = np.tile(arr, 3)
print(tiled)  # [1 2 3 1 2 3 1 2 3]

# Tile in 2D
tiled_2d = np.tile(arr, (2, 3))
print(tiled_2d)
# [[1 2 3 1 2 3 1 2 3]
#  [1 2 3 1 2 3 1 2 3]]

# Repeat with axis
arr2d = np.array([[1, 2], [3, 4]])
repeated = np.repeat(arr2d, 2, axis=0)
print(repeated)
# [[1 2]
#  [1 2]
#  [3 4]
#  [3 4]]

# Duplicate array
duplicated = np.concatenate([arr, arr])
print(duplicated)  # [1 2 3 1 2 3]`}
                </pre>
              </div>
            </div>
          </div>
        </section>

        {/* Question 2 */}
        <section className="border-l-4 border-green-500 pl-4">
          <h3 className="text-2xl font-bold mb-3 text-green-700">Q2: Joining and Splitting Arrays</h3>
          <div className="bg-green-50 p-4 rounded mb-4">
            <h4 className="font-semibold mb-2">Answer:</h4>
            <p className="mb-3">
              NumPy provides functions to combine multiple arrays or split arrays into smaller ones.
            </p>

            <div className="space-y-4">
              <div className="bg-white p-4 rounded">
                <p className="font-semibold mb-2">1. Joining Arrays</p>
                <pre className="bg-gradient-to-r from-lime-50 to-green-50 text-gray-800 border-2 border-lime-200 font-mono leading-relaxed p-3 rounded text-sm">
{`import numpy as np

arr1 = np.array([1, 2, 3])
arr2 = np.array([4, 5, 6])

# Concatenate (1D)
result = np.concatenate([arr1, arr2])
print(result)  # [1 2 3 4 5 6]

# Concatenate (2D) - along axis
arr1 = np.array([[1, 2], [3, 4]])
arr2 = np.array([[5, 6], [7, 8]])

# Vertical stack (axis=0)
vstack = np.concatenate([arr1, arr2], axis=0)
print(vstack)
# [[1 2]
#  [3 4]
#  [5 6]
#  [7 8]]

# Horizontal stack (axis=1)
hstack = np.concatenate([arr1, arr2], axis=1)
print(hstack)
# [[1 2 5 6]
#  [3 4 7 8]]

# Using vstack and hstack
vstack = np.vstack([arr1, arr2])  # Same as axis=0
hstack = np.hstack([arr1, arr2])  # Same as axis=1

# Stack (creates new axis)
arr1 = np.array([1, 2, 3])
arr2 = np.array([4, 5, 6])
stacked = np.stack([arr1, arr2])
print(stacked)
# [[1 2 3]
#  [4 5 6]]

# Stack along axis=1
stacked = np.stack([arr1, arr2], axis=1)
print(stacked)
# [[1 4]
#  [2 5]
#  [3 6]]

# Column stack
col_stack = np.column_stack([arr1, arr2])
print(col_stack)
# [[1 4]
#  [2 5]
#  [3 6]]

# Row stack
row_stack = np.row_stack([arr1, arr2])
print(row_stack)
# [[1 2 3]
#  [4 5 6]]`}
                </pre>
              </div>

              <div className="bg-white p-4 rounded">
                <p className="font-semibold mb-2">2. Splitting Arrays</p>
                <pre className="bg-gradient-to-r from-lime-50 to-green-50 text-gray-800 border-2 border-lime-200 font-mono leading-relaxed p-3 rounded text-sm">
{`import numpy as np

# Split 1D array
arr = np.array([1, 2, 3, 4, 5, 6])
split = np.split(arr, 3)  # Split into 3 equal parts
print(split)  # [array([1, 2]), array([3, 4]), array([5, 6])]

# Split at specific indices
split = np.split(arr, [2, 4])
print(split)  # [array([1, 2]), array([3, 4]), array([5, 6])]

# Split 2D array
arr2d = np.array([[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12]])

# Horizontal split (columns)
hsplit = np.hsplit(arr2d, 2)
print(hsplit[0])
# [[1 2]
#  [5 6]
#  [9 10]]

# Vertical split (rows)
vsplit = np.vsplit(arr2d, 3)
print(vsplit[0])  # [[1 2 3 4]]

# Array split with axis
split = np.array_split(arr2d, 2, axis=0)
print(len(split))  # 2

# Unequal split
arr = np.arange(10)
split = np.array_split(arr, 3)  # Handles unequal division
print([len(s) for s in split])  # [4, 3, 3]`}
                </pre>
              </div>
            </div>
          </div>
        </section>

        {/* Question 3 */}
        <section className="border-l-4 border-purple-500 pl-4">
          <h3 className="text-2xl font-bold mb-3 text-green-700">Q3: Sorting, Searching, and Element Operations</h3>
          <div className="bg-purple-50 p-4 rounded mb-4">
            <h4 className="font-semibold mb-2">Answer:</h4>
            <p className="mb-3">
              NumPy provides functions for sorting, searching, inserting, and deleting array elements.
            </p>

            <div className="space-y-4">
              <div className="bg-white p-4 rounded">
                <p className="font-semibold mb-2">1. Sorting Arrays</p>
                <pre className="bg-gradient-to-r from-lime-50 to-green-50 text-gray-800 border-2 border-lime-200 font-mono leading-relaxed p-3 rounded text-sm">
{`import numpy as np

# Sort 1D array
arr = np.array([3, 1, 4, 1, 5, 9, 2, 6])
sorted_arr = np.sort(arr)
print(sorted_arr)  # [1 1 2 3 4 5 6 9]

# Sort in descending order
sorted_desc = np.sort(arr)[::-1]
print(sorted_desc)  # [9 6 5 4 3 2 1 1]

# Sort in place
arr.sort()
print(arr)  # [1 1 2 3 4 5 6 9]

# Sort 2D array
arr2d = np.array([[3, 1, 4], [1, 5, 9], [2, 6, 5]])

# Sort along axis 0 (columns)
sorted_cols = np.sort(arr2d, axis=0)
print(sorted_cols)
# [[1 1 4]
#  [2 5 5]
#  [3 6 9]]

# Sort along axis 1 (rows)
sorted_rows = np.sort(arr2d, axis=1)
print(sorted_rows)
# [[1 3 4]
#  [1 5 9]
#  [2 5 6]]

# Get sorted indices
arr = np.array([3, 1, 4, 1, 5])
indices = np.argsort(arr)
print(indices)  # [1 3 0 2 4]
print(arr[indices])  # [1 1 3 4 5]

# Sort by multiple columns
data = np.array([[3, 2], [1, 4], [3, 1]])
# Sort by first column, then second
indices = np.lexsort((data[:, 1], data[:, 0]))
print(data[indices])
# [[1 4]
#  [3 1]
#  [3 2]]`}
                </pre>
              </div>

              <div className="bg-white p-4 rounded">
                <p className="font-semibold mb-2">2. Searching Elements</p>
                <pre className="bg-gradient-to-r from-lime-50 to-green-50 text-gray-800 border-2 border-lime-200 font-mono leading-relaxed p-3 rounded text-sm">
{`import numpy as np

arr = np.array([1, 2, 3, 4, 5, 4, 3, 2, 1])

# Find where condition is true
indices = np.where(arr > 3)
print(indices)  # (array([3, 4, 5]),)
print(arr[indices])  # [4 5 4]

# Find with multiple conditions
indices = np.where((arr > 2) & (arr < 5))
print(arr[indices])  # [3 4 4 3]

# Replace values based on condition
result = np.where(arr > 3, 100, arr)
print(result)  # [1 2 3 100 100 100 3 2 1]

# Search sorted (binary search)
arr = np.array([1, 2, 3, 4, 5])
index = np.searchsorted(arr, 3.5)
print(index)  # 3 (position where 3.5 should be inserted)

# Multiple values
indices = np.searchsorted(arr, [1.5, 3.5, 4.5])
print(indices)  # [1 3 4]

# Non-zero elements
arr = np.array([0, 1, 0, 3, 0, 5])
nonzero = np.nonzero(arr)
print(nonzero)  # (array([1, 3, 5]),)
print(arr[nonzero])  # [1 3 5]

# Find indices of maximum/minimum
arr = np.array([3, 1, 4, 1, 5, 9, 2])
print(np.argmax(arr))  # 5 (index of max)
print(np.argmin(arr))  # 1 (index of min)

# Extract elements
arr = np.array([1, 2, 3, 4, 5])
condition = arr > 2
extracted = np.extract(condition, arr)
print(extracted)  # [3 4 5]`}
                </pre>
              </div>

              <div className="bg-white p-4 rounded">
                <p className="font-semibold mb-2">3. Inserting and Deleting Elements</p>
                <pre className="bg-gradient-to-r from-lime-50 to-green-50 text-gray-800 border-2 border-lime-200 font-mono leading-relaxed p-3 rounded text-sm">
{`import numpy as np

# Insert elements
arr = np.array([1, 2, 3, 4, 5])
inserted = np.insert(arr, 2, 99)  # Insert 99 at index 2
print(inserted)  # [1 2 99 3 4 5]

# Insert multiple values
inserted = np.insert(arr, 2, [99, 100])
print(inserted)  # [1 2 99 100 3 4 5]

# Insert at multiple positions
inserted = np.insert(arr, [1, 3], [99, 100])
print(inserted)  # [1 99 2 3 100 4 5]

# Insert in 2D array
arr2d = np.array([[1, 2], [3, 4]])
inserted = np.insert(arr2d, 1, [99, 100], axis=0)
print(inserted)
# [[1 2]
#  [99 100]
#  [3 4]]

# Delete elements
arr = np.array([1, 2, 3, 4, 5])
deleted = np.delete(arr, 2)  # Delete index 2
print(deleted)  # [1 2 4 5]

# Delete multiple indices
deleted = np.delete(arr, [1, 3])
print(deleted)  # [1 3 5]

# Delete with condition
arr = np.array([1, 2, 3, 4, 5])
deleted = np.delete(arr, np.where(arr > 3))
print(deleted)  # [1 2 3]

# Append elements
arr = np.array([1, 2, 3])
appended = np.append(arr, [4, 5])
print(appended)  # [1 2 3 4 5]

# Append to 2D array
arr2d = np.array([[1, 2], [3, 4]])
appended = np.append(arr2d, [[5, 6]], axis=0)
print(appended)
# [[1 2]
#  [3 4]
#  [5 6]]

# Remove duplicates
arr = np.array([1, 2, 2, 3, 3, 3, 4])
unique = np.unique(arr)
print(unique)  # [1 2 3 4]`}
                </pre>
              </div>

              <div className="bg-white p-4 rounded">
                <p className="font-semibold mb-2">4. Finding Unique Elements and Counts</p>
                <pre className="bg-gradient-to-r from-lime-50 to-green-50 text-gray-800 border-2 border-lime-200 font-mono leading-relaxed p-3 rounded text-sm">
{`import numpy as np

arr = np.array([1, 2, 2, 3, 3, 3, 4, 4, 4, 4])

# Unique elements
unique = np.unique(arr)
print(unique)  # [1 2 3 4]

# Unique with counts
unique, counts = np.unique(arr, return_counts=True)
print(unique)   # [1 2 3 4]
print(counts)   # [1 2 3 4]

# Create dictionary of counts
count_dict = dict(zip(unique, counts))
print(count_dict)  # {1: 1, 2: 2, 3: 3, 4: 4}

# Unique with indices
unique, indices = np.unique(arr, return_index=True)
print(indices)  # [0 1 3 6] - first occurrence

# Unique with inverse
unique, inverse = np.unique(arr, return_inverse=True)
print(inverse)  # [0 1 1 2 2 2 3 3 3 3]
# Reconstruct original: unique[inverse]

# 2D array unique
arr2d = np.array([[1, 2], [3, 4], [1, 2]])
unique_rows = np.unique(arr2d, axis=0)
print(unique_rows)
# [[1 2]
#  [3 4]]

# Count occurrences of specific value
arr = np.array([1, 2, 2, 3, 3, 3])
count = np.count_nonzero(arr == 3)
print(count)  # 3

# Most common element
unique, counts = np.unique(arr, return_counts=True)
most_common = unique[np.argmax(counts)]
print(most_common)  # 3`}
                </pre>
              </div>
            </div>
          </div>
        </section>

        {/* Summary */}
        <section className="bg-gradient-to-r from-blue-100 to-purple-100 p-6 rounded-lg">
          <h3 className="text-xl font-bold mb-3">📚 Key Takeaways (Part 2):</h3>
          <ul className="list-disc ml-6 space-y-2">
            <li><strong>Reshape:</strong> reshape(), flatten(), ravel(), transpose()</li>
            <li><strong>Joining:</strong> concatenate(), vstack(), hstack(), stack()</li>
            <li><strong>Splitting:</strong> split(), hsplit(), vsplit(), array_split()</li>
            <li><strong>Sorting:</strong> sort(), argsort(), lexsort()</li>
            <li><strong>Searching:</strong> where(), searchsorted(), nonzero(), argmax(), argmin()</li>
            <li><strong>Insert/Delete:</strong> insert(), delete(), append()</li>
            <li><strong>Unique:</strong> unique() with return_counts, return_index, return_inverse</li>
          </ul>
        </section>
      </div>
    </div>
  );
}

export default Question13;
