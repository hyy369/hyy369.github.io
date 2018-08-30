function blink(){
  blinkElement('s1', 0);
  blinkElement('s2', 1);
  blinkElement('s3', 2);
  blinkElement('s4', 3);
  blinkElement('s5', 4);
  blinkElement('s6', 5);
  blinkElement('s7', 6);
  blinkElement('s8', 7);
  blinkElement('s9', 8);
  blinkElement('s10', 9);
  blinkElement('s11', 10);
  setTimeout(function() {
    fadeIn('s1');
    fadeIn('s2');
    fadeIn('s3');
    fadeIn('s4');
    fadeIn('s5');
    fadeIn('s6');
    fadeIn('s7');
    fadeIn('s8');
    fadeIn('s9');
    fadeIn('s10');
    fadeIn('s11');
    fadeIn('subtitle');
  }, 1560);
}

function blinkElement(ele, seq) {
   var f = document.getElementById(ele);
   setTimeout(function() {
      f.style.visibility = 'visible';
   }, 120 + seq * 120);
   setTimeout(function() {
      f.style.visibility = 'hidden';
   }, 240 + seq * 120);
}

function fadeIn(e) {
  var ele = document.getElementById(e);
  var op = 0.1;  // initial opacity
  var timer = setInterval(function () {
    if (op >= 1){
      clearInterval(timer);
    }
    ele.style.opacity = op;
    ele.style.visibility = 'visible';
    ele.style.filter = 'alpha(opacity=' + op * 100 + ")";
    op += op * 0.05;
  }, 10);
}
