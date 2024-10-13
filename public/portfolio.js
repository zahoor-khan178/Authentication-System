
var typed = new Typed('#element', {
    strings: ['Video Editor', 'Graphic Designer', 'Digital Marketer', 'Web Developer'],
    typeSpeed: 60,
});





function showDropdown() {
    document.querySelector(".dropd").style.display = "inline-block";
}

// Function to hide the dropdown
function hideDropdown() {
    document.querySelector(".dropd").style.display = "none";
}

// Event listeners
const proElement = document.getElementById("pro");
const dropdown = document.querySelector(".dropd");

proElement.addEventListener("mouseenter", showDropdown);
proElement.addEventListener("mouseleave", hideDropdown);


dropdown.addEventListener("mouseenter", showDropdown);
dropdown.addEventListener("mouseleave", hideDropdown);
