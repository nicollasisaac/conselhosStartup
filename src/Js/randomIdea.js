var ideiaSuggestion = document.querySelector("#idea-suggestion");

//pegar ideia do array api

let textIdeaArray = [];
let idTextIdeaArray = [];

for(let elemento of problems){
    textIdeaArray.push(elemento.problemText);
    idTextIdeaArray.push(elemento.id)
}

var numberRandomIdea = Math.floor(Math.random() * idTextIdeaArray.length);
var textIdea = (textIdeaArray[numberRandomIdea]);

//pegar tipo do sistema no array api

let typeOfSystemArray = [];
let idTypeOfSystemArray = [];

for(let elemento of typeOfCreation){
    typeOfSystemArray.push(elemento.software);
    idTypeOfSystemArray.push(elemento.id);
}

var numberRandomSystem = Math.floor(Math.random() * idTypeOfSystemArray.length);
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

