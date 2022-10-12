var ideiaSuggestion = document.querySelector("#idea-suggestion");


//pegar ideia do array api

let textIdeaArray = [];

for(let elemento of problems){
    textIdeaArray.push(elemento.problemText);
}

var numberRandomIdea = Math.floor(Math.random() * 32);
var textIdea = (textIdeaArray[numberRandomIdea]);

//pegar tipo do sistema no array api

let typeOfSystemArray = [];

for(let elemento of typeOfCreation){
    typeOfSystemArray.push(elemento.software);
}

var numberRandomSystem = Math.floor(Math.random() * 6);
var textTypeOfSystem = typeOfSystemArray[numberRandomSystem];

//exibir nome e dados das arrays
var nameCor = document.querySelector("span");
var nameText = document.createTextNode(localStorage.getItem('name'));

nameCor.appendChild(nameText);

var textSuggestion = document.createTextNode(", a ideia é criar um " + textTypeOfSystem + " para " + textIdea);
ideiaSuggestion.appendChild(textSuggestion);

//btn recarregar página
var btn = document.querySelector("#refresh");
btn.addEventListener("click", function() {    
    location.reload();
});