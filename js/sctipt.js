const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnOpenModal = document.querySelectorAll('.nav-link');

const openModal = function(){
    // console.log('Button clicked');
 //    you don't need the . for class list, just the selector 
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');

 }
 
 const closeModal = function() {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
}

btnOpenModal.addEventListener('click', openModal)
btnCloseModal.addEventListener('click', closeModal);