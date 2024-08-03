const { exit } = require("process");

const readLine = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

const validarNumeroInformado = (numero) => {
  const resultado = Number.parseFloat(numero);
  if (!resultado) {
    console.log("numero informado não é valido");
  }
  return resultado;
};

const validarOperador = (operador) => {
  switch (operador) {
    case "+":
    case "-":
    case "/":
    case "*":
    case "%":
      return operador;
    default:
      console.log("Operador informado e invalido");
      return null;
  }
};

readLine.question("Favor informar um numero:", (numero1) => {
  const numeroValido1 = validarNumeroInformado(numero1);

  if (numeroValido1) {
    readLine.question("Digite outro numero:", (numero2) => {
      const numeroValido2 = validarNumeroInformado(numero2);

      if (numeroValido2) {
        readLine.question("Informe o operador:", (operador) => {
          const operadorValidado = validarOperador(operador);
          if (operadorValidado) {
            switch (operadorValidado) {
              case "+":
                console.log(
                  `Operador selecionado adição resultado ${numeroValido1} + ${numeroValido2} = ${
                    numeroValido1 + numeroValido2
                  }`
                );
                break;
              case "-":
                console.log(
                  `Operador selecionado subtração resultado ${numeroValido1} - ${numeroValido2} = ${
                    numeroValido1 - numeroValido2
                  }`
                );
                break;
              case "/":
                console.log(
                  `Operador selecionado divisão resultado ${numeroValido1} / ${numeroValido2} = ${
                    numeroValido1 / numeroValido2
                  }`
                );
                break;
              case "*":
                console.log(
                  `Operador selecionado multiplicação resultado ${numeroValido1} * ${numeroValido2} = ${
                    numeroValido1 * numeroValido2
                  }`
                );
                break;
              case "%":
                console.log(
                  `Operador selecionado modulo resultado ${numeroValido1} % ${numeroValido2} = ${
                    numeroValido1 % numeroValido2
                  }`
                );
                break;

              default:
                break;
            }
          }
        });
      }
    });
  }
});
