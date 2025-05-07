
function sumar(a, b) {
    const resultado = a + b;
    console.log(`${a} + ${b} = ${resultado}`);
  }
  
  function restar(a, b) {
    const resultado = a - b;
    console.log(`${a} - ${b} = ${resultado}`);
  }
  
  function multiplicar(a, b) {
    const resultado = a * b;
    console.log(`${a} x ${b} = ${resultado}`);
  }
  
  function dividir(a, b) {
    if (b !== 0) {
      const resultado = a / b;
      console.log(`${a} / ${b} = ${resultado}`);
    } else {
      console.log("No se puede dividir entre cero");
    }
  }
  
  // Ejemplo de uso
  const numero1 = 12;
  const numero2 = 5;
  
  sumar(numero1, numero2);
  restar(numero1, numero2);
  multiplicar(numero1, numero2);
  dividir(numero1, numero2);