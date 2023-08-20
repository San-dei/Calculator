import { useState } from "react";

export const useCalculator = () => {
  // Estado que guarda el resultado actual de la calculadora
  const [result, setResult] = useState("");

  // Función que se ejecuta cuando se hace clic en un botón
  const handleClick = (e) => {
    // Concatenar el nombre del botón al resultado actual
    setResult(result.concat(e.target.name));
  };

  // Función para borrar todos los números del resultado
  const clear = () => {
    setResult("");
  };

  // Función para eliminar el último número ingresado
  const backspace = () => {
    // Eliminar el último carácter del resultado
    setResult(result.slice(0, result.length - 1));
  };

  // Función para calcular el resultado de la expresión ingresada
  const calculate = () => {
    try {
      // Crear una función a partir de la expresión ingresada
      const expression = new Function("return " + result);
      // Calcular la expresión y convertirla a cadena
      setResult(parseFloat(expression()).toString());
    } catch (err) {
      // Si ocurre un error en el cálculo, mostrar "error" en el resultado
      setResult("error");
    }
  };

  return {
    result,
    calculate,
    backspace,
    clear,
    handleClick,
  };
};
