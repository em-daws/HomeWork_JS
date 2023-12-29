/*ДЗ2 Сума вартості послуг

 Припустимо, у нас є об'єкт. Властивості об'єкта - назва послуги та її вартість:

var services = {
	"стрижка": "60 грн",
	"гоління": "80 грн",
	"Миття голови": "100 грн"
};

"Послуги" можуть додаватися по ходу роботи:
services['Розбити скло'] = "200 грн";

Умови виконання ДЗ
створити метод price(), який обчислює та повертає загальну вартість "наданих послуг".
створити метод minPrice() - який повертає мінімальний price
створити метод maxPrice() - який повертає максимальний price
Будь ласка, надайте наступні дані для перевірки вашої роботи:
Створіть гілку js_homework5.
Додати туди ваше домашнє завдання
Вислати вашу гілку*/

var services = {
    "стрижка": "60 грн",
    "гоління": "80 грн",
    "Миття голови": "100 грн",
  
    price: function() {
        let totalPrice = 0;
        for (let service in this) {
            if (!isNaN(parseInt(this[service]))) {
                totalPrice += parseInt(this[service]);
            }
        }
        return totalPrice;
    },

    minPrice: function() {
        let minPrice = Infinity;
        for (let service in this) {
            if (!isNaN(parseInt(this[service]))) {
                minPrice = Math.min(minPrice, parseInt(this[service]));
            }
        }
        return minPrice;
    },
      
      maxPrice: function() {
        let maxPrice = -Infinity;
        for (let service in this) {
            if (!isNaN(parseInt(this[service]))) {
                maxPrice = Math.max(maxPrice, parseInt(this[service]));
            }
        }
        return maxPrice;
    }
}

console.log("Initial total price: " + services.price());
services['Розбити скло'] = "200 грн";
console.log("Price after adding a service: " + services.price());
console.log("Minimal price for a service: " + services.minPrice());
console.log("Maximum price for a service: " + services.maxPrice());