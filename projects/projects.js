/** Functions for Projects **/

function projects() {
  const targetElement = document.getElementById("projects");
  targetElement.classList.add("projects")
  if (targetElement) {
    targetElement.innerHTML = projectsContents();
  } else {
    console.error(`Projects issues? Good luck...`);
  }
}

function projectsContents() {
    projectsInfo = [
        ["Personal", "LDAP Query and Filter Builder", "2026", "Creator", [
          "Quick and easy DOM tree based method of creating LDAP queries and filters. All based in your browser, and all built with HTML, CSS, and JS.",
          "Take a look: <a href=\"/projects/ldapbuilder\" target=\"_blank\" class=\"clickable\">Click Me!</a>"
        ]],

        ["Personal", "Personal Website", "2025", "The website you're on right now!", [
          "This is my personal website written up in pure HTML, CSS and JS.",
          "Back to home: <a href=\"/\" target=\"_blank\" class=\"clickable\">Click Me!</a>"
        ]],

        ["COMP3900 UNSW", "ICPC Connect", "2024", "SCRUM Master", [
          "ICPC Connect is a centralised system to both register for and manage ICPC Contests across Universities within the South Pacific."
        ]],
        
        ["COMP6447 UNSW", "Binary Vulnerability fuzzer", "2024", "Project Lead", [
          "A black box fuzzer developed to identify vulnerabilities in binaries by generating and mutating inputs to trigger incorrect program states such as crashes and invalid memory writes."
        ]],
        
        ["Personal", "Intrusion", "2024", "Lead Backend and Game Designer", [
          "Intrusion is web based card game that models different cyber-attack and defense scenarios on a vulnerable system. It aims to be a fun, interactive, and easy to understand intoduction to Cyber Security."
        ]]
    ]

    inner = `<div class="timeline">\n`
    
    for (let i = 0; i < projectsInfo.length; i++) {
      inner += `<div class="entry">
            <div class="title">
              <h3>` + projectsInfo[i][2] + `</h3>
              <p>` + projectsInfo[i][0] + `</p>
            </div>
            <div class="body">
              <h3>` + projectsInfo[i][1] + `</h3>
              <p>` + projectsInfo[i][3] + `</p>
              <p>
                <ul>`

      for (let j = 0; j < projectsInfo[i][4].length; j++) {
        inner += `<li>` + projectsInfo[i][4][j] + `</li>`
      }

      inner += `</ul>
              </p>
            </div>
          </div>\n`
    }
    
    inner += `</div>\n`

    return inner
}