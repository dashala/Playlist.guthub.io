window.onload = init;

function init () {
    var addBtn = document.getElementById("addButton"),
    delFirstBtn = document.getElementById("deleteFirstButton"),
    delLastBtn = document.getElementById("deleteLastButton"),
    textInput = document.getElementById("songTextInput"),
    songName = " ",
    allSongs = document.getElementsByTagName("li"),
    playlist = document.getElementById ("playlist");

    addBtn.addEventListener("click", function(){
        console.log("addBtn");
        songName = textInput.value;
        if (songName==""){
            alert("please enter song")
        }
        else {
            var li = document.createElement("li");
            li.innerHTML = songName;
            playlist.appendChild(li);
            textInput.value = '';
        }
    });

    delFirstBtn.addEventListener("click", function(){
console.log("delFirstBtn");
var firstSong = allSongs[0];
playlist.removeChild(firstSong);
    });


    delLastBtn.addEventListener("click", function(){
        console.log("delLastBtn");
        var lastSong = allSongs.length-1;
        playlist.removeChild(allSongs[lastSong]);
            });
}