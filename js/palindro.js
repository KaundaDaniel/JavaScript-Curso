const palindromo = function palindros(frase) {
  //
  const cstr = frase.toLowerCase().replace(/[^a-zA-Z0-9]+/g, "");
  var countfrase = 0;
  if (cstr === "") {
    console.log("Nenhuma frase enconrada");
    return false;
  }
  if (cstr.length % 2 === 0) {
    countfrase = cstr.length / 2;
  } else {
    if (cstr.length === 1) {
      console.log("A frase é um palindromo");
      return true;
    } else {
      countfrase = (cstr.length - 1) / 2;
    }
  }

  for (let index = 0; index < countfrase; index++) {
    if (cstr[x] != cstr.slice(-1 - x)[0]) {
      console.log("A Frase não é um palindromo");
      return false;
    }
  }
  console.log(" A frase é um palindromo");
  return true;
  //função que verifica se uma frase é um palíndromo ou não.
};
