import "./App.css";
import Key from "../components/Key";
import { useState } from "react";

const keysList = [
  { type: "operator", name: "plus", symbol: "+", area: "1 / 1 / 2 / 2" },
  { type: "operator", name: "minus", symbol: "-", area: "1 / 2 / 2 / 3" },
  { type: "operator", name: "multiply", symbol: "x", area: "1 / 3 / 2 / 4" },
  { type: "operator", name: "divide", symbol: "%", area: "1 / 4 / 2 / 5" },
  { type: "number", name: "7", symbol: "7", area: "2 / 1 / 3 / 2" },
  { type: "number", name: "8", symbol: "8", area: "2 / 2 / 3 / 3" },
  { type: "number", name: "9", symbol: "9", area: "2 / 3 / 3 / 4" },
  { type: "operator", name: "AC", symbol: "AC", area: "2 / 4 / 3 / 5" },
  { type: "number", name: "4", symbol: "4", area: "3 / 1 / 4 / 2" },
  { type: "number", name: "5", symbol: "5", area: "3 / 2 / 4 / 3" },
  { type: "number", name: "6", symbol: "6", area: "3 / 3 / 4 / 4" },
  { type: "operator", name: "DEL", symbol: "DEL", area: "3 / 4 / 4 / 5" },
  { type: "number", name: "1", symbol: "1", area: "4 / 1 / 5 / 2" },
  { type: "number", name: "2", symbol: "2", area: "4 / 2 / 5 / 3" },
  { type: "number", name: "3", symbol: "3", area: "4 / 3 / 5 / 4" },
  { type: "number", name: "0", symbol: "0", area: "5 / 1 / 6 / 3" },
  { type: "number", name: ".", symbol: ".", area: "5 / 3 / 6 / 4" },
  { type: "equal", name: "=", symbol: "=", area: "4 / 4 / 6 / 5" },
];

function App() {
  const [displayNumber, setDisplayNumber] = useState("0");
  const [symbol, setSymbol] = useState(undefined);
  const [firstNumber, setFirstNumber] = useState(undefined);
  let result;

  const handleNumberClick = (number) => {
    if (displayNumber === "0") {
      setDisplayNumber(number);
    } else {
      setDisplayNumber(displayNumber + number);
    }
  };

  const handleOperatorClick = (operator) => {
    if (firstNumber === undefined) {
      setFirstNumber(displayNumber);
      setSymbol(operator);
      setDisplayNumber("0");
    } else {
      calculateResult();
      setFirstNumber(result);
      setSymbol(operator);
      setDisplayNumber("0");
    }
  };

  const handleEqualClick = () => {
    if (firstNumber !== undefined && displayNumber !== "0") {
      calculateResult();
      setDisplayNumber(result);
      setFirstNumber(undefined);
      setSymbol(undefined);
    }
  };

  const handleDelClick = () => {
    if (displayNumber.length > 1) {
      setDisplayNumber(displayNumber.slice(0, -1));
    } else {
      setDisplayNumber("0");
    }
  };

  const handleAcClick = () => {
    setSymbol(undefined);
    setDisplayNumber("0");
    setFirstNumber(undefined);
  };

  const calculateResult = () => {
    if (firstNumber !== undefined && displayNumber !== "0") {
      switch (symbol) {
        case "+":
          result = parseFloat(firstNumber) + parseFloat(displayNumber);
          break;
        case "-":
          result = parseFloat(firstNumber) - parseFloat(displayNumber);
          break;
        case "x":
          result = parseFloat(firstNumber) * parseFloat(displayNumber);
          break;
        case "%":
          result = parseFloat(firstNumber) / parseFloat(displayNumber);
          break;
        default:
          console.error("Invalid operator");
      }
      return result;
    }
  };

  return (
    <>
      <div className="container">
        <div className="calculator">
          <div className="display">
            <div className="operation">
              {symbol !== undefined ? firstNumber + " " + symbol : ""}
            </div>
            {displayNumber}
          </div>
          <div className="keys">
            {keysList.map((key) => {
              return (
                <Key
                  key={key.name}
                  type={key.type}
                  symbol={key.symbol}
                  area={key.area}
                  handleNumberClick={handleNumberClick}
                  handleOperatorClick={handleOperatorClick}
                  handleEqualClick={handleEqualClick}
                  handleDelClick={handleDelClick}
                  handleAcClick={handleAcClick}
                />
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
