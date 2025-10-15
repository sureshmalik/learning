import React from "react";

function Question11() {
  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold mb-6 text-blue-700">Database, Socket Programming & GUI (Tkinter)</h2>
      
      <div className="space-y-8">
        {/* Question 1 */}
        <section className="border-l-4 border-blue-500 pl-4">
          <h3 className="text-2xl font-bold mb-3 text-green-700">Q1: What is Python Database Communication (PDBC)?</h3>
          <div className="bg-blue-50 p-4 rounded mb-4">
            <h4 className="font-semibold mb-2">Answer:</h4>
            <p className="mb-3">
              Python Database API (DB-API) provides a standard interface for accessing databases. 
              Common databases: SQLite, MySQL, PostgreSQL, MongoDB.
            </p>
            
            <div className="space-y-4">
              <div className="bg-white p-4 rounded">
                <p className="font-semibold mb-2">1. SQLite - Built-in Database</p>
                <pre className="bg-gradient-to-r from-pink-50 to-rose-50 text-gray-800 border-2 border-pink-200 font-mono leading-relaxed p-3 rounded text-sm">
{`import sqlite3

# Connect to database (creates if doesn't exist)
conn = sqlite3.connect('mydatabase.db')
cursor = conn.cursor()

# Create table
cursor.execute('''
    CREATE TABLE IF NOT EXISTS users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        email TEXT UNIQUE NOT NULL,
        age INTEGER
    )
''')

# Insert data
cursor.execute('''
    INSERT INTO users (name, email, age)
    VALUES (?, ?, ?)
''', ('Alice', 'alice@example.com', 25))

# Insert multiple rows
users = [
    ('Bob', 'bob@example.com', 30),
    ('Charlie', 'charlie@example.com', 35)
]
cursor.executemany('''
    INSERT INTO users (name, email, age)
    VALUES (?, ?, ?)
''', users)

# Commit changes
conn.commit()

# Query data
cursor.execute('SELECT * FROM users')
rows = cursor.fetchall()
for row in rows:
    print(row)

# Query with condition
cursor.execute('SELECT * FROM users WHERE age > ?', (25,))
rows = cursor.fetchall()
print(rows)

# Update data
cursor.execute('''
    UPDATE users SET age = ? WHERE name = ?
''', (26, 'Alice'))
conn.commit()

# Delete data
cursor.execute('DELETE FROM users WHERE name = ?', ('Bob',))
conn.commit()

# Close connection
cursor.close()
conn.close()`}
                </pre>
              </div>

              <div className="bg-white p-4 rounded">
                <p className="font-semibold mb-2">2. Using Context Manager (Best Practice)</p>
                <pre className="bg-gradient-to-r from-pink-50 to-rose-50 text-gray-800 border-2 border-pink-200 font-mono leading-relaxed p-3 rounded text-sm">
{`import sqlite3

# Automatic connection management
with sqlite3.connect('mydatabase.db') as conn:
    cursor = conn.cursor()
    
    # Create table
    cursor.execute('''
        CREATE TABLE IF NOT EXISTS products (
            id INTEGER PRIMARY KEY,
            name TEXT,
            price REAL,
            stock INTEGER
        )
    ''')
    
    # Insert data
    cursor.execute('''
        INSERT INTO products (name, price, stock)
        VALUES (?, ?, ?)
    ''', ('Laptop', 999.99, 10))
    
    # Query data
    cursor.execute('SELECT * FROM products')
    products = cursor.fetchall()
    
    for product in products:
        print(f"ID: {'{product[0]}'}, Name: {'{product[1]}'}, Price: \\${'{product[2]}'}")
    
    # Commit is automatic when using context manager
# Connection automatically closed`}
                </pre>
              </div>

              <div className="bg-white p-4 rounded">
                <p className="font-semibold mb-2">3. Database Class (Reusable)</p>
                <pre className="bg-gradient-to-r from-pink-50 to-rose-50 text-gray-800 border-2 border-pink-200 font-mono leading-relaxed p-3 rounded text-sm">
{`import sqlite3

class Database:
    def __init__(self, db_name):
        self.db_name = db_name
        self.conn = None
        self.cursor = None
    
    def connect(self):
        """Connect to database"""
        self.conn = sqlite3.connect(self.db_name)
        self.cursor = self.conn.cursor()
    
    def disconnect(self):
        """Close database connection"""
        if self.conn:
            self.conn.close()
    
    def create_table(self, table_name, columns):
        """Create table"""
        query = f"CREATE TABLE IF NOT EXISTS {table_name} ({columns})"
        self.cursor.execute(query)
        self.conn.commit()
    
    def insert(self, table_name, data):
        """Insert data into table"""
        placeholders = ', '.join(['?' for _ in data])
        columns = ', '.join(data.keys())
        values = tuple(data.values())
        
        query = f"INSERT INTO {table_name} ({columns}) VALUES ({placeholders})"
        self.cursor.execute(query, values)
        self.conn.commit()
        return self.cursor.lastrowid
    
    def select(self, table_name, conditions=None):
        """Select data from table"""
        query = f"SELECT * FROM {table_name}"
        if conditions:
            query += f" WHERE {conditions}"
        
        self.cursor.execute(query)
        return self.cursor.fetchall()
    
    def update(self, table_name, data, condition):
        """Update data in table"""
        set_clause = ', '.join([f"{k} = ?" for k in data.keys()])
        values = tuple(data.values())
        
        query = f"UPDATE {table_name} SET {set_clause} WHERE {condition}"
        self.cursor.execute(query, values)
        self.conn.commit()
    
    def delete(self, table_name, condition):
        """Delete data from table"""
        query = f"DELETE FROM {table_name} WHERE {condition}"
        self.cursor.execute(query)
        self.conn.commit()

# Usage
db = Database('myapp.db')
db.connect()

# Create table
db.create_table('employees', '''
    id INTEGER PRIMARY KEY,
    name TEXT,
    department TEXT,
    salary REAL
''')

# Insert data
db.insert('employees', {
    'name': 'John Doe',
    'department': 'IT',
    'salary': 75000
})

# Select data
employees = db.select('employees', 'salary > 50000')
print(employees)

# Update data
db.update('employees', {'salary': 80000}, 'name = "John Doe"')

# Delete data
db.delete('employees', 'department = "HR"')

db.disconnect()`}
                </pre>
              </div>

              <div className="bg-white p-4 rounded">
                <p className="font-semibold mb-2">4. MySQL Database (requires mysql-connector-python)</p>
                <pre className="bg-gradient-to-r from-pink-50 to-rose-50 text-gray-800 border-2 border-pink-200 font-mono leading-relaxed p-3 rounded text-sm">
{`# pip install mysql-connector-python
import mysql.connector

# Connect to MySQL
conn = mysql.connector.connect(
    host='localhost',
    user='root',
    password='password',
    database='mydb'
)

cursor = conn.cursor()

# Create table
cursor.execute('''
    CREATE TABLE IF NOT EXISTS customers (
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(255),
        email VARCHAR(255),
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )
''')

# Insert data
sql = "INSERT INTO customers (name, email) VALUES (%s, %s)"
values = ('Alice', 'alice@example.com')
cursor.execute(sql, values)
conn.commit()

# Query data
cursor.execute("SELECT * FROM customers")
results = cursor.fetchall()
for row in results:
    print(row)

cursor.close()
conn.close()`}
                </pre>
              </div>
            </div>
          </div>
        </section>

        {/* Question 2 */}
        <section className="border-l-4 border-green-500 pl-4">
          <h3 className="text-2xl font-bold mb-3 text-green-700">Q2: What is Socket Programming in Python?</h3>
          <div className="bg-green-50 p-4 rounded mb-4">
            <h4 className="font-semibold mb-2">Answer:</h4>
            <p className="mb-3">
              Socket programming enables network communication between computers. Python's <code>socket</code> module 
              provides low-level networking interface.
            </p>

            <div className="space-y-4">
              <div className="bg-white p-4 rounded">
                <p className="font-semibold mb-2">1. TCP Server</p>
                <pre className="bg-gradient-to-r from-pink-50 to-rose-50 text-gray-800 border-2 border-pink-200 font-mono leading-relaxed p-3 rounded text-sm">
{`import socket

# Create TCP socket
server_socket = socket.socket(socket.AF_INET, socket.SOCK_STREAM)

# Bind to address and port
host = 'localhost'
port = 12345
server_socket.bind((host, port))

# Listen for connections (max 5 queued)
server_socket.listen(5)
print(f"Server listening on {host}:{port}")

while True:
    # Accept client connection
    client_socket, address = server_socket.accept()
    print(f"Connection from {address}")
    
    # Receive data
    data = client_socket.recv(1024).decode('utf-8')
    print(f"Received: {data}")
    
    # Send response
    response = f"Server received: {data}"
    client_socket.send(response.encode('utf-8'))
    
    # Close client connection
    client_socket.close()

# Close server socket
server_socket.close()`}
                </pre>
              </div>

              <div className="bg-white p-4 rounded">
                <p className="font-semibold mb-2">2. TCP Client</p>
                <pre className="bg-gradient-to-r from-pink-50 to-rose-50 text-gray-800 border-2 border-pink-200 font-mono leading-relaxed p-3 rounded text-sm">
{`import socket

# Create TCP socket
client_socket = socket.socket(socket.AF_INET, socket.SOCK_STREAM)

# Connect to server
host = 'localhost'
port = 12345
client_socket.connect((host, port))

# Send data
message = "Hello, Server!"
client_socket.send(message.encode('utf-8'))

# Receive response
response = client_socket.recv(1024).decode('utf-8')
print(f"Server response: {response}")

# Close connection
client_socket.close()`}
                </pre>
              </div>

              <div className="bg-white p-4 rounded">
                <p className="font-semibold mb-2">3. Multi-Client Server (Threading)</p>
                <pre className="bg-gradient-to-r from-pink-50 to-rose-50 text-gray-800 border-2 border-pink-200 font-mono leading-relaxed p-3 rounded text-sm">
{`import socket
import threading

def handle_client(client_socket, address):
    """Handle individual client connection"""
    print(f"New connection from {address}")
    
    try:
        while True:
            # Receive data
            data = client_socket.recv(1024).decode('utf-8')
            if not data:
                break
            
            print(f"From {address}: {data}")
            
            # Send response
            response = f"Echo: {data}"
            client_socket.send(response.encode('utf-8'))
    
    except Exception as e:
        print(f"Error with {address}: {e}")
    
    finally:
        client_socket.close()
        print(f"Connection closed: {address}")

# Create server
server_socket = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
server_socket.bind(('localhost', 12345))
server_socket.listen(5)
print("Multi-client server started...")

try:
    while True:
        # Accept connection
        client_socket, address = server_socket.accept()
        
        # Create thread for client
        client_thread = threading.Thread(
            target=handle_client,
            args=(client_socket, address)
        )
        client_thread.start()

except KeyboardInterrupt:
    print("\\nServer shutting down...")
    server_socket.close()`}
                </pre>
              </div>

              <div className="bg-white p-4 rounded">
                <p className="font-semibold mb-2">4. UDP Socket (Connectionless)</p>
                <pre className="bg-gradient-to-r from-pink-50 to-rose-50 text-gray-800 border-2 border-pink-200 font-mono leading-relaxed p-3 rounded text-sm">
{`import socket

# UDP Server
server_socket = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)
server_socket.bind(('localhost', 12345))
print("UDP Server started...")

while True:
    # Receive data (no connection needed)
    data, address = server_socket.recvfrom(1024)
    print(f"From {address}: {data.decode('utf-8')}")
    
    # Send response
    response = "Message received"
    server_socket.sendto(response.encode('utf-8'), address)

# UDP Client
client_socket = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)

# Send data (no connection needed)
message = "Hello UDP Server!"
client_socket.sendto(message.encode('utf-8'), ('localhost', 12345))

# Receive response
data, address = client_socket.recvfrom(1024)
print(f"Server response: {data.decode('utf-8')}")

client_socket.close()`}
                </pre>
              </div>

              <div className="bg-white p-4 rounded">
                <p className="font-semibold mb-2">5. Chat Application Example</p>
                <pre className="bg-gradient-to-r from-pink-50 to-rose-50 text-gray-800 border-2 border-pink-200 font-mono leading-relaxed p-3 rounded text-sm">
{`import socket
import threading

class ChatServer:
    def __init__(self, host='localhost', port=12345):
        self.host = host
        self.port = port
        self.server = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
        self.clients = []
    
    def broadcast(self, message, sender_socket=None):
        """Send message to all clients except sender"""
        for client in self.clients:
            if client != sender_socket:
                try:
                    client.send(message)
                except:
                    self.clients.remove(client)
    
    def handle_client(self, client_socket, address):
        """Handle individual client"""
        print(f"New connection: {address}")
        
        try:
            # Get username
            client_socket.send("Enter your name: ".encode('utf-8'))
            name = client_socket.recv(1024).decode('utf-8')
            
            # Announce new user
            welcome = f"{name} joined the chat!\\n"
            self.broadcast(welcome.encode('utf-8'))
            
            while True:
                message = client_socket.recv(1024)
                if not message:
                    break
                
                # Broadcast message
                full_message = f"{name}: {message.decode('utf-8')}"
                print(full_message)
                self.broadcast(full_message.encode('utf-8'), client_socket)
        
        except:
            pass
        
        finally:
            # Remove and close
            self.clients.remove(client_socket)
            client_socket.close()
            leave = f"{name} left the chat.\\n"
            self.broadcast(leave.encode('utf-8'))
    
    def start(self):
        """Start server"""
        self.server.bind((self.host, self.port))
        self.server.listen(5)
        print(f"Chat server started on {self.host}:{self.port}")
        
        while True:
            client_socket, address = self.server.accept()
            self.clients.append(client_socket)
            
            thread = threading.Thread(
                target=self.handle_client,
                args=(client_socket, address)
            )
            thread.start()

# Start server
if __name__ == "__main__":
    server = ChatServer()
    server.start()`}
                </pre>
              </div>
            </div>
          </div>
        </section>

        {/* Question 3 */}
        <section className="border-l-4 border-purple-500 pl-4">
          <h3 className="text-2xl font-bold mb-3 text-green-700">Q3: What is Tkinter in Python?</h3>
          <div className="bg-purple-50 p-4 rounded mb-4">
            <h4 className="font-semibold mb-2">Answer:</h4>
            <p className="mb-3">
              Tkinter is Python's standard GUI (Graphical User Interface) library. It provides widgets like buttons, 
              labels, text boxes, and more for creating desktop applications.
            </p>

            <div className="space-y-4">
              <div className="bg-white p-4 rounded">
                <p className="font-semibold mb-2">1. Basic Tkinter Window</p>
                <pre className="bg-gradient-to-r from-pink-50 to-rose-50 text-gray-800 border-2 border-pink-200 font-mono leading-relaxed p-3 rounded text-sm">
{`import tkinter as tk

# Create main window
root = tk.Tk()
root.title("My First GUI")
root.geometry("400x300")  # Width x Height

# Add label
label = tk.Label(root, text="Hello, Tkinter!", font=("Arial", 16))
label.pack(pady=20)

# Add button
def on_button_click():
    label.config(text="Button Clicked!")

button = tk.Button(root, text="Click Me", command=on_button_click)
button.pack()

# Start event loop
root.mainloop()`}
                </pre>
              </div>

              <div className="bg-white p-4 rounded">
                <p className="font-semibold mb-2">2. Common Widgets</p>
                <pre className="bg-gradient-to-r from-pink-50 to-rose-50 text-gray-800 border-2 border-pink-200 font-mono leading-relaxed p-3 rounded text-sm">
{`import tkinter as tk

root = tk.Tk()
root.title("Tkinter Widgets")
root.geometry("400x500")

# Label
label = tk.Label(root, text="This is a Label", font=("Arial", 12))
label.pack(pady=5)

# Button
button = tk.Button(root, text="Button", command=lambda: print("Clicked!"))
button.pack(pady=5)

# Entry (Text Input)
entry = tk.Entry(root, width=30)
entry.pack(pady=5)
entry.insert(0, "Enter text here")

# Text (Multi-line)
text = tk.Text(root, height=5, width=30)
text.pack(pady=5)

# Checkbutton
check_var = tk.BooleanVar()
check = tk.Checkbutton(root, text="Check me", variable=check_var)
check.pack(pady=5)

# Radiobutton
radio_var = tk.StringVar(value="option1")
radio1 = tk.Radiobutton(root, text="Option 1", variable=radio_var, value="option1")
radio2 = tk.Radiobutton(root, text="Option 2", variable=radio_var, value="option2")
radio1.pack()
radio2.pack()

# Listbox
listbox = tk.Listbox(root, height=4)
for item in ["Item 1", "Item 2", "Item 3"]:
    listbox.insert(tk.END, item)
listbox.pack(pady=5)

# Scale (Slider)
scale = tk.Scale(root, from_=0, to=100, orient=tk.HORIZONTAL)
scale.pack(pady=5)

root.mainloop()`}
                </pre>
              </div>

              <div className="bg-white p-4 rounded">
                <p className="font-semibold mb-2">3. Layout Managers</p>
                <pre className="bg-gradient-to-r from-pink-50 to-rose-50 text-gray-800 border-2 border-pink-200 font-mono leading-relaxed p-3 rounded text-sm">
{`import tkinter as tk

root = tk.Tk()
root.title("Layout Managers")

# 1. Pack - Stack widgets vertically/horizontally
frame1 = tk.Frame(root, bg="lightblue", height=100)
frame1.pack(fill=tk.BOTH, expand=True)

tk.Label(frame1, text="Pack Layout").pack()

# 2. Grid - Table-like layout
frame2 = tk.Frame(root, bg="lightgreen", height=100)
frame2.pack(fill=tk.BOTH, expand=True)

tk.Label(frame2, text="Name:").grid(row=0, column=0, padx=5, pady=5)
tk.Entry(frame2).grid(row=0, column=1, padx=5, pady=5)
tk.Label(frame2, text="Email:").grid(row=1, column=0, padx=5, pady=5)
tk.Entry(frame2).grid(row=1, column=1, padx=5, pady=5)

# 3. Place - Absolute positioning
frame3 = tk.Frame(root, bg="lightyellow", height=100)
frame3.pack(fill=tk.BOTH, expand=True)

tk.Label(frame3, text="Place Layout").place(x=50, y=30)
tk.Button(frame3, text="Button").place(x=150, y=30)

root.mainloop()`}
                </pre>
              </div>

              <div className="bg-white p-4 rounded">
                <p className="font-semibold mb-2">4. Complete Application Example</p>
                <pre className="bg-gradient-to-r from-pink-50 to-rose-50 text-gray-800 border-2 border-pink-200 font-mono leading-relaxed p-3 rounded text-sm">
{`import tkinter as tk
from tkinter import messagebox

class TodoApp:
    def __init__(self, root):
        self.root = root
        self.root.title("Todo List App")
        self.root.geometry("400x500")
        
        # Title
        title = tk.Label(root, text="My Todo List", font=("Arial", 20, "bold"))
        title.pack(pady=10)
        
        # Input frame
        input_frame = tk.Frame(root)
        input_frame.pack(pady=10)
        
        self.task_entry = tk.Entry(input_frame, width=30, font=("Arial", 12))
        self.task_entry.pack(side=tk.LEFT, padx=5)
        
        add_button = tk.Button(input_frame, text="Add Task", command=self.add_task)
        add_button.pack(side=tk.LEFT)
        
        # Listbox for tasks
        self.task_listbox = tk.Listbox(root, width=50, height=15, font=("Arial", 11))
        self.task_listbox.pack(pady=10)
        
        # Buttons frame
        button_frame = tk.Frame(root)
        button_frame.pack(pady=10)
        
        delete_button = tk.Button(button_frame, text="Delete Task", command=self.delete_task)
        delete_button.pack(side=tk.LEFT, padx=5)
        
        clear_button = tk.Button(button_frame, text="Clear All", command=self.clear_all)
        clear_button.pack(side=tk.LEFT, padx=5)
    
    def add_task(self):
        task = self.task_entry.get()
        if task:
            self.task_listbox.insert(tk.END, task)
            self.task_entry.delete(0, tk.END)
        else:
            messagebox.showwarning("Warning", "Please enter a task!")
    
    def delete_task(self):
        try:
            selected = self.task_listbox.curselection()
            self.task_listbox.delete(selected)
        except:
            messagebox.showwarning("Warning", "Please select a task!")
    
    def clear_all(self):
        if messagebox.askyesno("Confirm", "Delete all tasks?"):
            self.task_listbox.delete(0, tk.END)

# Run application
if __name__ == "__main__":
    root = tk.Tk()
    app = TodoApp(root)
    root.mainloop()`}
                </pre>
              </div>

              <div className="bg-white p-4 rounded">
                <p className="font-semibold mb-2">5. Turtle Graphics (Simple Drawing)</p>
                <pre className="bg-gradient-to-r from-pink-50 to-rose-50 text-gray-800 border-2 border-pink-200 font-mono leading-relaxed p-3 rounded text-sm">
{`import turtle

# Create screen
screen = turtle.Screen()
screen.title("Turtle Graphics")
screen.bgcolor("white")

# Create turtle
t = turtle.Turtle()
t.speed(1)  # 1=slow, 10=fast

# Draw square
for _ in range(4):
    t.forward(100)
    t.right(90)

# Draw circle
t.penup()
t.goto(0, -100)
t.pendown()
t.circle(100)

# Draw star
t.penup()
t.goto(-150, 0)
t.pendown()
t.color("red")
for _ in range(5):
    t.forward(100)
    t.right(144)

# Draw spiral
t.penup()
t.goto(150, 0)
t.pendown()
t.color("blue")
for i in range(50):
    t.forward(i * 2)
    t.right(30)

# Keep window open
turtle.done()`}
                </pre>
              </div>
            </div>
          </div>
        </section>

        {/* Summary */}
        <section className="bg-gradient-to-r from-blue-100 to-purple-100 p-6 rounded-lg">
          <h3 className="text-xl font-bold mb-3">📚 Key Takeaways:</h3>
          <ul className="list-disc ml-6 space-y-2">
            <li><strong>Database:</strong> Use sqlite3 for built-in database, mysql-connector for MySQL</li>
            <li><strong>DB-API:</strong> Standard interface - connect(), cursor(), execute(), commit(), close()</li>
            <li><strong>Socket Programming:</strong> TCP (reliable, connection-based), UDP (fast, connectionless)</li>
            <li><strong>Server-Client:</strong> Server listens, client connects, both send/receive data</li>
            <li><strong>Tkinter:</strong> Standard GUI library with widgets (Label, Button, Entry, etc.)</li>
            <li><strong>Layout Managers:</strong> pack() (stack), grid() (table), place() (absolute)</li>
            <li><strong>Turtle:</strong> Simple graphics library for drawing shapes and patterns</li>
          </ul>
        </section>
      </div>
    </div>
  );
}

export default Question11;
