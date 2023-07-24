const searchInputs = document.querySelectorAll('.searchBox');
const searchButtons = document.querySelectorAll('.searchSubmit');

searchInputs.forEach((searchInput) => {
  searchInput.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
      const searchText = searchInput.value.trim();
      if (searchText !== '') {
        const query = encodeURIComponent(searchText);
        const searchUrl = `https://www.google.com/search?q=${query}`;
        window.open(searchUrl, '_blank');
        searchInput.value = ''; // Clear the search box
      }
    }
  });
});
searchButtons.forEach((searchButton) => {
  searchButton.addEventListener('click', function (event) {
    event.preventDefault(); // Prevent the default form submission

    const searchText = searchButton.previousElementSibling.value.trim();
    if (searchText !== '') {
      const query = encodeURIComponent(searchText);
      const searchUrl = `https://www.google.com/search?q=${query}`;
      window.open(searchUrl, '_blank');
      searchButton.previousElementSibling.value = ''; // Clear the search box
    }
  });
});



