let page = document.querySelector('.page');
let themeButton = document.querySelector('.theme-button');

themeButton.onclick = function() {
  console.log('Кнопка нажата!');
  page.classList.remove('light-theme');
  page.classList.add('dark-theme');
};
