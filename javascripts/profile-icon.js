
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
