/*--github.com/aaurelien--*/
	let label = document.getElementById('volume_label')
	var video1 = document.getElementById('videobcg')
	var random_song = Math.floor(Math.random() * 1) + 1;
	var buttonpauseplay = document.getElementById("buttonpauseplay");
    video = video1.src += random_song +'.mp4';
	play(video1);
	
    function play(video1) {
        let slider_ = document.getElementById('volume')
        video1.muted = false;
        video1.volume = slider_.value / 100
		buttonpauseplay.addEventListener("click", function(){
			if(video1.paused){
				video1.play();
				buttonpauseplay.innerHTML = '<svg class="svgbuttonpauseplay" width="20" height="20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30"><path fill="#FFF" d="M20 7h5v22h-5zm-9 0h5v22h-5z"/></svg>';
	} else {
			video1.pause();
			buttonpauseplay.innerHTML = '<svg class="svgbuttonpauseplay" width="20" height="20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30"><path fill="#FFF" d="M8 7l22 11L8 29z"/></svg>';
		}
});
        video1.pause();
    }

    video.onended = function () {
		location.reload()
    };

    function slide() {
        let slider = document.getElementById('volume')
        video1.volume = slider.value / 100
}
buttonpauseplay.innerHTML = '<svg class="svgbuttonpauseplay" width="20" height="20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30"><path fill="#FFF" d="M8 7l22 11L8 29z"/></svg>';
/*--github.com/aaurelien--*/
