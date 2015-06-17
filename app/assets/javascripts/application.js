// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require d3
//= require_tree .

// stop buttom from submitting twice
function disableButton() {
  var button = document.getElementById("submit_link");
  button.submit();
  button.disabled = true;
}

var oneClick = disableButton;

// // hide last row on page load
window.onload = function() {
  var section = document.getElementsByClassName("association container");
  var last = section[section.length - 1];
  last.style.display = "none";
}

// // show last row on add column button
function showLastRow () {
  var section = document.getElementsByClassName("association container");
  var last = section[section.length - 1];
  last.style.display = "block";
  function disableButton() {
    var button = document.getElementById("submit_link");
    buttom.submit();
    button.disabled = true;
  };
}

// // delete row when delete button is pressed
function hideRow (deleteButton) {
  var deleteRow = deleteButton.parentElement.parentElement;
  deleteRow.style.display = "none";
  var elementForDelete = deleteButton.parentElement.lastElementChild;
  checked = elementForDelete.checked = true;
}

// // stuff for soft scroll
//
// // current Y position
// function currentYPosition() {
//      if (self.pageYOffset) return self.pageYOffset;
//      return 0;
//  }
//
//  // element Y position
// function elmYPosition(eID) {
//     var elm = document.getElementById(eID);
//     var y = elm.offsetTop;
//     var node = elm;
//     while (node.offsetParent && node.offsetParent != document.body) {
//         node = node.offsetParent;
//         y += node.offsetTop;
//     } return y;
// }
//
// // smooth scroll magic
// function smoothScroll(eID) {
//     var startY = currentYPosition();
//     var stopY = elmYPosition(eID);
//     var distance = stopY > startY ? stopY - startY : startY - stopY;
//     if (distance < 100) {
//         scrollTo(0, stopY); return;
//     }
//     var speed = Math.round(distance / 100);
//     if (speed >= 20) speed = 20;
//     var step = Math.round(distance / 25);
//     var leapY = stopY > startY ? startY + step : startY - step;
//     var timer = 0;
//     if (stopY > startY) {
//         for ( var i=startY; i<stopY; i+=step ) {
//             setTimeout("window.scrollTo(0, "+leapY+")", timer * speed);
//             leapY += step; if (leapY > stopY) leapY = stopY; timer++;
//         } return;
//     }
//     for ( var i=startY; i>stopY; i-=step ) {
//         setTimeout("window.scrollTo(0, "+leapY+")", timer * speed);
//         leapY -= step; if (leapY < stopY) leapY = stopY; timer++;
//     }
// }
