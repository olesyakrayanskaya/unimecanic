const inputs = document.querySelectorAll('.form__input_sm');
const inputLogo = document.getElementById('file');
const filePlaceholder = document.getElementById('file-placeholder');
const select = document.getElementById('direct');
const form = document.querySelector('.form');

inputs.forEach((el) => {
  el.addEventListener('change', () => {
    el.nextElementSibling.style.display = 'none';
  });
});

inputLogo.addEventListener('change', () => {
  filePlaceholder.style.opacity = 0;
});

select.addEventListener('change', () => {
  select.nextElementSibling.style.display = 'none';
});

inputs.forEach((el) => {
  el.addEventListener('blur', () => {
    if (el.value === '') {
      el.nextElementSibling.style.display = 'block';
    }
  });
});

inputLogo.addEventListener('blur', () => {
  if (inputLogo.value === '') {
    filePlaceholder.style.opacity = 1;
  }
});

select.addEventListener('blur', () => {
  if (select.value === '') {
    select.nextElementSibling.style.display = 'block';
  }
});

form.addEventListener('reset', () => {
  inputs.forEach((el) => {
    el.nextElementSibling.style.display = 'block';
  });
  filePlaceholder.style.opacity = 1;
  select.nextElementSibling.style.display = 'block';
});
