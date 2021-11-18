const prev = document.getElementById('btn-prev'); //получааем кнопку назад
const next = document.getElementById('btn-next'); //получааем кнопку вперед
const slides = document.querySelectorAll('.slide'); //получааем коллекцию по классу
const dots = document.querySelectorAll('.dot'); //получааем коллекцию по классу

let index = 0; // создаем переменную для контроля слайдов

const activeSlide = n => { // функция принимает номер слайда
    for (let slide of slides) { // пробегаем по узлам
        slide.classList.remove('active'); // и у каждого удаляем класс active
    }
    slides[n].classList.add('active'); // текущему слайту добавляем класс active
}

const activeDot = n => {
    for (let dot of dots) {
        dot.classList.remove('active');
    }
    dots[n].classList.add('active');
}

const currentSlide = all => {
    activeSlide(index);
    activeDot(index);
}

function prevSlide() { // переход слайдов назад
    if (index == 0) { // если текущий индекс == первому слайду
        index = slides.length - 1; // присвоить индекс последнего слайда
        currentSlide(index); // вызываем функции и передаем им значение измененного индекса
    } else {
        index--;
        currentSlide(index); 
    }
}

function nextSlide() { // переход слайдов вперед
    if (index == slides.length - 1) { // если текущий индекс == последнему слайду
        index = 0; // присвоить индекс первого слайда[0]
        currentSlide(index); // вызываем функции и передаем им значение измененного индекса
    } else {
        index++;
        currentSlide(index);
    }
}   

dots.forEach((item, indexDot) => {
    item.addEventListener('click', () => {
        index = indexDot;
        currentSlide(index);
    })
})

prev.addEventListener('click', prevSlide); // прослушиваем событие и передаем событие функции
next.addEventListener('click', nextSlide); // прослушиваем событие и передаем событие функции

//добавил авто преключение слайдов каждые 2 сек.
let timerId = setTimeout(function nextSlide() {
    if (index == slides.length - 1) {
        index = 0;
        currentSlide(index);
    } else {
        index++;
        currentSlide(index);
}; timerId = setTimeout(nextSlide, 2000);}, 2000);
