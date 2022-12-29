let newNickname = ""

function storeNick(){
    var newNamePlayer = document.querySelector("#text-nickname");
    newNickname = newNamePlayer.value;
    localStorage.setItem('name', newNickname);

    window.location.replace("/src/index.html");
}

document.addEventListener('keypress', function(e){
    if(e.which == 13){
       storeNick();
    }
 }, false);

//nickname

