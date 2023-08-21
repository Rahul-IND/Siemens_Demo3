// Get all the div elements with class 'group'
var divLinks = document.querySelectorAll('.divLink');
// Add click event to the group div to navigate to the specified URL
divLinks.forEach((divLink) => {
    divLink.addEventListener('click', function () {
        var href = divLink.getAttribute('href');
        if (href) {
            window.location.href = href;
        }
    });
});