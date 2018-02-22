var frame = document.querySelector('.frame');
var head = document.querySelector('#head');
var body = document.querySelector('#body');
var eye = document.querySelector('#eye');
var beakTop = document.querySelector('#beak-top');
var eye = document.querySelector('#eye');
var input = $('input');

function lookLeft() {
  console.log('mouse enter');
  anime({
    targets: head,
    rotate: 4,
    translateX: 2,
    duration: 1000,
    elasticity: 0,
    easing: 'easeOutExpo'
  });
  anime({
    targets: beakTop,
    rotateZ: 7,
    duration: 1000,
    elasticity: 0,
    easing: 'easeOutExpo'
  });
  anime({
    targets: eye,
    translateX: -8,
    translateY: 15,
    scaleY: -1,
    duration: 600,
    elasticity: 0,
    easing: 'easeOutExpo'
  });
  anime({
    targets: body,
    translateX: 2,
    rotateY: -16,
    translateY: -2,
    duration: 1100,
    elasticity: 0,
    easing: 'easeOutExpo'
  });

}

function aninmateType(inputLength) {
  switch (true) {
    case inputLength == 3:
      console.log(inputLength);
      anime({
        targets: eye,
        translateX: -6,
        translateY: 15,
        duration: 500,
        elasticity: 0,
        easing: 'easeOutExpo'
      });
      break;
    case inputLength == 7:
      console.log(inputLength);
      anime({
        targets: head,
        rotate: 5,
        translateX: 3,
        duration: 600,
        elasticity: 0,
        easing: 'easeOutExpo'
      });
      anime({
        targets: beakTop,
        rotateZ: 7,
        translateX: 2,
        duration: 1000,
        elasticity: 0,
        easing: 'easeOutExpo'
      });
      anime({
        targets: eye,
        translateX: -4,
        translateY: 15,
        duration: 400,
        elasticity: 0,
        easing: 'easeOutExpo'
      });
      anime({
        targets: body,
        translateX: 2,
        rotateY: -10,
        translateY: -1,
        duration: 1000,
        elasticity: 0,
        easing: 'easeOutExpo'
      });
      break;
    case inputLength == 10:
      console.log(inputLength);
      anime({
        targets: eye,
        translateX: -1,
        translateY: 13,
        scaleY: -1,
        duration: 500,
        elasticity: 0,
        easing: 'easeOutExpo'
      });
      break;
    case inputLength == 14:
      console.log(inputLength);
      anime({
        targets: eye,
        translateX: 5,
        translateY: 13,
        scaleY: -1,
        duration: 500,
        elasticity: 0,
        easing: 'easeOutExpo'
      });
      anime({
        targets: beakTop,
        rotateZ: 2,
        translateX: 3,
        duration: 1000,
        elasticity: 0,
        easing: 'easeOutExpo'
      });
      anime({
        targets: head,
        rotate: 5,
        translateX: 3,
        duration: 500,
        elasticity: 0,
        easing: 'easeOutExpo'
      });
      anime({
        targets: body,
        translateX:4,
        rotateY: -6,
        translateY: -0,
        duration: 1000,
        elasticity: 0,
        easing: 'easeOutExpo'
      });
      break;
    case inputLength == 18:
      console.log(inputLength);
      anime({
        targets: eye,
        translateX: 0,
        translateY: 0,
        scaleY: 1,
        duration: 500,
        elasticity: 0,
        easing: 'easeOutExpo'
      });
      anime({
        targets: head,
        rotate: 0,
        translateX: 0,
        duration: 500,
        elasticity: 0,
        easing: 'easeOutExpo'
      });
      anime({
        targets: body,
        translateX: 0,
        rotateY: 0,
        translateY: 0,
        duration: 1000,
        elasticity: 0,
        easing: 'easeOutExpo'
      });
      break;
    default:

  }
}


function lookBack() {
  console.log('mouse enter');
  var back = 500;
  anime({
    targets: head,
    rotate: 0,
    translateX: 0,
    translateY: 0,
    duration: back,
    elasticity: 0,
    easing: 'easeOutExpo'
  });
  anime({
    targets: eye,
    translateX: 0,
    translateY: 0,
    duration: back,
    elasticity: 0,
    easing: 'easeOutExpo'
  });
}

input.focus(function() {
  lookLeft();
});


input.on('input', function(){
  aninmateType(input.val().length);
})


// frame.addEventListener('mouseenter', lookLeft, false);
// frame.addEventListener('mouseleave', lookBack, false);
