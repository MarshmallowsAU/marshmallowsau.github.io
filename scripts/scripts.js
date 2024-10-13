/** Scroll to Section Script **/

function scrollInto(element) {
    const ele = document.getElementById(element);
    ele.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
        inline: 'nearest',
    });
}

/** Dropdown Toggle **/

function showDropDown() {
    if (document.getElementById("drop1").style.display == "block") {
        document.getElementById("drop-parent").innerHTML = '<a href="#nothing" style="color: inherit;"><i class="bi bi-list"></i></a>';
        closeDropdown();
        for (const id of ["drop1", "drop2", "drop3", "drop4", "drop5", "drop6"]) {
            document.getElementById(id).style.display = "none";
        }
    } else {
        for (const id of ["drop1", "drop2", "drop3", "drop4", "drop5", "drop6"]) {
            document.getElementById(id).style.display = "block";
        }
        document.getElementById("drop-parent").innerHTML = '<a href="#nothing" style="color: inherit;"><i class="bi bi-x"></i></a>';
        openDropdown();
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

/** Dark Mode Toggle **/

function darkModeToggle() {
    const body = document.getElementById("main-body");
    if (body.className == "body-light") {
        body.classList.remove('body-light');
        body.className = 'body';
        document.getElementById("dark-mode-button").innerHTML = '<a href="#nothing" style="color: inherit;"><i class="bi bi-brightness-high-fill"></i></a>';
        for (const id of ["float", "float-dropdown-parent", "float-dropdown", "float-dropdown-open", "container", "resume"]) {
            removeInvertByClass(id);
        }
    } else {
        body.classList.remove('body');
        body.className = 'body-light';
        document.getElementById("dark-mode-button").innerHTML = '<a href="#nothing" style="color: inherit;"><i class="bi bi-moon-fill"></i></a>';
        for (const id of ["float", "float-dropdown-parent", "float-dropdown", "float-dropdown-open", "container", "resume"]) {
            invertElementsByClass(id);
        }
    }
}

function invertElementsByClass(className) {
    const elements = document.getElementsByClassName(className);
    
    for (let i = 0; i < elements.length; i++) {
        elements[i].style.filter = "invert(100%)";
    }
}

function removeInvertByClass(className) {
    const elements = document.getElementsByClassName(className);
    
    for (let i = 0; i < elements.length; i++) {
        elements[i].style.filter = "invert(0%)";
    }
}


/** Courses Toggle **/

function toggleCourses() {
    const courses = document.getElementById("course-dropdown");
    if (courses.style.display == "block") {
        courses.classList.remove('study-collapsible-open');
        courses.className = 'study-collapsible';
        courses.style.display = "none";
        document.getElementById("show-hide-button").innerHTML = 'Show Courses';
        document.body.style.height = '5990px';
    } else {
        courses.style.display = "block";
        courses.classList.remove('study-collapsible');
        courses.className = 'study-collapsible-open';
        document.getElementById("show-hide-button").innerHTML = 'Hide Courses';
        document.body.style.height = '6460px';
    }
}