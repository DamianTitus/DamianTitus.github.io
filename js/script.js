$(document).ready(function () {
    // Check if user previously chose dark mode
    if (localStorage.getItem("theme") === "dark") {
        $("body").addClass("dark");
        $("#themeToggle i").removeClass("fa-moon").addClass("fa-sun");
    }

    // Toggle dark mode on button click
    $("#themeToggle").click(function () {
        $("body").toggleClass("dark");

        if ($("body").hasClass("dark")) {
            localStorage.setItem("theme", "dark");
            $("#themeToggle i").removeClass("fa-moon").addClass("fa-sun");
        } else {
            localStorage.setItem("theme", "light");
            $("#themeToggle i").removeClass("fa-sun").addClass("fa-moon");
        }
    });
});