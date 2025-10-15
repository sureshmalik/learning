import React from "react";

function Question17() {
  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold mb-6 text-blue-700">Pandas - Merging, Dates, Visualization & I/O</h2>
      
      <div className="space-y-8">
        {/* Question 1 */}
        <section className="border-l-4 border-blue-500 pl-4">
          <h3 className="text-2xl font-bold mb-3 text-green-700">Q1: Merging, Joining and Concatenation</h3>
          <div className="bg-blue-50 p-4 rounded mb-4">
            <h4 className="font-semibold mb-2">Answer:</h4>
            <p className="mb-3">
              Pandas provides powerful tools to combine DataFrames using merge, join, and concatenate operations.
            </p>
            
            <div className="space-y-4">
              <div className="bg-white p-4 rounded">
                <p className="font-semibold mb-2">1. Concatenation</p>
                <pre className="bg-gradient-to-r from-red-50 to-orange-50 text-gray-800 border-2 border-red-200 font-mono leading-relaxed p-3 rounded text-sm">
{`import pandas as pd

df1 = pd.DataFrame({'A': [1, 2], 'B': [3, 4]})
df2 = pd.DataFrame({'A': [5, 6], 'B': [7, 8]})

# Vertical concatenation (stack rows)
result = pd.concat([df1, df2])
print(result)
#    A  B
# 0  1  3
# 1  2  4
# 0  5  7
# 1  6  8

# Reset index
result = pd.concat([df1, df2], ignore_index=True)

# Horizontal concatenation (stack columns)
result = pd.concat([df1, df2], axis=1)
print(result)
#    A  B  A  B
# 0  1  3  5  7
# 1  2  4  6  8

# Concatenate with keys
result = pd.concat([df1, df2], keys=['first', 'second'])
print(result)

# Inner join (only matching indices)
df1 = pd.DataFrame({'A': [1, 2, 3]}, index=[0, 1, 2])
df2 = pd.DataFrame({'B': [4, 5]}, index=[1, 2])
result = pd.concat([df1, df2], axis=1, join='inner')

# Outer join (all indices)
result = pd.concat([df1, df2], axis=1, join='outer')

# Append (deprecated, use concat)
# result = df1.append(df2, ignore_index=True)
result = pd.concat([df1, df2], ignore_index=True)`}
                </pre>
              </div>

              <div className="bg-white p-4 rounded">
                <p className="font-semibold mb-2">2. Merging DataFrames</p>
                <pre className="bg-gradient-to-r from-red-50 to-orange-50 text-gray-800 border-2 border-red-200 font-mono leading-relaxed p-3 rounded text-sm">
{`import pandas as pd

# Sample DataFrames
df1 = pd.DataFrame({
    'ID': [1, 2, 3, 4],
    'Name': ['Alice', 'Bob', 'Charlie', 'David']
})

df2 = pd.DataFrame({
    'ID': [1, 2, 3, 5],
    'Salary': [70000, 80000, 90000, 75000]
})

# Inner merge (intersection)
result = pd.merge(df1, df2, on='ID', how='inner')
print(result)
#    ID     Name  Salary
# 0   1    Alice   70000
# 1   2      Bob   80000
# 2   3  Charlie   90000

# Left merge (all from left)
result = pd.merge(df1, df2, on='ID', how='left')

# Right merge (all from right)
result = pd.merge(df1, df2, on='ID', how='right')

# Outer merge (union)
result = pd.merge(df1, df2, on='ID', how='outer')

# Merge on multiple columns
df1 = pd.DataFrame({
    'ID': [1, 2, 3],
    'Year': [2020, 2020, 2021],
    'Value': [100, 200, 300]
})
df2 = pd.DataFrame({
    'ID': [1, 2, 3],
    'Year': [2020, 2021, 2021],
    'Score': [90, 85, 95]
})
result = pd.merge(df1, df2, on=['ID', 'Year'])

# Merge with different column names
df1 = pd.DataFrame({'emp_id': [1, 2], 'name': ['Alice', 'Bob']})
df2 = pd.DataFrame({'employee_id': [1, 2], 'salary': [70000, 80000]})
result = pd.merge(df1, df2, left_on='emp_id', right_on='employee_id')

# Merge on index
df1 = pd.DataFrame({'A': [1, 2]}, index=['a', 'b'])
df2 = pd.DataFrame({'B': [3, 4]}, index=['a', 'b'])
result = pd.merge(df1, df2, left_index=True, right_index=True)

# Indicator column
result = pd.merge(df1, df2, on='ID', how='outer', indicator=True)
print(result['_merge'].value_counts())`}
                </pre>
              </div>

              <div className="bg-white p-4 rounded">
                <p className="font-semibold mb-2">3. Joining DataFrames</p>
                <pre className="bg-gradient-to-r from-red-50 to-orange-50 text-gray-800 border-2 border-red-200 font-mono leading-relaxed p-3 rounded text-sm">
{`import pandas as pd

df1 = pd.DataFrame({
    'A': [1, 2, 3]
}, index=['a', 'b', 'c'])

df2 = pd.DataFrame({
    'B': [4, 5, 6]
}, index=['a', 'b', 'd'])

# Join (default: left join on index)
result = df1.join(df2)
print(result)
#    A    B
# a  1  4.0
# b  2  5.0
# c  3  NaN

# Inner join
result = df1.join(df2, how='inner')

# Outer join
result = df1.join(df2, how='outer')

# Join multiple DataFrames
df3 = pd.DataFrame({'C': [7, 8, 9]}, index=['a', 'b', 'e'])
result = df1.join([df2, df3])

# Join with suffix for overlapping columns
df1 = pd.DataFrame({'A': [1, 2], 'B': [3, 4]}, index=['a', 'b'])
df2 = pd.DataFrame({'A': [5, 6], 'B': [7, 8]}, index=['a', 'b'])
result = df1.join(df2, lsuffix='_left', rsuffix='_right')`}
                </pre>
              </div>
            </div>
          </div>
        </section>

        {/* Question 2 */}
        <section className="border-l-4 border-green-500 pl-4">
          <h3 className="text-2xl font-bold mb-3 text-green-700">Q2: Date Functionality and Timedelta</h3>
          <div className="bg-green-50 p-4 rounded mb-4">
            <h4 className="font-semibold mb-2">Answer:</h4>
            <p className="mb-3">
              Pandas provides extensive support for working with dates, times, and time deltas.
            </p>

            <div className="space-y-4">
              <div className="bg-white p-4 rounded">
                <p className="font-semibold mb-2">1. Working with Dates</p>
                <pre className="bg-gradient-to-r from-red-50 to-orange-50 text-gray-800 border-2 border-red-200 font-mono leading-relaxed p-3 rounded text-sm">
{`import pandas as pd
import numpy as np

# Create date range
dates = pd.date_range('2024-01-01', periods=10, freq='D')
print(dates)

# Different frequencies
dates_hourly = pd.date_range('2024-01-01', periods=24, freq='H')
dates_monthly = pd.date_range('2024-01-01', periods=12, freq='M')
dates_yearly = pd.date_range('2024-01-01', periods=5, freq='Y')

# Business days only
dates_business = pd.date_range('2024-01-01', periods=10, freq='B')

# Convert string to datetime
df = pd.DataFrame({
    'date_str': ['2024-01-01', '2024-01-02', '2024-01-03']
})
df['date'] = pd.to_datetime(df['date_str'])
print(df.dtypes)

# Parse different formats
dates = pd.to_datetime(['01/01/2024', '02/01/2024'], format='%d/%m/%Y')

# Handle errors
dates = pd.to_datetime(['2024-01-01', 'invalid'], errors='coerce')

# Extract date components
df = pd.DataFrame({'date': pd.date_range('2024-01-01', periods=10)})
df['year'] = df['date'].dt.year
df['month'] = df['date'].dt.month
df['day'] = df['date'].dt.day
df['dayofweek'] = df['date'].dt.dayofweek
df['dayofyear'] = df['date'].dt.dayofyear
df['quarter'] = df['date'].dt.quarter
df['weekofyear'] = df['date'].dt.isocalendar().week
print(df)

# Day names
df['day_name'] = df['date'].dt.day_name()
df['month_name'] = df['date'].dt.month_name()

# Set as index
df = df.set_index('date')

# Resample (time-based groupby)
df['value'] = np.random.randn(10)
monthly = df.resample('M').mean()
weekly = df.resample('W').sum()

# Period
periods = pd.period_range('2024-01', periods=12, freq='M')
print(periods)`}
                </pre>
              </div>

              <div className="bg-white p-4 rounded">
                <p className="font-semibold mb-2">2. Timedelta Operations</p>
                <pre className="bg-gradient-to-r from-red-50 to-orange-50 text-gray-800 border-2 border-red-200 font-mono leading-relaxed p-3 rounded text-sm">
{`import pandas as pd

# Create timedelta
td = pd.Timedelta(days=5)
print(td)  # 5 days 00:00:00

td = pd.Timedelta('2 days 3 hours 15 minutes')
td = pd.Timedelta(hours=48)

# Timedelta range
td_range = pd.timedelta_range(start='1 day', periods=5, freq='D')
print(td_range)

# Date arithmetic
date = pd.Timestamp('2024-01-01')
new_date = date + pd.Timedelta(days=10)
print(new_date)  # 2024-01-11

# DataFrame with timedelta
df = pd.DataFrame({
    'start': pd.date_range('2024-01-01', periods=5),
    'end': pd.date_range('2024-01-10', periods=5)
})
df['duration'] = df['end'] - df['start']
print(df)

# Extract timedelta components
df['days'] = df['duration'].dt.days
df['seconds'] = df['duration'].dt.seconds
df['total_seconds'] = df['duration'].dt.total_seconds()

# Convert to different units
df['hours'] = df['duration'] / pd.Timedelta(hours=1)
df['minutes'] = df['duration'] / pd.Timedelta(minutes=1)

# Timedelta operations
td1 = pd.Timedelta(days=5)
td2 = pd.Timedelta(days=3)
print(td1 + td2)  # 8 days
print(td1 - td2)  # 2 days
print(td1 * 2)    # 10 days

# Time series operations
df = pd.DataFrame({
    'date': pd.date_range('2024-01-01', periods=10),
    'value': range(10)
})
df = df.set_index('date')

# Shift (lag/lead)
df['prev_value'] = df['value'].shift(1)
df['next_value'] = df['value'].shift(-1)

# Difference
df['diff'] = df['value'].diff()

# Percentage change
df['pct_change'] = df['value'].pct_change()`}
                </pre>
              </div>

              <div className="bg-white p-4 rounded">
                <p className="font-semibold mb-2">3. Time Series Analysis</p>
                <pre className="bg-gradient-to-r from-red-50 to-orange-50 text-gray-800 border-2 border-red-200 font-mono leading-relaxed p-3 rounded text-sm">
{`import pandas as pd
import numpy as np

# Create time series
dates = pd.date_range('2024-01-01', periods=100, freq='D')
df = pd.DataFrame({
    'date': dates,
    'value': np.random.randn(100).cumsum()
})
df = df.set_index('date')

# Resampling
daily_mean = df.resample('D').mean()
weekly_sum = df.resample('W').sum()
monthly_max = df.resample('M').max()

# Multiple aggregations
resampled = df.resample('W').agg(['mean', 'sum', 'std'])

# Upsampling (increase frequency)
upsampled = df.resample('6H').ffill()  # Forward fill

# Downsampling (decrease frequency)
downsampled = df.resample('W').mean()

# Rolling window on dates
df['rolling_mean_7d'] = df['value'].rolling(window='7D').mean()

# Between dates
mask = (df.index >= '2024-01-15') & (df.index <= '2024-01-31')
filtered = df[mask]

# Time zone handling
df_utc = df.tz_localize('UTC')
df_ny = df_utc.tz_convert('America/New_York')

# Business day operations
from pandas.tseries.offsets import BDay
date = pd.Timestamp('2024-01-01')
next_bday = date + BDay(1)
print(next_bday)`}
                </pre>
              </div>
            </div>
          </div>
        </section>

        {/* Question 3 */}
        <section className="border-l-4 border-purple-500 pl-4">
          <h3 className="text-2xl font-bold mb-3 text-green-700">Q3: Categorical Data, Visualization & I/O</h3>
          <div className="bg-purple-50 p-4 rounded mb-4">
            <h4 className="font-semibold mb-2">Answer:</h4>
            <p className="mb-3">
              Pandas supports categorical data types, visualization, and various I/O operations.
            </p>

            <div className="space-y-4">
              <div className="bg-white p-4 rounded">
                <p className="font-semibold mb-2">1. Categorical Data</p>
                <pre className="bg-gradient-to-r from-red-50 to-orange-50 text-gray-800 border-2 border-red-200 font-mono leading-relaxed p-3 rounded text-sm">
{`import pandas as pd

# Create categorical data
df = pd.DataFrame({
    'grade': ['A', 'B', 'C', 'A', 'B', 'C', 'A']
})

# Convert to categorical
df['grade'] = df['grade'].astype('category')
print(df['grade'].dtype)  # category

# Create with categories
cat = pd.Categorical(['A', 'B', 'C', 'A'], 
                     categories=['A', 'B', 'C', 'D'])
df = pd.DataFrame({'grade': cat})

# Ordered categorical
cat = pd.Categorical(['Low', 'High', 'Medium', 'Low'],
                     categories=['Low', 'Medium', 'High'],
                     ordered=True)
df = pd.DataFrame({'priority': cat})

# Access categories
print(df['priority'].cat.categories)

# Add categories
df['priority'] = df['priority'].cat.add_categories(['Very High'])

# Remove categories
df['priority'] = df['priority'].cat.remove_categories(['Very High'])

# Rename categories
df['priority'] = df['priority'].cat.rename_categories({
    'Low': 'L', 'Medium': 'M', 'High': 'H'
})

# Reorder categories
df['priority'] = df['priority'].cat.reorder_categories(['L', 'M', 'H'])

# Get codes (numeric representation)
print(df['priority'].cat.codes)

# Value counts
print(df['priority'].value_counts())

# Memory efficiency
df_str = pd.DataFrame({'col': ['A'] * 1000000})
df_cat = pd.DataFrame({'col': pd.Categorical(['A'] * 1000000)})
print(f"String: {df_str.memory_usage(deep=True).sum()} bytes")
print(f"Category: {df_cat.memory_usage(deep=True).sum()} bytes")`}
                </pre>
              </div>

              <div className="bg-white p-4 rounded">
                <p className="font-semibold mb-2">2. Visualization</p>
                <pre className="bg-gradient-to-r from-red-50 to-orange-50 text-gray-800 border-2 border-red-200 font-mono leading-relaxed p-3 rounded text-sm">
{`import pandas as pd
import numpy as np
import matplotlib.pyplot as plt

df = pd.DataFrame({
    'A': np.random.randn(100).cumsum(),
    'B': np.random.randn(100).cumsum(),
    'C': np.random.randn(100).cumsum()
})

# Line plot
df.plot()
plt.show()

# Specific column
df['A'].plot()

# Multiple plot types
df.plot(kind='line')      # Line plot
df.plot(kind='bar')       # Bar plot
df.plot(kind='barh')      # Horizontal bar
df.plot(kind='hist')      # Histogram
df.plot(kind='box')       # Box plot
df.plot(kind='area')      # Area plot
df.plot(kind='scatter', x='A', y='B')  # Scatter
df.plot(kind='pie', y='A')  # Pie chart

# Histogram
df['A'].hist(bins=20)

# Box plot
df.boxplot()

# Scatter matrix
from pandas.plotting import scatter_matrix
scatter_matrix(df, figsize=(10, 10))

# Customization
df.plot(
    title='My Plot',
    xlabel='X Label',
    ylabel='Y Label',
    figsize=(10, 6),
    grid=True,
    legend=True,
    style='--'
)

# Subplots
df.plot(subplots=True, layout=(2, 2), figsize=(12, 8))

# Save plot
df.plot()
plt.savefig('plot.png', dpi=300, bbox_inches='tight')`}
                </pre>
              </div>

              <div className="bg-white p-4 rounded">
                <p className="font-semibold mb-2">3. I/O Operations</p>
                <pre className="bg-gradient-to-r from-red-50 to-orange-50 text-gray-800 border-2 border-red-200 font-mono leading-relaxed p-3 rounded text-sm">
{`import pandas as pd

# CSV
df = pd.DataFrame({'A': [1, 2, 3], 'B': [4, 5, 6]})

# Write CSV
df.to_csv('data.csv', index=False)

# Read CSV
df = pd.read_csv('data.csv')

# Read with options
df = pd.read_csv('data.csv', 
                 sep=',',
                 header=0,
                 names=['Col1', 'Col2'],
                 usecols=[0, 1],
                 skiprows=1,
                 nrows=100,
                 na_values=['NA', 'null'])

# Excel
df.to_excel('data.xlsx', sheet_name='Sheet1', index=False)
df = pd.read_excel('data.xlsx', sheet_name='Sheet1')

# Multiple sheets
with pd.ExcelWriter('output.xlsx') as writer:
    df1.to_excel(writer, sheet_name='Sheet1')
    df2.to_excel(writer, sheet_name='Sheet2')

# JSON
df.to_json('data.json', orient='records')
df = pd.read_json('data.json')

# SQL
# import sqlite3
# conn = sqlite3.connect('database.db')
# df.to_sql('table_name', conn, if_exists='replace')
# df = pd.read_sql('SELECT * FROM table_name', conn)

# HTML
df.to_html('table.html')
df = pd.read_html('table.html')[0]

# Pickle (Python binary format)
df.to_pickle('data.pkl')
df = pd.read_pickle('data.pkl')

# Clipboard
df.to_clipboard()
df = pd.read_clipboard()

# Parquet (efficient columnar format)
df.to_parquet('data.parquet')
df = pd.read_parquet('data.parquet')

# HDF5 (hierarchical data format)
df.to_hdf('data.h5', key='df', mode='w')
df = pd.read_hdf('data.h5', 'df')`}
                </pre>
              </div>

              <div className="bg-white p-4 rounded">
                <p className="font-semibold mb-2">4. Sparse Data and Performance</p>
                <pre className="bg-gradient-to-r from-red-50 to-orange-50 text-gray-800 border-2 border-red-200 font-mono leading-relaxed p-3 rounded text-sm">
{`import pandas as pd
import numpy as np

# Sparse data (mostly zeros/NaN)
# Memory efficient for sparse matrices

# Create sparse array
arr = np.random.choice([0, 1, 2], size=1000, p=[0.95, 0.04, 0.01])
sparse = pd.arrays.SparseArray(arr)

# Sparse DataFrame
df = pd.DataFrame({
    'A': pd.arrays.SparseArray([0, 0, 1, 0, 0]),
    'B': pd.arrays.SparseArray([0, 2, 0, 0, 0])
})

# Convert to sparse
df_dense = pd.DataFrame(np.random.choice([0, 1], size=(1000, 100), p=[0.95, 0.05]))
df_sparse = df_dense.astype(pd.SparseDtype('int', 0))

# Memory comparison
print(f"Dense: {df_dense.memory_usage(deep=True).sum()} bytes")
print(f"Sparse: {df_sparse.memory_usage(deep=True).sum()} bytes")

# Performance tips
# 1. Use categorical for repeated strings
# 2. Use appropriate dtypes (int8 vs int64)
# 3. Use chunks for large files
# 4. Use vectorized operations
# 5. Avoid loops, use apply/map
# 6. Use query() for filtering
# 7. Use eval() for complex expressions

# Read large CSV in chunks
chunks = pd.read_csv('large_file.csv', chunksize=10000)
for chunk in chunks:
    # Process each chunk
    process(chunk)

# Optimize dtypes
df['int_col'] = df['int_col'].astype('int32')
df['cat_col'] = df['cat_col'].astype('category')

# Use eval for complex operations
df.eval('C = A + B', inplace=True)

# Query instead of boolean indexing
result = df.query('A > 5 and B < 10')`}
                </pre>
              </div>
            </div>
          </div>
        </section>

        {/* Summary */}
        <section className="bg-gradient-to-r from-blue-100 to-purple-100 p-6 rounded-lg">
          <h3 className="text-xl font-bold mb-3">📚 Key Takeaways (Part 3):</h3>
          <ul className="list-disc ml-6 space-y-2">
            <li><strong>Concatenation:</strong> pd.concat() for stacking DataFrames vertically/horizontally</li>
            <li><strong>Merging:</strong> pd.merge() with inner, left, right, outer joins</li>
            <li><strong>Joining:</strong> df.join() for index-based joins</li>
            <li><strong>Dates:</strong> pd.date_range(), pd.to_datetime(), dt accessor for components</li>
            <li><strong>Timedelta:</strong> pd.Timedelta(), date arithmetic, shift(), diff()</li>
            <li><strong>Categorical:</strong> Ordered categories, memory efficient for repeated values</li>
            <li><strong>Visualization:</strong> plot(), hist(), boxplot(), scatter_matrix()</li>
            <li><strong>I/O:</strong> read_csv(), to_excel(), read_json(), to_sql(), to_parquet()</li>
          </ul>
        </section>
      </div>
    </div>
  );
}

export default Question17;
