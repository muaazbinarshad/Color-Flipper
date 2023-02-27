const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const btn = document.getElementById('btn');
const color = document.querySelector('.color');
btn.addEventListener('click', function () { //generate the random hex number

    let hexColor = "#";
    for (i = 0; i < 6; i++) {
        hexColor += hex[randomNumber()];
    }
    function randomNumber() {
        return Math.floor(Math.random() * hex.length);
    }
    //all 6 digits of hex code have been generated randomly
    //all the generated digits are concatenated
    document.body.style.backgroundColor = hexColor;
    color.textContent = hexColor;
})