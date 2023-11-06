var video;

window.addEventListener("load", function() {
	console.log("Good job opening the window")

	video = document.querySelector(".video")
	video.setAttribute("autoplay", "false")
	video.setAttribute("loop", "false")
	video.load()
});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video")

	video.play()
	document.querySelector("#volume").innerHTML = video.volume
});

document.querySelector("#pause").addEventListener("click", function(){
	console.log("Pause Video")

	video.pause()
})

document.querySelector("#slower").addEventListener("click", function(){
	console.log("Slow Down")

	video.playbackRate += -0.1;
	console.log(video.playbackRate)
})

document.querySelector("#faster").addEventListener("click", function(){
	console.log("Speed Up")

	video.playbackRate += 0.1;
	console.log(video.playbackRate)
})

document.querySelector("#skip").addEventListener("click", function(){
	console.log("Skip Ahead")

	if (video.currentTime + 10 <= video.duration) {
		video.currentTime += 10;
	}
	else {
		video.currentTime = 0;
	}

	console.log(video.currentTime)
})

document.querySelector("#mute").addEventListener("click", function(){
	console.log("Mute/Unmute")

	if (video.muted) {
		video.muted = false;
		this.innerHTML = "Mute"
	}
	else {
		video.muted = true;
		this.innerHTML = "Unmute"
	}
})

document.querySelector("#slider").addEventListener("input", function(){
	console.log("Volume Changed")

	video.volume = this.value / 100;
	document.querySelector("#volume").innerHTML = video.volume
})

document.querySelector("#vintage").addEventListener("click", function(){
	console.log("Vintage Style")
	video.classList.add("oldSchool")
})

document.querySelector("#orig").addEventListener("click", function(){
	console.log("Original Style")
	video.classList.remove("oldSchool")
})
