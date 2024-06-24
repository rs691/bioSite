const menuToggle = document.querySelector('.toggle');
const main = document.querySelector('.showcase');

menuToggle.addEventListener('click', () => {
  menuToggle.classList.toggle('active');
    main.classList.toggle('active');
}
);
