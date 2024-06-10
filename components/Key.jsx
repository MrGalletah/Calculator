export default function Key({
  type,
  symbol,
  area,
  handleNumberClick,
  handleOperatorClick,
  handleEqualClick,
  handleDelClick,
  handleAcClick,
}) {
  const handleClick = () => {
    switch (type) {
      case "number":
        handleNumberClick(symbol);
        break;
      case "operator":
        symbol === "AC"
          ? handleAcClick()
          : symbol === "DEL"
          ? handleDelClick()
          : handleOperatorClick(symbol);

        break;
      case "equal":
        handleEqualClick();
        break;
      default:
        console.error("Invalid key type");
    }
  };

  return (
    <>
      <button
        onClick={handleClick}
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
