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

function findValueByKey(companyName) {
    function findInCompany(obj) {
      if (obj.name === companyName) {
        return {
          name: obj.name,
          type: obj.type,
          uses: obj.uses || null,
          sells: obj.sells || null
        };
      } else if (obj.clients) {
        //шукаємо серед client
        for (const client of obj.clients) {
          const result = findInCompany(client);
          if (result) {
            return result;
          }
        }
      } else if (obj.partners) {
        //шукаємо серед partner
        for (const partner of obj.partners) {
          const result = findInCompany(partner);
          if (result) {
            return result;
          }
        }
      }
  
      //якщо компанія не знайдена:
      return null;
    }
    return findInCompany(company);
  }
  
  const companyNameToFind = 'Клієнт 1.2.3';
  const result = findValueByKey(companyNameToFind);
  console.log(result);