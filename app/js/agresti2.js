var agrestiGrain = document.querySelector('#agresti-grain');
var agrestiFace = document.querySelector('#agresti-face');
var agrestiRightCurtain = document.querySelector('#agresti-right-curtain');
var agrestiLeftCurtain = document.querySelector('#agresti-left-curtain');
var agrestiRightArm = document.querySelector('#agresti-right-arm');
var agrestiHead = document.querySelector('#agresti-head');

function shpotted() {
  var durationShpot = 1000;
  anime({
    targets: agrestiFace,
    translateX: -78,
    translateY: 25,
    duration: durationShpot,
    elasticity: 0
  });
  anime({
    targets: agrestiRightCurtain,
    translateX: 19,
    duration: durationShpot,
    elasticity: 100
  });
  anime({
    targets: agrestiLeftCurtain,
    translateX: -15,
    duration: durationShpot,
    elasticity: 100
  });
  anime({
    targets: agrestiRightArm,
    translateX: 6,
    translateY: -3,
    duration: durationShpot,
    elasticity: 100
  });
  anime({
    targets: agrestiHead,
    translateX: 3,
    translateY: -3,
    duration: durationShpot,
    elasticity: 100
  });
}

function peepin() {
  var durationPeep = 3000;
  anime({
    targets: agrestiFace,
    translateX: 0,
    translateY: 0,
    duration: durationPeep,
    elasticity: 0,
    easing: 'easeInOutQuart'
  });
  anime({
    targets: agrestiRightCurtain,
    translateX: 0,
    duration: durationPeep,
    elasticity: 100,
    easing: 'easeOutQuint'
  });
  anime({
    targets: agrestiLeftCurtain,
    translateX: 0,
    duration: durationPeep,
    elasticity: 100
  });
  anime({
    targets: agrestiRightArm,
    translateX: 0,
    translateY: 0,
    duration: durationPeep,
    elasticity: 100
  });
  anime({
    targets: agrestiHead,
    translateX: 0,
    translateY: 0,
    duration: durationPeep,
    elasticity: 100
  });
}

agrestiGrain.addEventListener('mouseenter', shpotted, false);
agrestiGrain.addEventListener('mouseleave', peepin, false);
