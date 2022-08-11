// document.querySelector(".w").addEventListener("click",handle);
// function handle(){
//   alert("I got clicked");
// }
function sound(str){
  switch (str) {
    case 'w':
      var audio = new Audio('sounds/tom-1.mp3');
      audio.play();
      break;
    case 'a':
      var audio = new Audio('sounds/tom-2.mp3');
      audio.play();
      break;
    case 's':
      var audio = new Audio('sounds/tom-3.mp3');
      audio.play();
      break;
    case 'd':
      var audio = new Audio('sounds/tom-4.mp3');
      audio.play();
      break;
    case 'j':
      var audio = new Audio('sounds/snare.mp3');
      audio.play();
      break;
    case 'k':
      var audio = new Audio('sounds/crash.mp3');
      audio.play();
      break;
    case 'l':
      var audio = new Audio('sounds/kick-bass.mp3');
      audio.play();
      break;
    default:
  }
}
function change(str){
  var cls = document.querySelector('.'+str);

  cls.classList.add("pressed");
  setInterval(function() {
      cls.classList.remove("pressed");
  },100);

  // cls.style.animationDuration = "20s";
  // cls.classList.toggle("pressed");
}
var bt = document.getElementsByClassName("drum")
for(var i= 0;i<bt.length;i++){
    bt[i].addEventListener("click",function(){
    // alert("I got clicked");
    // var audio = new Audio('sounds/tom-1.mp3');
    // audio.play();
    var name = this.innerHTML;
    sound(name);
    change(name);
  });
}


document.addEventListener("keydown",function(event){
  console.log(event);
  sound(event.key);
  change(event.key);
})
