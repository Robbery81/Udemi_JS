let menu = document.querySelector(".menu"); // выделяем ул меню
let li5 = document.createElement("li"); //создаем пятый елемент
let delLi2 = document.getElementsByTagName("li");//создаем елемент для удаления

    li5.classList.add("menu-item"); //добавляем клас
    li5.textContent = "Пятый пункт";// добавляем текс
menu.appendChild(li5); // добавляем в конец новый елемент
menu.insertBefore(delLi2[2], delLi2[1]); //меняем местами 3 и 2 елементы

document.body.style.backgroundImage = "url(img/apple_true.jpg)"; //меняем картинку


let title = document.querySelector("#title"); //меняем текст
title.textContent = "Мы продаем только подлинную технику Apple";


var elem = document.querySelectorAll(".adv");//удаляем елемент
elem[0].remove();
console.log(elem);

let feedback = document.querySelectorAll(".prompt"); //меняем текст в окне отзыва

setTimeout(function() {
    var b = prompt("Привет","Тело");
    feedback[0].textContent = b;
    console.log(b);
},1250);




