var frame = document.querySelector('.huncia');
var net = document.querySelector('#huncia-net');
var backboard = document.querySelector('#huncia-backboard');
var rightArm = document.querySelector('#huncia-right-arm');
var basketball = document.querySelector('#huncia-basketball');
var basketballFrame = document.querySelector('#huncia-basketball-frame');
var cloud2 = document.querySelector('#huncia-cloud2');
var cloud8 = document.querySelector('#huncia-cloud8');
var cloud11 = document.querySelector('#huncia-cloud11');
var cloud5 = document.querySelector('#huncia-cloud5');
var face = document.querySelector('#huncia-face');
var leftArm = document.querySelector('#huncia-left-arm');
var rightArm = document.querySelector('#huncia-right-arm');

function shoot() {
  var durationShpot = 900;
  anime({
    targets: net,
    translateY: 30,
    duration: durationShpot,
    elasticity: 10,
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
  var durationPeep = 900;
  anime({
    targets: net,
    translateY: 0,
    duration: durationPeep,
    elasticity: 0,
    easing: 'easeInOutCubic'
  });
  anime({
    targets: backboard,
    translateY: 0,
    duration: durationPeep,
    elasticity: 0,
    easing: 'easeInOutCubic'
  });
  anime({
    targets: basketball,
    translateX: 0,
    translateY: 0,
    duration: durationPeep,
    elasticity: 0,
    easing: 'easeInOutCubic'
  });
  anime({
    targets: basketballFrame,
    translateY: 0,
    duration: durationPeep,
    elasticity: 1,
    easing: 'easeInOutCubic'
  });
  anime({
    targets: face,
    translateY: 0,
    duration: durationPeep,
    elasticity: 1,
    easing: 'easeInOutCubic'
  });
  anime({
    targets: leftArm,
    translateY: 0,
    rotate: 0,
    duration: durationPeep,
    elasticity: 0,
    easing: 'easeInOutCubic'
  });
  anime({
    targets: rightArm,
    translateY: 0,
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
