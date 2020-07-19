var DOB=function(century, year, month, day){
return ((century/4)-2*century-1)+(5*year/4)+(26*(month+1)/10)+day;
};
var century=parseInt(document.getElementById('century:')).innerHTML=century;
var year=parseInt(document.getElementById('year:')).innerHTML=year;
var month=parseInt(document.getElementById('mon:')).innerHTML=mon;
var day=parseInt(document.getElementById('day:')).innerHTML=day;
var result=DOB(century, year, month, day)%7;
alert(result);

//let sunday=0
//let monday=1
//let tuesday=2
//let wednesday=3
//let thursday=4
//let friday=5
//let saturday=6

if ((result <1) && (gender ===male)) {
  name="Kwasi"
} else if ((result<1) &&(gender ===female)) {
    name="Akosua"
} else if ((result<2) &&(gender===male)) {
    name="Kwadwo"
} else if ((result<2) &&(gender==female)) {
    name="Adwoa"
} else if ((result<3) &&(gender===male)) {
    name="kwabena"
} else if ((result<3) &&(gender===female)) {
    name="Abenna"
} else if ((result<4) &&(gender===male)) {
    name="Kwaku"
} else if ((result<4) &&(gender===female)) {
    name="Akua"
} else if ((result<5) &&(gender===male)) {
    name="Yaw"
} else if ((result<5) &&(gender===female)) {
    name="Yaa"
} else if ((results<6) &&(gender===male)) {
    name="Kofi"
} else if ((result<6) &&(gender===female)) {
    name="Afua"
} else if ((result<7) &&(gender===male)){
    name="Kwame"
} else ((result<7) &&(gender===female)) {
    name="Ama"
}
