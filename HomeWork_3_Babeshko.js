/*
Необхідно написати програму яка буде виводити інформацію за умовами при яких число виводитиметься з правильним словом: "рік", "роки" або "років". Тобто. "29 років" чи "4 роки".

Умови виконання ДЗ

Рік отримувати через prompt()
Зробити перевірку що користувач ввів число та це число не є від'ємним
Не використовувати функції або інші матеріали які ми не вивчали
Намагайтесь робити ДЗ самостійно та не дивитися будь-які підказки.
Будь ласка, надайте наступні дані для перевірки вашої роботи:

Створіть гілку js_homework2.
Додати туди ваше домашнє завдання
Вислати вашу гілку
*/

var years = prompt("Введіть ваш вік: ");
if (years >= 0){
    let temp = years%100;
    if (temp < 20){
        if (temp === 1) {
            console.log (years + " рік");
        }
        else if (temp >= 2 && temp <= 4){
        console.log (years + " роки");
        }
        else if (temp >= 5 || temp == 0){
        console.log (years + " років");
        }
    } else {
        if (temp%10 === 1) {
            console.log (years + " рік");
        }
        else if (temp%10 >= 2 && temp%10 <= 4){
        console.log (years + " роки");
        }
        else if (temp%10 >= 5 || temp%10 == 0){
        console.log (years + " років");
        }
    }
}