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
      ["", "Random Stuff", "~", "",
        [
          "A bunch of random things on this site for random purposes."
        ], [
          "/tools/random"
        ]
      ],
      ["Personal", "LDAP Query and Filter Builder", "2026", "",
        [
          "Quick and easy DOM tree based method of creating LDAP queries and filters. All based in your browser, and all built with HTML, CSS, and JS."
        ], [
          "/tools/ldapbuilder"
        ]
      ],
      ["Personal", "Personal Website", "2025", "",
        [
          "This is my personal website written up in pure HTML, CSS and JS."
        ], [
          "/"
        ]
      ], 
      ["COMP3900 UNSW", "ICPC Connect", "2024", "SCRUM Master",
        [
          "ICPC Connect is a centralised system to both register for and manage ICPC Contests across Universities within the South Pacific."
        ], [
        ]
      ],
      
      ["COMP6447 UNSW", "Binary Vulnerability Fuzzer", "2024", "Project Lead",
        [
          "A black box fuzzer developed to identify vulnerabilities in binaries by generating and mutating inputs to trigger incorrect program states such as crashes and invalid memory writes."
        ], [
        ]
      ],
      
      ["Personal", "Intrusion", "2024", "Lead Backend and Game Designer",
        [
          "Intrusion is web based card game that models different cyber-attack and defense scenarios on a vulnerable system. It aims to be a fun, interactive, and easy to understand intoduction to Cyber Security."
        ], [

        ]
      ]
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

      for (let k = 0; k < projectsInfo[i][5].length; k++) {
        inner += `<br><a href="` + projectsInfo[i][5][k] + `" target="_blank"><button class="button">Click Me!</button></a>`
      }

      inner += `</ul>
              </p>
            </div>
          </div>\n`
    }
    
    inner += `</div>\n`

    return inner
}