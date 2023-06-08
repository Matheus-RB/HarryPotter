window.addEventListener('DOMContentLoaded', function() {
  const menu = document.querySelector('.menu');
  const toggleMenu = document.querySelector('.toggleMenu');
  const toggleButton = document.querySelector('.toggleButton');

  function toggleMenuDisplay() {
    toggleMenu.style.display = toggleMenu.style.display === 'none' ? 'block' : 'none';
  }

  function handleResize() {
    if (window.innerWidth < 550) {
      menu.style.display = 'none';
      toggleButton.style.display = 'block';
    } else {
      menu.style.display = 'flex';
      toggleButton.style.display = 'none';
      toggleMenu.style.display = 'none';
    }
  }

  toggleButton.addEventListener('click', toggleMenuDisplay);
  window.addEventListener('resize', handleResize);

  handleResize(); // Chamada inicial para definir a exibição correta do menu
});
