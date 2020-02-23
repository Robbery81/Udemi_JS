"use strict";

let money = prompt("You money eahc mouts?","500");
let time = prompt("Date format YYYY-MM-DD", "2019-05-25");


var appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    income2: [],
    savings: false
};
var b = "cat";
var expenses_one = prompt("Ввведите обязательную статью расходов?","Бухло");
appData.expenses.expenses_one = prompt("Во сколько обойдеться?","500");

console.log(appData);
console.log(appData);
alert( (appData.budget-appData.expenses.expenses_one) /30);