var question = prompt("pour continuer, indique ton prénom");
console.log("Nous allons jouer à un quizz sur le tableau des types de Pokémon :)")
let score = 0;
let sections = document.querySelectorAll("section")
let div = document.querySelectorAll("div")
// question 1
let element=sections[0].querySelector(".btn1")
let element2=sections[0].querySelector(".btn2")
let element3=sections[0].querySelector(".btn3")
let scoretest = document.querySelector("#scoretest")
btn1.addEventListener("click",() => {
    console.log("Correct! +1");
    score++;
    scoretest.innerText = score
    sections[0].innerHTML="<h3>Bonne réponse ദ്ദി ( ᵔ ᗜ ᵔ )</h3>"
    sections[0].classList.add("gg")
    });
btn2.addEventListener("click",() => {
        console.log("Faux... +0");
        sections[0].innerHTML="<h3>Mauvaise réponse ( • ᴖ • ｡ )</h3>"
        sections[0].classList.add("ff")
        });
btn3.addEventListener("click",() => {
            console.log("Faux... +0");
            sections[0].innerHTML="<h3>Mauvaise réponse ( • ᴖ • ｡ )</h3>"
            sections[0].classList.add("ff")
            });
// question 2
let element4=sections[1].querySelector(".btn4")
let element5=sections[1].querySelector(".btn5")
let element6=sections[1].querySelector(".btn6")
btn5.addEventListener("click",() => {
    console.log("Correct! +1");
    score++;
    scoretest.innerText = score
    sections[1].innerHTML="<h3>Bonne réponse ദ്ദി ( ᵔ ᗜ ᵔ )</h3>"
    sections[1].classList.add("gg")
    });
btn4.addEventListener("click",() => {
        console.log("Faux... +0");
        sections[1].innerHTML="<h3>Mauvaise réponse ( • ᴖ • ｡ )</h3>"
        sections[1].classList.add("ff")
        });
btn6.addEventListener("click",() => {
            console.log("Faux... +0");
            sections[1].innerHTML="<h3>Mauvaise réponse ( • ᴖ • ｡ )</h3>"
            sections[1].classList.add("ff")
            });
// question 3




























// // question 1
// var question = prompt ("1) Quel type est super efficace contre le type Combat ?");
//     if (question ==="vol"){
//     console.log("Correct! +1");
//     score++;
// } else {
//     console.log ("Faux... +0");
// }
// // question 2
// var question = prompt ("2) Quel type est totalement immunisé contre les attaques de type Normal ?");
//     if (question ==="spectre"){
//     console.log("Correct! +1");
//     score++;
// } else {
//     console.log ("Faux... +0");
// }
// // question 3
// var question = prompt ("3) Quel type est faible face aux attaques de type Fée ?");
//     if (question ==="dragon"){
//     console.log("Correct! +1");
//     score++;
// } else {
//     console.log ("Faux... +0");
// }
// // question 4
// var question = prompt ("4) Quel type a une double faiblesse aux attaques de type Roche ?");
//     if (question ==="glace"){
//     console.log("Correct! +1");
//     score++;
// } else {
//     console.log ("Faux... +0");
// }
// // question 5
// var question = prompt ("5) Quel type n’a aucune faiblesse en première génération ?");
//     if (question ==="spectre"){
//     console.log("Correct! +1");
//     score++;
// } else {
//     console.log ("Faux... +0");
// }
// // question 6
// var question = prompt ("6) Quel type est inefficace contre le type Spectre ?");
//     if (question ==="normal"){
//     console.log("Correct! +1");
//     score++;
// } else {
//     console.log ("Faux... +0");
// }
// // question 7
// var question = prompt ("7) Quel type résiste aux attaques de type Plante mais est faible face aux attaques de type Glace ?");
//     if (question ==="sol"){
//     console.log("Correct! +1");
//     score++;
// } else {
//     console.log ("Faux... +0");
// }
// // question 8
// var question = prompt ("8) Quel type est super efficace contre le type Vol ?");
//     if (question ==="électrique"){
//     console.log("Correct! +1");
//     score++;
// } else {
//     console.log ("Faux... +0");
// }
// // question 9
// var question = prompt ("9) Quel type est efficace contre le type Acier ?");
//     if (question ==="feu"){
//     console.log("Correct! +1");
//     score++;
// } else {
//     console.log ("Faux... +0");
// }
// // question 10
// var question = prompt ("10) Quel type est totalement inefficace contre le type Sol ?");
//     if (question ==="électrique"){
//     console.log("Correct! +1");
//     score++;
// } else {
//     console.log ("Faux... +0");
// } 
// alert("Ta note finale est de " + score + "/10.");
// --------------------
// div[2].innerHTML="<h1>Votre score: 1</h1>"