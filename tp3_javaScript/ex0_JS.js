function changeColor(newColor) {
    var elem = document.getElementById('para');
    elem.innerHTML = "Bravo ! ";
    elem.style.color = newColor;
    }
// var Bout = document.getElementsByTagName('button');
// alert('Nb Bouton : ' + Bout.length);

// let text = document.getElementById('para').textContent
// document.write(text)

// var par = document.getElementsByTagName('p');
// alert('Premier par : ' + par[0].innerHTML); 

// qqq = document.getElementsByClassName('qqq')
// document.write(qqq)

var pa = document.getElementsByClassName("cls"); // pa est un tableau
pa[0].style.color = "red";
pa[0].style.fontSize = "25px";
pa[0].style.fontWeight = "bold";
pa[1].innerHTML = "Nouveau premier ";
//document.write(pa[0].innerHTML + pa[1].innerHTML)

// el = document.querySelector('.qqqq');
// document.write(el.textContent)

el = document.querySelector(".qqqq");
el.onclick = function(){
this.innerHTML = "Nouvellement Saisi ! ";
this.style.color = "blue";
}

let input = document.querySelector('input');
input.onblur = inputBlur;
input.onfocus = inputFocus;
function inputBlur() { input.value = 'Le focus a été perdu'; }
function inputFocus() { input.value = 'Le focus est là'; }


kk = document.querySelector(".event");
kk.addEventListener('click',modifTexte);
function modifTexte(){
this.innerHTML = "Nouvellement Saisi ! ";
this.style.color = "green";
}

el = document.querySelector(".event2");
el.addEventListener('click',modifTexte2);
el.addEventListener('click',afficher);
function modifTexte2(){
this.innerHTML = "Nouvellement Saisi ! ";
this.style.color="red";
}
function afficher(){
alert("Bien sonné ");
}