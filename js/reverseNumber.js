function inverteNUmber(numero) {
  //converter o numero em uma string
    numero = numero + "";
    return numero.split("").reverse().join("")
  
}
const numeroDigitado= prompt("digite um numero")
console.log(inverteNUmber(numeroDigitado));