$(document).ready(function() {
    animateDiv();
});


time = 60;
// playing = 0;
score = 0;
countdown = setInterval(timer, 1000);

newScore = document.getElementById("score");

function timer() {
    time = time - 1;
    if (time < 1) {
      clearInterval(countdown);

              }
    document.getElementById("time").innerHTML = time + " time";
}
// setTimeout(function(){
//   alert("Time's Up! Your Score is " + score );
// }, 30000)


// function startpause(){
//   if(running == 0){
//     running = 1;
//     incrament();
//     document.getElementById("startpause").innerHTML = "Pause";
//   }else{
//     running = 0;
//     document.getElementById("startpause").innerHTML ="Resume";
//   }
// }
//
// function reset(){
//   running = 0;
//   time = 0;
//   document.getElementById("startpause").innerHTML = "Start";
//   document.getElementById("output").innerHTML =" 00:00:00"; //this resets output to the start
// }
//
// function incrament(){
//   if running == 1){
//     setTimeout(function(){
//       time++;
//       var mins = Math.floor(time/10/60);
//       var sec = Math.floor(time/10);
//       var tenths = time % 10;
//       document.getElementById("output").innerHTML=mins + ";" + secs + ";" + tenths;
//       incrament();
//     }, 100);
//   }
// }

/*
class Mouse {
    constructor(id) {
        this.id = id;
      $('<img />').attr({
        'src': 'runningmouse.gif',
        'class': 'mice',
      }).appendTo('body');
       $('.mice').click(function disappear(event) {
          console.log(event.target)
          console.log('disappear');
         $(this).css('display', 'none' );
              $("#score").html(function (i , val) {
                   return val * 1 +1 ;
              });
        });
  }
}

const Mouse1 = new Mouse('m1');
const Mouse2 = new Mouse('m2');
const Mouse3 = new Mouse('m3');
const Mouse4 = new Mouse('m4');
const Mouse5 = new Mouse('m5');
const Mouse6 = new Mouse('m6');
const Mouse7 = new Mouse('m7');
const Mouse8 = new Mouse('m8');
const Mouse9 = new Mouse('m9');
const Mouse10 = new Mouse('m10');
const Mouse11 = new Mouse('m11');
const Mouse12 = new Mouse('m12');*/


function makeNewPosition() {

    // Get viewport dimensions (remove the dimension of the div)
    var h = $(window).height() - 90;
    var w = $(window).width() - 100;

    var nh = Math.floor(Math.random() * h);
    var nw = Math.floor(Math.random() * w);

    return [nh, nw];
}

function animateDiv() {
    var newq = makeNewPosition();
    var oldq = $('#mouse').offset();
    var speed = calcSpeed([oldq.top, oldq.left], newq);

    $('#mouse').animate({ bottom: newq[0], right: newq[1] }, speed, function() {
        animateDiv();
    });

};

function calcSpeed(prev, next) {

    var x = Math.abs(prev[1] - next[1]);
    var y = Math.abs(prev[0] - next[0]);

    var greatest = x > y ? x : y;

    var speedModifier = .20;

    var speed = Math.ceil(greatest / speedModifier);

    return speed;

}

function reset(){
  timer();
  // var time = 30; playing = 0; score = 0;
// $("reset").css("display", "none");
// $('#reset').click(function reStart() {
// document.getElementById("time").innerHTML = time + "time";
// document.getElementById("score").innerHTML= 0;
// });
}
