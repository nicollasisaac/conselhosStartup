var ideiaSuggestion = document.querySelector("#idea-suggestion");
var textSuggestion = document.createTextNode(localStorage.getItem('name') + "oi");

ideiaSuggestion.appendChild(textSuggestion);

let textIdeaArray = [];

for(let elemento of problems){
    textIdeaArray.push(elemento.problemText);
}

var textIdea = (textIdeaArray[1]);

console.log(textIdea)

