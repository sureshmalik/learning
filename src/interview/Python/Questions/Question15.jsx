import React from "react";

function Question15() {
  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold mb-6 text-blue-700">Pandas - Introduction & Data Structures</h2>
      
      <div className="space-y-8">
        {/* Question 1 */}
        <section className="border-l-4 border-blue-500 pl-4">
          <h3 className="text-2xl font-bold mb-3 text-green-700">Q1: What is Pandas?</h3>
          <div className="bg-blue-50 p-4 rounded mb-4">
            <h4 className="font-semibold mb-2">Answer:</h4>
            <p className="mb-3">
              Pandas is a powerful Python library for data manipulation and analysis. It provides data structures 
              like Series and DataFrame for handling structured data efficiently.
            </p>
            
            <div className="space-y-4">
              <div className="bg-white p-4 rounded">
                <p className="font-semibold mb-2">1. Introduction and Installation</p>
                <pre className="bg-gradient-to-r from-cyan-50 to-teal-50 text-gray-800 border-2 border-cyan-200 font-mono leading-relaxed p-3 rounded text-sm">
{`# Install Pandas
# pip install pandas

import pandas as pd
import numpy as np

# Check version
print(pd.__version__)  # 2.0.0

# Why Pandas?
# 1. Easy data manipulation
# 2. Handles missing data
# 3. Data alignment
# 4. Powerful groupby operations
# 5. Time series functionality
# 6. Integration with other libraries

# Key Features:
# - DataFrame: 2D labeled data structure
# - Series: 1D labeled array
# - Data alignment
# - Missing data handling
# - Merging and joining datasets
# - Reshaping and pivoting
# - Time series functionality
# - I/O tools (CSV, Excel, SQL, etc.)`}
                </pre>
              </div>

              <div className="bg-white p-4 rounded">
                <p className="font-semibold mb-2">2. Series - 1D Labeled Array</p>
                <pre className="bg-gradient-to-r from-cyan-50 to-teal-50 text-gray-800 border-2 border-cyan-200 font-mono leading-relaxed p-3 rounded text-sm">
{`import pandas as pd
import numpy as np

# Create Series from list
s = pd.Series([1, 2, 3, 4, 5])
print(s)
# 0    1
# 1    2
# 2    3
# 3    4
# 4    5
# dtype: int64

# Series with custom index
s = pd.Series([10, 20, 30], index=['a', 'b', 'c'])
print(s)
# a    10
# b    20
# c    30
# dtype: int64

# Create from dictionary
data = {'a': 10, 'b': 20, 'c': 30}
s = pd.Series(data)
print(s)

# Create from scalar
s = pd.Series(5, index=['a', 'b', 'c'])
print(s)
# a    5
# b    5
# c    5

# Create from NumPy array
arr = np.array([1, 2, 3, 4, 5])
s = pd.Series(arr, index=['a', 'b', 'c', 'd', 'e'])

# Access elements
print(s['a'])      # 1
print(s[0])        # 1
print(s[['a', 'c']])  # Multiple elements

# Series attributes
print(s.values)    # Array of values
print(s.index)     # Index object
print(s.dtype)     # Data type
print(s.shape)     # Shape
print(s.size)      # Number of elements
print(s.name)      # Series name

# Set name
s.name = 'Numbers'
s.index.name = 'Letters'
print(s)`}
                </pre>
              </div>

              <div className="bg-white p-4 rounded">
                <p className="font-semibold mb-2">3. DataFrame - 2D Labeled Data Structure</p>
                <pre className="bg-gradient-to-r from-cyan-50 to-teal-50 text-gray-800 border-2 border-cyan-200 font-mono leading-relaxed p-3 rounded text-sm">
{`import pandas as pd

# Create DataFrame from dictionary
data = {
    'Name': ['Alice', 'Bob', 'Charlie', 'David'],
    'Age': [25, 30, 35, 28],
    'City': ['NYC', 'LA', 'Chicago', 'Houston']
}
df = pd.DataFrame(data)
print(df)
#       Name  Age     City
# 0    Alice   25      NYC
# 1      Bob   30       LA
# 2  Charlie   35  Chicago
# 3    David   28  Houston

# Create from list of dictionaries
data = [
    {'Name': 'Alice', 'Age': 25, 'City': 'NYC'},
    {'Name': 'Bob', 'Age': 30, 'City': 'LA'}
]
df = pd.DataFrame(data)

# Create from dictionary of Series
data = {
    'Name': pd.Series(['Alice', 'Bob', 'Charlie']),
    'Age': pd.Series([25, 30, 35])
}
df = pd.DataFrame(data)

# Create from NumPy array
arr = np.array([[1, 2, 3], [4, 5, 6], [7, 8, 9]])
df = pd.DataFrame(arr, columns=['A', 'B', 'C'])
print(df)
#    A  B  C
# 0  1  2  3
# 1  4  5  6
# 2  7  8  9

# Custom index
df = pd.DataFrame(data, index=['row1', 'row2', 'row3'])

# DataFrame attributes
print(df.shape)       # (3, 3) - rows, columns
print(df.columns)     # Column names
print(df.index)       # Row index
print(df.dtypes)      # Data types of columns
print(df.values)      # NumPy array of values
print(df.size)        # Total elements
print(df.ndim)        # Number of dimensions (2)
print(df.empty)       # Check if empty

# Info about DataFrame
print(df.info())
print(df.describe())  # Statistical summary`}
                </pre>
              </div>

              <div className="bg-white p-4 rounded">
                <p className="font-semibold mb-2">4. Panel (Deprecated - 3D Data)</p>
                <pre className="bg-gradient-to-r from-cyan-50 to-teal-50 text-gray-800 border-2 border-cyan-200 font-mono leading-relaxed p-3 rounded text-sm">
{`import pandas as pd
import numpy as np

# Note: Panel is deprecated since Pandas 0.25.0
# Use MultiIndex DataFrame or xarray instead

# Old Panel approach (for reference):
# data = {
#     'Item1': pd.DataFrame(np.random.randn(4, 3)),
#     'Item2': pd.DataFrame(np.random.randn(4, 3))
# }
# panel = pd.Panel(data)

# Modern approach: MultiIndex DataFrame
# Create 3D-like structure with MultiIndex
arrays = [
    ['Item1', 'Item1', 'Item2', 'Item2'],
    ['A', 'B', 'A', 'B']
]
index = pd.MultiIndex.from_arrays(arrays, names=['Item', 'Type'])
df = pd.DataFrame(np.random.randn(4, 3), index=index, columns=['X', 'Y', 'Z'])
print(df)

# Access data
print(df.loc['Item1'])
print(df.loc[('Item1', 'A')])

# Alternative: Dictionary of DataFrames
data_3d = {
    'Item1': pd.DataFrame(np.random.randn(4, 3), columns=['A', 'B', 'C']),
    'Item2': pd.DataFrame(np.random.randn(4, 3), columns=['A', 'B', 'C'])
}

# Access
print(data_3d['Item1'])

# For true 3D arrays, use xarray library
# import xarray as xr
# data = xr.DataArray(np.random.randn(2, 3, 4),
#                     dims=['item', 'row', 'col'])`}
                </pre>
              </div>
            </div>
          </div>
        </section>

        {/* Question 2 */}
        <section className="border-l-4 border-green-500 pl-4">
          <h3 className="text-2xl font-bold mb-3 text-green-700">Q2: Basic Functionality and Operations</h3>
          <div className="bg-green-50 p-4 rounded mb-4">
            <h4 className="font-semibold mb-2">Answer:</h4>
            <p className="mb-3">
              Pandas provides various functions for basic data operations, viewing, and manipulation.
            </p>

            <div className="space-y-4">
              <div className="bg-white p-4 rounded">
                <p className="font-semibold mb-2">1. Viewing Data</p>
                <pre className="bg-gradient-to-r from-cyan-50 to-teal-50 text-gray-800 border-2 border-cyan-200 font-mono leading-relaxed p-3 rounded text-sm">
{`import pandas as pd
import numpy as np

# Create sample DataFrame
df = pd.DataFrame({
    'A': np.random.randn(10),
    'B': np.random.randn(10),
    'C': np.random.randn(10),
    'D': np.random.randn(10)
})

# View first rows
print(df.head())      # First 5 rows
print(df.head(3))     # First 3 rows

# View last rows
print(df.tail())      # Last 5 rows
print(df.tail(3))     # Last 3 rows

# View random sample
print(df.sample(3))   # 3 random rows

# Display specific rows
print(df[2:5])        # Rows 2, 3, 4

# Column names
print(df.columns)

# Index
print(df.index)

# Data types
print(df.dtypes)

# Quick statistics
print(df.describe())

# Transpose
print(df.T)

# Sort by index
print(df.sort_index(axis=0, ascending=False))

# Sort by values
print(df.sort_values(by='A'))
print(df.sort_values(by=['A', 'B'], ascending=[True, False]))`}
                </pre>
              </div>

              <div className="bg-white p-4 rounded">
                <p className="font-semibold mb-2">2. Selection and Indexing</p>
                <pre className="bg-gradient-to-r from-cyan-50 to-teal-50 text-gray-800 border-2 border-cyan-200 font-mono leading-relaxed p-3 rounded text-sm">
{`import pandas as pd

df = pd.DataFrame({
    'Name': ['Alice', 'Bob', 'Charlie', 'David'],
    'Age': [25, 30, 35, 28],
    'City': ['NYC', 'LA', 'Chicago', 'Houston'],
    'Salary': [70000, 80000, 90000, 75000]
})

# Select single column (returns Series)
print(df['Name'])
print(df.Name)  # Alternative

# Select multiple columns (returns DataFrame)
print(df[['Name', 'Age']])

# Select rows by position (iloc)
print(df.iloc[0])       # First row
print(df.iloc[0:3])     # First 3 rows
print(df.iloc[0, 1])    # Row 0, Column 1

# Select rows by label (loc)
print(df.loc[0])        # Row with index 0
print(df.loc[0:2])      # Rows 0 to 2 (inclusive)
print(df.loc[0, 'Name']) # Specific cell

# Boolean indexing
print(df[df['Age'] > 28])
print(df[(df['Age'] > 25) & (df['Salary'] > 75000)])

# Using query
print(df.query('Age > 28'))
print(df.query('Age > 28 and Salary > 75000'))

# Select with condition
print(df[df['City'].isin(['NYC', 'LA'])])

# Select columns by type
print(df.select_dtypes(include=['int64']))
print(df.select_dtypes(exclude=['object']))`}
                </pre>
              </div>

              <div className="bg-white p-4 rounded">
                <p className="font-semibold mb-2">3. Adding and Removing Data</p>
                <pre className="bg-gradient-to-r from-cyan-50 to-teal-50 text-gray-800 border-2 border-cyan-200 font-mono leading-relaxed p-3 rounded text-sm">
{`import pandas as pd

df = pd.DataFrame({
    'Name': ['Alice', 'Bob', 'Charlie'],
    'Age': [25, 30, 35]
})

# Add new column
df['City'] = ['NYC', 'LA', 'Chicago']
print(df)

# Add column with calculation
df['Age_Plus_10'] = df['Age'] + 10

# Add column with default value
df['Country'] = 'USA'

# Insert column at specific position
df.insert(2, 'Gender', ['F', 'M', 'M'])

# Add new row (append - deprecated, use concat)
new_row = pd.DataFrame({'Name': ['David'], 'Age': [28], 
                        'City': ['Houston'], 'Gender': ['M'],
                        'Age_Plus_10': [38], 'Country': ['USA']})
df = pd.concat([df, new_row], ignore_index=True)

# Delete column
df = df.drop('Age_Plus_10', axis=1)
# Or
del df['Country']

# Delete row
df = df.drop(0)  # Drop row with index 0
df = df.drop([1, 2])  # Drop multiple rows

# Drop by condition
df = df[df['Age'] > 25]

# Reset index
df = df.reset_index(drop=True)

# Rename columns
df = df.rename(columns={'Name': 'Full_Name', 'Age': 'Years'})

# Rename index
df = df.rename(index={0: 'First', 1: 'Second'})`}
                </pre>
              </div>

              <div className="bg-white p-4 rounded">
                <p className="font-semibold mb-2">4. Iteration</p>
                <pre className="bg-gradient-to-r from-cyan-50 to-teal-50 text-gray-800 border-2 border-cyan-200 font-mono leading-relaxed p-3 rounded text-sm">
{`import pandas as pd

df = pd.DataFrame({
    'Name': ['Alice', 'Bob', 'Charlie'],
    'Age': [25, 30, 35],
    'City': ['NYC', 'LA', 'Chicago']
})

# Iterate over rows (iterrows)
for index, row in df.iterrows():
    print(f"Index: {index}")
    print(f"Name: {row['Name']}, Age: {row['Age']}")

# Iterate over rows (itertuples) - faster
for row in df.itertuples():
    print(f"Index: {row.Index}")
    print(f"Name: {row.Name}, Age: {row.Age}")

# Iterate over columns
for col_name in df.columns:
    print(f"Column: {col_name}")
    print(df[col_name])

# Iterate over column items
for col_name, col_data in df.items():
    print(f"Column: {col_name}")
    print(col_data)

# Apply function to each row
def process_row(row):
    return row['Age'] * 2

df['Age_Doubled'] = df.apply(process_row, axis=1)

# Apply function to each column
df_numeric = df[['Age']].apply(lambda x: x.mean())
print(df_numeric)`}
                </pre>
              </div>
            </div>
          </div>
        </section>

        {/* Question 3 */}
        <section className="border-l-4 border-purple-500 pl-4">
          <h3 className="text-2xl font-bold mb-3 text-green-700">Q3: Descriptive Statistics and Function Application</h3>
          <div className="bg-purple-50 p-4 rounded mb-4">
            <h4 className="font-semibold mb-2">Answer:</h4>
            <p className="mb-3">
              Pandas provides comprehensive statistical functions and methods to apply custom functions.
            </p>

            <div className="space-y-4">
              <div className="bg-white p-4 rounded">
                <p className="font-semibold mb-2">1. Descriptive Statistics</p>
                <pre className="bg-gradient-to-r from-cyan-50 to-teal-50 text-gray-800 border-2 border-cyan-200 font-mono leading-relaxed p-3 rounded text-sm">
{`import pandas as pd
import numpy as np

df = pd.DataFrame({
    'A': [1, 2, 3, 4, 5],
    'B': [10, 20, 30, 40, 50],
    'C': [100, 200, 300, 400, 500]
})

# Summary statistics
print(df.describe())  # Count, mean, std, min, 25%, 50%, 75%, max

# Individual statistics
print(df.mean())      # Mean of each column
print(df.median())    # Median
print(df.std())       # Standard deviation
print(df.var())       # Variance
print(df.min())       # Minimum
print(df.max())       # Maximum
print(df.sum())       # Sum
print(df.count())     # Count non-NA values

# Quantiles
print(df.quantile(0.25))  # 25th percentile
print(df.quantile([0.25, 0.5, 0.75]))

# Mode
print(df.mode())

# Correlation
print(df.corr())

# Covariance
print(df.cov())

# Cumulative statistics
print(df.cumsum())    # Cumulative sum
print(df.cumprod())   # Cumulative product
print(df.cummax())    # Cumulative maximum
print(df.cummin())    # Cumulative minimum

# Absolute values
print(df.abs())

# Unique values
print(df['A'].unique())
print(df['A'].nunique())  # Count of unique values
print(df['A'].value_counts())  # Count of each value

# Rank
print(df['A'].rank())`}
                </pre>
              </div>

              <div className="bg-white p-4 rounded">
                <p className="font-semibold mb-2">2. Function Application</p>
                <pre className="bg-gradient-to-r from-cyan-50 to-teal-50 text-gray-800 border-2 border-cyan-200 font-mono leading-relaxed p-3 rounded text-sm">
{`import pandas as pd
import numpy as np

df = pd.DataFrame({
    'A': [1, 2, 3, 4, 5],
    'B': [10, 20, 30, 40, 50]
})

# Apply function to each element
def square(x):
    return x ** 2

print(df.apply(square))

# Apply with lambda
print(df.apply(lambda x: x ** 2))

# Apply to specific column
df['A_squared'] = df['A'].apply(lambda x: x ** 2)

# Apply along axis
# axis=0: apply to each column
# axis=1: apply to each row
print(df.apply(np.sum, axis=0))  # Sum of each column
print(df.apply(np.sum, axis=1))  # Sum of each row

# Map (for Series)
df['A_category'] = df['A'].map({1: 'Low', 2: 'Low', 3: 'Medium', 
                                 4: 'High', 5: 'High'})

# Map with function
df['A_doubled'] = df['A'].map(lambda x: x * 2)

# Applymap (element-wise for DataFrame)
print(df[['A', 'B']].applymap(lambda x: f"Value: {x}"))

# Pipe (chain operations)
result = (df
    .pipe(lambda x: x[x['A'] > 2])
    .pipe(lambda x: x.assign(C=x['A'] * x['B']))
)

# Transform (return same shape)
print(df.transform(lambda x: (x - x.mean()) / x.std()))

# Aggregate multiple functions
print(df.agg(['sum', 'mean', 'std']))
print(df.agg({'A': ['sum', 'mean'], 'B': ['min', 'max']}))`}
                </pre>
              </div>

              <div className="bg-white p-4 rounded">
                <p className="font-semibold mb-2">3. Reindexing</p>
                <pre className="bg-gradient-to-r from-cyan-50 to-teal-50 text-gray-800 border-2 border-cyan-200 font-mono leading-relaxed p-3 rounded text-sm">
{`import pandas as pd

df = pd.DataFrame({
    'A': [1, 2, 3],
    'B': [4, 5, 6]
}, index=['a', 'b', 'c'])

# Reindex rows
new_index = ['a', 'b', 'c', 'd', 'e']
df_reindexed = df.reindex(new_index)
print(df_reindexed)
# New rows filled with NaN

# Reindex with fill value
df_reindexed = df.reindex(new_index, fill_value=0)

# Forward fill
df_reindexed = df.reindex(new_index, method='ffill')

# Backward fill
df_reindexed = df.reindex(new_index, method='bfill')

# Reindex columns
df_reindexed = df.reindex(columns=['A', 'B', 'C'])

# Reindex both axes
df_reindexed = df.reindex(index=['a', 'b', 'c', 'd'], 
                          columns=['A', 'B', 'C'])

# Set index
df_new = df.set_index('A')

# Reset index
df_reset = df_new.reset_index()

# Rename index
df_renamed = df.rename(index={'a': 'first', 'b': 'second'})`}
                </pre>
              </div>
            </div>
          </div>
        </section>

        {/* Summary */}
        <section className="bg-gradient-to-r from-blue-100 to-purple-100 p-6 rounded-lg">
          <h3 className="text-xl font-bold mb-3">📚 Key Takeaways (Part 1):</h3>
          <ul className="list-disc ml-6 space-y-2">
            <li><strong>Pandas:</strong> Powerful library for data manipulation and analysis</li>
            <li><strong>Series:</strong> 1D labeled array, created from list, dict, or scalar</li>
            <li><strong>DataFrame:</strong> 2D labeled data structure with rows and columns</li>
            <li><strong>Panel:</strong> Deprecated, use MultiIndex DataFrame instead</li>
            <li><strong>Selection:</strong> Use [], loc[], iloc[], query() for data selection</li>
            <li><strong>Statistics:</strong> describe(), mean(), median(), std(), corr()</li>
            <li><strong>Function Application:</strong> apply(), map(), applymap(), transform()</li>
            <li><strong>Iteration:</strong> iterrows(), itertuples(), items()</li>
          </ul>
        </section>
      </div>
    </div>
  );
}

export default Question15;
