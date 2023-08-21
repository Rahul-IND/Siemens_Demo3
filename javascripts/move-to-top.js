// Function to scroll to the top of the page
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Show or hide the "Move to Top" button based on scroll position
function handleScroll() {
    var button = document.getElementById('moveToTopButton');
    if (window.pageYOffset > 200) {
        button.style.display = 'block';
    } else {
        button.style.display = 'none';
    }
}

// Add event listeners for scroll and button click
window.addEventListener('scroll', handleScroll);
document.getElementById('moveToTopButton').addEventListener('click', scrollToTop);