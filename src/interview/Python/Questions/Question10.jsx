import React from "react";

function Question10() {
  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold mb-6 text-blue-700">Date & Time Module and Garbage Collection</h2>
      
      <div className="space-y-8">
        {/* Question 1 */}
        <section className="border-l-4 border-blue-500 pl-4">
          <h3 className="text-2xl font-bold mb-3 text-green-700">Q1: What is the datetime module in Python?</h3>
          <div className="bg-blue-50 p-4 rounded mb-4">
            <h4 className="font-semibold mb-2">Answer:</h4>
            <p className="mb-3">
              The datetime module provides classes for manipulating dates and times. It includes date, time, datetime, 
              timedelta, and timezone classes.
            </p>
            
            <div className="space-y-4">
              <div className="bg-white p-4 rounded">
                <p className="font-semibold mb-2">1. Getting Current Date and Time</p>
                <pre className="bg-gradient-to-r from-orange-50 to-amber-50 text-gray-800 border-2 border-orange-200 font-mono leading-relaxed p-3 rounded text-sm">
{`from datetime import datetime, date, time

# Current date and time
now = datetime.now()
print(now)  # 2024-01-15 14:30:45.123456

# Current date only
today = date.today()
print(today)  # 2024-01-15

# Current time only
current_time = datetime.now().time()
print(current_time)  # 14:30:45.123456

# Access individual components
print(now.year)    # 2024
print(now.month)   # 1
print(now.day)     # 15
print(now.hour)    # 14
print(now.minute)  # 30
print(now.second)  # 45`}
                </pre>
              </div>

              <div className="bg-white p-4 rounded">
                <p className="font-semibold mb-2">2. Creating Specific Dates and Times</p>
                <pre className="bg-gradient-to-r from-orange-50 to-amber-50 text-gray-800 border-2 border-orange-200 font-mono leading-relaxed p-3 rounded text-sm">
{`from datetime import datetime, date, time

# Create specific date
birthday = date(1990, 5, 15)
print(birthday)  # 1990-05-15

# Create specific time
meeting_time = time(14, 30, 0)
print(meeting_time)  # 14:30:00

# Create specific datetime
event = datetime(2024, 12, 25, 18, 30, 0)
print(event)  # 2024-12-25 18:30:00

# Create from timestamp
timestamp = 1705329045
dt = datetime.fromtimestamp(timestamp)
print(dt)

# Get timestamp from datetime
timestamp = datetime.now().timestamp()
print(timestamp)  # 1705329045.123456`}
                </pre>
              </div>

              <div className="bg-white p-4 rounded">
                <p className="font-semibold mb-2">3. Formatting Dates and Times</p>
                <pre className="bg-gradient-to-r from-orange-50 to-amber-50 text-gray-800 border-2 border-orange-200 font-mono leading-relaxed p-3 rounded text-sm">
{`from datetime import datetime

now = datetime.now()

# strftime - Format datetime to string
formatted = now.strftime("%Y-%m-%d %H:%M:%S")
print(formatted)  # 2024-01-15 14:30:45

# Common format codes:
print(now.strftime("%Y"))        # 2024 (4-digit year)
print(now.strftime("%y"))        # 24 (2-digit year)
print(now.strftime("%m"))        # 01 (month)
print(now.strftime("%d"))        # 15 (day)
print(now.strftime("%H"))        # 14 (hour 24-hour)
print(now.strftime("%I"))        # 02 (hour 12-hour)
print(now.strftime("%M"))        # 30 (minute)
print(now.strftime("%S"))        # 45 (second)
print(now.strftime("%p"))        # PM (AM/PM)
print(now.strftime("%A"))        # Monday (full weekday)
print(now.strftime("%a"))        # Mon (abbreviated weekday)
print(now.strftime("%B"))        # January (full month)
print(now.strftime("%b"))        # Jan (abbreviated month)

# Custom formats
print(now.strftime("%d/%m/%Y"))           # 15/01/2024
print(now.strftime("%B %d, %Y"))          # January 15, 2024
print(now.strftime("%I:%M %p"))           # 02:30 PM
print(now.strftime("%A, %B %d, %Y"))      # Monday, January 15, 2024`}
                </pre>
              </div>

              <div className="bg-white p-4 rounded">
                <p className="font-semibold mb-2">4. Parsing Strings to Datetime</p>
                <pre className="bg-gradient-to-r from-orange-50 to-amber-50 text-gray-800 border-2 border-orange-200 font-mono leading-relaxed p-3 rounded text-sm">
{`from datetime import datetime

# strptime - Parse string to datetime
date_string = "2024-01-15 14:30:45"
dt = datetime.strptime(date_string, "%Y-%m-%d %H:%M:%S")
print(dt)  # 2024-01-15 14:30:45

# Different formats
date1 = datetime.strptime("15/01/2024", "%d/%m/%Y")
print(date1)  # 2024-01-15 00:00:00

date2 = datetime.strptime("January 15, 2024", "%B %d, %Y")
print(date2)  # 2024-01-15 00:00:00

date3 = datetime.strptime("15-Jan-2024 2:30 PM", "%d-%b-%Y %I:%M %p")
print(date3)  # 2024-01-15 14:30:00

# Handle parsing errors
try:
    dt = datetime.strptime("invalid", "%Y-%m-%d")
except ValueError as e:
    print(f"Error: {e}")`}
                </pre>
              </div>

              <div className="bg-white p-4 rounded">
                <p className="font-semibold mb-2">5. Date Arithmetic - timedelta</p>
                <pre className="bg-gradient-to-r from-orange-50 to-amber-50 text-gray-800 border-2 border-orange-200 font-mono leading-relaxed p-3 rounded text-sm">
{`from datetime import datetime, timedelta

now = datetime.now()

# Add/subtract days
tomorrow = now + timedelta(days=1)
yesterday = now - timedelta(days=1)
next_week = now + timedelta(weeks=1)

print(tomorrow)
print(yesterday)
print(next_week)

# Add/subtract hours, minutes, seconds
in_2_hours = now + timedelta(hours=2)
in_30_minutes = now + timedelta(minutes=30)
in_10_seconds = now + timedelta(seconds=10)

# Combined
future = now + timedelta(days=7, hours=3, minutes=30)
print(future)

# Calculate difference between dates
date1 = datetime(2024, 1, 15)
date2 = datetime(2024, 1, 1)
difference = date1 - date2
print(difference)  # 14 days, 0:00:00
print(difference.days)  # 14
print(difference.total_seconds())  # 1209600.0

# Age calculation
birthday = datetime(1990, 5, 15)
today = datetime.now()
age = today - birthday
years = age.days // 365
print(f"Age: {years} years")`}
                </pre>
              </div>

              <div className="bg-white p-4 rounded">
                <p className="font-semibold mb-2">6. Practical Examples</p>
                <pre className="bg-gradient-to-r from-orange-50 to-amber-50 text-gray-800 border-2 border-orange-200 font-mono leading-relaxed p-3 rounded text-sm">
{`from datetime import datetime, timedelta

# Example 1: Check if date is weekend
def is_weekend(date):
    return date.weekday() >= 5  # 5=Saturday, 6=Sunday

today = datetime.now()
if is_weekend(today):
    print("It's weekend!")
else:
    print("It's a weekday")

# Example 2: Calculate business days
def add_business_days(start_date, days):
    current = start_date
    while days > 0:
        current += timedelta(days=1)
        if current.weekday() < 5:  # Monday to Friday
            days -= 1
    return current

start = datetime(2024, 1, 15)
result = add_business_days(start, 5)
print(f"5 business days from {start}: {result}")

# Example 3: Time until event
def time_until(target_date):
    now = datetime.now()
    delta = target_date - now
    
    days = delta.days
    hours = delta.seconds // 3600
    minutes = (delta.seconds % 3600) // 60
    
    return f"{days} days, {hours} hours, {minutes} minutes"

christmas = datetime(2024, 12, 25)
print(f"Time until Christmas: {time_until(christmas)}")

# Example 4: Format for different locales
def format_date_us(date):
    return date.strftime("%m/%d/%Y")

def format_date_eu(date):
    return date.strftime("%d/%m/%Y")

date = datetime(2024, 1, 15)
print(f"US format: {format_date_us(date)}")  # 01/15/2024
print(f"EU format: {format_date_eu(date)}")  # 15/01/2024

# Example 5: Working hours calculator
def calculate_work_hours(clock_in, clock_out):
    delta = clock_out - clock_in
    hours = delta.total_seconds() / 3600
    return round(hours, 2)

clock_in = datetime(2024, 1, 15, 9, 0, 0)
clock_out = datetime(2024, 1, 15, 17, 30, 0)
hours = calculate_work_hours(clock_in, clock_out)
print(f"Worked {hours} hours")`}
                </pre>
              </div>
            </div>
          </div>
        </section>

        {/* Question 2 */}
        <section className="border-l-4 border-green-500 pl-4">
          <h3 className="text-2xl font-bold mb-3 text-green-700">Q2: What is Garbage Collection in Python?</h3>
          <div className="bg-green-50 p-4 rounded mb-4">
            <h4 className="font-semibold mb-2">Answer:</h4>
            <p className="mb-3">
              Garbage Collection is the automatic process of freeing memory by deleting objects that are no longer 
              referenced. Python uses reference counting and a cyclic garbage collector.
            </p>

            <div className="space-y-4">
              <div className="bg-white p-4 rounded">
                <p className="font-semibold mb-2">1. Reference Counting</p>
                <pre className="bg-gradient-to-r from-orange-50 to-amber-50 text-gray-800 border-2 border-orange-200 font-mono leading-relaxed p-3 rounded text-sm">
{`import sys

# Create an object
x = [1, 2, 3]
print(sys.getrefcount(x))  # 2 (x + getrefcount parameter)

# Add another reference
y = x
print(sys.getrefcount(x))  # 3

# Remove a reference
del y
print(sys.getrefcount(x))  # 2

# When reference count reaches 0, object is deleted
del x
# Object is now garbage collected

# Example: Reference counting in action
class MyClass:
    def __init__(self, name):
        self.name = name
        print(f"{self.name} created")
    
    def __del__(self):
        print(f"{self.name} deleted")

obj1 = MyClass("Object1")  # Created
obj2 = obj1                # Reference count = 2
del obj1                   # Reference count = 1
del obj2                   # Reference count = 0, __del__ called
# Output: Object1 deleted`}
                </pre>
              </div>

              <div className="bg-white p-4 rounded">
                <p className="font-semibold mb-2">2. Garbage Collection Module</p>
                <pre className="bg-gradient-to-r from-orange-50 to-amber-50 text-gray-800 border-2 border-orange-200 font-mono leading-relaxed p-3 rounded text-sm">
{`import gc

# Check if garbage collection is enabled
print(gc.isenabled())  # True

# Disable garbage collection
gc.disable()

# Enable garbage collection
gc.enable()

# Manually trigger garbage collection
collected = gc.collect()
print(f"Collected {collected} objects")

# Get garbage collection statistics
stats = gc.get_stats()
print(stats)

# Get threshold values
thresholds = gc.get_threshold()
print(f"Thresholds: {thresholds}")  # (700, 10, 10)

# Set new thresholds
gc.set_threshold(1000, 15, 15)

# Get list of all objects tracked by GC
all_objects = gc.get_objects()
print(f"Total objects: {len(all_objects)}")

# Get garbage (unreachable objects)
garbage = gc.garbage
print(f"Garbage: {len(garbage)} objects")`}
                </pre>
              </div>

              <div className="bg-white p-4 rounded">
                <p className="font-semibold mb-2">3. Circular References</p>
                <pre className="bg-gradient-to-r from-orange-50 to-amber-50 text-gray-800 border-2 border-orange-200 font-mono leading-relaxed p-3 rounded text-sm">
{`import gc

# Circular reference problem
class Node:
    def __init__(self, value):
        self.value = value
        self.next = None
    
    def __del__(self):
        print(f"Node {self.value} deleted")

# Create circular reference
node1 = Node(1)
node2 = Node(2)
node1.next = node2
node2.next = node1  # Circular reference!

# Delete references
del node1
del node2

# Objects not deleted due to circular reference
# Garbage collector will handle it

# Force garbage collection
collected = gc.collect()
print(f"Collected {collected} objects")
# Output: Node 1 deleted
#         Node 2 deleted

# Better approach: Use weak references
import weakref

class BetterNode:
    def __init__(self, value):
        self.value = value
        self._next = None
    
    @property
    def next(self):
        return self._next() if self._next else None
    
    @next.setter
    def next(self, node):
        self._next = weakref.ref(node) if node else None

# No circular reference issue
node1 = BetterNode(1)
node2 = BetterNode(2)
node1.next = node2
node2.next = node1

del node1
del node2
# Objects deleted immediately`}
                </pre>
              </div>

              <div className="bg-white p-4 rounded">
                <p className="font-semibold mb-2">4. Memory Management Best Practices</p>
                <pre className="bg-gradient-to-r from-orange-50 to-amber-50 text-gray-800 border-2 border-orange-200 font-mono leading-relaxed p-3 rounded text-sm">
{`import gc
import sys

# 1. Use context managers for resources
with open('file.txt', 'r') as f:
    content = f.read()
# File automatically closed, memory freed

# 2. Delete large objects when done
large_list = [i for i in range(1000000)]
# ... use large_list ...
del large_list
gc.collect()  # Force collection

# 3. Use generators for large datasets
def large_data_generator():
    for i in range(1000000):
        yield i

# Instead of: data = [i for i in range(1000000)]
# Use: data = large_data_generator()

# 4. Clear collections
my_dict = {i: i**2 for i in range(1000)}
my_dict.clear()  # Better than del my_dict

# 5. Monitor memory usage
def get_memory_usage():
    return sys.getsizeof(gc.get_objects())

before = get_memory_usage()
# ... your code ...
after = get_memory_usage()
print(f"Memory used: {after - before} bytes")

# 6. Use __slots__ to reduce memory
class RegularClass:
    def __init__(self, x, y):
        self.x = x
        self.y = y

class OptimizedClass:
    __slots__ = ['x', 'y']
    def __init__(self, x, y):
        self.x = x
        self.y = y

# OptimizedClass uses less memory
regular = RegularClass(1, 2)
optimized = OptimizedClass(1, 2)
print(f"Regular: {sys.getsizeof(regular)} bytes")
print(f"Optimized: {sys.getsizeof(optimized)} bytes")`}
                </pre>
              </div>

              <div className="bg-white p-4 rounded">
                <p className="font-semibold mb-2">5. Debugging Memory Leaks</p>
                <pre className="bg-gradient-to-r from-orange-50 to-amber-50 text-gray-800 border-2 border-orange-200 font-mono leading-relaxed p-3 rounded text-sm">
{`import gc
import sys

# Find objects by type
def find_objects(obj_type):
    return [obj for obj in gc.get_objects() if isinstance(obj, obj_type)]

# Example: Find all list objects
lists = find_objects(list)
print(f"Found {len(lists)} list objects")

# Track object creation and deletion
class TrackedObject:
    instances = []
    
    def __init__(self, name):
        self.name = name
        TrackedObject.instances.append(self)
        print(f"Created: {name}")
    
    def __del__(self):
        print(f"Deleted: {self.name}")
        TrackedObject.instances.remove(self)
    
    @classmethod
    def report(cls):
        print(f"Active instances: {len(cls.instances)}")
        for obj in cls.instances:
            print(f"  - {obj.name}")

# Usage
obj1 = TrackedObject("Object1")
obj2 = TrackedObject("Object2")
TrackedObject.report()
# Output: Active instances: 2
#           - Object1
#           - Object2

del obj1
TrackedObject.report()
# Output: Active instances: 1
#           - Object2

# Using objgraph for visualization (external library)
# pip install objgraph
# import objgraph
# objgraph.show_most_common_types()
# objgraph.show_growth()`}
                </pre>
              </div>

              <div className="bg-white p-4 rounded">
                <p className="font-semibold mb-2">6. Practical Example: Memory-Efficient Data Processing</p>
                <pre className="bg-gradient-to-r from-orange-50 to-amber-50 text-gray-800 border-2 border-orange-200 font-mono leading-relaxed p-3 rounded text-sm">
{`import gc
import sys

class DataProcessor:
    def __init__(self):
        self.batch_size = 1000
    
    def process_large_file(self, filename):
        """Process large file in batches"""
        with open(filename, 'r') as f:
            batch = []
            for line in f:
                batch.append(line.strip())
                
                if len(batch) >= self.batch_size:
                    self._process_batch(batch)
                    batch.clear()  # Clear memory
                    gc.collect()   # Force collection
            
            # Process remaining items
            if batch:
                self._process_batch(batch)
    
    def _process_batch(self, batch):
        """Process a batch of data"""
        # Processing logic here
        print(f"Processing {len(batch)} items")
    
    def process_with_generator(self, filename):
        """Memory-efficient processing using generator"""
        def read_lines(file):
            with open(file, 'r') as f:
                for line in f:
                    yield line.strip()
        
        for line in read_lines(filename):
            # Process one line at a time
            self._process_line(line)
    
    def _process_line(self, line):
        """Process single line"""
        pass

# Memory monitoring decorator
def monitor_memory(func):
    def wrapper(*args, **kwargs):
        gc.collect()
        before = sys.getsizeof(gc.get_objects())
        result = func(*args, **kwargs)
        gc.collect()
        after = sys.getsizeof(gc.get_objects())
        print(f"Memory change: {after - before} bytes")
        return result
    return wrapper

@monitor_memory
def memory_intensive_operation():
    data = [i**2 for i in range(100000)]
    return sum(data)

result = memory_intensive_operation()`}
                </pre>
              </div>
            </div>
          </div>
        </section>

        {/* Summary */}
        <section className="bg-gradient-to-r from-blue-100 to-purple-100 p-6 rounded-lg">
          <h3 className="text-xl font-bold mb-3">📚 Key Takeaways:</h3>
          <ul className="list-disc ml-6 space-y-2">
            <li><strong>datetime:</strong> Use datetime.now(), strftime() for formatting, strptime() for parsing</li>
            <li><strong>timedelta:</strong> Add/subtract time periods (days, hours, minutes, seconds)</li>
            <li><strong>Garbage Collection:</strong> Automatic memory management using reference counting</li>
            <li><strong>gc module:</strong> Control garbage collection with gc.collect(), gc.enable(), gc.disable()</li>
            <li><strong>Circular References:</strong> Use weakref to avoid circular reference issues</li>
            <li><strong>Memory Optimization:</strong> Use generators, __slots__, clear collections, context managers</li>
            <li><strong>Best Practice:</strong> Let Python handle garbage collection automatically</li>
          </ul>
        </section>
      </div>
    </div>
  );
}

export default Question10;
