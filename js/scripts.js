var DOB=function(century, year, month, day){
return ((century/4)-2*century-1)+(5*year/4)+(26*(month+1)/10)+day;
};
var century=parseInt(document.getElementById('year:''));
var year=parseInt(document.getElementById('year:''));
var month=parseInt(document.getElementById('month:''));
var day=parseInt(document.getElementById('day:''));
var result=DOB(century, year, month, day)%7;
alert(result);
