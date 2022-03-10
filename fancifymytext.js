
function biggerButton(){
	document.getElementById("textBox").style.fontSize = "24px";
}

function fancy(){
	document.getElementById("textBox").style.fontWeight = "bold";
	document.getElementById("textBox").style.color = "blue";
	document.getElementById("textBox").style.textDecoration = "underline";
	alert("Fancy button was pressed!");
}

function boring(){
	document.getElementById("textBox").style.fontSize = "12px";
	document.getElementById("textBox").style.fontWeight = "normal";
	document.getElementById("textBox").style.color = "black";
	document.getElementById("textBox").style.textDecoration = "initial";
	alert("Boring button was pressed!");
}

function mooButton(){
	document.getElementById("textBox").style.textTransform = "uppercase";
	const parts = document.getElementById("textBox").value.split(" ");
	document.getElementById("textBox").value = parts.join("_");
	
	const parts2 = document.getElementById("textBox").value.split(".");
	document.getElementById("textBox").value = parts2.join("-Moo.");
}
