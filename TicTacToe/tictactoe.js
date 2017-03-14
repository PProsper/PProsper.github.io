let player = 1;
function clickBtn(btn){
  if(player == 1){
  document.getElementById(btn).value="X";
   document.getElementById(btn).disabled="disabled";
  player -=1;
  winner();
} else{
document.getElementById(btn).value="O";
document.getElementById(btn).disabled="disabled";
player +=1;
winner();
}
}
function winner(){
  if(document.getElementById("btn1").value== "X" &&
      document.getElementById("btn2").value=="X" &&
      document.getElementById("btn3").value=="X" ||
      document.getElementById("btn4").value=="X" &&
      document.getElementById("btn5").value=="X" &&
      document.getElementById("btn6").value=="X" ||
      document.getElementById("btn7").value=="X" &&
      document.getElementById("btn8").value=="X" &&
      document.getElementById("btn9").value=="X" ||
      document.getElementById("btn1").value=="X" &&
      document.getElementById("btn4").value=="X" &&
      document.getElementById("btn7").value=="X" ||
      document.getElementById("btn2").value=="X" &&
      document.getElementById("btn5").value=="X" &&
      document.getElementById("btn8").value=="X" ||
      document.getElementById("btn3").value=="X" &&
      document.getElementById("btn6").value=="X" &&
      document.getElementById("btn9").value=="X" ||
      document.getElementById("btn1").value=="X" &&
      document.getElementById("btn5").value=="X" &&
      document.getElementById("btn9").value=="X" ||
      document.getElementById("btn3").value=="X" &&
      document.getElementById("btn5").value=="X" &&
      document.getElementById("btn7").value=="X"
){
  alert("The Winner Is X!!!");
  reset();
} else if(document.getElementById("btn1").value== "X" &&
      document.getElementById("btn2").value=="O" &&
      document.getElementById("btn3").value=="O" ||
      document.getElementById("btn4").value=="O" &&
      document.getElementById("btn5").value=="O" &&
      document.getElementById("btn6").value=="O" ||
      document.getElementById("btn7").value=="O" &&
      document.getElementById("btn8").value=="O" &&
      document.getElementById("btn9").value=="O" ||
      document.getElementById("btn1").value=="O" &&
      document.getElementById("btn4").value=="O" &&
      document.getElementById("btn7").value=="O" ||
      document.getElementById("btn2").value=="O" &&
      document.getElementById("btn5").value=="O" &&
      document.getElementById("btn8").value=="O" ||
      document.getElementById("btn3").value=="O" &&
      document.getElementById("btn6").value=="O" &&
      document.getElementById("btn9").value=="O" ||
      document.getElementById("btn1").value=="O" &&
      document.getElementById("btn5").value=="O" &&
      document.getElementById("btn9").value=="O" ||
      document.getElementById("btn3").value=="O" &&
      document.getElementById("btn5").value=="O" &&
      document.getElementById("btn7").value=="O"
){
alert("The Winner Is O!!!");
reset();
}
}
function reset (){
resetBtn.addEventListener('click', 'reset');
document.getElementById("btn1").value =" "
document.getElementById("btn2").value =" "
document.getElementById("btn3").value =" "
document.getElementById("btn4").value =" "
document.getElementById("btn5").value =" "
document.getElementById("btn6").value =" "
document.getElementById("btn7").value =" "
document.getElementById("btn8").value =" "
document.getElementById("btn9").value =" "
document.getElementById("btn1").actionEnabled=" "
document.getElementById("btn2").actionEnabled=" "
document.getElementById("btn3").actionEnabled=" "
document.getElementById("btn4").actionEnabled=" "
document.getElementById("btn5").actionEnabled=" "
document.getElementById("btn6").actionEnabled=" "
document.getElementById("btn7").actionEnabled=" "
document.getElementById("btn8").actionEnabled=" "
document.getElementById("btn9").actionEnabled=" "
}
