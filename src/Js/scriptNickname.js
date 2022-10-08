let newNickname = ""

function storeNick(){
    var newNamePlayer = document.querySelector("#text-nickname");
    newNickname = newNamePlayer.value;
    localStorage.setItem('name', newNickname);

    window.location.replace("/src/index.html");
}

//nickname

