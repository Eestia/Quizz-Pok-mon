var question = prompt("pour continuer, indique ton prénom");
console.log("Nous allons jouer à un quizz sur le tableau des types de Pokémon :)")
let score = 0;
let pseudo = document.querySelector("#pseudo")
pseudo.innerText = question
let sections = document.querySelectorAll("section")
let div = document.querySelectorAll("div")
// let vrai = new Audio("vrai.mp3");
// let faux = new Audio("faux.mp3");
// question 1
let element=sections[0].querySelector(".btn1")
let element2=sections[0].querySelector(".btn2")
let element3=sections[0].querySelector(".btn3")
let scoretest = document.querySelector("#scoretest")
btn1.addEventListener("click",() => {
    console.log("Correct! +1");
    score++;
    scoretest.innerText = score
    // vrai.play();
    sections[0].innerHTML="<h3>Bonne réponse ദ്ദി ( ᵔ ᗜ ᵔ )</h3>"
    sections[0].classList.add("gg")
    if (sections[1]) {
        sections[1].hidden = !sections[1].hidden;
    }
    });
btn2.addEventListener("click",() => {
        console.log("Faux... +0");
        // faux.play();
        sections[0].innerHTML="<h3>Mauvaise réponse ( • ᴖ • ｡ )</h3>"
        sections[0].classList.add("ff")
        if (sections[1]) {
            sections[1].hidden = !sections[1].hidden;
        }
        });
btn3.addEventListener("click",() => {
            console.log("Faux... +0");
        // faux.play();
            sections[0].innerHTML="<h3>Mauvaise réponse ( • ᴖ • ｡ )</h3>"
            sections[0].classList.add("ff")
            if (sections[1]) {
                sections[1].hidden = !sections[1].hidden;
            }
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
    if (sections[2]) {
        sections[2].hidden = !sections[2].hidden;
    }
    });
btn4.addEventListener("click",() => {
        console.log("Faux... +0");
        sections[1].innerHTML="<h3>Mauvaise réponse ( • ᴖ • ｡ )</h3>"
        sections[1].classList.add("ff")
        if (sections[2]) {
            sections[2].hidden = !sections[2].hidden;
        }
        });
btn6.addEventListener("click",() => {
            console.log("Faux... +0");
            sections[1].innerHTML="<h3>Mauvaise réponse ( • ᴖ • ｡ )</h3>"
            sections[1].classList.add("ff")
            if (sections[2]) {
                sections[2].hidden = !sections[2].hidden;
            }
            });
// question 3
let element7=sections[2].querySelector(".btn7")
let element8=sections[2].querySelector(".btn8")
let element9=sections[2].querySelector(".btn9")
btn7.addEventListener("click",() => {
    console.log("Correct! +1");
    score++;
    scoretest.innerText = score
    sections[2].innerHTML="<h3>Bonne réponse ദ്ദി ( ᵔ ᗜ ᵔ )</h3>"
    sections[2].classList.add("gg")
    });
btn8.addEventListener("click",() => {
        console.log("Faux... +0");
        sections[2].innerHTML="<h3>Mauvaise réponse ( • ᴖ • ｡ )</h3>"
        sections[2].classList.add("ff")
        });
btn9.addEventListener("click",() => {
            console.log("Faux... +0");
            sections[2].innerHTML="<h3>Mauvaise réponse ( • ᴖ • ｡ )</h3>"
            sections[2].classList.add("ff")
            });
// question 4
let element10=sections[3].querySelector(".btn10")
let element11=sections[3].querySelector(".btn11")
let element12=sections[3].querySelector(".btn12")
btn12.addEventListener("click",() => {
    console.log("Correct! +1");
    score++;
    scoretest.innerText = score
    sections[3].innerHTML="<h3>Bonne réponse ദ്ദി ( ᵔ ᗜ ᵔ )</h3>"
    sections[3].classList.add("gg")
    });
btn11.addEventListener("click",() => {
        console.log("Faux... +0");
        sections[3].innerHTML="<h3>Mauvaise réponse ( • ᴖ • ｡ )</h3>"
        sections[3].classList.add("ff")
        });
btn10.addEventListener("click",() => {
            console.log("Faux... +0");
            sections[3].innerHTML="<h3>Mauvaise réponse ( • ᴖ • ｡ )</h3>"
            sections[3].classList.add("ff")
            });
// question 5
let element13=sections[4].querySelector(".btn13")
let element14=sections[4].querySelector(".btn14")
let element15=sections[4].querySelector(".btn15")
btn15.addEventListener("click",() => {
    console.log("Correct! +1");
    score++;
    scoretest.innerText = score
    sections[4].innerHTML="<h3>Bonne réponse ദ്ദി ( ᵔ ᗜ ᵔ )</h3>"
    sections[4].classList.add("gg")
    });
btn14.addEventListener("click",() => {
        console.log("Faux... +0");
        sections[4].innerHTML="<h3>Mauvaise réponse ( • ᴖ • ｡ )</h3>"
        sections[4].classList.add("ff")
        });
btn13.addEventListener("click",() => {
            console.log("Faux... +0");
            sections[4].innerHTML="<h3>Mauvaise réponse ( • ᴖ • ｡ )</h3>"
            sections[4].classList.add("ff")
            });
// question 6
let element16=sections[5].querySelector(".btn16")
let element17=sections[5].querySelector(".btn17")
let element18=sections[5].querySelector(".btn18")
btn16.addEventListener("click",() => {
    console.log("Correct! +1");
    score++;
    scoretest.innerText = score
    sections[5].innerHTML="<h3>Bonne réponse ദ്ദി ( ᵔ ᗜ ᵔ )</h3>"
    sections[5].classList.add("gg")
    });
btn17.addEventListener("click",() => {
        console.log("Faux... +0");
        sections[5].innerHTML="<h3>Mauvaise réponse ( • ᴖ • ｡ )</h3>"
        sections[5].classList.add("ff")
        });
btn18.addEventListener("click",() => {
            console.log("Faux... +0");
            sections[5].innerHTML="<h3>Mauvaise réponse ( • ᴖ • ｡ )</h3>"
            sections[5].classList.add("ff")
            });
// question 7
let element19=sections[6].querySelector(".btn19")
let element20=sections[6].querySelector(".btn20")
let element21=sections[6].querySelector(".btn21")
btn21.addEventListener("click",() => {
    console.log("Correct! +1");
    score++;
    scoretest.innerText = score
    sections[6].innerHTML="<h3>Bonne réponse ദ്ദി ( ᵔ ᗜ ᵔ )</h3>"
    sections[6].classList.add("gg")
    });
btn20.addEventListener("click",() => {
        console.log("Faux... +0");
        sections[6].innerHTML="<h3>Mauvaise réponse ( • ᴖ • ｡ )</h3>"
        sections[6].classList.add("ff")
        });
btn19.addEventListener("click",() => {
            console.log("Faux... +0");
            sections[6].innerHTML="<h3>Mauvaise réponse ( • ᴖ • ｡ )</h3>"
            sections[6].classList.add("ff")
            });
// question 8
let element22=sections[7].querySelector(".btn22")
let element23=sections[7].querySelector(".btn23")
let element24=sections[7].querySelector(".btn24")
btn23.addEventListener("click",() => {
    console.log("Correct! +1");
    score++;
    scoretest.innerText = score
    sections[7].innerHTML="<h3>Bonne réponse ദ്ദി ( ᵔ ᗜ ᵔ )</h3>"
    sections[7].classList.add("gg")
    });
btn22.addEventListener("click",() => {
        console.log("Faux... +0");
        sections[7].innerHTML="<h3>Mauvaise réponse ( • ᴖ • ｡ )</h3>"
        sections[7].classList.add("ff")
        });
btn24.addEventListener("click",() => {
            console.log("Faux... +0");
            sections[7].innerHTML="<h3>Mauvaise réponse ( • ᴖ • ｡ )</h3>"
            sections[7].classList.add("ff")
            });
// question 9
let element25=sections[8].querySelector(".btn25")
let element26=sections[8].querySelector(".btn26")
let element27=sections[8].querySelector(".btn27")
btn25.addEventListener("click",() => {
    console.log("Correct! +1");
    score++;
    scoretest.innerText = score
    sections[8].innerHTML="<h3>Bonne réponse ദ്ദി ( ᵔ ᗜ ᵔ )</h3>"
    sections[8].classList.add("gg")
    });
btn26.addEventListener("click",() => {
        console.log("Faux... +0");
        sections[8].innerHTML="<h3>Mauvaise réponse ( • ᴖ • ｡ )</h3>"
        sections[8].classList.add("ff")
        });
btn27.addEventListener("click",() => {
            console.log("Faux... +0");
            sections[8].innerHTML="<h3>Mauvaise réponse ( • ᴖ • ｡ )</h3>"
            sections[8].classList.add("ff")
            });
// question 10
let element28=sections[9].querySelector(".btn28")
let element29=sections[9].querySelector(".btn29")
let element30=sections[9].querySelector(".btn30")
btn28.addEventListener("click",() => {
    console.log("Correct! +1");
    score++;
    scoretest.innerText = score
    sections[9].innerHTML="<h3>Bonne réponse ദ്ദി ( ᵔ ᗜ ᵔ )</h3>"
    sections[9].classList.add("gg")
    });
btn29.addEventListener("click",() => {
        console.log("Faux... +0");
        sections[9].innerHTML="<h3>Mauvaise réponse ( • ᴖ • ｡ )</h3>"
        sections[9].classList.add("ff")
        });
btn30.addEventListener("click",() => {
            console.log("Faux... +0");
            sections[9].innerHTML="<h3>Mauvaise réponse ( • ᴖ • ｡ )</h3>"
            sections[9].classList.add("ff")
            });
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