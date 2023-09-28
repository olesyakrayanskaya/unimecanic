const modal = document.getElementById('mod');
const closeModal = document.querySelector('.modal__close');
const openModal = document.querySelector('.open-form');

openModal.addEventListener('click', () => {
  modal.style.display = 'block';
});

closeModal.addEventListener('click', () => {
  modal.style.display = 'none';
});

window.addEventListener('click', (event) => {
  if (event.target == modal) {
    modal.style.display = 'none';
  }
});
