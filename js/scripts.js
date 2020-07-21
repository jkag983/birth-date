function dateOfBirth() {
var date =parseInt(prompt("what is your date of birth .../.../...?"));
var dateOfBirth= new Date(date);
var days=dateOfBirth.getDay();
var h3 = document.createElement("h3");
var resultText = document.createTextNode("Your name is" + days + "!");
h3.setAttribute("id", "dateOfBirth");
h3.appendChild(resultText);
document.getElementById("result").appendChild(h3);



}

//sunday===0
//monday===1
//tuesday===2
//wednesday===3
//Thursday===4
//Friday===5
//Saturday===6
