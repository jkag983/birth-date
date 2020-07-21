function dateOfBirth() {
var date =parseInt(prompt("what is your date of birth?"));
var dateOfBirth= new Date(date);
var days=dateOfBirth.getDay();
var h3 = document.createElement("h3");
var resultText = document.createTextNode("Your day of week is " + days + "!");
h3.setAttribute("id", "dateOfBirth");
h3.appendChild(resultText);
document.getElementById("result").appendChild(h3);

}






//          female       male
//sunday===Akosua        Kwasi
//monday===Adwoa         Kwadwo
//tuesday===Abenna       kwabena
//wednesday===Akua       Kwaku
//Thursday===Yaa         Yaw
//Friday===Afua          Kofi
//Saturday===Ama         Kwame
