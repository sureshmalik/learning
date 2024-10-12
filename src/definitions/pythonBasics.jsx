import React from 'react';

const PythonBasics = () => {
  const codeStyle = "pl-4 bg-yellow-100";
  const codeStyleAlt = "pl-4 bg-orange-100";
  const codeBlockStyle = "pl-10 bg-gray-100";

  const Section = ({ title, children, codeStyle }) => (
    <li>
      <p className={codeStyle}>
        <b>{title}</b>
        {children}
      </p>
      <br />
    </li>
  );

  return (
    <div>
      <h1>Python Basics</h1>
      <ul>
        <Section title="1. Convert String to List: ONLY if wants to change string content" codeStyle={codeStyle}>
          <br />
          char_list = list(S) converts the string S into a list of characters.
          This is necessary because strings are immutable in Python.
          <p className={codeStyle}># Convert string to list of characters: <br /> char_list = list(S)</p>
        </Section>
        <Section title="2. Convert list of characters back to string :" codeStyle={codeStyleAlt}>
          <p className={codeStyleAlt}>
            join() Method: join() is a string method in Python that takes an
            iterable (in this case, a list of characters) and concatenates its
            elements into a single string, with the string on which join() was
            called inserted between each element. The syntax is:
            <b>separator.join(iterable)</b>, where separator is the string that
            will be inserted between the elements of the iterable.
          </p>
          <p className={codeBlockStyle}>
            <b>Initial List:</b> python Copy code char_list = ['l', 'a', 'n',
            'i', 'g', 'S', 'e', 'd', 'o', 'c'] <br /> <b>Using join():</b>{" "}
            python Copy code ''.join(char_list) <br /> <b>Join Process:</b> The
            empty string '' is placed between each character in char_list. This
            results in the concatenation of all characters without any
            additional characters between them.
            <br /> <b>Result:</b> python Copy code 'lanigSedoc'
          </p>
        </Section>
        <Section title="3. Swap characters :" codeStyle={codeStyle}>
          <br />
          char_list[start], char_list[end] = char_list[end], char_list[start]{" "}
          <br />
          <b>Equivalent to </b> <br />
          temp = char_list[start]; char_list[start] = char_list[end];
          char_list[end] = temp
        </Section>
        <Section title="4. Dictionary :" codeStyle={codeStyleAlt}>
          <code>
            duplicate_char(s: str, n: int) -&gt; List[Tuple[str, int]]:
          </code>
          <br />
          <b>Step 1:</b> Initialize a dictionary to count the frequency of each
          character <br />
          <code>frequency = {'{}'}</code>
          <br />
          <b>Step 2:</b> Populate the dictionary with frequencies <br />
          <code>for char in s:</code> <br />
          &nbsp;&nbsp;<code>if char in frequency:</code> <br />
          &nbsp;&nbsp;&nbsp;&nbsp;<code>frequency[char] += 1</code> <br />
          &nbsp;&nbsp;<code>else:</code>
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;<code>frequency[char] = 1</code> <br />
          <b>Step 3:</b> Filter and collect duplicates
          <br />
          <code>duplicates = []</code> <br />
          <code>for char, freq in frequency.items():</code> <br />
          &nbsp;&nbsp;<code>if freq &gt; 1:</code> <br />
          &nbsp;&nbsp;&nbsp;&nbsp;<code>duplicates.append((char, freq))</code>{" "}
          <br />
          <code>duplicates.sort()</code>
          <br />
          <code>return duplicates</code>
        </Section>
        <Section title="5. List vs Tuple :" codeStyle={codeStyle}>
          <p className="pl-6">
            <b>List</b> <br />
            &nbsp;&nbsp; A list is a collection that is ordered and mutable
            (can be changed). <br /> &nbsp;&nbsp; Lists are defined using
            square brackets [].
            <br />
            <p className={codeBlockStyle}>
              &nbsp;&nbsp; my_list = [1, 2, 3, 4, 5] <br />
              &nbsp;&nbsp; my_list[2] = 10 <br />
              &nbsp;&nbsp; my_list.append(6) <br />
              &nbsp;&nbsp; my_list.remove(4)
              <br />
              &nbsp;&nbsp; List after removing an element: [1, 2, 10, 5, 6]
              <br />
            </p>
          </p>
          <br />
          <p className="pl-6">
            <b>Tuple</b> <br />
            &nbsp;&nbsp;- A tuple is a collection that is ordered and
            immutable (cannot be changed). <br />
            &nbsp;&nbsp;- Tuples are defined using parentheses ().
            <br />
            &nbsp;&nbsp;- Attempt to modify an element (will raise an error)
            <br />
            &nbsp;&nbsp;- Tuples do not have methods like append() or remove()
            <br />
            &nbsp;&nbsp;- We can concatenate tuples to create a new one
            <br />
            <br />
            <p className={codeBlockStyle}>
              &nbsp;&nbsp; my_tuple = (1, 2, 3, 4, 5) <br />
              &nbsp;&nbsp;try:
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp; my_tuple[2] = 10
              <br />
              &nbsp;&nbsp;except TypeError as e:
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp; print("Error when trying to modify
              tuple:", e)
              <br />
              &nbsp;&nbsp;new_tuple = my_tuple + (6,)
              <br />
              &nbsp;&nbsp;print("Tuple after concatenation:", new_tuple)
              <br /> <br />
              &nbsp;&nbsp; Error when trying to modify tuple: 'tuple' object
              does not support item assignment <br />
              &nbsp;&nbsp; Tuple after concatenation: (1, 2, 3, 4, 5, 6){" "}
              <br />
            </p>
          </p>
        </Section>
        <Section title="6. List modification inside loop :" codeStyle={codeStyleAlt}>
          <p className={codeStyleAlt}>
            Using <b>remove</b> inside a for loop can lead to skipping elements
            or trying to access an index that no longer exists after removing an
            element.
          </p>
          <p className={codeBlockStyle}>
            for i in range(len(list)):<br />
            &nbsp;&nbsp;if list[i] == val: <br />&nbsp;&nbsp;&nbsp;&nbsp; list.remove(list[i]) <br />Inside the
            loop, you're using list.remove(list[i]) to remove elements. <br />
            This changes the length of list, but range(len(list)) does not
            dynamically adjust to this change. <br />
            It still iterates up to the original length of list.
          </p>
        </Section>
        <Section title="7. *args and **kwargs :" codeStyle={codeStyle}>
          <p className="pl-6">
            <b>*args</b> allows a function to accept any number of positional
            arguments. These arguments are accessible as a tuple within the
            function.
          </p>
          <p className={codeBlockStyle}>
            <b>Example:</b> <br />
            <code>
              def print_numbers(*args):<br />
              &nbsp;&nbsp;for number in args:<br />
              &nbsp;&nbsp;&nbsp;&nbsp;print(number)<br />
              <br />
              print_numbers(1, 2, 3, 4, 5)
            </code>
            <br />
            <b>Output:</b> <br />
            1<br />
            2<br />
            3<br />
            4<br />
            5
          </p>
          <p className="pl-6">
            <b>**kwargs</b> allows a function to accept any number of keyword
            arguments (arguments that are passed as key-value pairs). These are
            accessible as a dictionary within the function.
          </p>
          <p className={codeBlockStyle}>
            <b>Example:</b> <br />
            <code>
              def print_details(**kwargs):<br />
              &nbsp;&nbsp;for key, value in kwargs.items():<br />
              &nbsp;&nbsp;&nbsp;&nbsp;print(f"key: value")<br />
              <br />
              print_details(name="Alice", age=30, city="New York")
            </code>
            <br />
            <b>Output:</b> <br />
            name: Alice<br />
            age: 30<br />
            city: New York
          </p>
          <p className="pl-6">
            <b>Combined Use</b><br />
            You can also use *args and **kwargs together in the same function to handle both positional and keyword arguments.
          </p>
          <p className={codeBlockStyle}>
            <b>Example:</b> <br />
            <code>
              def show_info(*args, **kwargs):<br />
              &nbsp;&nbsp;print("Positional arguments:", args)<br />
              &nbsp;&nbsp;print("Keyword arguments:", kwargs)<br />
              <br />
              show_info(1, 2, 3, name="Alice", age=30)
            </code>
            <br />
            <b>Output:</b> <br />
            Positional arguments: (1, 2, 3)<br />
            Keyword arguments: {'{name: "Alice", age: 30}'}
          </p>
        </Section>
      </ul>
    </div>
  );
};

export default PythonBasics;
