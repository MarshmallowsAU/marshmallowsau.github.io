function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); 
}

function getUniqueNumbers(num, min, max) {
    const numbers = new Set();

    while (numbers.size < num) {
        const randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
        numbers.add(randomNum);
    }

    return Array.from(numbers);
}

function roll() {
    num = parseInt(document.getElementById("sliderValue").textContent)
    width = 100 / num;
    nums = getUniqueNumbers(num, 1, 28)

    const resultDiv = document.getElementById("results");
    inner = "<div class=\"valorant-row\">";

    for (i = 0; i < num; i++) {
        inner += `<div class="valorant-column-chr" style="width: ${width}%">
                <img src="/tools/random/valorant/assets/characters/char${nums[i]}.png"></img></div>`
    }

    inner += "</div>"

    resultDiv.innerHTML = inner;
}

function handleSliderChange(value) {
      document.getElementById("sliderValue").textContent = value;
}