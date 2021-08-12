
//dropdown menu
const menu = document.querySelector("nav ul");
const burger = document.querySelector("#burger");

burger.addEventListener("click", mobilMenu);

function mobilMenu() {
	if (menu.style.display !== "flex") {
		menu.style.display = "flex";
	} else {
		menu.style.display = "none";
}	
}

//gallery
const mainImg = document.querySelector("#mainImg");
const smallpic = document.querySelectorAll(".smallpic");

console.log(smallpic);

//for (let i=0; i<smallpic.length; i++){
    //smallpic[i].addEventListener("click", skift);
//}
smallpic.forEach(pic => {
	pic.addEventListener("click", skift);
})
function skift(){
  mainImg.setAttribute("src", "images/images/gallery_images_small/" + this.getAttribute("data-number") + ".jpg");
  
}


//read more
const jstxt = document.querySelectorAll("jstxt");
		
			for (let i = 0; i < jstxt.length; i++) {
				jstxt[i].style.display = "none";
			}
			//jstxt.forEach(element => {
			//	element.style.display = "none";
			//})
		
			const button = document.querySelectorAll(".button");
			
			for (let i = 0; i < button.length; i++) {
			button[i].addEventListener("click", fulllength);
			}
			function fulllength() {
				let txt = this.previousElementSibling;
				if (txt.style.display === "none") {

					txt.style.display = "block";
				} else {
					txt.style.display = "none";
				}

}
			
//form validation
const name = document.querySelector('name')
const email = document.querySelector('email')
const phone = document.querySelector('phone')
const message = document.querySelector('Hi')

document.addEventListener('Send', (e) => {
	let messages = []
	if (name.value === '' || name.value == 1) {
		messages.push('Name is required')
	}

	if (email.value.length <= 12) {
		messages.push('email must be longer than 12 characters')
	}

	if (email.value.length >= 12) {
		messages.push('email must be less than 12 characters')
	}

	if (email.value === 'password') {
		messages.push('Password cannot be password')
	}

	if (messages.length > 0) {
		e.preventDefault()
		errorElement.innerText = messages.join(', ')
	}
});