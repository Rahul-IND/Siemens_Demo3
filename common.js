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
var originalSrc = 'icons/profile-icon-white.svg';
var newSrc = 'icons/profile-icon-blue.svg';

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



// WebPage animations
function reveal() {
    var reveals = document.querySelectorAll(".reveal");

    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 50;

        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");

            // Check if it's a child div with the specified classes
            var childDivs = reveals[i].querySelectorAll(".max-md\\:reveal, .max-md\\:fade-bottom");
            for (var j = 0; j < childDivs.length; j++) {
                childDivs[j].classList.add("active");
            }
        } else {
            reveals[i].classList.remove("active");
        }
    }
}

window.addEventListener("scroll", reveal);

// JavaScript
document.addEventListener("DOMContentLoaded", function () {
    var revealElements = document.querySelectorAll(".revealLoad");

    function revealElementsOnLoad() {
        revealElements.forEach(function (element) {
            element.classList.add("active");
        });
    }

    // Wait for a short delay before adding the active class to allow initial hiding
    setTimeout(revealElementsOnLoad, 50);
});






