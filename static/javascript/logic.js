console.clear();

var strength = {
	0: "Worst",
	1: "Bad",
	2: "Weak",
	3: "Good",
	4: "Strong"
  }

function pageRedirect(page) {
	location.href = page;
}

const loginBtn = document.getElementById('login');
const signupBtn = document.getElementById('signup');
var password = document.getElementById('password');
var meter = document.getElementById('password-strength-meter');
var text = document.getElementById('password-strength-text');


loginBtn.addEventListener('click', (e) => {
	let parent = e.target.parentNode.parentNode;
	Array.from(e.target.parentNode.parentNode.classList).find((element) => {
		if(element !== "slide-up") {
			parent.classList.add('slide-up')
		}else{
			signupBtn.parentNode.classList.add('slide-up')
			parent.classList.remove('slide-up')
		}
	});
});

signupBtn.addEventListener('click', (e) => {
	let parent = e.target.parentNode;
	Array.from(e.target.parentNode.classList).find((element) => {
		if(element !== "slide-up") {
			parent.classList.add('slide-up')
		}else{
			loginBtn.parentNode.parentNode.classList.add('slide-up')
			parent.classList.remove('slide-up')
		}
	});
});

password.addEventListener('input', function() {
	var val = password.value;
	var result = zxcvbn(val);
  
	// Update the password strength meter
	meter.value = result.score;
  
	// Update the text indicator
	if (val !== "") {
	  text.innerHTML = "Strength: " + strength[result.score]; 
	} else {
	  text.innerHTML = "";
	}
  });