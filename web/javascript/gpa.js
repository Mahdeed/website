
function gpa(){
  var a = document.getElementById("a").value;
  var b = document.getElementById("b").value;
  var c = document.getElementById("c").value;
  var a1 = document.getElementById("a1").value;
  var b1 = document.getElementById("b1").value;
  var c1 = document.getElementById("c1").value;
  
   if (a == "A") {
            a = 4;
             }
        if (a == "B") {
             a = 3;
             }
        if (a == "C") {
             a = 2;
             }
        if (a == "D") {
             a = 1;
          }
        if (a == "F") {
             a = 0;
          }
        if (a == "a") {
            a = 4;
             }
        if (a == "b") {
            a = 3;
            }
        if (a == "c") {
            a = 2;
             }
        if (a == "d") {
            a = 1;
          }

   if (b == "A") {
            b = 4;
             }
        if (b == "B") {
             b = 3;
             }
        if (b == "C") {
             b = 2;
             }
        if (b == "D") {
             b = 1;
          }
        if (b == "F") {
             b = 0;
          }
        if (b == "a") {
            b = 4;
             }
        if (b == "b") {
            b = 3;
            }
        if (b == "c") {
            b = 2;
             }
        if (b == "d") {
            b = 1;
          }

   if (c == "A") {
            c = 4;
             }
        if (c == "B") {
             c = 3;
             }
        if (c == "C") {
             c = 2;
             }
        if (c == "D") {
             c = 1;
          }
        if (c == "F") {
             c = 0;
          }
        if (c == "a") {
            c = 4;
             }
        if (c == "b") {
            c = 3;
            }
        if (c == "c") {
            c = 2;
             }
        if (c == "d") {
            c = 1;
          }

var x1 = a*a1;
var x2 = b*b1;
var x3 = c*c1;
var x = x1+x2+x3;
var y = parseInt(a1)+parseInt(b1)+parseInt(c1)
var gpa = x/y;
 
  document.getElementById("gpa").innerHTML=gpa;


}

