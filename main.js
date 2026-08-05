document.addEventListener("DOMContentLoaded", function () {

    lucide.createIcons();

    const menuToggle = document.getElementById("menuToggle");
    const navMenu = document.getElementById("navMenu");

    if (!menuToggle || !navMenu) return;

    menuToggle.addEventListener("click", function () {
        navMenu.classList.toggle("active");
    });

});
