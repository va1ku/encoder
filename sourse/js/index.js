"use strict";


const text = document.querySelector("textarea");
const but = document.querySelector("button");
const form = document.querySelector(".encoder__form")

text.addEventListener("keyup" , (event) =>{
	if (text.value.length >= 1){
		but.classList.add("active");
	}else{
		but.classList.remove("active");
	}
})

text.addEventListener("keydown" , (event) =>{
	console.log(event.key )
	if(event.key == "Enter" && event.ctrlKey){
		text.value = text.value + "\n";
	}else if(event.key == "Shift" && event.ctrlKey ){
		text.value = text.value + "command text"
	}else if(event.key == "Enter"){
		event.preventDefault()
		form.submit()
	}
})