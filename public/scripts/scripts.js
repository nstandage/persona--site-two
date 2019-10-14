//--------------------- JSON Data ----------------

let json = `
[
    		{
                "id": "penny-wise",
    			"title": "Penny Wise",
    			"body": "Penny Wise is an iOS app that allows food service workers to keep track of their tips and hours works."
    		},
    		{
                "id": "fat-cats",
    			"title": "Fat Cats",
    			"body": "fat cats body"
    		},
    		{
                "id": "test-prep-tech",
    			"title": "Test Prep Tech",
    			"body": "test prep tech body"
    		},
    		{
                "id": "brother",
    			"title": "Brother.",
    			"body": "brother body"
    		},
    		{
                "id": "roadie",
    			"title": "Roadie",
    			"body": "roadie body"
    		},
    		{
                "id": "personal",
    			"title": "Personal",
    			"body": "personal body"
    		}
    	]
`;
let data = JSON.parse(json);

//--------------- Animations --------------

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
  targets: "#infoBody",
  opacity: [0, 1],
  direction: "normal",
  easing: "spring(1, 80, 10, 0)",
  duration: 1100,
  delay: 1200
});

anime({
  targets: "#infoBody",
  translateX: [20, 0],
  direction: "normal",
  easing: "spring(1, 80, 10, 0)",
  duration: 1100,
  delay: 1200
});

function someFunction() {
  console.log("visited");
}

function infoChange(data) {
  var tl = new TimelineLite();

  tl.to("#infoTitle", 0.3, {
    x: -100,
    opacity: 0
  })
    .to("#infoBody", 0.5, {
      x: 100,
      opacity: 0
    })
    .call(changeText, [data])
    .to("#infoTitle", 0.5, {
      x: 0,
      opacity: 1
    })
    .to("#infoBody", 1, {
      x: 0,
      opacity: 1
    });
}

function changeText(id) {
  let data = getInfoData(id);

  document.getElementById("infoTitle").innerHTML = data.title;
  document.getElementById("infoBody").innerHTML = data.body;
}

function getInfoData(id) {
  console.log("ID: ", id);
  var title = "";
  var body = "";

  for (let i = 0; i < data.length; i++) {
    if (data[i].id == id) {
      console.log(data[i]);
      title = data[i].title;
      body = data[i].body;
    }
  }

  console.log(`Title: ${title}, Body: ${body}`);
  return { title: title, body: body };
}

document.getElementById("menu-hamburger").onclick = function() {
  document.getElementById("dropdown-mobile").style.display = "flex";
};

document.getElementById("dropdown-mobile").onclick = function() {
  document.getElementById("dropdown-mobile").style.display = "none";
};
