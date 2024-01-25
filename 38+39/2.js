
  let isOpen = false;

  function toggleSearch() {
    const searchIcon = document.getElementById('searchIcon');
    const searchInput = document.getElementById('searchInput');

    isOpen = !isOpen;

    if (isOpen) {
      searchIcon.style.transform = 'scale(0)';
      searchInput.style.width = '150px';
      searchInput.style.opacity = '1';
      searchInput.focus();
    } else {
      searchIcon.style.transform = 'scale(1)';
      searchInput.style.width = '0';
      searchInput.style.opacity = '0';
      searchInput.value = '';
    }
  }
