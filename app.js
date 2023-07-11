 const searchInputs = document.querySelectorAll('.searchBox');
 const searchButton = document.querySelectorAll('.searchSubmit');
 
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