function scrollInto(element) {
    const ele = document.getElementById(element);
    ele.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
        inline: 'nearest',
    });
}

function darkModeToggle() {

}

function showDropDown() {
    if (document.getElementById("drop1").style.display == "block") {
        for (const id of ["drop1", "drop2", "drop3", "drop4", "drop5"]) {
            document.getElementById(id).style.display = "none";
        }
        document.getElementById("drop-parent").innerHTML = '<i class="bi bi-list"></i>';
        openDropdown();
    } else {
        for (const id of ["drop1", "drop2", "drop3", "drop4", "drop5"]) {
            document.getElementById(id).style.display = "block";
        }
        document.getElementById("drop-parent").innerHTML = '<i class="bi bi-x"></i>';
        closeDropdown();
    }
}

function darkModeToggle() {
    if (document.getElementById("darkmode").style.color == "black") {
        document.getElementById("darkmode").style.color = "white"
        document.getElementById("dark-mode-button").innerHTML = '<i class="bi bi-brightness-high-fill"></i>';
    } else {
        document.getElementById("darkmode").style.color = "black"
        document.getElementById("dark-mode-button").innerHTML = '<i class="bi bi-moon-fill"></i>';
    }
}

function closeDropdown() {
    const dropdowns = document.querySelectorAll('.float-dropdown-open');
    dropdowns.forEach(function(dropdown) {
        dropdown.classList.remove('float-dropdown-open');
        dropdown.className = 'float-dropdown';
    });
}

function openDropdown() {
    const dropdowns = document.querySelectorAll('.float-dropdown');
    dropdowns.forEach(function(dropdown) {
        dropdown.classList.remove('float-dropdown');
        dropdown.className = 'float-dropdown-open';
    });
}