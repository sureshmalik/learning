// Debouncing is a programming technique used to ensure that a function is not called too frequently.
// It's particularly useful in scenarios where a function could be triggered multiple times in quick succession,
// such as when handling events like keystrokes, window resizing, or scrolling.

// some drawbacks of Using setTimeout:
// No Cancellation: Unlike debouncing, where subsequent function calls cancel previous ones, setTimeout schedules a function to run after a 
//                 specified delay regardless of any subsequent calls. This can lead to inefficiencies if multiple events occur in quick succession.
// Multiple Queued Callbacks: If events fire rapidly (e.g., fast typing in a search field), multiple setTimeout calls will queue up, potentially 
//                resulting in multiple executions of the filtering logic. This can cause unnecessary computations and potentially incorrect behavior.
// Less Control: Debouncing libraries often provide more fine-grained control over the behavior, such as the ability to execute the function immediately 
//                once and then debounce subsequent calls. Using setTimeout directly requires more manual handling to achieve similar behavior.

import { useEffect, useState } from "react";


const useDebounce = (text, delay)=>{
    const [debounceText, setDebounceText] = useState(text);
    useEffect(()=>{
            const timer = setTimeout(()=>{setDebounceText(text)},delay)
            return ()=>{
                clearTimeout(timer);
            }
    },[text,delay])

    return debounceText;
}

export default function Debouncing() {
  const [text, setText] = useState("");
  const debounceText = useDebounce(text, 1000)

  const handleTextInput = (e) => {
    setText(e.target.value);
  };
  return (
    <div class= "flex items-center justify-center min-h-screen flex-col">
      <h2 class="text-3xl font-bold underline mb-2">Debouncing Hook Test</h2>
      <input class= "border border-red-500 border-bold mb-2"
        type="text"
        placeholder="enter Values"
        onChange={handleTextInput}
      />
      <p>Debounce Value = {debounceText}</p>
    </div>
  );
}
