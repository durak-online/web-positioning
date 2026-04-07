/*
    Изменить элементу цвет и ширину можно вот так:

    const element = document.querySelector('.myElement');
    element.style.color = 'red';
    element.style.width = '300px';
*/

const openModalBtn = document.getElementsByClassName('buttonOpenModal')[0];
const closeModalBtn = document.getElementsByClassName('buttonCloseModal')[0];
const modalOverlay = document.getElementsByClassName('modalOverlay')[0];

openModalBtn.addEventListener('click', function () {
    modalOverlay.classList.add('active');
});

closeModalBtn.addEventListener('click', function () {
    modalOverlay.classList.remove('active');
});