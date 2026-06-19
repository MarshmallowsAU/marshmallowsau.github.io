/** Functions for Education **/

function education() {
  let targetElement = document.getElementById("education");
  targetElement.classList.add("education")
  if (targetElement) {
    targetElement.innerHTML = educationContents();
  } else {
    console.error(`Education issues? Good luck...`);
  }
}

function educationContents() {
    educationInfo = [
        ["University of New South Wales", "Bsc Computer Science (Security Engineering)", "2022", "2024", ["Grade: Distinction Average"]],
        ["Australian National University", "ANU Extension Program (Engineering)", "2020", "2021", ["Grade: 92.74"]],
        ["Dickson College", "BSSS Senior Secondary Certificate", "2020", "2021", ["ATAR: 98.15"]]
    ]

    certificationsInfo = [
        ["Centri (Security Blue Team)", "Blue Team Level One", "", "Mar 2026", ["Score: 95%"]],
        ["Coursera", "Google Cybersecurity Specialization", "", "Sep 2023", ["Score: N/A"]]
    ]

    inner = `<div class="timeline">\n<br>\n<h2>Tertiary</h2>\n<div class="divider-line">\n`
    
    for (let i = 0; i < educationInfo.length; i++) {
      inner += `<div class="entry">
            <div class="title">
              <h3>` + educationInfo[i][2] + `${educationInfo[i][2] == "" ? "" : " - "}` + educationInfo[i][3] + `</h3>
              <p>` + educationInfo[i][0] + `</p>
            </div>
            <div class="body">
              <h3>` + educationInfo[i][1] + `</h3>
              <p>
                <ul>`

      for (let j = 0; j < educationInfo[i][4].length; j++) {
        inner += `<li>` + educationInfo[i][4][j] + `</li>`
      }

      inner += `</ul>
              </p>
            </div>
          </div>\n`
    }
    
    inner += `</div>\n</div>\n`

    inner += `<div class="timeline">\n<br>\n<h2>Certifications</h2>\n<div class="divider-line">\n`

    for (let i = 0; i < certificationsInfo.length; i++) {
      inner += `<div class="entry">
            <div class="title">
              <h3>` + certificationsInfo[i][2] + `${certificationsInfo[i][2] == "" ? "" : " - "}` + certificationsInfo[i][3] + `</h3>
              <p>` + certificationsInfo[i][0] + `</p>
            </div>
            <div class="body">
              <h3>` + certificationsInfo[i][1] + `</h3>
              <p>
                <ul>`

      for (let j = 0; j < certificationsInfo[i][4].length; j++) {
        inner += `<li>` + certificationsInfo[i][4][j] + `</li>`
      }

      inner += `</ul>
              </p>
            </div>
          </div>\n`
    }

    inner += `</div>\n</div>\n`

    return inner
}
