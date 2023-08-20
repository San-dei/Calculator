import { useCalculator } from "./useCalculator";
import "./Calculator.css";

export const Calculator = () => {
  const { result, calculate, backspace, clear, handleClick } = useCalculator();

  return (
    <>
      <div className="container">
        <form>
          <input type="text" value={result} />
        </form>

        <div className="keypad">
          <button onClick={clear} id="clear" className="highlight">
            Clear
          </button>
          <button onClick={backspace} id="backspace" className="highlight">
            C
          </button>
          <button name="/" onClick={handleClick} className="highlight">
            /
          </button>
          <button name="7" onClick={handleClick}>
            7
          </button>
          <button name="8" onClick={handleClick}>
            8
          </button>
          <button name="9" onClick={handleClick}>
            9
          </button>
          <button name="*" onClick={handleClick} className="highlight">
            *
          </button>
          <button name="4" onClick={handleClick}>
            4
          </button>
          <button name="5" onClick={handleClick}>
            5
          </button>
          <button name="6" onClick={handleClick}>
            6
          </button>
          <button name="+" onClick={handleClick} className="highlight">
            +
          </button>
          <button name="1" onClick={handleClick}>
            1
          </button>
          <button name="2" onClick={handleClick}>
            2
          </button>
          <button name="3" onClick={handleClick}>
            3
          </button>
          <button name="-" onClick={handleClick} className="highlight">
            -
          </button>
          <button name="0" onClick={handleClick}>
            0
          </button>
          <button name="." onClick={handleClick}>
            .
          </button>
          <button onClick={calculate} id="result" className="highlight">
            =
          </button>
        </div>
      </div>
    </>
  );
};
