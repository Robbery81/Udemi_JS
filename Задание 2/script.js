"use strict"

let money = +prompt("Ваш бюджет на месяц?", "500");
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

for (let i = 0; i<2;i++){
    var a = prompt("Ввведите обязательную статью расходов?","Бухло"),
        b = +prompt("Во сколько обойдеться?","500");
    if ( ((typeof(a)) === "string") && ((typeof(a)) != null) && ((typeof(b)) != null) && (a != "") && (b != "") && (a.length < 50)) {

        console.log("done");

        appData.expenses[a] = b;
    } else {
        i--;
    }    
}
/* var i = 0;
while (i < 2) {
    var a = prompt("Ввведите обязательную статью расходов?", "Бухло"),
        b = +prompt("Во сколько обойдеться?", "500");
    if (((typeof (a)) === "string") && ((typeof (a)) != null) && ((typeof (b)) != null) && (a != "") && (b != "") && (a.length < 50)) {

        console.log("done");

        appData.expenses[a] = b;
        i++;
    } 
} */
/* var i = 0;
do {
    var a = prompt("Ввведите обязательную статью расходов?", "Бухло"),
        b = +prompt("Во сколько обойдеться?", "500");
        if (((typeof (a)) === "string") && ((typeof (a)) != null) && ((typeof (b)) != null) && (a != "") && (b != "") && (a.length < 50)) {

            console.log("done");
    
            appData.expenses[a] = b;
            i++;
        }
} while (i < 2); */

appData.moneyPerDay = appData.budget / 30;

console.log(appData);

alert("Ежедневный бюджет" + appData.moneyPerDay);

if (appData.moneyPerDay < 100) {
    console.log("Бедный");
} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
    console.log("Средний");
} else if (appData.moneyPerDay > 2000) {
    console.log("Богат");
} else {
    console.log("Произошла ошибка");
}