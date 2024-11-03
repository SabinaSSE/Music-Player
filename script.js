let progress= document.getElementById("progress");
let song= document.getElementById("song");
let controlIcon= document.getElementById("controlIcon");

song.onloadedmetadata= function(){
    progress.max=song.duration;
    progress.value=song.currentTime;// it will update the current time 
}

function playPause(){
    if(controlIcon.classList.contains("fa-pause")){
        song.pause();
        controlIcon.classList.remove("fa-pause");
        controlIcon.classList.add("fa-play");
    }
    else{
        song.play();
        controlIcon.classList.add("fa-pause");
        controlIcon.classList.remove("fa-play");
    }


}


if(song.play()){//if the song is playing 
    setInterval(()=>{// current time should update every second 
    progress.value=song.currentTime;// to update the value of range slider 

    },300);// we are updating it every  500ms
}

progress.onchange= function(){
    song.play();
    song.currentTime=progress.value;
    controlIcon.classList.add("fa-pause");
    controlIcon.classList.remove("fa-play");
}


