let bodyId = 0;
let headId = 0;
let hairId = 0;

let bodies = [
  {
    path: "./bodies/body1.jpg",
    h: 600,
    w: 375,
    x: 150,
    y: 250,
  },
  {
    path: "./bodies/body2.jpg",
    h: 700,
    w: 425,
    x: 150,
    y: 132,
  },
  {
    path: "./bodies/body3.jpg",
    h: 800,
    w: 455,
    x: 108,
    y: 118,
  },
  {
    path: "./bodies/body4.jpg",
    h: 800,
    w: 455,
    x: 175,
    y: 118,
  },
  {
    path: "./bodies/body5.jpg",
    h: 700,
    w: 250,
    x: 255,
    y: 150,
  },
];
let heads = [
  {
    path: "./heads/head1.jpg",
    h: 225,
    w: 175,
    x: 280,
    y: 130,
  },
  {
    path: "./heads/head2.jpg",
    h: 255,
    w: 155,
    x: 293,
    y: 147,
  },
  {
    path: "./heads/head3.jpg",
    h: 210,
    w: 205,
    x: 258,
    y: 138,
  },
  {
    path: "./heads/head4.jpg",
    h: 195,
    w: 160,
    x: 290,
    y: 105,
  },
  {
    path: "./heads/head5.jpg",
    h: 300,
    w: 300,
    x: 215,
    y: 123,
  },
];

let hairstyles = [
  { path: "./hairstyles/hair1.jpg", h: 225, w: 225, x: 255, y: 80 },
  {
    path: "./hairstyles/hair2.jpg",
    h: 125,
    w: 125,
    x: 300,
    y: 115,
  },
  {
    path: "./hairstyles/hair3.jpg",
    h: 150,
    w: 150,
    x: 290,
    y: 125,
  },
  {
    path: "./hairstyles/hair4.jpg",
    h: 200,
    w: 200,
    x: 270,
    y: 130,
  },
  {
    path: "./hairstyles/hair5.jpg",
    h: 125,
    w: 125,
    x: 300,
    y: 115,
  },
];

function renderHero(hair, head, body) {
  const canvas = document.getElementById("canvas");
  const ctx = canvas.getContext("2d");
  canvas.style.left = "500px";
  canvas.style.top = "-3px";
  canvas.style.position = "absolute";
  let hairImg = new Image();
  let bodyImg = new Image();
  let headImg = new Image();

  bodyImg.onload = function () {
    ctx.drawImage(bodyImg, body.x, body.y, body.w, body.h);
    headImg.src = head.path;
  };
  headImg.onload = function () {
    ctx.drawImage(headImg, head.x, head.y, head.w, head.h);
    hairImg.src = hair.path;
  };
  hairImg.onload = function () {
    ctx.drawImage(hairImg, hair.x, hair.y, hair.w, hair.h);
  };

  bodyImg.src = body.path;
}

renderHero(hairstyles[hairId], heads[headId], bodies[bodyId]);

function downloadCanvas() {
  const link = document.createElement("a");
  link.download = "my-hero.png";
  link.href = document.getElementById("canvas").toDataURL();
  link.click();
}
function ready() {
  ctx.clearRect(0, 0, 1000, 1000);
}
document.addEventListener("keydown", function (event) {
  if (event.code == "KeyQ") {
    if (hairId < hairstyles.length - 1) {
      hairId++;
    } else {
      hairId = 0;
    }
    renderHero(hairstyles[hairId], heads[headId], bodies[bodyId]);
  }
  if (event.code == "KeyE") {
    if (hairId > 0) {
      hairId--;
    } else {
      hairId = hairstyles.length - 1;
    }
    renderHero(hairstyles[hairId], heads[headId], bodies[bodyId]);
  }
  if (event.code == "KeyA") {
    if (headId <= heads.length - 2) {
      headId++;
    } else {
      headId = 0;
    }
    renderHero(hairstyles[hairId], heads[headId], bodies[bodyId]);
  }
  if (event.code == "KeyD") {
    if (headId > 0) {
      headId--;
    } else {
      headId = heads.length - 1;
    }

    renderHero(hairstyles[hairId], heads[headId], bodies[bodyId]);
  }
  if (event.code == "KeyZ") {
    if (bodyId <= bodies.length - 1) {
      bodyId++;
    } else {
      bodyId = 0;
    }

    renderHero(hairstyles[hairId], heads[headId], bodies[bodyId]);
  }
  if (event.code == "KeyC") {
    if (bodyId > 0) {
      bodyId--;
    } else {
      bodyId = bodies.length - 1;
    }
    renderHero(hairstyles[hairId], heads[headId], bodies[bodyId]);
  }
});

document.getElementById("download").addEventListener("click", downloadCanvas);
document.addEventListener("DOMContentLoaded");
