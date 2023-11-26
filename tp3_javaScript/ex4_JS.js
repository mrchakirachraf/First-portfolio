
var nom = document.getElementById("nom")
var prenom = document.getElementById("prenom")
var height = document.getElementById("height")
var width = document.getElementById("width")
var bgcolor_list = document.getElementById("bgcolor_list")
var color_list = document.getElementById("color_list")
var description = document.getElementById("desciption")

var clq_coul = document.getElementById("clq_coul")
var cld_lang = document.getElementById("cld_lang")

var language = window.navigator.language

switch(language)
{
    case "fr-FR" : lang = "français";break;
    case "en-US" : lang = "anglais";break;
    case "es-ES" : lang = "espagnol";break;
    default : lang = "AutreLangue";
}

function firstButton()
{
    clq_coul.style.background = bgcolor_list.value
    clq_coul.style.color = color_list.value
    clq_coul.style.height = height.value + 'px'
    clq_coul.style.width = width.value + 'px'

    cld_lang.style.width = '50%'
    cld_lang.style.height = '50%'
    cld_lang.innerHTML = "Cher, " + nom.value + " " + prenom.value + "<br>" + description.value
    cld_lang.style.color = bgcolor_list.value
    cld_lang.style.background = color_list.value

    cld_lang.innerHTML += "<br>" + "la langue utiliser est : " + lang + "<br>"
    cld_lang.innerHTML += "la largeur de l'ecran utilisé est :" + screen.width + "px"
    cld_lang.innerHTML += "<br>" + "la hauteur de l'ecran utilisé est :" + screen.height + "px"
    cld_lang.innerHTML += "<br>" + "la largeur disponible de l'ecran est :" + window.screen.availWidth + "px"
    cld_lang.innerHTML += "<br>" + "la hauteur disponible de l'ecran est :" + window.screen.availHeight +"px"
    cld_lang.innerHTML += "<br>" + "la largeur de la fenêtre utilisée est :" + window.innerWidth + "px"
    cld_lang.innerHTML += "<br>" + "la hauteur de la fenêtre utilisée est :" + window.innerHeight + "px"
}

function clearFeilds()
{
    nom.value = "";
    prenom.value = "";
    height.value = "";
    width.value = "";
    bgcolor_list.value = "";
    color_list.value = "";
    description.value = "";
    cld_lang.innerHTML = "";
}
var clearButton = document.getElementById("secondButton")
clearButton.addEventListener('click',clearFeilds)

function countWords() {
    var desc = description.value;
    var trimmedText = desc.replace(/\s+/g, ' ').trim();
    var wordCount = trimmedText.split(' ').filter(function(word) {
        return word.length > 0;
    }).length;
    alert("Le nombre de mots est : " + wordCount);
}
var thirdButton = document.getElementById("thirdButton");
thirdButton.addEventListener("click", countWords);


