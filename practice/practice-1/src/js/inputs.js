const logoClose = document.getElementById('logo-close');
const logoFileIcon = document.getElementById('icon-file');
const inputLogo = document.getElementById('file');
const filePlaceholder = document.getElementById('file-placeholder');
const logo = document.getElementById('logo');
const logoText = document.querySelector('.logo__text');
import logoImg from '../assets/images/logo.svg';

logoClose.addEventListener('click', () => {
  inputLogo.value = '';
  filePlaceholder.style.opacity = 1;
  logo.src = logoImg;
  logoText.style.display = 'inline-block';
  logoFileIcon.style.display = 'block';
});

inputLogo.addEventListener('change', (event) => {
  const files = event.target.files;
  const countFiles = files.length;
  if (!countFiles) {
    alert('Не выбран файл!');
    return;
  }
  const selectedFile = files[0];
  if (!/^image/.test(selectedFile.type)) {
    alert('Выбранный файл не является изображением!');
    return;
  }
  const reader = new FileReader();
  reader.readAsDataURL(selectedFile);
  reader.addEventListener('load', (event) => {
    logo.src = event.target.result;
    logo.alt = selectedFile.name;
    logo.textContent = selectedFile.name;
    logo.style.width = '164px';
    logo.style.height = '164px';
    logo.style.borderRadius = '50%';
    logo.style.objectFit = 'cover';
    logo.style.objectPosition = 'center';
  });
  logoText.style.display = 'none';
  logoFileIcon.style.display = 'none';
});
