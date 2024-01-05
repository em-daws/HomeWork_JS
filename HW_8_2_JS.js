/*Уявімо собі, що ми є власниками великої компанії, яка розробляє платформу для продажу квитків. Окрім того, 
наша компанія продає рішення для організації продажу цих квитків. Таким чином, у нас будуть клієнти, 
які придбають наше програмне забезпечення (ПО). По суті, ці клієнти будуть подібні до "дочірніх компаній" (subCompany), 
які вже використовують наше ПО для продажу квитків. Крім цього, ці "дочірні компанії" також можуть стати постачальниками цього рішення, 
і в цьому випадку вони вже будуть "внучатами компанії" (subSubCompany), і так далі і далі

Ось приклад об'єкту, зверніть увагу на вкладеність, та маєте на увазі що об'єкт може ставати ще глибшим. 

Вам необхідно написати функцію findValueByKey(companyName), яка буде приймати значення у вигляді companyName та надавати інформацію про цю subCompany.

Умови виконання ДЗ

Не використовувати функції або інші матеріали які ми не вивчали
Намагайтесь робити ДЗ самостійно та не дивитися будь-які підказки
Будь ласка, надайте наступні дані для перевірки вашої роботи:

Створіть гілку js_homework6.
Додати туди ваше домашнє завдання
Вислати вашу гілку*/


const company = {
    name: 'Велика Компанія',
    type:'Головна компанія',
    platform: 'Платформа для продажу квитків',
    sellsSolution: 'Рішення для продажу квитків',
    clients: [
        {
            name: 'Клієнт 1',
            type: 'subCompany',
            uses: 'ПО для продажу квитків',
            sells: 'Рішення для продажу квитків',
            partners: [
                {
                    name: 'Клієнт 1.1',
                    type: 'subSubCompany',
                    uses: 'Рішення для продажу квитків',
                    sells: 'Рішення для продажу квитків',
                },
                {
                    name: 'Клієнт 1.2',
                    type: 'subSubCompany',
                    uses: 'Рішення для продажу квитків',
                    sells: 'Рішення для продажу квитків',
                    partners: [
                        {
                            name: 'Клієнт 1.2.3',
                            type: 'subSubCompany',
                            uses: 'Рішення для продажу квитків',
                            sells: 'Рішення для продажу квитків',
                        }
                    ]
                }
            ]
        },
        {
            name: 'Клієнт 2',
            type: 'subCompany',
            uses: 'ПО для продажу квитків',
            sells: 'Рішення для продажу квитків'
        }
    ]
};


function findValueByKey(companyName, companyObj) {
    if (companyObj.name === companyName) {
      return companyObj;
    }
  
    if (companyObj.clients) {
      for (let i = 0; i < companyObj.clients.length; i++) {
        const result = findValueByKey(companyName, companyObj.clients[i]);
        if (result) {
          return result;
        }
      }
    }
  
    if (companyObj.partners) {
      for (let i = 0; i < companyObj.partners.length; i++) {
        const result = findValueByKey(companyName, companyObj.partners[i]);
        if (result) {
          return result;
        }
      }
    }
  
    return null;
  }
  
  // Приклад виклику функції
  const result = findValueByKey('Клієнт 1.2.3', company);
  console.log(result);