// Get all the div elements with class 'group'
var groupDivs = document.querySelectorAll('.group');

// Store the original source and the new source
var originalSource = 'icons/arrow-light.svg';
var newSource = 'icons/arrow-dark.svg';

// Add event listeners to each group div
groupDivs.forEach((groupDiv) => {
    // Find the arrowIcon inside the current groupDiv
    var arrowIcon = groupDiv.querySelector('.arrow-icon');

    groupDiv.addEventListener('mouseover', function () {
        arrowIcon.src = newSource;
    });

    groupDiv.addEventListener('mouseout', function () {
        arrowIcon.src = originalSource;
    });
});

// Add click event to the group div to navigate to the specified URL
groupDivs.forEach((groupDiv) => {
    groupDiv.addEventListener('click', function () {
        var href = groupDiv.getAttribute('href');
        if (href) {
            window.location.href = href;
        }
    });
});
