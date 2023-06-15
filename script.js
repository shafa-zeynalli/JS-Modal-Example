'use strict';
let btnsOpenModal = document.querySelectorAll('.show-modal');
let modal = document.querySelector('.modal');
let btncloseModal = document.querySelector('.close-modal');
let overlay = document.querySelector('.overlay');

const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  overlay.classList.add('hidden');
  modal.classList.add('hidden');
};

for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener('click', openModal);

btncloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function(e){
    console.log(e);
    if(e.key === 'Escape' && !modal.classList.contains('hidden')){
        closeModal();
    }
})
