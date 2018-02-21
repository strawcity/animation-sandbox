var frame = document.querySelector('.frame');
var net = document.querySelector('#net');
var backboard = document.querySelector('#backboard');
var rightArm = document.querySelector('#right-arm');
var basketball = document.querySelector('#basketball');
var basketballFrame = document.querySelector('#basketball-frame');
var cloud2 = document.querySelector('#cloud2');
var cloud8 = document.querySelector('#cloud8');
var cloud11 = document.querySelector('#cloud11');
var cloud5 = document.querySelector('#cloud5');
var face = document.querySelector('#face');
var leftArm = document.querySelector('#left-arm');
var rightArm = document.querySelector('#right-arm');

function shoot() {
  console.log('mouse enter');
  var durationShpot = 2000;
  anime({
    targets: net,
    translateY: 30,
    duration: durationShpot,
    elasticity: 0,
    easing: 'easeOutExpo'
  });
  anime({
    targets: backboard,
    translateY: 22,
    duration: durationShpot,
    elasticity: 0,
    easing: 'easeOutExpo'
  });
  anime({
    targets: basketball,
    translateX: 5,
    translateY: -14,
    duration: durationShpot,
    elasticity: 0,
    easing: 'easeOutExpo'
  });
  anime({
    targets: basketballFrame,
    translateY: -49,
    duration: durationShpot,
    elasticity: 0,
    easing: 'easeOutExpo'
  });
  anime({
    targets: face,
    translateY: 25,
    duration: durationShpot,
    elasticity: 0,
    easing: 'easeOutExpo'
  });
  anime({
    targets: leftArm,
    translateY: 10,
    rotate: -4,
    duration: durationShpot,
    elasticity: 0,
    easing: 'easeOutExpo'
  });
  anime({
    targets: rightArm,
    translateY: 20,
    duration: durationShpot,
    elasticity: 0,
    easing: 'easeOutExpo'
  });
  anime({
    targets: cloud2,
    translateX: 5,
    duration: durationShpot,
    elasticity: 0,
    easing: 'easeOutExpo'
  });
  anime({
    targets: cloud8,
    translateX: 5,
    duration: durationShpot,
    elasticity: 0,
    easing: 'easeOutExpo'
  });
  anime({
    targets: cloud11,
    translateX: 5,
    duration: durationShpot,
    elasticity: 0,
    easing: 'easeOutExpo'
  });
  anime({
    targets: cloud5,
    translateX: 5,
    duration: durationShpot,
    elasticity: 0,
    easing: 'easeOutExpo'
  });
}

function unShoot() {
  console.log('mouse leave');
  var durationPeep = 1000;
  anime({
    targets: net,
    translateY: 1,
    duration: durationPeep,
    elasticity: 0,
    easing: 'easeInOutCubic'
  });
  anime({
    targets: backboard,
    translateY: 1,
    duration: durationPeep,
    elasticity: 0,
    easing: 'easeInOutCubic'
  });
  anime({
    targets: basketball,
    translateX: 1,
    translateY: 1,
    duration: durationPeep,
    elasticity: 0,
    easing: 'easeInOutCubic'
  });
  anime({
    targets: basketballFrame,
    translateY: 1,
    duration: durationPeep,
    elasticity: 1,
    easing: 'easeInOutCubic'
  });
  anime({
    targets: face,
    translateY: 1,
    duration: durationPeep,
    elasticity: 1,
    easing: 'easeInOutCubic'
  });
  anime({
    targets: leftArm,
    translateY: 1,
    rotate: 0,
    duration: durationPeep,
    elasticity: 0,
    easing: 'easeInOutCubic'
  });
  anime({
    targets: rightArm,
    translateY: 1,
    duration: durationPeep,
    elasticity: 0,
    easing: 'easeInOutCubic'
  });
  anime({
    targets: cloud2,
    translateX: 0,
    duration: durationPeep,
    elasticity: 0,
    easing: 'easeInOutCubic'
  });
  anime({
    targets: cloud8,
    translateX: 0,
    duration: durationPeep,
    elasticity: 0,
    easing: 'easeInOutCubic'
  });
  anime({
    targets: cloud11,
    translateX: 0,
    duration: durationPeep,
    elasticity: 0,
    easing: 'easeInOutCubic'
  });
  anime({
    targets: cloud5,
    translateX: 0,
    duration: durationPeep,
    elasticity: 0,
    easing: 'easeInOutCubic'
  });
}

frame.addEventListener('mouseenter', shoot, false);
frame.addEventListener('mouseleave', unShoot, false);
