import React from 'react';

const Day3 = () => {
  return (
    <div className="p-6">
         <h1 style={{ textAlign: "center", fontSize: 40 }}><b><u>Mathematical Operations</u></b></h1>
      <br />
      {/* Addition */}
      <div className="bg-orange-200 p-4 mb-8 rounded-lg">
        <h2 className="text-center font-bold underline mb-4">Addition (+)</h2>
        <pre>
          {`result = 5 + 3  # result = 8`}
        </pre>
      </div>

      {/* Subtraction */}
      <div className="bg-yellow-200 p-4 mb-8 rounded-lg">
        <h2 className="text-center font-bold underline mb-4">Subtraction (-)</h2>
        <pre>
          {`result = 10 - 4  # result = 6`}
        </pre>
      </div>

      {/* Multiplication */}
      <div className="bg-orange-200 p-4 mb-8 rounded-lg">
        <h2 className="text-center font-bold underline mb-4">Multiplication (*)</h2>
        <pre>
          {`result = 7 * 3  # result = 21`}
        </pre>
      </div>

      {/* Division */}
      <div className="bg-yellow-200 p-4 mb-8 rounded-lg">
        <h2 className="text-center font-bold underline mb-4">Division (/)</h2>
        <pre>
          {`result = 15 / 3  # result = 5.0`}
        </pre>
      </div>

      {/* Floor Division */}
      <div className="bg-orange-200 p-4 mb-8 rounded-lg">
        <h2 className="text-center font-bold underline mb-4">Floor Division (//)</h2>
        <pre>
          {`result = 10 // 3  # result = 3`}
        </pre>
      </div>
      {/* Round */}
      <div className="bg-yellow-200 p-4 mb-8 rounded-lg">
        <h2 className="text-center font-bold underline mb-4">Round (())</h2>
        <pre>
          {`result = round(2 + 3 * (5 - 2) ** 2 / 3)`} <br />
          {`In this case, round(11.0) would simply return 11.`} <br />
          {`rounded_result = round(11.12345, 2)  # rounded_result = 11.12`}
        </pre>
      </div>

      {/* Modulus */}
      <div className="bg-orange-200 p-4 mb-8 rounded-lg">
        <h2 className="text-center font-bold underline mb-4">Modulus (%)</h2>
        <pre>
          {`result = 10 % 3  # result = 1`}
        </pre>
      </div>

      {/* Exponentiation */}
      <div className="bg-yellow-200 p-4 mb-8 rounded-lg">
        <h2 className="text-center font-bold underline mb-4">Exponentiation (**)</h2>
        <pre>
          {`result = 2 ** 3  # result = 8`}
        </pre>
      </div>

      {/* Unary Negation */}
      <div className="bg-orange-200 p-4 mb-8 rounded-lg">
        <h2 className="text-center font-bold underline mb-4">Unary Negation (-)</h2>
        <pre>
          {`result = -5  # result = -5`}
        </pre>
      </div>

      {/* Unary Positive */}
      <div className="bg-yellow-200 p-4 mb-8 rounded-lg">
        <h2 className="text-center font-bold underline mb-4">Unary Positive (+)</h2>
        <pre>
          {`result = +5  # result = 5`}
        </pre>
      </div>

      {/* Parentheses */}
      <div className="bg-orange-200 p-4 mb-8 rounded-lg">
        <h2 className="text-center font-bold underline mb-4">Parentheses (())</h2>
        <pre>
          {`result = (2 + 3) * 4  # result = 20`}
        </pre>
      </div>

      <div className="bg-yellow-200   p-4 mb-8 rounded-lg">
      <h2 className="text-center font-bold underline mb-4">Operator Precedence (from highest to lowest):(PEMDAS)</h2>
        <pre>
        
            Parenthesis () <br />
            Exponentiation (**) <br />
            Unary negation (-) and positive (+) <br />
            Multiplication (*), Division (/), Floor Division (//), Modulus (%) <br />
            Addition (+), Subtraction (-)<br />
        </pre>
      </div>

      {/* Example with multiple operators */}
      <div className="bg-orange-200 p-4 mb-8 rounded-lg">
        <h2 className="text-center font-bold underline mb-4">Example with Multiple Operators</h2>
        <pre>
          {`result = 2 + 3 * (5 - 2) ** 2 / 3  # result = 11.0`}
        </pre>
      </div>
      
      
    </div>
  );
};

export default Day3;
