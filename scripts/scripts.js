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
        document.getElementById("drop-parent").innerHTML = '<a style="color: inherit;"><i class="bi bi-list"></i></a>';
        closeDropdown();
        for (const id of ["drop1", "drop2", "drop3", "drop4", "drop5", "drop6"]) {
            document.getElementById(id).style.display = "none";
        }
    } else {
        for (const id of ["drop1", "drop2", "drop3", "drop4", "drop5", "drop6"]) {
            document.getElementById(id).style.display = "block";
        }
        document.getElementById("drop-parent").innerHTML = '<a style="color: inherit;"><i class="bi bi-x"></i></a>';
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
    const footer = document.getElementById("#bottom")
    if (body.className == "body-light") {
        body.classList.remove('body-light');
        body.className = 'body';
        footer.classList.remove('footer-light');
        footer.className = 'footer-dark';
        document.getElementById("avatar").innerHTML = '<img src="assets/Profile.jpg" alt="Avatar" class="avatar"></img>'
        document.getElementById("dark-mode-button").innerHTML = '<a style="color: inherit;"><i class="bi bi-brightness-high-fill"></i></a>';
        for (const xclass of ["float", "float-dropdown-parent", "float-dropdown", "float-dropdown-open", "container", "resume", "avatar", "footer-container"]) {
            removeInvertByClass(xclass);
        }
    } else {
        body.classList.remove('body');
        body.className = 'body-light';
        footer.classList.remove('footer-dark');
        footer.className = 'footer-light';
        document.getElementById("avatar").innerHTML = '<img src="assets/Profile.jpg" alt="Avatar" class="avatar-light"></img>'
        document.getElementById("dark-mode-button").innerHTML = '<a style="color: inherit;"><i class="bi bi-moon-fill"></i></a>';
        for (const xclass of ["float", "float-dropdown-parent", "float-dropdown", "float-dropdown-open", "container", "resume", "avatar", "footer-container"]) {
            invertElementsByClass(xclass);
        }
    }
}

function darkModeToggleProject() {
    const body = document.getElementById("main-body");
    const footer = document.getElementById("#bottom")
    if (body.className == "body-light") {
        body.classList.remove('body-light');
        body.className = 'body';
        footer.classList.remove('footer-light');
        footer.className = 'footer-dark';
        document.getElementById("dark-mode-button").innerHTML = '<a style="color: inherit;"><i class="bi bi-brightness-high-fill"></i></a>';
        for (const xclass of ["float", "float-dropdown-parent", "float-dropdown", "float-dropdown-open", "container", "resume", "avatar", "footer-container"]) {
            removeInvertByClass(xclass);
        }
    } else {
        body.classList.remove('body');
        body.className = 'body-light';
        footer.classList.remove('footer-dark');
        footer.className = 'footer-light';
        document.getElementById("dark-mode-button").innerHTML = '<a style="color: inherit;"><i class="bi bi-moon-fill"></i></a>';
        for (const xclass of ["float", "float-dropdown-parent", "float-dropdown", "float-dropdown-open", "container", "resume", "avatar", "footer-container"]) {
            invertElementsByClass(xclass);
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
        document.body.style.height = '4975px';
    } else {
        courses.style.display = "block";
        courses.classList.remove('study-collapsible');
        courses.className = 'study-collapsible-open';
        document.getElementById("show-hide-button").innerHTML = 'Hide Courses';
        document.body.style.height = '5445px';
    }
}

/** Image Gallery **/
function myFunction(imgs) {
    // Get the expanded image
    var expandImg = document.getElementById("expandedImg");
    // Get the image text
    var imgText = document.getElementById("imgtext");
    // Use the same src in the expanded image as the image being clicked on from the grid
    expandImg.src = imgs.src;
    // Use the value of the alt attribute of the clickable image as text inside the expanded image
    imgText.innerHTML = imgs.alt;
    // Show the container element (hidden with CSS)
    expandImg.parentElement.style.display = "block";
  }