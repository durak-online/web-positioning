/*
    Изменить элементу цвет и ширину можно вот так:

    const element = document.querySelector('.myElement');
    element.style.color = 'red';
    element.style.width = '300px';
*/

const openModalBtn = document.querySelector('.buttonOpenModal');
const closeModalBtn = document.querySelector('.buttonCloseModal');
const modalOverlay = document.querySelector('.modalOverlay');
const progressClip = document.querySelector('.progressClip');

const time = 3000;
let timerId = 0;

function setProgress(value) {
    progressClip.style.clipPath = 'inset(0 ' + (100 - value * 100) + '% 0 0)';
}

function animateProgressBar() {
    clearInterval(timerId);
    setProgress(0);

    let elapsed = 0;
    const interval = 30;

    timerId = setInterval(function () {
        elapsed += interval;

        const progress = Math.min(elapsed / time, 1);
        setProgress(progress);

        if (progress >= 1) {
            clearInterval(timerId);
        }
    }, interval);
}

openModalBtn.addEventListener('click', function () {
    modalOverlay.classList.add('active');
    animateProgressBar();
});

closeModalBtn.addEventListener('click', function () {
    modalOverlay.classList.remove('active');
    cancelAnimationFrame(animationId);
});
