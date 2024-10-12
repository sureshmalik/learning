import React from 'react';

const Day2 = () => {
  return (
    <div style={{ padding: '20px' }}>
         <h1 style={{ textAlign: "center", fontSize: 40 }}><b><u>Data Types</u></b></h1>
      <br />
      {/* Integer Section */}
      <div style={{ backgroundColor: 'lightgoldenrodyellow', padding: '10px', marginBottom: '30px' }}>
        <h2 style={{ textAlign: 'center', fontWeight: 'bold', textDecoration: 'underline' }}>Integer (int)</h2>
        <pre>
          {`age = 30
temperature = -10`}
        </pre>
      </div>

      {/* Float Section */}
      <div style={{ backgroundColor: 'lightgoldenrodyellow', padding: '10px', marginBottom: '30px' }}>
        <h2 style={{ textAlign: 'center', fontWeight: 'bold', textDecoration: 'underline' }}>Float (float)</h2>
        <pre>
          {`pi = 3.14159
percentage = 85.6`}
        </pre>
      </div>

      {/* String Section */}
      <div style={{ backgroundColor: 'lightgoldenrodyellow', padding: '10px', marginBottom: '30px' }}>
        <h2 style={{ textAlign: 'center', fontWeight: 'bold', textDecoration: 'underline' }}>String (str)</h2>
        <pre>
          {`name = "Alice"
greeting = 'Hello, World!'
multiline_text = """This is a 
multiline string."""`}
        </pre>
      </div>

      {/* Boolean Section */}
      <div style={{ backgroundColor: 'lightgoldenrodyellow', padding: '10px', marginBottom: '30px' }}>
        <h2 style={{ textAlign: 'center', fontWeight: 'bold', textDecoration: 'underline' }}>Boolean (bool)</h2>
        <pre>
          {`is_active = True
has_permission = False`}
        </pre>
      </div>

      {/* List Section */}
      <div style={{ backgroundColor: 'lightgoldenrodyellow', padding: '10px', marginBottom: '30px' }}>
        <h2 style={{ textAlign: 'center', fontWeight: 'bold', textDecoration: 'underline' }}>List (list)</h2>
        <pre>
          {`fruits = ["apple", "banana", "cherry"]
numbers = [1, 2, 3, 4, 5]`}
        </pre>
      </div>

      {/* Tuple Section */}
      <div style={{ backgroundColor: 'lightgoldenrodyellow', padding: '10px', marginBottom: '30px' }}>
        <h2 style={{ textAlign: 'center', fontWeight: 'bold', textDecoration: 'underline' }}>Tuple (tuple)</h2>
        <pre>
          {`coordinates = (10.5, 20.6)
person_info = ("John", 25, "Engineer")`}
        </pre>
      </div>

      {/* Set Section */}
      <div style={{ backgroundColor: 'lightgoldenrodyellow', padding: '10px', marginBottom: '30px' }}>
        <h2 style={{ textAlign: 'center', fontWeight: 'bold', textDecoration: 'underline' }}>Set (set)</h2>
        <pre>
          {`unique_numbers = {1, 2, 3, 4}
vowels = {'a', 'e', 'i', 'o', 'u'}`}
        </pre>
      </div>

      {/* Dictionary Section */}
      <div style={{ backgroundColor: 'lightgoldenrodyellow', padding: '10px', marginBottom: '30px' }}>
        <h2 style={{ textAlign: 'center', fontWeight: 'bold', textDecoration: 'underline' }}>Dictionary (dict)</h2>
        <pre>
          {`student = {"name": "Alice", "age": 21, "grade": "A"}
prices = {"apple": 0.99, "banana": 0.50}`}
        </pre>
      </div>

      {/* None Section */}
      <div style={{ backgroundColor: 'lightgoldenrodyellow', padding: '10px', marginBottom: '30px' }}>
        <h2 style={{ textAlign: 'center', fontWeight: 'bold', textDecoration: 'underline' }}>NoneType (None)</h2>
        <pre>
          {`result = None`}
        </pre>
      </div>

        {/* Range Section */}
        <div style={{ backgroundColor: 'lightgoldenrodyellow', padding: '10px', marginBottom: '30px' }}>
        <h2 style={{ textAlign: 'center', fontWeight: 'bold', textDecoration: 'underline' }}>Range (range)</h2>
        <pre>
          {`range(start, stop, step)`} <br /><br />
          {
          `start (optional): The starting number (inclusive). If omitted, it defaults to 0.
           stop: The stopping number (exclusive). The range stops before this number.
           step (optional): The difference between each number in the sequence. It defaults to 1.`}
           <br /><br /><br />
          {`numbers = range(5)  # 0, 1, 2, 3, 4`}<br />
          {`for i in range(2, 6):
              print(i)`} <br />
           {`   # 2 3 4 5`}
           <br /><br />
          {`for i in range(1, 10, 2):
              print(i)`} <br />
           {`   # 1 3 5 7 9 `}
        </pre>
      </div>

      {/* Complex Section */}
      <div style={{ backgroundColor: 'lightgoldenrodyellow', padding: '10px', marginBottom: '30px' }}>
        <h2 style={{ textAlign: 'center', fontWeight: 'bold', textDecoration: 'underline' }}>Complex (complex)</h2>
        <pre>
          {`z = 3 + 5j
real_part = z.real
imaginary_part = z.imag`}
        </pre>
      </div>

    

      {/* Bytes Section */}
      <div style={{ backgroundColor: 'lightgoldenrodyellow', padding: '10px', marginBottom: '30px' }}>
        <h2 style={{ textAlign: 'center', fontWeight: 'bold', textDecoration: 'underline' }}>Bytes (bytes)</h2>
        <pre>
          {`data = b"Hello, World!"`}
        </pre>
      </div>

      {/* Bytearray Section */}
      <div style={{ backgroundColor: 'lightgoldenrodyellow', padding: '10px', marginBottom: '30px' }}>
        <h2 style={{ textAlign: 'center', fontWeight: 'bold', textDecoration: 'underline' }}>Bytearray (bytearray)</h2>
        <pre>
          {`data = bytearray(b"Hello, World!")`}
        </pre>
      </div>

      {/* Frozen Set Section */}
      <div style={{ backgroundColor: 'lightgoldenrodyellow', padding: '10px', marginBottom: '30px' }}>
        <h2 style={{ textAlign: 'center', fontWeight: 'bold', textDecoration: 'underline' }}>Frozen Set (frozenset)</h2>
        <pre>
          {`frozen_vowels = frozenset({'a', 'e', 'i', 'o', 'u'})`}
        </pre>
      </div>
    </div>
  );
};

export default Day2;
