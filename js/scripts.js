function dateOfBirth() {
var dateOfBirth =parseInt(prompt("what is your date of birth .../.../...?"));
var d= new Date(dateOfBirth);
var n =d.getDay();
var h2 = document.createElement("h2");
var resultText = document.createTextNode("Your name is" + n + "!");
h2.setAttribute("id", "dateOfBirth");
h2.appendChild(resultText);
document.getElementById("result").appendChild(h2);

}
