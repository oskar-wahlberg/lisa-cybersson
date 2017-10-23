// Contains the function for checking if the user has scrolled down or not, if so show a button that makes the page scroll back to the top.

window.onscroll = function() { ScrollFunction() };

function ScrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("bttb").style.display = "block";
    } else {
        document.getElementById("bttb").style.display = "none";
    }
}

function ScrollToTop() {
    document.body.scrollTop = 0; // For Chrome, Safari and Opera
    document.documentElement.scrollTop = 0; // For IE and Firefox
}