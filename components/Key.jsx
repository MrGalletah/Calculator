export default function Key({
  type,
  name,
  symbol,
  area,
  setNumberFunction,
  setSymbolFunction,
}) {
  const numberHandleClick = () => {
    if (type === "number") {
      setNumberFunction((prev) => {
        if (symbol === ".") {
          return prev + symbol;
        }
        if (prev === "0") {
          return symbol;
        } else {
          return prev + symbol;
        }
      });
    }
  };

  const symbolHandleClick = () => {
    if (type === "operator") {
      if (symbol === "AC") {
        setNumberFunction("0");
      } else if (symbol === "DEL") {
        setNumberFunction((prev) => {
          if (prev.length > 1) {
            return prev.slice(0, -1);
          } else {
            return prev;
          }
        });
      } else {
        setSymbolFunction(symbol);
      }
    }
  };
  const decideClick = () => {
    type === "number"
      ? numberHandleClick()
      : type === "operator"
      ? symbolHandleClick()
      : console.log("jejo");
  };
  return (
    <>
      <button
        onClick={decideClick}
        className={
          type === "operator"
            ? "btnKey operatorKey"
            : type === "number"
            ? "btnKey numberKey"
            : "btnKey equalKey"
        }
        style={{ gridArea: area }}
      >
        {symbol}
      </button>
    </>
  );
}
