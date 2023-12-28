"use strict";
const jonas = {
  firstName: "kaunda",
  job: "programmer",
  birthYear: 1991,
  friend: ["Frank", "Martinho", "Steven"],
  hasDriveLicense: true,
  /*calcAge: function(birthYear){
  return 2037-birthYear
  }*/

  calcAge: function () {
    this.age = 2037 - this.birthYear;
    return this.age;
    },
    /*calcAge: function () {
    return 2037 - this.birthYear;
  },*/
};

console.log(jonas.friend[1]);
console.log(jonas.name);
console.log(jonas["job"]);
const nameKey = "Name";
console.log(jonas["first" + nameKey]);
/*const interesting = prompt(
  "Wha do you want to know about Jonas? Coose beetween firstName, lastname, age, job, friends"
);
if (jonas[interesting]) {
  console.log(jonas[interesting]);
} else {
  console.log("We dont have this information");
}

jonas.location = "Angola";
jonas["morada"] = "Calemba 2";
console.log(jonas.morada);
console.log(
  `${jonas.firstName}`,
  "has",
  jonas.friend.length,
  "Friends, and is best friend is ",
  jonas.friend[0]
);
*/

console.log(jonas.age);
console.log(jonas["calcAge"]());
