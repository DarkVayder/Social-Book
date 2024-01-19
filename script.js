var settingsmenu = document.querySelector(".settings-menu");
var darkbtn = document.getElementById("dark-btn");

function settingsMenuToggle() {
    settingsmenu.classList.toggle("settings-menu-height");
}

darkbtn.onclick = function() {
    darkbtn.classList.toggle("dark-btn-on");
    document.body.classList.toggle("dark-theme");

    if (localStorage.getItem("theme") === "light") {
        localStorage.setItem("theme", "dark");
    } else {
        localStorage.setItem("theme", "light");
    }
};

if (localStorage.getItem("theme") === "light") {
    darkbtn.classList.remove("dark-btn-on");
    document.body.classList.remove("dark-theme");
} else if (localStorage.getItem("theme") === "dark") {
    darkbtn.classList.add("dark-btn-on");
    document.body.classList.add("dark-theme");
} else {
    localStorage.setItem("theme", "light");
}

document.addEventListener("DOMContentLoaded", function () {
    const body = document.getElementById("body");
    const leftSidebar = document.querySelector(".left-sidebar");
    const rightSidebar = document.querySelector(".right-sidebar");

    function toggleSidebar() {
        leftSidebar.classList.toggle("sidebar-hidden");
        rightSidebar.classList.toggle("sidebar-hidden");
    }

    body.addEventListener("click", function (event) {
        if (event.target.id === "sidebar-toggle") {
            toggleSidebar();
        } else {
            if (!leftSidebar.classList.contains("sidebar-hidden")) {
                leftSidebar.classList.add("sidebar-hidden");
            }
            if (!rightSidebar.classList.contains("sidebar-hidden")) {
                rightSidebar.classList.add("sidebar-hidden");
            }
        }
    });
});
