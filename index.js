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

const DURATION = 3000;
let animationId = 0;

function setProgress(value) {
    progressClip.style.clipPath = 'inset(0 ' + (100 - value * 100) + '% 0 0)';
}

function animateProgressBar() {
    cancelAnimationFrame(animationId);
    setProgress(0);
    const startTime = performance.now();

    function frame(currentTime) {
        const progress = Math.min((currentTime - startTime) / DURATION, 1);
        setProgress(progress);

        if (progress < 1) {
            animationId = requestAnimationFrame(frame);
        }
    }

    animationId = requestAnimationFrame(frame);
}

openModalBtn.addEventListener('click', function () {
    modalOverlay.classList.add('active');
    animateProgressBar();
});

closeModalBtn.addEventListener('click', function () {
    modalOverlay.classList.remove('active');
    cancelAnimationFrame(animationId);
});
