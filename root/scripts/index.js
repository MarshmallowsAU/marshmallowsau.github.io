function getnavbar() {
    fetch("../subpages/navbar.html")
      .then((response) => response.text())
      .then((data) => {
        document.getElementById("nav-bar").innerHTML = data;
      });
}

function getfooter() {
    fetch("../subpages/footer.html")
      .then((response) => response.text())
      .then((data) => {
        document.getElementById("footer").innerHTML = data;
      });
}