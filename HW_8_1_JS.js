/* ДЗ1 Тасувати масив 
Ми знаємо як відсортувати масив. А ось спробуйте його перемішати!

Приклад масиву: arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]; 

Напишіть функцію myBlend(arr), яка перемішуватиме переданий їй масив. Зверніть увагу: не створювати новий масив, вже перемішаний, а саме перемішувати той, який їй передали.

Умови виконання ДЗ

Не використовувати функції або інші матеріали які ми не вивчали
Намагайтесь робити ДЗ самостійно та не дивитися будь-які підказки
Будь ласка, надайте наступні дані для перевірки вашої роботи:

Створіть гілку js_homework6.
Додати туди ваше домашнє завдання
Вислати вашу гілку*/

function myBlend(arr) {
    let arrLength = arr.length;
    console.log(arrLength);

    for (let i = 0; i < arrLength - 1; i++) {
        let randomIndex = getRandomNumber(0, arrLength);
        let temp = arr[randomIndex];
        arr[randomIndex] = arr[i];
        arr[i] = temp;
    }
    console.log("result:" + arr);
}

function getRandomNumber(min, max) {
    return Math.round(Math.random() * (max - min) + min);
  }

arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]; 
myBlend(arr);