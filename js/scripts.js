var DOB=function(century, year, month, day){
return ((century/4)-2*century-1)+(5*year/4)+(26*(month+1)/10)+day;
};
var century=parseInt(document.getElementById('century:')).innerHTML=century;
var year=parseInt(document.getElementById('year:')).innerHTML=year;
var month=parseInt(document.getElementById('mon:')).innerHTML=mon;
var day=parseInt(document.getElementById('day:')).innerHTML=day;
var result=DOB(century, year, month, day)%7;
alert(result);
