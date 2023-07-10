const menu = document.getElementById("menu");
const mobileMenu = document.getElementById("mobileMenu");

menu.addEventListener("click", () => {
        mobileMenu.classList.toggle("displayMenu");
})

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



// Get the image element
var profileIcon = document.getElementById('profileIcon');

// Store the original source and the new source
var originalSrc = 'profile_icon_white.svg';
var newSrc = 'profile_icon_blue.svg';

// Add event listeners for hover and mouseout
profileIcon.addEventListener('mouseover', function () {
  profileIcon.src = newSrc;
});

profileIcon.addEventListener('mouseout', function () {
  profileIcon.src = originalSrc;
});
