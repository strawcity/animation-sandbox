console.log('main.js');

var face = document.querySelector('#face');
var building = document.querySelector('#inner-window');
var rightCurtain = document.querySelector('#right-curtain');
var leftCurtain = document.querySelector('#left-curtain');
var rightArm = document.querySelector('#right-arm');
var head = document.querySelector('#head');

function shpotted() {
  console.log('mouse enter');
  var durationShpot = 1000;
  anime({
    targets: face,
    translateX: -24,
    translateY: 51,
    duration: durationShpot,
    elasticity: 0
  });
  anime({
    targets: rightCurtain,
    translateX: 19,
    duration: durationShpot,
    elasticity: 100
  });
  anime({
    targets: leftCurtain,
    translateX: -15,
    duration: durationShpot,
    elasticity: 100
  });
  anime({
    targets: rightArm,
    translateX: 6,
    translateY: -3,
    duration: durationShpot,
    elasticity: 100
  });
  anime({
    targets: head,
    translateX: 3,
    translateY: -3,
    duration: durationShpot,
    elasticity: 100
  });
}

function peepin() {
  console.log('mouse leave');
  var durationPeep = 3000;
  anime({
    targets: face,
    translateX: 0,
    translateY: 0,
    duration: durationPeep,
    elasticity: 0,
    easing: 'easeInOutQuart'
  });
  anime({
    targets: rightCurtain,
    translateX: 0,
    duration: durationPeep,
    elasticity: 100,
    easing: 'easeInOutQuart'
  });
  anime({
    targets: leftCurtain,
    translateX: 0,
    duration: durationPeep,
    elasticity: 100
  });
  anime({
    targets: rightArm,
    translateX: 0,
    translateY: 0,
    duration: durationPeep,
    elasticity: 100
  });
  anime({
    targets: head,
    translateX: 0,
    translateY: 0,
    duration: durationPeep,
    elasticity: 100
  });
}



// face.addEventListener('mouseenter', peepin, false);
building.addEventListener('mouseenter', shpotted, false);
building.addEventListener('mouseleave', peepin, false);
