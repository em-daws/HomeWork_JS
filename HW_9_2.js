/*ДЗ 2 Параноя

В нас є масив об'єктів в яких міститься email.
У нас параноя, ми не довіряємо жодним адресам, окрім зареєстрованих на доменах gmail.com та yahoo.com.

За допомогою регулярного виразу створіть масив з адресами, гідними довіри. Постарайтеся також зробити просту валідацію до @

- одне, або два слова які можуть містити (латинські букви, цифри) яке може бути розділене крапкою.

Умови виконання ДЗ

Не використовувати функції або інші матеріали які ми не вивчали
Намагайтесь робити ДЗ самостійно та не дивитися будь-які підказки
Будь ласка, надайте наступні дані для перевірки вашої роботи:

Створіть гілку js_homework7.
Додати туди ваше домашнє завдання
Вислати вашу гілку*/

var arr = [
    {
        userName:"Test",
        lastName:"Test",
        email:"test.test@gmail.com"
    },
    {
        userName:"Dmitro",
        lastName:"Porohov",
        email:"dmitro.porohov@yahoo.com"
    },
    {
        userName:"Andrii",
        lastName:"",
        email:"andrii@mail.ru" // Нам такі не підходять
    },
];

// окрім загальних вимог ще додала валідацію, що імейл починається з літери, а не з цифри
// і додала обробку ситуації, коли підходящі імейли не знайдені - чисто для практики)

var validEmailsPattern = /^[a-z][0-9a-z]+[.]{0,1}[0-9a-z]+[@]{1}(gmail|yahoo)\.com$/i;

var chooseEmailsWeCanTrust = (pattern, arrayWithUserData) => {
    var listOfValidEmails = [];
    for (let i = 0; i < arrayWithUserData.length; i++) {
        let userEmail = arrayWithUserData[i].email;
        if (userEmail.match(pattern)) {
            listOfValidEmails.push(userEmail);
        }
    }
    var result = "Emails We Trust: " + listOfValidEmails;
    if (listOfValidEmails[0] === undefined) {
        result = "No valid emails are found.";
    }
    return result;
}

console.log(chooseEmailsWeCanTrust(validEmailsPattern, arr));