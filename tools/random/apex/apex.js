function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); 
}

function roll() {
    const resultDiv = document.getElementById("results");
    resultDiv.innerHTML = "";

    const characterChecked = document.getElementById("characterCheckbox").checked;
    const loadoutChecked = document.getElementById("loadoutCheckbox").checked;

    let char = getRandomIntInclusive(1, 27);
    let first = getRandomIntInclusive(1, 29);
    let second = getRandomIntInclusive(1, 29);

    while (first == second) {
        second = getRandomIntInclusive(1, 29);
    }

    if (characterChecked & loadoutChecked) {
        resultDiv.innerHTML = `<div class="row">
          <div class="column-chr">
            <div id="char_results"><img src="/tools/random/apex/assets/characters/char${char}.png"</img></div>
          </div>
          <div class="column-wep">
            <div class="column-wep-row">
                <div id="wep1_results"><img src="/tools/random/apex/assets/weapons/wep${first}.png"</img></div>
            </div>
            <div class="column-wep-row">
                <div id="wep2_results"><img src="/tools/random/apex/assets/weapons/wep${second}.png"</img></div>
            </div>
          </div>
        </div`
    } else if (characterChecked) {
        resultDiv.innerHTML = `<div class="row">
            <div class="column-full-chr">
                <div id="char_results"><img src="/tools/random/apex/assets/characters/char${char}.png"</img></div>
            </div>
          </div>`
    } else if (loadoutChecked) {
        resultDiv.innerHTML = `<div class="row-full-wep">
            <div class="column-full-wep">
                <div id="wep1_results"><img src="/tools/random/apex/assets/weapons/wep${first}.png"</img></div>
            </div>
            <div class="column-full-wep">
                <div id="wep2_results"><img src="/tools/random/apex/assets/weapons/wep${second}.png"</img></div>
            </div>
        </div>`
    }
}