function dateOfBirth() {
var dateOfBirth =parseInt(prompt("what is your date of birth .../.../...?"));
var d= new Date(dateOfBirth);
var n =d.getDay();
var h3 = document.createElement("h3");
var resultText = document.createTextNode("Your name is" + n + "!");
h3.setAttribute("id", "dateOfBirth");
h3.appendChild(resultText);
document.getElementById("result").appendChild(h3);



}
