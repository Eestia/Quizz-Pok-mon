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
    if (sections[3]) {
        sections[3].hidden = !sections[3].hidden;
    }
    });
btn8.addEventListener("click",() => {
    console.log("Faux... +0");
    sections[2].innerHTML="<h3>Mauvaise réponse ( • ᴖ • ｡ )</h3>"
    sections[2].classList.add("ff")
    if (sections[3]) {
        sections[3].hidden = !sections[3].hidden;
    }
    });
btn9.addEventListener("click",() => {
    console.log("Faux... +0");
    sections[2].innerHTML="<h3>Mauvaise réponse ( • ᴖ • ｡ )</h3>"
    sections[2].classList.add("ff")
    if (sections[3]) {
        sections[3].hidden = !sections[3].hidden;
    }
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
    if (sections[4]) {
        sections[4].hidden = !sections[4].hidden;
    }
    });
btn11.addEventListener("click",() => {
        console.log("Faux... +0");
        sections[3].innerHTML="<h3>Mauvaise réponse ( • ᴖ • ｡ )</h3>"
        sections[3].classList.add("ff")
        if (sections[4]) {
            sections[4].hidden = !sections[4].hidden;
        }
        });
btn10.addEventListener("click",() => {
            console.log("Faux... +0");
            sections[3].innerHTML="<h3>Mauvaise réponse ( • ᴖ • ｡ )</h3>"
            sections[3].classList.add("ff")
            if (sections[4]) {
                sections[4].hidden = !sections[4].hidden;
            }
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
    if (sections[5]) {
        sections[5].hidden = !sections[5].hidden;
    }
    });
btn14.addEventListener("click",() => {
        console.log("Faux... +0");
        sections[4].innerHTML="<h3>Mauvaise réponse ( • ᴖ • ｡ )</h3>"
        sections[4].classList.add("ff")
        if (sections[5]) {
            sections[5].hidden = !sections[5].hidden;
        }
        });
btn13.addEventListener("click",() => {
            console.log("Faux... +0");
            sections[4].innerHTML="<h3>Mauvaise réponse ( • ᴖ • ｡ )</h3>"
            sections[4].classList.add("ff")
            if (sections[5]) {
                sections[5].hidden = !sections[5].hidden;
            }
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
    if (sections[6]) {
        sections[6].hidden = !sections[6].hidden;
    }
    });
btn17.addEventListener("click",() => {
        console.log("Faux... +0");
        sections[5].innerHTML="<h3>Mauvaise réponse ( • ᴖ • ｡ )</h3>"
        sections[5].classList.add("ff")
        if (sections[6]) {
            sections[6].hidden = !sections[6].hidden;
        }
        });
btn18.addEventListener("click",() => {
            console.log("Faux... +0");
            sections[5].innerHTML="<h3>Mauvaise réponse ( • ᴖ • ｡ )</h3>"
            sections[5].classList.add("ff")
            if (sections[6]) {
                sections[6].hidden = !sections[6].hidden;
            }
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
    if (sections[7]) {
        sections[7].hidden = !sections[7].hidden;
    }
    });
btn20.addEventListener("click",() => {
        console.log("Faux... +0");
        sections[6].innerHTML="<h3>Mauvaise réponse ( • ᴖ • ｡ )</h3>"
        sections[6].classList.add("ff")
        if (sections[7]) {
            sections[7].hidden = !sections[7].hidden;
        }
        });
btn19.addEventListener("click",() => {
            console.log("Faux... +0");
            sections[6].innerHTML="<h3>Mauvaise réponse ( • ᴖ • ｡ )</h3>"
            sections[6].classList.add("ff")
            if (sections[7]) {
                sections[7].hidden = !sections[7].hidden;
            }
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
    if (sections[8]) {
        sections[8].hidden = !sections[8].hidden;
    }
    });
btn22.addEventListener("click",() => {
        console.log("Faux... +0");
        sections[7].innerHTML="<h3>Mauvaise réponse ( • ᴖ • ｡ )</h3>"
        sections[7].classList.add("ff")
        if (sections[8]) {
            sections[8].hidden = !sections[8].hidden;
        }
        });
btn24.addEventListener("click",() => {
            console.log("Faux... +0");
            sections[7].innerHTML="<h3>Mauvaise réponse ( • ᴖ • ｡ )</h3>"
            sections[7].classList.add("ff")
            if (sections[8]) {
                sections[8].hidden = !sections[8].hidden;
            }
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
    if (sections[9]) {
        sections[9].hidden = !sections[9].hidden;
    }
    });
btn26.addEventListener("click",() => {
        console.log("Faux... +0");
        sections[8].innerHTML="<h3>Mauvaise réponse ( • ᴖ • ｡ )</h3>"
        sections[8].classList.add("ff")
        if (sections[9]) {
            sections[9].hidden = !sections[9].hidden;
        }
        });
btn27.addEventListener("click",() => {
            console.log("Faux... +0");
            sections[8].innerHTML="<h3>Mauvaise réponse ( • ᴖ • ｡ )</h3>"
            sections[8].classList.add("ff")
            if (sections[9]) {
                sections[9].hidden = !sections[9].hidden;
            }
            });
// question 10
let element28=sections[9].querySelector(".btn28")
let element29=sections[9].querySelector(".btn29")
let element30=sections[9].querySelector(".btn30")
btn30.addEventListener("click",() => {
    console.log("Correct! +1");
    score++;
    scoretest.innerText = score
    sections[9].innerHTML="<h3>Bonne réponse ദ്ദി ( ᵔ ᗜ ᵔ )</h3>"
    sections[9].classList.add("gg")
    if (sections[10]) {
        sections[10].hidden = !sections[10].hidden;
    }
    });
btn29.addEventListener("click",() => {
        console.log("Faux... +0");
        sections[9].innerHTML="<h3>Mauvaise réponse ( • ᴖ • ｡ )</h3>"
        sections[9].classList.add("ff")
        if (sections[10]) {
            sections[10].hidden = !sections[10].hidden;
        }
        });
btn28.addEventListener("click",() => {
            console.log("Faux... +0");
            sections[9].innerHTML="<h3>Mauvaise réponse ( • ᴖ • ｡ )</h3>"
            sections[9].classList.add("ff")
            if (sections[10]) {
                sections[10].hidden = !sections[10].hidden;
            }
            });
let btn31=sections[10].querySelector("button")
btn31.addEventListener("click",() => {
    sections.forEach(section => {
        section.remove()
    if (score >= 0 && score <= 3) {
        div[2].innerHTML="<h3>Tu ne passeras jamais le conseil 4 comme ça!</h3>"
            console.log("Tu ne passeras jamais le conseil 4 comme ça!");
    } else if (score >= 4 && score <= 6) {
        div[2].innerHTML="<h3>Encore un peu d'entrainement et tu deviendras le meilleur dresseur!</h3>"
        console.log("Encore un peu d'entrainement et tu deviendras le meilleur dresseur!");
    } else if (score >= 7 && score <= 10) {
        div[2].innerHTML="<h3>tu es vraiment le meilleur dresseur!</h3>"
        console.log("Tu es vraiment le meilleur dresseur!");}
    })
    
});