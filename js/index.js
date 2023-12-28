"use strict";
/*
let hasDriversLicense = false;
const passTest = true;
if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log("i can drive");
const interface = "Audio";
//const private = 484;
//const if='mimoso'
const calc = (birthYear) => 2023 - birthYear;
*/
function imprimi() {
  console.log("Ola Mundo");
}
//chamar a funcão
imprimi();
/*
function fruitProcess(apples, oranges) {
  //console.log(apples, oranges);
  const juice = `juices with ${apples} apples and ${oranges} oranges`;
  return juice;
}
*/
/*
const appleJuices = fruitProcess(18, 92);
//console.log(appleJuices);

//console.log(fruitProcess(89, 394));
const num = Number("34");
*/
/*
//Funcao declarativa
const ano = calculAge(1987)
console.log(ano)
function calculAge(birthYear) {
    return 2038 - birthYear;
}
//funcao expressiva

// 
const ano1= function (birthYear) {
    return 2023 - birthYear;
}
console.log(ano1(1987))
*/
/*

//Arrow funtion

const calcAge = (birthYear) => 2034 - birthYear;
const ano = calcAge(1991);
console.log(ano);

const anosAposentado = (birthYear, nome) => {
  const age = 2037 - birthYear;
  const aposentado = 65 - age;
  //return aposentado;
  return `${nome} falta ${ano} para se aposentar`;
};
const anoFalta = anosAposentado(1991, "Kaunda");
console.log(anoFalta);
*/

/*function cutPieces(fruit) {
  return fruit * 4;
}

function fruitProcess(apple, mango) {
  const cutApple = cutPieces(apple);
  const cutMango = cutPieces(mango);
  const juices = `${cutApple} de Maçã e ${cutMango} de Manga`;
  return juices;
}

console.log(fruitProcess(2, 3));
*/

/*
const calcAge = function ageCalc(birthYear) {
  return 2037 - birthYear;
};

const anosAposentado = (birthYear, nome) => {
  const age = calcAge(birthYear);
  const aposentado = 65 - age;
  if (aposentado < 0) {
    return `${nome} já está aposentado`;
  }
  //return aposentado;
  return `${nome} falta ${aposentado} para se aposentar`;
};
console.log(anosAposentado(1970, "Domingas"));

console.log(anosAposentado(1991, "Kaunda"));

*/
/*

const calculaMedia = (n1, n2, n3) => {
  const achamedia = (n1 + n2 + n3) / 3;
  return achamedia;
};
const calculaMedia2 = (a, b, c) => (a + b + c) / 3;
console.log(calculaMedia2(3, 4, 5));

const media = calculaMedia(1, 5, 4);

const scoreDolphins = calculaMedia(44, 23, 71);
console.log(scoreDolphins);
const scoreKoalas = calculaMedia2(65, 54, 49);
console.log(scoreKoalas);

const checkWinner = function (scoreDolphins, scoreKoalas) {
  if (scoreDolphins >= 2 * scoreKoalas) {
    console.log(
      `The winner is Dolphins .👑  (${scoreDolphins} vs ${scoreKoalas})`
    );
  } else if (scoreKoalas >= 2 * scoreDolphins) {
    console.log(
      `The winner is Koalas .👑  (${scoreDolphins} vs ${scoreKoalas})`
    );
  } else {
    console.log("No Winner!");
  }
  {
    console.log;
  }
};
checkWinner(scoreDolphins, scoreKoalas);
checkWinner(576, 111);
console.log(media);
*/

/*
const friends = ["Luis", "Miguel", "Peter"];
console.log(friends);
const anos = new Array(1987, 1980, 1970, 1890);
if (friends.length > 4) {
  console.log(friends.length);
} else {
  console.log("Array menor");
}
console.log(friends[friends.length - 1]);

friends[2] = "Lingua";
console.log(friends[friends.length - 1]);
console.log(friends);
console.log(anos);

const all = ["Amadeu", 1970, "Petro", true, 2021 - 1930];

console.log(all);
*/
/*

const calcAge = function ageCalc(birthYear) {
  return 2037 - birthYear;
};
const years = [1990, 1980, 1983, 2019, 1960];
for (let index = 0; index < years.length; index++) {
  console.log(calcAge(years[index]));
}

years.push(1930); // add elements to the ends of arrays

years.unshift("John"); //Add elements in first position
years.pop(); // remove element at the last position
years.shift(); // remove first element in Array.
years.push(34);
console.log(years);
console.log(years.indexOf(1983)); // Saber a posicao de um elemento num array
console.log(years.includes(1980)); //saber se um elemento está incluindo no array
console.log(years.includes(34)); //saber se um elemento está incluindo no array

if (years.includes("Mimoso")) {
  console.log("tens um nome chamado Mimoso");
} else {
  console.log("Não tem nenhum MimoSo");
}
*/
/*
const bilCalculate = function calcaTip(bill) {
  if (bill > 50 && bill <= 300) {
    return bill * 0.15;
  } else {
    return bill * 0.2;
  }
};
console.log(bilCalculate(20));
*/

/*

const calcTip = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};
const bills = [125, 555, 44];

const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];

const total = [bills[0] + tips[0] + bills[1] + tips[1] + bills[2] + tips[2]];
console.log(bills, tips, total);
*/
/*

const angola = {
  populacao: 39393,
  capital: "Luanda",
  presidente: "Joao Lourenco",
  provincias: 18,
};

const sobreNome = "Name";
console.log(angola);
console.log(angola.capital);
console.log(angola["presidente"]);
console.log(angola["presidente" + sobreNome]);

const interesse = prompt("O que deseja saber de angola?");

if (angola[interesse]) {
  console.log(angola[interesse]);
} else {
  console.log("Não consiguimos achar a sua resposta");
}
*/
console.log("1000".split("Ola"));
const nomeDefault = (name = 'Mimoso') => {
  console.log(name)
}
nomeDefault();
const repeatFrase=(frase, range = 3)=>{
  for (let i = 0; i <= range; i++){
    console.log(`${frase} repetida`)

  }
}
repeatFrase("itGest");

