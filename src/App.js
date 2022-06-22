import "./App.css";
import { useState } from "react";
import Square from "./Square";
import Input from "./Input";
export default function App() {
  const [colorValue, setColorValue] = useState(" ");
  return (
    <div className="App">
      <Square colorValue={colorValue} />
      <Input colorValue={colorValue} setColorValue={setColorValue} />
    </div>
  );
}
