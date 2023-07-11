 const searchInput = document.querySelector('.searchBox');
 const searchButton = document.querySelector('.searchSubmit');

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

const ip = document.querySelector('.ip');
ip.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
      const searchText = ip.value.trim();
      if (searchText !== '') {
        console.log(searchText);
      }
    }
});