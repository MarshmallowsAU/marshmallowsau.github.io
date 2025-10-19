/** Functions for Contact **/

function contact() {
  const targetElement = document.getElementById("contact");
  targetElement.classList.add("contact")
  if (targetElement) {
    targetElement.innerHTML = contactContents();
  } else {
    console.error(`Contact issues? Good luck...`);
  }
}

function contactContents() {
    contactLinks = [
        ["https://www.linkedin.com/in/jerry--yang/", "bi bi-linkedin"],
        ["https://github.com/MarshmallowsAU", "bi bi-github"],
        ["https://www.instagram.com/jerry._.yang/", "bi bi-instagram"]
    ]

    inner = "<p>\n"

    for (let i = 0; i < contactLinks.length; i++) {
      inner += `<a href="` + contactLinks[i][0] + `" target="_blank"><i class="` + contactLinks[i][1] + `"></i></a>\n`
    }

    inner += "</p>\n"

    return inner
}