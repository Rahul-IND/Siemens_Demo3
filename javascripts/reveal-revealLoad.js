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
