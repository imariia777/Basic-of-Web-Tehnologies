// Add an "active" class to the current link in the navigation based on the scroll position
window.addEventListener("scroll", function() {
    var sections = document.querySelectorAll('section');
    var scrollPosition = window.scrollY;

    sections.forEach(function (current, i) {
        var top = current.offsetTop;
        var bottom = top + current.offsetHeight;

        if (scrollPosition >= top && scrollPosition < bottom) {
            document.querySelector('#navbar a[href="#' + current.id + '"]').classList.add('active');
        } else {
            document.querySelector('#navbar a[href="#' + current.id + '"]').classList.remove('active');
        }
    });
});
function changePrice(product) {
let priceElement = document.getElementById("price" + product);
let currentPrice = parseInt(priceElement.innerText);

// Увеличиваем текущую цену на 1
let newPrice = currentPrice + 1;
priceElement.innerText = newPrice + ' шт.';
}

document.addEventListener('DOMContentLoaded', function () {
  // Обработчик изменения состояния радиокнопок
  document.querySelectorAll('input[name="training"]').forEach(function (radio) {
    radio.addEventListener('change', function () {
      // Обработка выбора
      console.log('Выбран тип тренировки:', this.value);
      // Добавьте здесь логику для дальнейшей обработки выбора
    });
  });
});
