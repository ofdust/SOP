$(document).ready(function() {
	$("#github").hide();
	$("#git").hide()
	
});

var active = "bashletter";

function bashActive() {
	console.log("bash is active");
	if (active != "bashletter") {
		if (active = "gitletter") {
			$("#git").slideUp(500);
		}
		if (active = "githubletter") {
			$("#github").slideUp(500);
		}
	$("#bash").slideDown(500);
	active = "bashletter";
	}
}

function gitActive() {
	console.log("git is active");
	if (active != "gitletter") {
		if (active = "bashletter") {
			$("#bash").slideUp(500);
		}
		if (active = "githubletter") {
			$("#github").slideUp(500);
			console.log("slide up github");
		}
	$("#git").slideDown(500);
	active = "gitletter";
	}
}

function githubActive() {
	console.log("github is active");
	if (active != "githubletter") {
		if (active = "bashletter") {
			$("#bash").slideUp(500);
		}
		if (active = "gitletter") {
			$("#git").slideUp(500);
		}
	$("#github").slideDown(500);
	active = "githubletter";
	}
}

var bash = document.getElementById("bashbutton");
bash.addEventListener("click", bashActive, false);

var git = document.getElementById("gitbutton");
git.addEventListener("click", gitActive, false);

var github = document.getElementById("githubbutton");
github.addEventListener("click", githubActive, false);

