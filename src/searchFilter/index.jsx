import { useState } from "react";
import "./searchFilter.css";

export default function SearchFilter() {
  const fruits = [
    "Apple",
    "Apricot",
    "Banana",
    "Cherry",
    "DragonFruit",
    "Elderberry",
    "Fig",
    "Grape",
    "HoneydewMelon",
    "Kiwi",
    "Lemon",
  ];
  const [fruitsList, setFruitsList] = useState(fruits);
  const [searchInput, setSearchInput] = useState("");
  const handleSearchInput = (e) => {
    setSearchInput(e.target.value);
  };
  // const fruitsListFiltered = fruitsList.filter((fruit) =>
  //   fruit.toLowerCase().includes(searchInput.toLowerCase())
  // );
  const fruitsListFiltered = fruitsList.filter((fruit) => 
  fruit.toLowerCase().startsWith(searchInput.toLowerCase())
);
  return (
    <div class = "flex flex-col items-center justify-center min-h-screen ">
      <h2>FRUITS</h2>
      <input class="border border-red-500 border-solid" 
        type="text"
        placeholder="seacrh fruits"
        onChange={handleSearchInput}
      />
      {fruitsListFiltered.map((fruit) => {
        return <p>{fruit}</p>;
      })}
    </div>
  );
}
