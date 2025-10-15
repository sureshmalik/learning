import React from "react";

function Question16() {
  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold mb-6 text-blue-700">Pandas - Sorting, Text Data, Missing Data & GroupBy</h2>
      
      <div className="space-y-8">
        {/* Question 1 */}
        <section className="border-l-4 border-blue-500 pl-4">
          <h3 className="text-2xl font-bold mb-3 text-green-700">Q1: Sorting and Working with Text Data</h3>
          <div className="bg-blue-50 p-4 rounded mb-4">
            <h4 className="font-semibold mb-2">Answer:</h4>
            <p className="mb-3">
              Pandas provides powerful sorting capabilities and string methods for text data manipulation.
            </p>
            
            <div className="space-y-4">
              <div className="bg-white p-4 rounded">
                <p className="font-semibold mb-2">1. Sorting Data</p>
                <pre className="bg-gradient-to-r from-yellow-50 to-amber-50 text-gray-800 border-2 border-yellow-200 font-mono leading-relaxed p-3 rounded text-sm">
{`import pandas as pd
import numpy as np

df = pd.DataFrame({
    'Name': ['Charlie', 'Alice', 'Bob', 'David'],
    'Age': [35, 25, 30, 28],
    'Salary': [90000, 70000, 80000, 75000]
})

# Sort by single column
df_sorted = df.sort_values('Age')
print(df_sorted)

# Sort descending
df_sorted = df.sort_values('Age', ascending=False)

# Sort by multiple columns
df_sorted = df.sort_values(['Age', 'Salary'])
df_sorted = df.sort_values(['Age', 'Salary'], ascending=[True, False])

# Sort by index
df_sorted = df.sort_index()
df_sorted = df.sort_index(ascending=False)

# Sort in place
df.sort_values('Age', inplace=True)

# Sort with NaN values
df_with_nan = pd.DataFrame({
    'A': [3, 1, np.nan, 2],
    'B': [1, 2, 3, 4]
})
# NaN values at the end by default
df_sorted = df_with_nan.sort_values('A')
# NaN values at the beginning
df_sorted = df_with_nan.sort_values('A', na_position='first')

# Sort by custom key
df_sorted = df.sort_values('Name', key=lambda x: x.str.lower())

# Rank (assign ranks)
df['Age_Rank'] = df['Age'].rank()
df['Age_Rank_Dense'] = df['Age'].rank(method='dense')
print(df)

# nsmallest and nlargest
print(df.nsmallest(2, 'Age'))  # 2 smallest by Age
print(df.nlargest(2, 'Salary'))  # 2 largest by Salary`}
                </pre>
              </div>

              <div className="bg-white p-4 rounded">
                <p className="font-semibold mb-2">2. Working with Text Data (String Methods)</p>
                <pre className="bg-gradient-to-r from-yellow-50 to-amber-50 text-gray-800 border-2 border-yellow-200 font-mono leading-relaxed p-3 rounded text-sm">
{`import pandas as pd

df = pd.DataFrame({
    'Name': ['alice smith', 'BOB JONES', 'Charlie Brown', 'david LEE'],
    'Email': ['alice@email.com', 'bob@email.com', 'charlie@email.com', 'david@email.com']
})

# Convert to lowercase
df['Name_Lower'] = df['Name'].str.lower()
print(df['Name_Lower'])

# Convert to uppercase
df['Name_Upper'] = df['Name'].str.upper()

# Title case
df['Name_Title'] = df['Name'].str.title()

# Capitalize
df['Name_Cap'] = df['Name'].str.capitalize()

# Length of strings
df['Name_Length'] = df['Name'].str.len()

# Strip whitespace
df['Name_Strip'] = df['Name'].str.strip()

# Replace
df['Name_Replace'] = df['Name'].str.replace('smith', 'SMITH')

# Contains
df['Has_Brown'] = df['Name'].str.contains('Brown')
print(df[df['Name'].str.contains('Brown')])

# Starts with / Ends with
df['Starts_A'] = df['Name'].str.startswith('a', na=False)
df['Ends_n'] = df['Name'].str.endswith('n', na=False)

# Split strings
df['Name_Split'] = df['Name'].str.split(' ')
print(df['Name_Split'])

# Get first/last name
df['First_Name'] = df['Name'].str.split(' ').str[0]
df['Last_Name'] = df['Name'].str.split(' ').str[-1]

# Extract with regex
df['Domain'] = df['Email'].str.extract(r'@(.+)')
print(df['Domain'])

# Find substring
df['Position'] = df['Name'].str.find('smith')

# Count occurrences
df['Count_o'] = df['Name'].str.count('o')

# Join strings
s = pd.Series(['a', 'b', 'c'])
result = s.str.cat(sep='-')
print(result)  # 'a-b-c'

# Pad strings
df['Name_Pad'] = df['Name'].str.pad(20, fillchar='*')
df['Name_Center'] = df['Name'].str.center(20, fillchar='*')

# Slice strings
df['First_3'] = df['Name'].str[:3]

# Get dummies (one-hot encoding)
df_dummies = df['Name'].str.get_dummies(sep=' ')`}
                </pre>
              </div>

              <div className="bg-white p-4 rounded">
                <p className="font-semibold mb-2">3. Options and Customization</p>
                <pre className="bg-gradient-to-r from-yellow-50 to-amber-50 text-gray-800 border-2 border-yellow-200 font-mono leading-relaxed p-3 rounded text-sm">
{`import pandas as pd
import numpy as np

# Display options
pd.set_option('display.max_rows', 100)
pd.set_option('display.max_columns', 20)
pd.set_option('display.width', 1000)
pd.set_option('display.precision', 2)
pd.set_option('display.float_format', '{:.2f}'.format)

# Get current option
print(pd.get_option('display.max_rows'))

# Reset option
pd.reset_option('display.max_rows')

# Context manager for temporary options
with pd.option_context('display.max_rows', 5, 'display.precision', 4):
    print(df)  # Temporary settings
# Back to original settings

# Common options:
# display.max_rows - Max rows to display
# display.max_columns - Max columns to display
# display.width - Display width in characters
# display.precision - Decimal precision
# display.float_format - Float formatting
# display.max_colwidth - Max column width
# mode.chained_assignment - Warn about chained assignment

# Describe all options
pd.describe_option()

# Search options
pd.describe_option('display')

# Set multiple options
pd.set_option('display.max_rows', 100)
pd.set_option('display.max_columns', 50)

# Reset all options
pd.reset_option('all')`}
                </pre>
              </div>
            </div>
          </div>
        </section>

        {/* Question 2 */}
        <section className="border-l-4 border-green-500 pl-4">
          <h3 className="text-2xl font-bold mb-3 text-green-700">Q2: Missing Data Handling</h3>
          <div className="bg-green-50 p-4 rounded mb-4">
            <h4 className="font-semibold mb-2">Answer:</h4>
            <p className="mb-3">
              Pandas provides comprehensive tools for detecting, removing, and filling missing data.
            </p>

            <div className="space-y-4">
              <div className="bg-white p-4 rounded">
                <p className="font-semibold mb-2">1. Detecting Missing Data</p>
                <pre className="bg-gradient-to-r from-yellow-50 to-amber-50 text-gray-800 border-2 border-yellow-200 font-mono leading-relaxed p-3 rounded text-sm">
{`import pandas as pd
import numpy as np

df = pd.DataFrame({
    'A': [1, 2, np.nan, 4, 5],
    'B': [np.nan, 2, 3, np.nan, 5],
    'C': [1, 2, 3, 4, 5]
})

# Check for missing values
print(df.isna())  # or df.isnull()
print(df.notna())  # or df.notnull()

# Count missing values per column
print(df.isna().sum())

# Count missing values per row
print(df.isna().sum(axis=1))

# Total missing values
print(df.isna().sum().sum())

# Percentage of missing values
print(df.isna().mean() * 100)

# Check if any missing values
print(df.isna().any())  # Per column
print(df.isna().any().any())  # Entire DataFrame

# Check if all values are missing
print(df.isna().all())

# Get rows with missing values
print(df[df.isna().any(axis=1)])

# Get rows without missing values
print(df[df.notna().all(axis=1)])`}
                </pre>
              </div>

              <div className="bg-white p-4 rounded">
                <p className="font-semibold mb-2">2. Removing Missing Data</p>
                <pre className="bg-gradient-to-r from-yellow-50 to-amber-50 text-gray-800 border-2 border-yellow-200 font-mono leading-relaxed p-3 rounded text-sm">
{`import pandas as pd
import numpy as np

df = pd.DataFrame({
    'A': [1, 2, np.nan, 4, 5],
    'B': [np.nan, 2, 3, np.nan, 5],
    'C': [1, 2, 3, 4, 5]
})

# Drop rows with any missing values
df_dropped = df.dropna()
print(df_dropped)

# Drop rows where all values are missing
df_dropped = df.dropna(how='all')

# Drop rows with missing values in specific columns
df_dropped = df.dropna(subset=['A'])
df_dropped = df.dropna(subset=['A', 'B'])

# Drop columns with any missing values
df_dropped = df.dropna(axis=1)

# Drop columns where all values are missing
df_dropped = df.dropna(axis=1, how='all')

# Threshold: keep rows with at least N non-NA values
df_dropped = df.dropna(thresh=2)

# Drop in place
df.dropna(inplace=True)`}
                </pre>
              </div>

              <div className="bg-white p-4 rounded">
                <p className="font-semibold mb-2">3. Filling Missing Data</p>
                <pre className="bg-gradient-to-r from-yellow-50 to-amber-50 text-gray-800 border-2 border-yellow-200 font-mono leading-relaxed p-3 rounded text-sm">
{`import pandas as pd
import numpy as np

df = pd.DataFrame({
    'A': [1, 2, np.nan, 4, 5],
    'B': [np.nan, 2, 3, np.nan, 5],
    'C': [1, 2, 3, 4, 5]
})

# Fill with scalar value
df_filled = df.fillna(0)
print(df_filled)

# Fill with different values per column
df_filled = df.fillna({'A': 0, 'B': 999})

# Forward fill (use previous value)
df_filled = df.fillna(method='ffill')  # or method='pad'

# Backward fill (use next value)
df_filled = df.fillna(method='bfill')  # or method='backfill'

# Fill with mean
df_filled = df.fillna(df.mean())

# Fill with median
df_filled = df.fillna(df.median())

# Fill with mode
df_filled = df.fillna(df.mode().iloc[0])

# Interpolate (linear interpolation)
df_filled = df.interpolate()

# Interpolate with method
df_filled = df.interpolate(method='linear')
df_filled = df.interpolate(method='polynomial', order=2)

# Replace specific values
df_replaced = df.replace(np.nan, 0)
df_replaced = df.replace([np.nan, 0], [999, -1])

# Replace with dictionary
df_replaced = df.replace({'A': {np.nan: 0}, 'B': {np.nan: 999}})

# Fill in place
df.fillna(0, inplace=True)

# Limit fill
df_filled = df.fillna(method='ffill', limit=1)  # Fill only 1 consecutive NaN`}
                </pre>
              </div>
            </div>
          </div>
        </section>

        {/* Question 3 */}
        <section className="border-l-4 border-purple-500 pl-4">
          <h3 className="text-2xl font-bold mb-3 text-green-700">Q3: GroupBy Operations</h3>
          <div className="bg-purple-50 p-4 rounded mb-4">
            <h4 className="font-semibold mb-2">Answer:</h4>
            <p className="mb-3">
              GroupBy allows you to split data into groups, apply functions, and combine results.
            </p>

            <div className="space-y-4">
              <div className="bg-white p-4 rounded">
                <p className="font-semibold mb-2">1. Basic GroupBy Operations</p>
                <pre className="bg-gradient-to-r from-yellow-50 to-amber-50 text-gray-800 border-2 border-yellow-200 font-mono leading-relaxed p-3 rounded text-sm">
{`import pandas as pd
import numpy as np

df = pd.DataFrame({
    'Department': ['IT', 'HR', 'IT', 'HR', 'IT', 'Finance'],
    'Name': ['Alice', 'Bob', 'Charlie', 'David', 'Eve', 'Frank'],
    'Salary': [70000, 60000, 75000, 65000, 80000, 90000],
    'Age': [25, 30, 35, 28, 32, 45]
})

# Group by single column
grouped = df.groupby('Department')

# Get group
print(grouped.get_group('IT'))

# Iterate over groups
for name, group in grouped:
    print(f"\\nDepartment: {name}")
    print(group)

# Aggregate functions
print(grouped.sum())      # Sum per group
print(grouped.mean())     # Mean per group
print(grouped.median())   # Median per group
print(grouped.count())    # Count per group
print(grouped.min())      # Min per group
print(grouped.max())      # Max per group
print(grouped.std())      # Std per group

# Specific column aggregation
print(grouped['Salary'].mean())
print(grouped['Salary'].sum())

# Multiple aggregations
print(grouped.agg(['mean', 'sum', 'count']))

# Different aggregations per column
print(grouped.agg({
    'Salary': ['mean', 'sum'],
    'Age': ['min', 'max']
}))

# Size (count including NaN)
print(grouped.size())

# First and last
print(grouped.first())
print(grouped.last())`}
                </pre>
              </div>

              <div className="bg-white p-4 rounded">
                <p className="font-semibold mb-2">2. Advanced GroupBy</p>
                <pre className="bg-gradient-to-r from-yellow-50 to-amber-50 text-gray-800 border-2 border-yellow-200 font-mono leading-relaxed p-3 rounded text-sm">
{`import pandas as pd
import numpy as np

df = pd.DataFrame({
    'Department': ['IT', 'HR', 'IT', 'HR', 'IT', 'Finance'],
    'Location': ['NYC', 'NYC', 'LA', 'LA', 'NYC', 'NYC'],
    'Salary': [70000, 60000, 75000, 65000, 80000, 90000],
    'Age': [25, 30, 35, 28, 32, 45]
})

# Group by multiple columns
grouped = df.groupby(['Department', 'Location'])
print(grouped.mean())

# Group by with custom function
def age_category(age):
    if age < 30:
        return 'Young'
    elif age < 40:
        return 'Middle'
    else:
        return 'Senior'

grouped = df.groupby(df['Age'].apply(age_category))
print(grouped['Salary'].mean())

# Transform (return same shape as input)
df['Salary_Mean_By_Dept'] = df.groupby('Department')['Salary'].transform('mean')
print(df)

# Filter groups
# Keep only groups with more than 1 member
filtered = df.groupby('Department').filter(lambda x: len(x) > 1)
print(filtered)

# Apply custom function
def top_salary(group):
    return group.nlargest(1, 'Salary')

result = df.groupby('Department').apply(top_salary)
print(result)

# Rank within groups
df['Salary_Rank'] = df.groupby('Department')['Salary'].rank(ascending=False)
print(df)

# Cumulative sum within groups
df['Cumsum'] = df.groupby('Department')['Salary'].cumsum()

# Shift within groups
df['Prev_Salary'] = df.groupby('Department')['Salary'].shift(1)

# Percentage of total
df['Pct_of_Dept'] = df.groupby('Department')['Salary'].transform(
    lambda x: x / x.sum() * 100
)

# Named aggregations
result = df.groupby('Department').agg(
    avg_salary=('Salary', 'mean'),
    max_age=('Age', 'max'),
    count=('Name', 'count')
)
print(result)`}
                </pre>
              </div>

              <div className="bg-white p-4 rounded">
                <p className="font-semibold mb-2">3. Aggregations and Window Functions</p>
                <pre className="bg-gradient-to-r from-yellow-50 to-amber-50 text-gray-800 border-2 border-yellow-200 font-mono leading-relaxed p-3 rounded text-sm">
{`import pandas as pd
import numpy as np

df = pd.DataFrame({
    'Date': pd.date_range('2024-01-01', periods=10),
    'Value': [10, 20, 15, 30, 25, 35, 40, 45, 50, 55]
})

# Rolling window (moving average)
df['Rolling_Mean_3'] = df['Value'].rolling(window=3).mean()
print(df)

# Rolling with min_periods
df['Rolling_Mean'] = df['Value'].rolling(window=3, min_periods=1).mean()

# Rolling sum
df['Rolling_Sum'] = df['Value'].rolling(window=3).sum()

# Rolling std
df['Rolling_Std'] = df['Value'].rolling(window=3).std()

# Rolling max/min
df['Rolling_Max'] = df['Value'].rolling(window=3).max()
df['Rolling_Min'] = df['Value'].rolling(window=3).min()

# Expanding window (cumulative)
df['Expanding_Mean'] = df['Value'].expanding().mean()
df['Expanding_Sum'] = df['Value'].expanding().sum()

# Exponentially weighted moving average
df['EWMA'] = df['Value'].ewm(span=3).mean()

# Custom aggregation
def custom_agg(x):
    return x.max() - x.min()

df['Rolling_Range'] = df['Value'].rolling(window=3).apply(custom_agg)

# Multiple window functions
result = df['Value'].rolling(window=3).agg(['mean', 'std', 'min', 'max'])
print(result)`}
                </pre>
              </div>
            </div>
          </div>
        </section>

        {/* Summary */}
        <section className="bg-gradient-to-r from-blue-100 to-purple-100 p-6 rounded-lg">
          <h3 className="text-xl font-bold mb-3">📚 Key Takeaways (Part 2):</h3>
          <ul className="list-disc ml-6 space-y-2">
            <li><strong>Sorting:</strong> sort_values(), sort_index(), nsmallest(), nlargest()</li>
            <li><strong>Text Data:</strong> str.lower(), str.upper(), str.contains(), str.split(), str.extract()</li>
            <li><strong>Options:</strong> pd.set_option(), pd.get_option(), pd.option_context()</li>
            <li><strong>Missing Data:</strong> isna(), dropna(), fillna(), interpolate()</li>
            <li><strong>Fill Methods:</strong> ffill (forward), bfill (backward), mean, median</li>
            <li><strong>GroupBy:</strong> groupby(), agg(), transform(), filter(), apply()</li>
            <li><strong>Window Functions:</strong> rolling(), expanding(), ewm()</li>
            <li><strong>Aggregations:</strong> sum(), mean(), count(), custom functions</li>
          </ul>
        </section>
      </div>
    </div>
  );
}

export default Question16;
