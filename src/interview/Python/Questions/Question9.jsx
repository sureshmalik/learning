import React from "react";

function Question9() {
  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold mb-6 text-blue-700">Multi-Threading & Python Logging</h2>
      
      <div className="space-y-8">
        {/* Question 1 */}
        <section className="border-l-4 border-blue-500 pl-4">
          <h3 className="text-2xl font-bold mb-3 text-green-700">Q1: What is Multi-Threading in Python?</h3>
          <div className="bg-blue-50 p-4 rounded mb-4">
            <h4 className="font-semibold mb-2">Answer:</h4>
            <p className="mb-3">
              Multi-threading allows multiple threads to run concurrently within a single process, enabling parallel execution 
              of tasks. Python's <code>threading</code> module provides tools for working with threads.
            </p>
            
            <div className="space-y-4">
              <div className="bg-white p-4 rounded">
                <p className="font-semibold mb-2">1. Creating Threads - Basic Example</p>
                <pre className="bg-gradient-to-r from-emerald-50 to-green-50 text-gray-800 border-2 border-emerald-200 font-mono leading-relaxed p-3 rounded text-sm">
{`import threading
import time

def print_numbers():
    for i in range(5):
        print(f"Number: {i}")
        time.sleep(1)

def print_letters():
    for letter in ['A', 'B', 'C', 'D', 'E']:
        print(f"Letter: {letter}")
        time.sleep(1)

# Create threads
thread1 = threading.Thread(target=print_numbers)
thread2 = threading.Thread(target=print_letters)

# Start threads
thread1.start()
thread2.start()

# Wait for threads to complete
thread1.join()
thread2.join()

print("Both threads completed!")

# Output (interleaved):
# Number: 0
# Letter: A
# Number: 1
# Letter: B
# ...`}
                </pre>
              </div>

              <div className="bg-white p-4 rounded">
                <p className="font-semibold mb-2">2. Thread with Arguments</p>
                <pre className="bg-gradient-to-r from-emerald-50 to-green-50 text-gray-800 border-2 border-emerald-200 font-mono leading-relaxed p-3 rounded text-sm">
{`import threading
import time

def download_file(filename, size):
    print(f"Starting download: {filename}")
    time.sleep(2)  # Simulate download time
    print(f"Completed: {filename} ({size}MB)")

# Create threads with arguments
files = [
    ("file1.pdf", 10),
    ("file2.mp4", 50),
    ("file3.zip", 30)
]

threads = []
for filename, size in files:
    thread = threading.Thread(target=download_file, args=(filename, size))
    threads.append(thread)
    thread.start()

# Wait for all downloads to complete
for thread in threads:
    thread.join()

print("All downloads completed!")

# Output:
# Starting download: file1.pdf
# Starting download: file2.mp4
# Starting download: file3.zip
# Completed: file1.pdf (10MB)
# Completed: file2.mp4 (50MB)
# Completed: file3.zip (30MB)
# All downloads completed!`}
                </pre>
              </div>

              <div className="bg-white p-4 rounded">
                <p className="font-semibold mb-2">3. Thread Synchronization - Lock</p>
                <pre className="bg-gradient-to-r from-emerald-50 to-green-50 text-gray-800 border-2 border-emerald-200 font-mono leading-relaxed p-3 rounded text-sm">
{`import threading

# Shared resource
counter = 0
lock = threading.Lock()

def increment():
    global counter
    for _ in range(100000):
        # Without lock - race condition
        # counter += 1
        
        # With lock - thread-safe
        with lock:
            counter += 1

# Create multiple threads
threads = []
for _ in range(5):
    thread = threading.Thread(target=increment)
    threads.append(thread)
    thread.start()

# Wait for all threads
for thread in threads:
    thread.join()

print(f"Final counter: {counter}")
# With lock: 500000 (correct)
# Without lock: Random value < 500000 (race condition)

# Alternative lock usage
lock = threading.Lock()

def safe_operation():
    lock.acquire()
    try:
        # Critical section
        print("Performing operation")
    finally:
        lock.release()`}
                </pre>
              </div>

              <div className="bg-white p-4 rounded">
                <p className="font-semibold mb-2">4. Thread Class - Custom Thread</p>
                <pre className="bg-gradient-to-r from-emerald-50 to-green-50 text-gray-800 border-2 border-emerald-200 font-mono leading-relaxed p-3 rounded text-sm">
{`import threading
import time

class DownloadThread(threading.Thread):
    def __init__(self, url, filename):
        threading.Thread.__init__(self)
        self.url = url
        self.filename = filename
    
    def run(self):
        print(f"Downloading {self.url}...")
        time.sleep(2)  # Simulate download
        print(f"Saved as {self.filename}")

# Create and start threads
thread1 = DownloadThread("http://example.com/file1", "file1.pdf")
thread2 = DownloadThread("http://example.com/file2", "file2.mp4")

thread1.start()
thread2.start()

thread1.join()
thread2.join()

print("All downloads completed!")`}
                </pre>
              </div>

              <div className="bg-white p-4 rounded">
                <p className="font-semibold mb-2">5. Thread Pool - ThreadPoolExecutor</p>
                <pre className="bg-gradient-to-r from-emerald-50 to-green-50 text-gray-800 border-2 border-emerald-200 font-mono leading-relaxed p-3 rounded text-sm">
{`from concurrent.futures import ThreadPoolExecutor
import time

def process_task(task_id):
    print(f"Processing task {task_id}")
    time.sleep(1)
    return f"Task {task_id} completed"

# Create thread pool with 3 workers
with ThreadPoolExecutor(max_workers=3) as executor:
    # Submit tasks
    tasks = [1, 2, 3, 4, 5, 6, 7, 8]
    results = executor.map(process_task, tasks)
    
    # Get results
    for result in results:
        print(result)

# Alternative: submit individual tasks
with ThreadPoolExecutor(max_workers=3) as executor:
    futures = []
    for i in range(5):
        future = executor.submit(process_task, i)
        futures.append(future)
    
    # Get results as they complete
    for future in futures:
        result = future.result()
        print(result)`}
                </pre>
              </div>

              <div className="bg-white p-4 rounded">
                <p className="font-semibold mb-2">6. Practical Example: Web Scraper</p>
                <pre className="bg-gradient-to-r from-emerald-50 to-green-50 text-gray-800 border-2 border-emerald-200 font-mono leading-relaxed p-3 rounded text-sm">
{`import threading
import time
from queue import Queue

class WebScraper:
    def __init__(self, num_threads=5):
        self.queue = Queue()
        self.results = []
        self.lock = threading.Lock()
        self.num_threads = num_threads
    
    def scrape_page(self, url):
        """Simulate scraping a page"""
        print(f"Scraping: {url}")
        time.sleep(1)  # Simulate network delay
        return f"Data from {url}"
    
    def worker(self):
        """Worker thread function"""
        while True:
            url = self.queue.get()
            if url is None:
                break
            
            data = self.scrape_page(url)
            
            with self.lock:
                self.results.append(data)
            
            self.queue.task_done()
    
    def scrape_urls(self, urls):
        """Scrape multiple URLs using threads"""
        # Create worker threads
        threads = []
        for _ in range(self.num_threads):
            thread = threading.Thread(target=self.worker)
            thread.start()
            threads.append(thread)
        
        # Add URLs to queue
        for url in urls:
            self.queue.put(url)
        
        # Wait for all tasks to complete
        self.queue.join()
        
        # Stop workers
        for _ in range(self.num_threads):
            self.queue.put(None)
        
        for thread in threads:
            thread.join()
        
        return self.results

# Usage
scraper = WebScraper(num_threads=3)
urls = [f"http://example.com/page{i}" for i in range(10)]
results = scraper.scrape_urls(urls)
print(f"Scraped {len(results)} pages")`}
                </pre>
              </div>
            </div>
          </div>
        </section>

        {/* Question 2 */}
        <section className="border-l-4 border-green-500 pl-4">
          <h3 className="text-2xl font-bold mb-3 text-green-700">Q2: What is Python Logging?</h3>
          <div className="bg-green-50 p-4 rounded mb-4">
            <h4 className="font-semibold mb-2">Answer:</h4>
            <p className="mb-3">
              Logging is a way to track events that happen when software runs. Python's <code>logging</code> module 
              provides a flexible framework for emitting log messages from Python programs.
            </p>

            <div className="space-y-4">
              <div className="bg-white p-4 rounded">
                <p className="font-semibold mb-2">1. Basic Logging</p>
                <pre className="bg-gradient-to-r from-emerald-50 to-green-50 text-gray-800 border-2 border-emerald-200 font-mono leading-relaxed p-3 rounded text-sm">
{`import logging

# Configure basic logging
logging.basicConfig(level=logging.DEBUG)

# Log messages at different levels
logging.debug("This is a debug message")
logging.info("This is an info message")
logging.warning("This is a warning message")
logging.error("This is an error message")
logging.critical("This is a critical message")

# Output:
# DEBUG:root:This is a debug message
# INFO:root:This is an info message
# WARNING:root:This is a warning message
# ERROR:root:This is an error message
# CRITICAL:root:This is a critical message

# Log levels (lowest to highest):
# DEBUG (10) - Detailed information for debugging
# INFO (20) - General information
# WARNING (30) - Warning messages
# ERROR (40) - Error messages
# CRITICAL (50) - Critical errors`}
                </pre>
              </div>

              <div className="bg-white p-4 rounded">
                <p className="font-semibold mb-2">2. Logging to File</p>
                <pre className="bg-gradient-to-r from-emerald-50 to-green-50 text-gray-800 border-2 border-emerald-200 font-mono leading-relaxed p-3 rounded text-sm">
{`import logging

# Configure logging to file
logging.basicConfig(
    filename='app.log',
    level=logging.DEBUG,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s',
    datefmt='%Y-%m-%d %H:%M:%S'
)

logging.info("Application started")
logging.warning("Low disk space")
logging.error("Failed to connect to database")

# app.log content:
# 2024-01-15 10:30:45 - root - INFO - Application started
# 2024-01-15 10:30:45 - root - WARNING - Low disk space
# 2024-01-15 10:30:45 - root - ERROR - Failed to connect to database`}
                </pre>
              </div>

              <div className="bg-white p-4 rounded">
                <p className="font-semibold mb-2">3. Custom Logger</p>
                <pre className="bg-gradient-to-r from-emerald-50 to-green-50 text-gray-800 border-2 border-emerald-200 font-mono leading-relaxed p-3 rounded text-sm">
{`import logging

# Create custom logger
logger = logging.getLogger('my_app')
logger.setLevel(logging.DEBUG)

# Create console handler
console_handler = logging.StreamHandler()
console_handler.setLevel(logging.INFO)

# Create file handler
file_handler = logging.FileHandler('app.log')
file_handler.setLevel(logging.DEBUG)

# Create formatter
formatter = logging.Formatter(
    '%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)

# Add formatter to handlers
console_handler.setFormatter(formatter)
file_handler.setFormatter(formatter)

# Add handlers to logger
logger.addHandler(console_handler)
logger.addHandler(file_handler)

# Use logger
logger.debug("Debug message")  # Only in file
logger.info("Info message")    # In both console and file
logger.error("Error message")  # In both console and file`}
                </pre>
              </div>

              <div className="bg-white p-4 rounded">
                <p className="font-semibold mb-2">4. Logging with Variables</p>
                <pre className="bg-gradient-to-r from-emerald-50 to-green-50 text-gray-800 border-2 border-emerald-200 font-mono leading-relaxed p-3 rounded text-sm">
{`import logging

logging.basicConfig(level=logging.INFO)

# Method 1: String formatting
user = "Alice"
action = "login"
logging.info(f"User {user} performed {action}")

# Method 2: Old-style formatting (recommended for logging)
logging.info("User %s performed %s", user, action)

# Method 3: Dictionary
logging.info("User %(user)s performed %(action)s", 
             {'user': user, 'action': action})

# Logging exceptions
try:
    result = 10 / 0
except Exception as e:
    logging.error("Error occurred", exc_info=True)
    # Or use exception() which automatically includes traceback
    logging.exception("Error occurred")

# Output includes full traceback:
# ERROR:root:Error occurred
# Traceback (most recent call last):
#   File "...", line X, in <module>
#     result = 10 / 0
# ZeroDivisionError: division by zero`}
                </pre>
              </div>

              <div className="bg-white p-4 rounded">
                <p className="font-semibold mb-2">5. Rotating File Handler</p>
                <pre className="bg-gradient-to-r from-emerald-50 to-green-50 text-gray-800 border-2 border-emerald-200 font-mono leading-relaxed p-3 rounded text-sm">
{`import logging
from logging.handlers import RotatingFileHandler, TimedRotatingFileHandler

# Rotating by size
logger = logging.getLogger('my_app')
handler = RotatingFileHandler(
    'app.log',
    maxBytes=1024*1024,  # 1MB
    backupCount=5        # Keep 5 backup files
)
formatter = logging.Formatter('%(asctime)s - %(levelname)s - %(message)s')
handler.setFormatter(formatter)
logger.addHandler(handler)

# When app.log reaches 1MB:
# app.log -> app.log.1
# app.log.1 -> app.log.2
# ... up to app.log.5

# Rotating by time
time_handler = TimedRotatingFileHandler(
    'app.log',
    when='midnight',  # Rotate at midnight
    interval=1,       # Every 1 day
    backupCount=7     # Keep 7 days of logs
)
# Other options for 'when': 'S', 'M', 'H', 'D', 'W0'-'W6', 'midnight'`}
                </pre>
              </div>

              <div className="bg-white p-4 rounded">
                <p className="font-semibold mb-2">6. Practical Example: Application Logger</p>
                <pre className="bg-gradient-to-r from-emerald-50 to-green-50 text-gray-800 border-2 border-emerald-200 font-mono leading-relaxed p-3 rounded text-sm">
{`import logging
from logging.handlers import RotatingFileHandler
import sys

class AppLogger:
    def __init__(self, name, log_file='app.log'):
        self.logger = logging.getLogger(name)
        self.logger.setLevel(logging.DEBUG)
        
        # Console handler (INFO and above)
        console_handler = logging.StreamHandler(sys.stdout)
        console_handler.setLevel(logging.INFO)
        console_format = logging.Formatter(
            '%(levelname)s - %(message)s'
        )
        console_handler.setFormatter(console_format)
        
        # File handler (DEBUG and above)
        file_handler = RotatingFileHandler(
            log_file,
            maxBytes=1024*1024,
            backupCount=5
        )
        file_handler.setLevel(logging.DEBUG)
        file_format = logging.Formatter(
            '%(asctime)s - %(name)s - %(levelname)s - %(message)s'
        )
        file_handler.setFormatter(file_format)
        
        # Add handlers
        self.logger.addHandler(console_handler)
        self.logger.addHandler(file_handler)
    
    def get_logger(self):
        return self.logger

# Usage in application
class UserService:
    def __init__(self):
        self.logger = AppLogger('UserService').get_logger()
    
    def create_user(self, username, email):
        self.logger.info(f"Creating user: {username}")
        try:
            # User creation logic
            self.logger.debug(f"User details: {username}, {email}")
            # ... database operations ...
            self.logger.info(f"User {username} created successfully")
            return True
        except Exception as e:
            self.logger.error(f"Failed to create user {username}")
            self.logger.exception("Exception details:")
            return False
    
    def delete_user(self, username):
        self.logger.warning(f"Deleting user: {username}")
        # Deletion logic
        self.logger.info(f"User {username} deleted")

# Usage
service = UserService()
service.create_user("alice", "alice@example.com")
service.delete_user("bob")`}
                </pre>
              </div>
            </div>
          </div>
        </section>

        {/* Summary */}
        <section className="bg-gradient-to-r from-blue-100 to-purple-100 p-6 rounded-lg">
          <h3 className="text-xl font-bold mb-3">📚 Key Takeaways:</h3>
          <ul className="list-disc ml-6 space-y-2">
            <li><strong>Threading:</strong> Use threading module for concurrent execution, ThreadPoolExecutor for thread pools</li>
            <li><strong>Thread Safety:</strong> Use Lock or with lock: for synchronization</li>
            <li><strong>GIL (Global Interpreter Lock):</strong> Python threads don't provide true parallelism for CPU-bound tasks</li>
            <li><strong>Logging Levels:</strong> DEBUG, INFO, WARNING, ERROR, CRITICAL</li>
            <li><strong>Handlers:</strong> StreamHandler (console), FileHandler (file), RotatingFileHandler (rotating logs)</li>
            <li><strong>Best Practice:</strong> Use logging instead of print() for production code</li>
            <li><strong>Exception Logging:</strong> Use logging.exception() to include traceback</li>
          </ul>
        </section>
      </div>
    </div>
  );
}

export default Question9;
