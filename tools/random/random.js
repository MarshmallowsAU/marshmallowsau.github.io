/** Functions for Projects **/

function randoms() {
  const targetElement = document.getElementById("randoms");
  targetElement.classList.add("randoms")
  if (targetElement) {
    targetElement.innerHTML = randomsContents();
  } else {
    console.error(`Randoms issues? Good luck...`);
  }
}

function randomsContents() {
    randomsInfo = [
      ["", "Apex Legends Random Character and Loadout", "~", "",
        [
          "Gives you a random character and / or weapon loadout!"
        ], [
          "/tools/random/apex"
        ]
      ],
      ["", "Valorant Random Character", "~", "",
        [
          "Gives you a random character for yourself and up to four other people!"
        ], [
          "/tools/random/valorant"
        ]
      ]
    ]

    inner = `<div class="timeline">\n`
    
    for (let i = 0; i < randomsInfo.length; i++) {
      inner += `<div class="entry">
            <div class="title">
              <h3>` + randomsInfo[i][2] + `</h3>
              <p>` + randomsInfo[i][0] + `</p>
            </div>
            <div class="body">
              <h3>` + randomsInfo[i][1] + `</h3>
              <p>` + randomsInfo[i][3] + `</p>
              <p>
                <ul>`

      for (let j = 0; j < randomsInfo[i][4].length; j++) {
        inner += `<li>` + randomsInfo[i][4][j] + `</li>`
      }

      for (let k = 0; k < randomsInfo[i][5].length; k++) {
        inner += `<br><a href="` + randomsInfo[i][5][k] + `" target="_blank"><button class="button">Click Me!</button></a>`
      }

      inner += `</ul>
              </p>
            </div>
          </div>\n`
    }
    
    inner += `</div>\n`

    return inner
}