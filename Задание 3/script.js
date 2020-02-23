"use strict"

let money, time;

function start() {
    money = +prompt("Ваш бюджет на месяц?", "500");
    time = prompt("Date format YYYY-MM-DD", "2019-05-25");

    while (isNaN(money) || money == "" || money == null) {
        money = +prompt("Ваш бюджет на месяц?", "500");
    }
}

start();

var appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    income2: [],
    savings: true
};

function chooseExpenses() {
    for (let i = 0; i < 2; i++) {
        var a = prompt("Ввведите обязательную статью расходов?", "Бухло"),
            b = +prompt("Во сколько обойдеться?", "500");
        if (((typeof (a)) === "string") && ((typeof (a)) != null) && ((typeof (b)) != null) && (a != "") && (b != "") && (a.length < 50)) {

            console.log("done");

            appData.expenses[a] = b;
        } else {
            i--;
        }
    }
}

chooseExpenses();

function chooseOptExpenses() {
    for (let i = 0; i < 3; i++) {
        let a = prompt("Статья необязательных расходов", "Еда");
            if (((typeof (a)) === "string") && ((typeof (a)) != null) && (a != "") && (a.length < 50)) {

                console.log("done");
    
                appData.optionalExpenses[i+1] = a;
            } else {
                i--;
            }
    }
}

chooseOptExpenses();

function detectDayBudget() {
    appData.moneyPerDay = (appData.budget / 30).toFixed();
    console.log(appData);
    alert("Ежедневный бюджет: " + appData.moneyPerDay);
}

detectDayBudget();



function detectLevel() {
    if (appData.moneyPerDay < 100) {
        console.log("Бедный");
    } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
        console.log("Средний");
    } else if (appData.moneyPerDay > 2000) {
        console.log("Богат");
    } else {
        console.log("Произошла ошибка");
    }
}

detectLevel();

function checkSavings() {
    if (appData.savings == true) {
        let save = +prompt("Сумма накоплений?", "50000"),
            percent = +prompt("Под какой процент", "12");

        appData.monthIncome = save / 100 / 12 * percent;
        alert(appData.monthIncome);
    }
}

checkSavings();