var cunningham9 = document.querySelector('.cunningham9');
var easingStyle = 'easeInOutElastic';
var durationTime = 1200;

function splode() {
  anime({
    targets: "#cunningham9-woman1",
    top: 8,
    easing: easingStyle,
    duration: 1000,
  });
  anime({
    targets: "#cunningham9-woman2",
    top: 102,
    easing: easingStyle,
    duration: 1000,
  });
  anime({
    targets: "#cunningham9-woman3",
    top: 199,
    easing: easingStyle,
    duration: 1000,
  });
  anime({
    targets: "#cunningham9-woman4",
    top: 303,
    easing: easingStyle,
    duration: 1000,
  });
  anime({
    targets: "#cunningham9-machine1",
    top: 97,
    easing: easingStyle,
    duration: 1000,
  });
  anime({
    targets: "#cunningham9-machine2",
    top: 197,
    easing: easingStyle,
    duration: 1000,
  });
  anime({
    targets: "#cunningham9-machine3",
    top: 314,
    easing: easingStyle,
    duration: 1000,
  });
}

function unsplode() {
  anime({
    targets: "#cunningham9-woman1",
    top: 60,
    easing: easingStyle,
    duration: 1000,
  });
  anime({
    targets: "#cunningham9-woman2",
    top: 127,
    easing: easingStyle,
    duration: 1000,
  });
  anime({
    targets: "#cunningham9-woman3",
    top: 185,
    easing: easingStyle,
    duration: 1000,
  });
  anime({
    targets: "#cunningham9-woman4",
    top: 250,
    easing: easingStyle,
    duration: 1000,
  });
  anime({
    targets: "#cunningham9-machine1",
    top: 140,
    easing: easingStyle,
    duration: 1000,
  });
  anime({
    targets: "#cunningham9-machine2",
    top: 185,
    easing: easingStyle,
    duration: 1000,
  });
  anime({
    targets: "#cunningham9-machine3",
    top: 280,
    easing: easingStyle,
    duration: 1000,
  });
}

cunningham9.addEventListener("mouseenter", splode, false);
cunningham9.addEventListener("mouseleave", unsplode, false);
