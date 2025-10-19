/** Functions for Experience **/

function experience() {
  const targetElement = document.getElementById("experience");
  targetElement.classList.add("experience")
  if (targetElement) {
    targetElement.innerHTML = experienceContents();
  } else {
    console.error(`Experience issues? Good luck...`);
  }
}

function experienceContents() {
    experienceInfo = [
        ["ATO", "Graduate Security Engineer", "2025", "Present", [
          "Designing, implementing, and maintaining detection engineering systems and infastructure supporting security operations center teams."
        ]],
        ["ATO", "Graduate Business and Systems Analyst", "2025", "2025", [
          "Analyst for critical authentication and authorisation systems underpinning the ATO\'s authenticated online services."
        ]]
    ]

    inner = `<div class="timeline">\n`
    
    for (let i = 0; i < experienceInfo.length; i++) {
      inner += `<div class="entry">
            <div class="title">
              <h3>` + experienceInfo[i][2] + ` - ` + experienceInfo[i][3] + `</h3>
              <p>` + experienceInfo[i][0] + `</p>
            </div>
            <div class="body">
              <h3>` + experienceInfo[i][1] + `</h3>
              <p>
                <ul>`

      for (let j = 0; j < experienceInfo[i][4].length; j++) {
        inner += `<li>` + experienceInfo[i][4][j] + `</li>`
      }

      inner += `</ul>
              </p>
            </div>
          </div>\n`
    }
    
    inner += `</div>\n`

    return inner
}