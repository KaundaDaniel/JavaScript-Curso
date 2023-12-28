/*const friends = ["Michael", "Steve", "Peter"];
console.log(friends);
const years = new Array(1990, 2023, 1987, 1983);
console.log(years[0]);
console.log(years.length);
console.log(friends[friends.length - 1]);
friends[2] = "Jay";
console.log(friends);
const firstName = "Kaunda";
const kaunda = [firstName, 2037 - 1991, friends];
console.log(kaunda);

const calcAge = function (birthyeah) {
  return 2037 - birthyeah;
};
const anos = new Array(1990, 1967, 2010, 2018);
const ages= [calcAge(anos[0]), calcAge(anos[1]), , calcAge(anos[2]),calcAge(anos[anos.length -1])]
console.log(ages);

*/

/*OPERACOES COM ARRAYS*/
const friends = ["Frank", "Pedro", "Amaral"];
const newLength = friends.push("Genuino"); //Adiciona no fim do Array
console.log(friends);
console.log(newLength);

friends.unshift("Halland"); //Adiciona no principio
console.log(friends);

const popElement = friends.pop(); //Remove no fim
console.log(friends);
console.log(popElement);
const shiftEleme = friends.shift();
console.log(shiftEleme);
friends.push(1990); // Adiciona no fim
console.log(friends);
const includeInArray = friends.includes("Frank");
console.log(includeInArray);
const inArray = friends.includes("Mimoso");

if (friends.includes(1)) {
  console.log("You have to Spring");
} else {
  console.log("Não possui");
}
console.log(inArray);

const calcTip = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};
const calcTip2 = function (bill) {
  if (bill >= 50 && bill <= 300) {
    return bill * 0.15;
  } else {
    return bill * 0.2;
  }
};

const bills = [125, 555, 44];
const tips = [calcTip2(bills[0]), calcTip(bills[1]), calcTip2(bills[2])];

const total = [tips[0] + bills[0], tips[1] + bills[1], tips[2] + bills[2]];
console.log("Bills", bills, "Tips", tips);
console.log(total);
