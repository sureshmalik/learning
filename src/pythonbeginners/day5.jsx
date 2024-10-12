import React, { useState } from 'react';

const Day5 = () => {
  const [randomValues, setRandomValues] = useState({
    random: Math.random(),
    randint: Math.floor(Math.random() * 10) + 1,
    uniform: (Math.random() * (20.5 - 5.5) + 5.5).toFixed(2),
    choice: ['apple', 'banana', 'cherry', 'date'][Math.floor(Math.random() * 4)],
    choices: Array.from({ length: 3 }, () => ['apple', 'banana', 'cherry', 'date'][Math.floor(Math.random() * 4)]),
    sample: ['apple', 'banana', 'cherry', 'date'].sort(() => 0.5 - Math.random()).slice(0, 2),
    randrange: Math.floor(Math.random() * 5) * 2,
    seed: Math.random().toFixed(3),
    getrandbits: Math.floor(Math.random() * 256),
    gauss: (Math.random() * 2 - 1).toFixed(2),
    triangular: (Math.random() * (10 - 1) + 1).toFixed(2),
  });

  return (
    <div className="p-10 bg-gray-100">
      <h1 className="text-center text-3xl font-bold underline mb-10">Random Methods</h1>

      {/* random() */}
      <div className="bg-orange-100 p-5 rounded-md mb-10">
        <h2 className="text-center font-bold underline mb-3">random()</h2>
        <p><strong>Description:</strong> This method returns a random float between 0.0 and 1.0 (including 0.0, but not 1.0).</p>
        <p><strong>Example:</strong> <code>random.random()</code> generates a float like this:</p>
        <p className="text-center">Random float between 0 and 1: {randomValues.random}</p>
      </div>

      <br/><br/><br/>

      {/* randint() */}
      <div className="bg-yellow-100 p-5 rounded-md mb-10">
        <h2 className="text-center font-bold underline mb-3">randint()</h2>
        <p><strong>Description:</strong> Returns a random integer between two integers, inclusive of both ends.</p>
        <p><strong>Example:</strong> <code>random.randint(1, 10)</code> will generate a number between 1 and 10:</p>
        <p className="text-center">Random integer between 1 and 10: {randomValues.randint}</p>
      </div>

      <br/><br/><br/>

      {/* uniform() */}
      <div className="bg-orange-100 p-5 rounded-md mb-10">
        <h2 className="text-center font-bold underline mb-3">uniform()</h2>
        <p><strong>Description:</strong> This method returns a random float N such that <code>a &lt;= N &lt;= b</code>.</p>
        <p><strong>Example:</strong> <code>random.uniform(5.5, 20.5)</code> will generate a float between 5.5 and 20.5:</p>
        <p className="text-center">Random float between 5.5 and 20.5: {randomValues.uniform}</p>
      </div>

      <br/><br/><br/>

      {/* choice() */}
      <div className="bg-yellow-100 p-5 rounded-md mb-10">
        <h2 className="text-center font-bold underline mb-3">choice()</h2>
        <p><strong>Description:</strong> This method randomly selects one element from a non-empty sequence (like a list).</p>
        <p><strong>Example:</strong> <code>random.choice(['apple', 'banana', 'cherry', 'date'])</code> picks a random fruit:</p>
        <p className="text-center">Random choice from ['apple', 'banana', 'cherry', 'date']: {randomValues.choice}</p>
      </div>

      <br/><br/><br/>

      {/* choices() */}
      <div className="bg-orange-100 p-5 rounded-md mb-10">
        <h2 className="text-center font-bold underline mb-3">choices()</h2>
        <p><strong>Description:</strong> This method returns a list of multiple randomly selected elements, with replacement.</p>
        <p><strong>Example:</strong> <code>random.choices(['apple', 'banana', 'cherry', 'date'], k=3)</code> picks 3 elements (with replacement):</p>
        <p className="text-center">Random choices (with replacement): {randomValues.choices.join(', ')}</p>
      </div>

      <br/><br/><br/>

      {/* shuffle() */}
      <div className="bg-yellow-100 p-5 rounded-md mb-10">
        <h2 className="text-center font-bold underline mb-3">shuffle()</h2>
        <p><strong>Description:</strong> This method shuffles the elements of a list in place, i.e., it randomly reorders the elements.</p>
        <p><strong>Example:</strong> <code>random.shuffle(['apple', 'banana', 'cherry', 'date'])</code> will shuffle the elements in the list:</p>
        <p className="text-center">Shuffled list: {
          ['apple', 'banana', 'cherry', 'date'].sort(() => 0.5 - Math.random()).join(', ')
        }</p>
      </div>

      <br/><br/><br/>

      {/* sample() */}
      <div className="bg-yellow-100 p-5 rounded-md mb-10">
        <h2 className="text-center font-bold underline mb-3">sample()</h2>
        <p><strong>Description:</strong> This method returns a list of unique elements chosen randomly from a sequence, without replacement.</p>
        <p><strong>Example:</strong> <code>random.sample(['apple', 'banana', 'cherry', 'date'], k=2)</code> selects 2 distinct fruits:</p>
        <p className="text-center">Random sample (without replacement): {randomValues.sample.join(', ')}</p>
      </div>

      <br/><br/><br/>

      {/* randrange() */}
      <div className="bg-orange-100 p-5 rounded-md mb-10">
        <h2 className="text-center font-bold underline mb-3">randrange()</h2>
        <p><strong>Description:</strong> This method returns a randomly selected element from <code>range(start, stop, step)</code>.</p>
        <p><strong>Example:</strong> <code>random.randrange(0, 10, 2)</code> selects a random even number from the range:</p>
        <p className="text-center">Random number from 0 to 10 with step 2: {randomValues.randrange}</p>
      </div>

      <br/><br/><br/>

      {/* seed() */}
      <div className="bg-yellow-100 p-5 rounded-md mb-10">
        <h2 className="text-center font-bold underline mb-3">seed()</h2>
        <p><strong>Description:</strong> Initializes the random number generator with a seed value, allowing reproducible results.</p>
        <p><strong>Example:</strong> Using <code>random.seed()</code>, you can set a seed like this: </p>
        <p className="text-center">Random seed value: {randomValues.seed}</p>
      </div>

      <br/><br/><br/>

      {/* getrandbits() */}
      <div className="bg-orange-100 p-5 rounded-md mb-10">
        <h2 className="text-center font-bold underline mb-3">getrandbits()</h2>
        <p><strong>Description:</strong> This method returns a random integer represented by <code>k</code> random bits.</p>
        <p><strong>Example:</strong> <code>random.getrandbits(8)</code> generates a random number with 8 bits (256 possibilities):</p>
        <p className="text-center">Random 8-bit integer: {randomValues.getrandbits}</p>
      </div>

      <br/><br/><br/>

      {/* gauss() */}
      <div className="bg-yellow-100 p-5 rounded-md mb-10">
        <h2 className="text-center font-bold underline mb-3">gauss()</h2>
        <p><strong>Description:</strong> This method returns a random float from a Gaussian distribution (normal distribution).</p>
        <p><strong>Example:</strong> <code>random.gauss(0, 1)</code> generates a number with mean 0 and standard deviation 1:</p>
        <p className="text-center">Random number from Gaussian distribution: {randomValues.gauss}</p>
      </div>

      <br/><br/><br/>

      {/* triangular() */}
      <div className="bg-orange-100 p-5 rounded-md mb-10">
        <h2 className="text-center font-bold underline mb-3">triangular()</h2>
        <p><strong>Description:</strong> This method returns a random number from a triangular distribution, which is defined by a lower limit, upper limit, and a mode (most frequent value).</p>
        <p><strong>Example:</strong> <code>random.triangular(1, 10, 5)</code> generates a number between 1 and 10 with a mode of 5:</p>
        <p className="text-center">Random number from triangular distribution: {randomValues.triangular}</p>
      </div>
    </div>
  );
};

export default Day5;
