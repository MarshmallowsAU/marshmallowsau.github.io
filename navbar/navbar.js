/** Functions for Navigation Bar **/

function navbar() {
  const targetElement = document.getElementById("menu");
  if (targetElement) {
    targetElement.innerHTML = navbarContents();
  } else {
    console.error(`Navbar issues? Good luck...`);
  }
}

function navbarContents() {
    navbarLinks = [
        ["Home", "/"],
        ["Experience", "/experience"],
        ["Education", "/education"],
        ["Projects", "/projects"],
        ["Contact", "/contact"]
    ]

    inner = `
    <button type="button" id="menu-toggle" onclick="openNavMenu()">
      <span class="line"></span>
      <span class="line"></span>
      <span class="line"></span>  
    </button>
    <div id="menu-gradient"></div>
    <div id="menu-gradient-blur"></div>
    <div id="menu-arcs-wrapper">
      <svg id="menu-arcs">
        <circle class="menu-arc" cx="50%" cy="50%" r="10%"></circle>
        <circle class="menu-arc" cx="50%" cy="50%" r="17.5%"></circle>
        <circle class="menu-arc" cx="50%" cy="50%" r="25%"></circle>
        <circle class="menu-arc" cx="50%" cy="50%" r="32.5%"></circle>
        <circle class="menu-arc" cx="50%" cy="50%" r="40%"></circle>
        <circle class="menu-arc" cx="50%" cy="50%" r="47.5%"></circle>
      </svg>
    </div>
    <div id="menu-links">\n`
    
    for (let i = 0; i < navbarLinks.length; i++) {
        inner += `
      <a class="link" href="` + navbarLinks[i][1] + `">
        <span class="anchor"></span>  
        <span class="index">0` + i.toString() + `</span>\n
        <span class="label">` + navbarLinks[i][0] + `</span>  
      </a>\n`
    }

    inner += `
    </div>
    `

    return inner
}

function openNavMenu() {
  const button = document.getElementById("menu-toggle");

  const toggle = () => {
    document.body.classList.toggle("menu-toggled");
  }

  button.onclick = () => toggle();

  setTimeout(toggle, 200);
}