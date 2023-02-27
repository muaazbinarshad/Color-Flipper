const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const btn = document.getElementById('btn');
const color = document.querySelector('.color');
btn.addEventListener('click', function () { //generate the random hex number
    randomNumber1 = Math.floor(Math.random() * hex.length);
    randomNumber2 = Math.floor(Math.random() * hex.length);
    randomNumber3 = Math.floor(Math.random() * hex.length);
    randomNumber4 = Math.floor(Math.random() * hex.length);
    randomNumber5 = Math.floor(Math.random() * hex.length);
    randomNumber6 = Math.floor(Math.random() * hex.length);
    //all 6 digits of hex code have been generated randomly
    randomColor = "#" + hex[randomNumber1] + hex[randomNumber2] + hex[randomNumber3] + hex[randomNumber4] + hex[randomNumber5] + hex[randomNumber6];
    //all the generated digits are concatenated
    document.body.style.background = randomColor;
    color.textContent = randomColor;
})