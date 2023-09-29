const logoClose = document.getElementById('logo-close');
const inputLogo = document.getElementById('file');
const filePlaceholder = document.getElementById('file-placeholder');

logoClose.addEventListener('click', () => {
  inputLogo.value = '';
  filePlaceholder.style.opacity = 1;
});
