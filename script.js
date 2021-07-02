const images = document.querySelectorAll('.slider .slider-line img');
const sliderLine = document.querySelector('.slider-line');
let count = 0; // переменная, которая ссылается на активный слайдер
let width;

// при старте страницы рассчитываем ширину рабочей области и изменяем под нее слайдер
function init() {
   console.log('resize');
   width = document.querySelector('.slider').offsetWidth;
   // делаем ширину блока .slider-line раавной ширине .slider умноженного на количество изображений
   sliderLine.style.width = width*images.length + 'px';
   // все изображения делаем шириной равной ширине слайдера
   images.forEach(item => {
      item.style.width = width + 'px';
      item.style.height = 'auto'; // как только мы изменим ширину, высота будет подтягиваться автоматически
   });
   rollSlider(); // теперь если после листания размер экрана изменится, смещение автоматически исправится (пересчитываем ширину)
}

// вешаем событие, которое будет срабатывать при изменении размеров картинки и вызывать init()
window.addEventListener('resize', init);
init();

document.querySelector('.slider-prev').addEventListener('click', function () {
   count--;
   if (count < 0) {
      count = images.length - 1;
   }
   rollSlider();
});

document.querySelector('.slider-next').addEventListener('click', function () {
   count++;
   if (count >= images.length) {
      count = 0;
   }
   rollSlider();
});

// функция, которая отвечает за рисование смещения
function rollSlider() {
   sliderLine.style.transform = 'translate(-'+count*width+'px)';
}