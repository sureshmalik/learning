import { useState, useRef } from "react";

export default function SimpleForm1(props) {
  const [inputNameValue, setInputNameValue] = useState("");

  const inputEmailvalue = useRef("");

  const handleNameChanges = (e) => {
    setInputNameValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputNameValue);
    console.log(inputEmailvalue.current.value);
    console.log("Form Submitted");
  };

  return props.usingHook === "useState" ? (
    <div class = "flex flex-col items-center justify-center min-h-screen ">
      <h2 className="title"> from useState Hook</h2>
      <form className="form1" onSubmit={handleSubmit}>
        <label>
          Name:
          <input class="border border-red-500 border-solid"
            type="text"
            value={inputNameValue}
            placeHolder={"your Name"}
            onChange={handleNameChanges}
          />
        </label>
        <button type="submit">Submit Name</button>
      </form>
    </div>
  ) : (
    <div class = "flex flex-col items-center justify-center min-h-screen">
      <form onSubmit={handleSubmit}>
        <label className="mr-4">
          Email :  
          <input class="border border-red-500 border-solid" type="email" ref={inputEmailvalue} />
        </label>
        <button class= "bg-orange-300 hover:bg-orange-400 px-3 py-2 rounded text-white font-bold"type="submit">Submit Email</button>
      </form>
    </div>
  );
}
