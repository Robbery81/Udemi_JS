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
    savings: true,
    chooseExpenses: function () {
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
    },
    detectDayBudget: function () {
        appData.moneyPerDay = (appData.budget / 30).toFixed();
        console.log(appData);
        alert("Ежедневный бюджет: " + appData.moneyPerDay);
    },
    detectLevel: function () {
        if (appData.moneyPerDay < 100) {
            console.log("Бедный");
        } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
            console.log("Средний");
        } else if (appData.moneyPerDay > 2000) {
            console.log("Богат");
        } else {
            console.log("Произошла ошибка");
        }
    },
    checkSavings: function () {
        if (appData.savings == true) {
            let save = +prompt("Сумма накоплений?", "50000"),
                percent = +prompt("Под какой процент", "12");

            appData.monthIncome = save / 100 / 12 * percent;
            alert(appData.monthIncome);
        }
    },
    chooseOptExpenses: function () {
        for (let i = 0; i < 3; i++) {
            let a = prompt("Статья необязательных расходов", "Еда");
            if (((typeof (a)) === "string") && ((typeof (a)) != null) && (a != "") && (a.length < 50)) {

                console.log("done");

                appData.optionalExpenses[i + 1] = a;
            } else {
                i--;
            }
        }
    },
    chooseIncome: function () {
        for (let i = 0; i < 1; i++) {
            let items = prompt("Что принесет доп доход? (через кому)", "работа, работа");
            if ((typeof (items) === "string") && (typeof (items) != null) && (items != "")) {
                appData.income = items.split(", ");
                for (let n = 0; n < 1; n++) {
                    let items2 = prompt('Может что-то еще?', "работа");
                    if ((typeof (items2) === "string") && (typeof (items2) != null) && (items2 != "")) {
                        appData.income.push(items2);
                        appData.income.sort();
                        console.log("Способы доп заработка:");
                        appData.income.forEach(function callback(item, i){
                            console.log(i+1 + ": " + item);
                        });
                    } else {
                        n--;
                    }
                }
            } else {
                i--;
            }
        }
    },
    showObject: function () {
        console.log("Наша программа включает в себя данные: ");
        for (let key in appData) {
            console.log(key + ": " + appData[key]);
        }
    }

};
/* let itemses = [1, 2, 3, 4];
itemses.forEach(function callback(item, num) {
    console.log(num + ':' + item);
}); */