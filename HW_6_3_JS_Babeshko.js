/*ДЗ 3

Перевірка теорії ймовірності. Напишіть функцію яка буде генерувати певну кількість випадкових чисел в діапазоні від 100 до 1000 включно. 
Порахувати кількість парних та непарних серед них. Обчислити відсоткове співвідношення - чи буде воно близьке до 50%50? 
Приклад функції checkProbabilityTheory(count). Параметр count буде вказувати скільки разів буде генеруватися випадкове число.

Умови виконання ДЗ

Функція виводить інформацію
Кількість згенерованих чисел: кількість чисел
Парних чисел: кількість парних чисел
Не парних чисел: кількість не парних чисел
Відсоток парних до не парних: 
Не використовувати функції або інші матеріали які ми не вивчали
Намагайтесь робити ДЗ самостійно та не дивитися будь-які підказки
Будь ласка, надайте наступні дані для перевірки вашої роботи:

Створіть гілку js_homework4.
Додати туди ваше домашнє завдання
Вислати вашу гілку */

function checkProbabilityTheory(count) {
    let evenNumbers = 0;
    let oddNumbers = 0;

    for (let i = 0; i < count; i++) {
        let randomNum = getRandomNumber(100, 1000);
        if (randomNum % 2 == 0) {
            evenNumbers++;
        } else {
            oddNumbers++;
        }
    }

    let totalAmountOfNumbersGenerated = evenNumbers + oddNumbers;
    let percentOfEvenNumbers = Math.round((evenNumbers / totalAmountOfNumbersGenerated) * 100);
    let percentOfOddNumbers = Math.round((oddNumbers / totalAmountOfNumbersGenerated) * 100);
    
    console.log("Кількість згенерованих чисел: " + totalAmountOfNumbersGenerated);
    console.log("Парних чисел: " + evenNumbers);
    console.log("Не парних чисел: " + oddNumbers);
    console.log("Відсоток парних до не парних: " + percentOfEvenNumbers + "% парних на " + percentOfOddNumbers + "% не парних");

    if (percentOfEvenNumbers === 50) {
        console.log("Wow! The ration of even and odd numbers is 50/50 or close to it:)")
    }
}

function getRandomNumber(min, max) {
    return Math.round(Math.random() * (max - min) + min);
  }

checkProbabilityTheory(30);