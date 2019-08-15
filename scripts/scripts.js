var tl = anime.timeline({
  easing: "easeOutExpo",
  duration: 1200
});

tl.add({
  targets: ".logo",
  scale: [0.5, 1],
  translateX: [-300, 0],
  opacity: [0, 1]
})
  .add(
    {
      targets: ".visitContainer",
      scale: [0.5, 1],
      translateX: [-300, 0],
      opacity: [0, 1]
    },
    "120"
  )
  .add(
    {
      targets: ".contactContainer",
      scale: [0.5, 1],
      rotate: [0, -90],
      opacity: [0, 1]
    },
    "600"
  );

// anime({
//   targets: ".menuIcon",
//   keyframes: [
//     { opacity: 0 },
//     { translateX: -270 },
//     { translateX: 0 },
//     { opacity: 1 }
//   ],
//   delay: anime.stagger(130) // increase delay by 100ms for each elements.
// });

anime({
  targets: ".bracketIcon",
  translateX: [300, 0],
  opacity: [0, 1],
  direction: "normal",
  easing: "easeInOutSine",
  delay: 400,
  duration: 1200
});

anime({
  targets: ".musicNoteIcon",
  translateX: [300, 0],
  opacity: [0, 1],
  direction: "normal",
  easing: "easeInOutSine",
  duration: 1200,
  delay: 600
});

anime({
  targets: "#infoTitle",
  opacity: [0, 1],
  scale: [0.8, 1],
  direction: "normal",
  duration: 1400,
  easing: "spring(1, 80, 10, 0)",
  delay: 1000
});

anime({
  targets: "#infoTitle",
  translateX: [-20, 0],
  direction: "normal",
  duration: 1400,
  easing: "spring(1, 80, 10, 0)",
  delay: 1000
});

anime({
  targets: "#infoText",
  opacity: [0, 1],
  scale: [0.8, 1],
  direction: "normal",
  easing: "spring(1, 80, 10, 0)",
  duration: 1100,
  delay: 1200
});

anime({
  targets: "#infoText",
  translateX: [20, 0],
  direction: "normal",
  easing: "spring(1, 80, 10, 0)",
  duration: 1100,
  delay: 1200
});

function someFunction() {
  console.log("visited");
}
