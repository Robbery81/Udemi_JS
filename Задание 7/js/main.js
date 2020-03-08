let btnStart = document.querySelector("#start"); //первая кнопка

let budgetValue = document.querySelector(".budget-value"),
    daybudgetValue = document.querySelector(".daybudget-value"),
    levelValue = document.querySelector(".level-value"),
    expensesValue = document.querySelector(".expenses-value"),
    optionalExpensesValue = document.querySelector(".optionalexpenses-value"),
    incomeValue = document.querySelector(".income-value"),
    monthsavingsValue = document.querySelector(".monthsavings-value"),
    expItem = document.getElementsByClassName("expenses-item"),
    expBtn = document.querySelector(".expenses-item-btn"),
    countBudgetBtn = document.querySelector(".count-budget-btn"),
    yearValue = document.querySelector(".year-value"),
    monthValue = document.querySelector(".month-value"),
    dayValue = document.querySelector(".day-value");

console.log(expItem);
    let btn = document.getElementsByTagName("button"), //все кнопки на странице
             
        expensesItemBtn = btn[0],
        optionalExpensesBtn = btn[1];
        //countBudgetBtn = btn[2];
    
    let optionalExpensesItem = document.querySelectorAll(".optionalexpenses-item"),
        exp1 = optionalExpensesItem[0],
        exp2 = optionalExpensesItem[1],
        exp3 = optionalExpensesItem[2];

        console.log(exp3);
    
    let chooseIncome = document.querySelector (".choose-income"),
        checkSavings = document.querySelector (".checksavings"),
        sumValue = document.querySelector (".choose-sum"),
        percentValue = document.querySelector (".choose-percent"),
        monthSavingsValue = document.querySelector (".monthsavings-value"),
        yearSavingsValue = document.querySelector (".yearsavings-value");

        


        let money, time;


        
        btnStart.addEventListener('click', function() {
            
            time = prompt("Date format YYYY-MM-DD", "2019-05-25");
            money = +prompt("Ваш бюджет на месяц?", "500");
        
            while (isNaN(money) || money == "" || money == null) {
                money = +prompt("Ваш бюджет на месяц?", "500");
            }
            appData.budget = money;
            appData.timeData = time;
            budgetValue.textContent = money.toFixed();
            yearValue.value = new Date(Date.parse(time)).getFullYear();
            monthValue.value = new Date(Date.parse(time)).getMonth() + 1;
            dayValue.value = new Date(Date.parse(time)).getDate();
            
            expBtn.addEventListener('click', function(){
                let sum = 0;
    
                for (let i = 0; i < expItem.length; i++) {
                    var a = expItem[i].value,
                        b = expItem[++i].value;
                    if (((typeof (a)) === "string") && ((typeof (a)) != null) && ((typeof (b)) != null) && (a != "") && (b != "") && (a.length < 50)) {
        
                        console.log("done");
        
                        appData.expenses[a] = b;
                        sum += +b;
                    } else {
                        i--;
                    }
                }
                expensesValue.textContent = sum;
                appData.expenses_summ = sum;
            });

            optionalExpensesBtn.addEventListener('click', function(){
                for (let i = 0; i < optionalExpensesItem.length; i++) {
                    let a = optionalExpensesItem[i].value;
                    appData.optionalExpenses[i] = a;
                    optionalExpensesValue.textContent += appData.optionalExpenses[i] + " ";
                }
            });

            countBudgetBtn.addEventListener('click', function(){
            
                if (appData.budget != undefined) {
                    appData.moneyPerDay = ((appData.budget - appData.expenses_summ) / 30).toFixed();
                    daybudgetValue.textContent = appData.moneyPerDay;
        
                    if (appData.moneyPerDay < 100) {
                        levelValue.textContent = "Бедный";
                    } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
                        levelValue.textContent = "Средний";
                    } else if (appData.moneyPerDay > 2000) {
                        levelValue.textContent = "Богат";
                    } else {
                        levelValue.textContent = "Произошла ошибка";
                    }
                }   else {
                    daybudgetValue.textContent = "Error";
                }  
               
            });

        });

        





        chooseIncome.addEventListener("input", function(){//change - когда убираем фокус сабатывает
            let items = chooseIncome.value;
            appData.income = items.split(", ");
            incomeValue.textContent = appData.income;

        });

        checkSavings.addEventListener('click', function(){
            if (appData.savings == true) {
                appData.savings = false;
            } else {
                appData.savings = true;
            }
        });

        sumValue.addEventListener('input', function(){
            if (appData.savings == true) {
                let summ = +sumValue.value,
                    percent = +percentValue.value;
                appData.monthIncome = summ / 100 / 12 * percent;
                appData.yearhIncome = summ / 100 * percent;

                monthSavingsValue.textContent = appData.monthIncome.toFixed();
                yearSavingsValue.textContent = appData.yearhIncome.toFixed();

            }
        });

        percentValue.addEventListener('input', function(){
            if (appData.savings == true) {
                let summ = +sumValue.value,
                percent = +percentValue.value;
            appData.monthIncome = summ / 100 / 12 * percent;
            appData.yearhIncome = summ / 100 * percent;

            monthSavingsValue.textContent = appData.monthIncome.toFixed(1);
            yearSavingsValue.textContent = appData.yearhIncome.toFixed(1);
            }
        });

        var appData = {
            budget: money,
            timeData: time,
            expenses: {},
            expenses_summ: 0,
            optionalExpenses: {},
            income: [],
            income2: [],
            savings: false
 
        };
