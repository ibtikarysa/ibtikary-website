document.addEventListener("DOMContentLoaded", function () {

    lucide.createIcons();

    const menuToggle = document.getElementById("menuToggle");
    const navMenu = document.getElementById("navMenu");

    if (!menuToggle || !navMenu) return;

    menuToggle.addEventListener("click", function () {
        navMenu.classList.toggle("active");
    });
// Hide menu after clicking any menu item
document.querySelectorAll("#navMenu a").forEach(function (link) {
    link.addEventListener("click", function () {
        navMenu.classList.remove("active");
    });
});

// Hide menu when clicking outside
document.addEventListener("click", function (event) {
    if (
        !navMenu.contains(event.target) &&
        !menuToggle.contains(event.target)
    ) {
        navMenu.classList.remove("active");
    }
});
});
