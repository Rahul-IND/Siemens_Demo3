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

// For menu icon and cross icon
function toggleMenuIcon() {
  const menuIcon = document.getElementById("menu");

  menuIcon.classList.toggle("cross-icon");
  menuIcon.classList.toggle("rotate-180");
}



// Autoplay carousel logic
function autoplayCarousel() {
  const carousel = document.getElementById('carousel');
  let carouselWidth = carousel.offsetWidth;
  const carouselInner = carousel.querySelector('.carousel-inner');
  const carouselItems = carouselInner.getElementsByClassName('carousel-item');
  const totalItems = carouselItems.length;
  let currentItem = 0;

  function adjustCarouselWidth() {
    carouselWidth = carousel.offsetWidth;
    carouselInner.style.transform = `translateX(${currentItem * -carouselWidth}px)`;
  }

  window.addEventListener('resize', adjustCarouselWidth);

  setInterval(() => {
    const nextItem = (currentItem + 1) % totalItems;
    const transformValue = -1 * nextItem * carouselWidth;
    carouselInner.style.transform = `translateX(${transformValue}px)`;
    currentItem = nextItem;
  }, 3000);
}

// Run autoplay carousel when the page loads
window.addEventListener('load', autoplayCarousel);