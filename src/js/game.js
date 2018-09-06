function degreesToRadians(degrees) {
  return (degrees * Math.PI) / 180;
}
var canvas_overlay = document.getElementById("gameoverlay");
var canvas = document.getElementById("offline");
var game_background = document.getElementById("gamebackground");
var ctx = canvas.getContext("2d");
var ctx2 = canvas_overlay.getContext("2d");
var ctx3 = game_background.getContext("2d");

var spaceshipSprite = new Image();
spaceshipSprite.src =
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAAkklEQVQ4T2NkoBJgpJI5DBgG1aRY/AcZ3jLnBEmWoCiGGQJzJSmGwQ1CNwTZy8QYCDYInyHoYYjLUEZ8hpw5cYPBxEIDZ3wgG4phEEgzDKAbMmXJCYacGAsMg0EGohiEzxCQbpBBIIDNMNoYBLKNKl5D9zxJgU216Ie5gioJEpdhxKRomF7aZFpKihSSigp8FgEA8g1SQRynQiMAAAAASUVORK5CYII=";

var spaceshipSprite90 = new Image();
spaceshipSprite90.src =
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAAoElEQVQ4T2NkwAFqUiz+Y5NqmXOCEZs4VkFchsAMwGYYhkGEDMFlGIpB2Aw5c+IGWK+JhQaGj5BdBjcInyEwE/AZRn2DQLaiuwrkLZgrkNnYwglnYGPTiCyGHnO0iTWYkwklAaLSEbawQo93kg2asuQEihk5MRZgPtEGIbsKZhg+Q0DqseY1fN4jKdNS1SBshuFyDV6vUdUgZMPwuQakDgBXWmMThABYawAAAABJRU5ErkJggg==";

var spaceshipSprite180 = new Image();
spaceshipSprite180.src =
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAAkklEQVQ4T2NkoBJgpJI5DCQbVJNi8R9kecucEyh6STIIZgjMF8iGEWUQugHIwQEzDKdB+DSjhyvIMBSD8Gk+c+IGg4mFBs64ARuEzYApS04w5MRYoGgEGQYD6IYy4jIEpAHdIJAYLsOoZxDVvIYcCBQHNraooCj6ccUtRQmSGFeSnEWwhSNFmRZfkUNUpiWmzAIAtG5KnVb/SQsAAAAASUVORK5CYII=";

var spaceshipSprite270 = new Image();
spaceshipSprite270.src =
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAAoUlEQVQ4T2NkIABqUiz+g5S0zDnBiE8pXkmYITAD8BlGe4PQXUPIVThdRHWDpiw5AXZMTowFmMYVTlhdBHMNzBCYt/AZhtcgXNGNzVW0MwhXIKO7Dt1VGC6CGXTmxA0GEwsNFP3IYngNQncNskZsBiMbBncRNi+BNCMDdBciJwfqGwQyHZ+r8LkGpBdnYBMqXgjGGi6XIRtMdILEZxiuvAYA0MVjEyb3BAYAAAAASUVORK5CYII=";

var spaceshipSprite45 = new Image();
spaceshipSprite45.src =
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAABM0lEQVQ4T62UwU7CQBCG/8V3Ec9qZPsu3tyjb0A9WXgFDpSzCS8iksbEC4GLjyHY0B0ySxamdrtIQpMm3enM13//nanChS51IQ6CoNT0CIFXnPyaz4I1jWBqNMVVKmT5e6OuFngxmjzF2v2TUnwf09pUHTLkdn7WJRZf3w50r29qAhk/CGzvAOobTbxgJZ/zVWN3EpjFQQkpUCtIqouCvMlE5DwpZkun6vbh2q2lTxz/CxMeHU9Lbu+u161BKku46ijXHLIVgiBvEKuSoN9yi/G0wPOjhoXCULRBFCQd35Rb5NPChRjElzzBls5OyHvF6VVlMXqb1yD7jxCy/MMxTs4aH4IlQkc0pVTqTT8J4qL0KSELhoWHh2H/Avny0BzyTA0mZ4KkntQkbhj9AJ+lKPZX2AFWpoYTnQlTjwAAAABJRU5ErkJggg==";

var spaceshipSprite135 = new Image();
spaceshipSprite135.src =
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAABKElEQVQ4T62UQW6CQBSG34CxtcdwY+OmSUNavIgLt9BFr9Cyk96gS5beRTDatXqYeeafwPgKMwYT3gKYMP/H/w9vRtFApQbikBeUpTHLj7CZiitTXlQdXW+QhEK0Lsp/2l4gZiau/QXBVZILmBOUpQtGDJTWTBDvy6MZz1+m9DQZ1wavMZ2g7yRmVb9pADLa69vMwFGNq5uOXBCIe4Hk38LaoHD/253NcxQ/m7GqLTsdZcmCNWlizRSGgU0D4aE6WZCM6QR9JTEj+u+mpHQZ0eN4ZDWICTft6oBkJIBQH8uIHgSsDZH9ZBe73ckN7HP1TqHoHawaQqPH82Jr9V6QL4JvbxqQbEA5UZOikLizHVwwD4iN9Z/Wfrp1UthoTTfL/XPPETPYeXQBoWp+EwVmwDMAAAAASUVORK5CYII=";

var spaceshipSprite225 = new Image();
spaceshipSprite225.src =
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAABNklEQVQ4T62UQU7DMBBFvx1UCsdgA2KDhKLiXqQSa8yCK9CyIr1Bl+mOu5BWhTVwFzponExsUidppVqKFNuZ5z/fM1E40lDCmdkx8XuWv9drh5zhgqYPhlQkPMuLvaHuw5k1Tk1zbAnQUMiW/SqD1NpgBK0U+tQFoDsCfCaLt8IJfLofIUk0eI+IoBx0V2EdObWGZCIQO0kxHJx0ei5K/5n5bMekQWDQ4yTFaQVhJR+rb6TmagcaBb1YQ+z675aQaH+GgJhyO7qEDvaioNgNMoSfz/WPU8OqxKuy7soSidaJlMOm+Ir6I6oICvPK+E4QU2IwDwLmXYrCGxRJAry+ucD52aBaJmT5qj01MV0gpU/lTIzm6NeghVpS4waOdk3tWbPSW5uyqcq77tMJb2Lv7u77pRwN9AeZLX8TGq1ymgAAAABJRU5ErkJggg==";

var spaceshipSprite315 = new Image();
spaceshipSprite315.src =
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAABKUlEQVQ4T62UTU7DMBCFn30YYN1WxNyFZZbcoO0ucAUWpFsWvUgLipDYINhwDH6ixoPG6aSuHVq3qqVIkeX58t68cRROtNSxnEluiAi4nS0d4yDQODekQEGZQlEuVBJomhtqoKAdJFyJILawy35R9lib5FdOug3EN5Zw//jkeDfXZosbgVj+rk//1is8zKsIFoH6LFTLd4zMRafgp16hnFdOlSXgbp3YVmohiCG8htk5lJdJ01gozY3XKGaLLqzuRUA8HFwooMHlWQfygWJJ5EYgawkvzx+9QbU227jjIVjviKL/QNIrf5p9mKcoIxn0r+8ab6+f7hwDGK61HN2jiIv8hnOxS0Pxs3ES9ibqkWzsm6dkUKss4+xcY9tLulkHgY75tSTd/hTwH+MOhBNcL4PdAAAAAElFTkSuQmCC";

var w = canvas.width;
var h = canvas.height;
var w_ctx = canvas_overlay.width;
var h_ctx = canvas_overlay.height;

var starColours = ["#ffffff", "#ffe9c4", "#d4fbff"];

function random(min, max) {
  return Math.round(Math.random() * max - min + min);
}

var spaceship = {
  maxSpeed: 2.5,
  position: {
    x: 0,
    y: 0
  },
  velocity: {
    x: 0,
    y: 0
  },
  height: 18,
  width: 18,
  angle: 0,
  engineOn: false,
  rotatingLeft: false,
  rotatingRight: false,
  fuel: 100,
  eva: 50
};
function updateSpaceship() {
  console.log(spaceship.fuel + " " + spaceship.eva);

  if (spaceship.position.x < 0) {
    spaceship.position.x = w;
  }
  // sprite is beyond the right edge
  else if (spaceship.position.x > w) {
    spaceship.position.x = 0;
  }
  // sprite is beyond the top edge
  if (spaceship.position.y < 0) {
    spaceship.position.y = h;
  }
  // sprite is beyond the bottom edge
  else if (spaceship.position.y > h) {
    spaceship.position.y = 0;
  }

  spaceship.position.x += spaceship.velocity.x;
  spaceship.position.y += spaceship.velocity.y;

  const cos = Math.cos(degreesToRadians(spaceship.angle));
  const sin = Math.sin(degreesToRadians(spaceship.angle));

  if (spaceship.eva >= 0) {
    if (spaceship.rotatingRight) {
      if (spaceship.angle >= 360) {
        spaceship.angle = 0;
      }
      spaceship.angle += 4;
      spaceship.eva = spaceship.eva - 0.05;
    } else if (spaceship.rotatingLeft) {
      if (spaceship.angle <= -360) {
        spaceship.angle = 0;
      }
      spaceship.angle -= 4;
      spaceship.eva = spaceship.eva - 0.1;
    }
  }

  if (spaceship.engineOn && spaceship.fuel >= 0) {
    if (
      spaceship.velocity.x * spaceship.velocity.x +
        spaceship.velocity.y * spaceship.velocity.y <
      20 * 20
    ) {
      spaceship.velocity.x += 0.05 * cos;
      spaceship.velocity.y += 0.05 * sin;
    }
    spaceship.fuel = spaceship.fuel - 0.3;
  }
}

function drawSpaceship() {
  ctx.clearRect(0, 0, w, h);
  ctx.save();
  ctx.beginPath();
  ctx.translate(spaceship.position.x, spaceship.position.y);
  // translate context to center of canvas
  if (spaceship.angle >= 0 && spaceship.angle <= 44) {
    ctx.drawImage(spaceshipSprite, 0, 0);
  } else if (spaceship.angle >= 45 && spaceship.angle <= 89) {
    ctx.drawImage(spaceshipSprite45, 0, 0);
  } else if (spaceship.angle >= 90 && spaceship.angle <= 134) {
    ctx.drawImage(spaceshipSprite90, 0, 0);
  } else if (spaceship.angle >= 135 && spaceship.angle <= 179) {
    ctx.drawImage(spaceshipSprite135, 0, 0);
  } else if (spaceship.angle >= 180 && spaceship.angle <= 224) {
    ctx.drawImage(spaceshipSprite180, 0, 0);
  } else if (spaceship.angle >= 225 && spaceship.angle <= 269) {
    ctx.drawImage(spaceshipSprite225, 0, 0);
  } else if (spaceship.angle >= 270 && spaceship.angle <= 314) {
    ctx.drawImage(spaceshipSprite270, 0, 0);
  } else if (spaceship.angle >= 315 && spaceship.angle <= 360) {
    ctx.drawImage(spaceshipSprite315, 0, 0);
  } else if (spaceship.angle <= 0 && spaceship.angle >= -44) {
    ctx.drawImage(spaceshipSprite, 0, 0);
  } else if (spaceship.angle <= -45 && spaceship.angle >= -89) {
    ctx.drawImage(spaceshipSprite315, 0, 0);
  } else if (spaceship.angle <= -90 && spaceship.angle >= -134) {
    ctx.drawImage(spaceshipSprite270, 0, 0);
  } else if (spaceship.angle <= -135 && spaceship.angle >= -179) {
    ctx.drawImage(spaceshipSprite225, 0, 0);
  } else if (spaceship.angle <= -180 && spaceship.angle >= -224) {
    ctx.drawImage(spaceshipSprite180, 0, 0);
  } else if (spaceship.angle <= -225 && spaceship.angle >= -269) {
    ctx.drawImage(spaceshipSprite135, 0, 0);
  } else if (spaceship.angle <= -270 && spaceship.angle >= -314) {
    ctx.drawImage(spaceshipSprite90, 0, 0);
  } else if (spaceship.angle <= -315 && spaceship.angle >= -360) {
    ctx.drawImage(spaceshipSprite45, 0, 0);
  }
  ctx.closePath();
  ctx.restore();
}

function drawFuel() {
  ctx.beginPath();
  ctx.rect(w_ctx - spaceship.eva, 5, spaceship.eva, 5);
  ctx.fillStyle = "#FF0000";
  ctx.fill();
  ctx.closePath();

  ctx.beginPath();
  ctx.rect(w_ctx - spaceship.fuel, 15, spaceship.fuel, 5);
  ctx.fillStyle = "#FF0000";
  ctx.fill();
  ctx.closePath();
}

function star_field(context, star_number) {
  var x, // x position of the star
    y, // y position of the star
    brightness, // brightness of the star
    radius; // radius of the star

  // draw the blank night sky
  context.fillStyle = "#000";

  // save the previous canvas context state
  context.save();

  for (var i = 0; i < star_number; i++) {
    x = Math.random() * w; // random x position
    y = Math.random() * h; // random y position
    radius = Math.random() * 1.5; // random radius
    brightness = random(80, 100) / 100;

    // start drawing the star
    context.beginPath();
    // set the brightness of the star
    context.globalAlpha = brightness;
    // choose a random star colour
    context.fillStyle = starColours[random(0, starColours.length)];
    // draw the star (an arc of radius 2 * pi)
    context.arc(x, y, radius, 0, Math.PI * 2, true);
    // fill the star and stop drawing it
    context.fill();
    context.closePath();
  }

  // restore the previous context state
  context.restore();
}

function drawSpacstation() {
  // set origin to center
  ctx.beginPath();

  ctx.translate(w / 2, h / 2);

  ctx.rotate(i / 100);
  ctx.rect(-20, -20, 40, 40);
  ctx.fillStyle = "#FF0000";
  ctx.fill();
  ctx.closePath();

  ctx.rect(20, -5, 10, 10);
  ctx.fillStyle = "#FF00FF";
  ctx.fill();
  ctx.closePath();
  // rotate + move along x

  // draw planet
  ctx.restore();
}

var i = 0;

function init() {
  // create a star field
  star_field(ctx3, 200);
}

init();

function collision_detection() {
  console.log(spaceship.position.x + " " + spaceship.position.y);
}

var redraw = function() {
  ctx.save();
  // paint bg

  updateSpaceship();
  drawSpaceship();
  drawSpacstation();
  drawFuel();
  collision_detection();

  if (spaceship.fuel <= 0 && spaceship.eva <= 0) {
    console.log("game over");
  }

  i++;
  window.requestAnimationFrame(redraw);
};
window.requestAnimationFrame(redraw);

function keyPressed(event) {
  switch (event.keyCode) {
    case 37:
      // Left Arrow key
      spaceship.rotatingLeft = true;
      break;
    case 39:
      // Right Arrow key
      spaceship.rotatingRight = true;
      break;
    case 38:
      // Up Arrow key
      spaceship.engineOn = true;
      break;
  }
}
document.addEventListener("keydown", keyPressed);

function keyLetGo(event) {
  switch (event.keyCode) {
    case 37:
      // Left Arrow key
      spaceship.rotatingLeft = false;
      break;
    case 39:
      // Right Arrow key
      spaceship.rotatingRight = false;
      break;
    case 38:
      // Up Arrow key
      spaceship.engineOn = false;
      break;
  }
}

document.addEventListener("keyup", keyLetGo);
