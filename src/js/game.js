var canvas = document.getElementById("offline");
var game_background = document.getElementById("gamebackground");
var ctx = canvas.getContext("2d");
var ctx3 = game_background.getContext("2d");

var spaceshipSprite = new Image();
spaceshipSprite.src =
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAmUlEQVQ4T2NkoBAwUqifAW7Ajh07/sMM8/DwINpgsEKYZgUFBYYHDx6AzSHWEEZsmnF5C5uhYAOQbYZpXrBgAUNCQgJWs5ANgrsAWSOIja7Z48cHhh0cAigGggxCMQBkK7JmkMtgQOPGBTDzhoYBmIaFFXUNAJmM7gp41OLzAlUCEZsh6FGANRopTkgwWyhKypRkKKIzDS5LAMVPZF9LV4F+AAAAAElFTkSuQmCC";

var spaceshipSprite90 = new Image();
spaceshipSprite90.src =
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAqUlEQVQ4T9WTvRHAIAiFY5cyIziOYziaYziOI6RMlxzePe+Bf3WshPA+EIg7zMk5v9bHdgjBsa0MiL33RylFcdjHkAZYiUEaQRTAZk4pVW2MsVWDGFTRVYBIiGEzRHwdQJzcQAFAxHcWy101ERArED98yynYKuS9cngiPwKE51aLlM+r2tsncB8AmYmHU2CAbaLNPgUAwoCReAtY/YX41i0Si7CZs+wS+wFDwXkR1F6BpQAAAABJRU5ErkJggg==";

var spaceshipSprite180 = new Image();
spaceshipSprite180.src =
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAkUlEQVQ4T6XTsQ2AIBAF0KOzdARKSse4MRiNMRjDkpIRLO00dwkGCBjgqPmPfDgUCJcS5mEK8N4/6UBE5OwwkMJaa4gxskNIE8hPalXMkQLoBZ1zYK0trIQwUAfxvsBvexEghFYNqbwbbTDh5I3BHB+QOrcQOSCukBddvsT6qZaf8W+spwapB4lGuYcO/4Ue8AKKHF9JrVmWNQAAAABJRU5ErkJggg==";

var spaceshipSprite270 = new Image();
spaceshipSprite270.src =
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAq0lEQVQ4T82TwRGAIAwE9efTEiiHMiiNMiiHEnz60wnDMUdMeJuPM8Itl3Ds26JKKY8sxxh3b5u7ADGEHmQJCCE0fa3VdWECcDoDvFaWgHhfzUE5zva12vgAxuC6GDPwIC5AhLoFy8VPATnnLaU0ZQf/9CCnFjg8DNFAhgyATp6IuLQjQCaATF1ShwKExdhjAnB1DGEXfMAH0BLXX592osHmDEbiOsR7vvoWXkPxeRGk03K5AAAAAElFTkSuQmCC";

var spaceshipSprite45 = new Image();
spaceshipSprite45.src =
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAASCAYAAABSO15qAAAAqUlEQVQ4T6WUQRLAEAxF2XXZW3EMR3MMbtVld+3ENCZImsywMsZ//k/g3ebwm3q3AEopDweNMbKHDYtUHELonFprm3OQDpBOpm5EwCzOOTddSmlJM0OaAwpAMVVSkAiAzJCVA1A3KgA2/0WYi9kjoAMLgEKWGmB2cDEXMd6XK8c5tNTcRhC3gn8AdGG6iZxYBND2aZcLOqI+Jg2iAtCRBDIDuGimCNp/8QIrlmFh0/jZJgAAAABJRU5ErkJggg==";

var spaceshipSprite135 = new Image();
spaceshipSprite135.src =
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAASCAYAAABSO15qAAAAp0lEQVQ4T6XUMRKEIAwFUOgsvRUcg6NxDLiVpd063zFMiEnGHags/I8koDEsrriYDybQWvtpeM55yqgAhVNKw+i9j2eOuIDXHiEvQCu91npbpZTJBOICFOQpjriAFqYqMBvM5AVYk5ctqIAVxq5/Afk8Qtv2aVgA5ADxwmiB7w4ASyLySKdjlOV7iHoTvf6pVOtSxZUwUBOQpZoV3AN7vryvIY4t/w8uwV1jE5vOMHwAAAAASUVORK5CYII=";

var spaceshipSprite225 = new Image();
spaceshipSprite225.src =
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAASCAYAAABSO15qAAAArklEQVQ4T6WTPQ7AIAiFdevYW+kxPJrH0Ft1dGuDCYbyYzVl0aZ5n8AD736GB30p5YYzxti/d8KjmItWYSYAgV+gVwlW6jOICojt6qxynILJYQIwE1MagkbXhxPtEi/nnF1KSc1GALQ+AAACISEEV2vttr98tyxdBtChQhHPCLIwM6AAuGsQ2gtRAgfg67wEOmTq7Fu9mNpIfyIAasWArmvjbW7f6pJtry935TfgAZzGYxMjRFNzAAAAAElFTkSuQmCC";

var spaceshipSprite315 = new Image();
spaceshipSprite315.src =
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAASCAYAAABSO15qAAAApklEQVQ4T6WTsQ3EIBAEIfvwu4IyKI0yoCuHzvw6pEXAr72WfQEJmrlbTnj3svwTvpRyGBdj9LcFgNaGUnAGQnQpUDCNwKC4b61h+XynBJNAdiOSLmBwztmllOaO+9anMNgu22GCEIKrtTbAYKtVMNpeCQDTCdB93TemGeFJAIAJxihSoN6ACvCQ6l+scI8AcFynbQWF7UjB1SQM/ptARWD38jcq6Q/cTWFhP4NJPwAAAABJRU5ErkJggg==";

var spacestationSprite = new Image();
spacestationSprite.src =
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAACxklEQVR4Xu1b21HEMAwktEALSXFURHFJC7TAMWROnmEPsZJlO845/B1ObGu1ejqeXir/ret6iyyxLMsUeZ+9W3Xyn8WHAcAq6DzP/ypl2zamtH28FDOKMWA4ADSBUcNWjWpqn98+fg1tn+9/PprLiGwGDAuACL7Mr7sm1u3rX5vVNGM1GZkcmSD/R0Z4meBmwLAAMI15kZf5xGegr9AYVpoJZgYMC4AmuFfj6CgYoCwZKMUEyoBhAagluGgWfcA0Tbsy1HWVqBNlgsqAYQHQwlzU5pkPwPm9PiKXCQ8MuABQ6vdaDJA8QHwAY4qM5+YJKIfKANzI0wNQ2+kxzTKAoz5BqxkSAy4A7raPuTnTDMvYtHEE3LpONE8QJsh6Dwy4ALj37KQ6s2rGygRmy9b12Dy4H8kTDmcA23hzAGo7PyYwYw4DxOsTcL3pAsCY+aUU+X5Sw35rVV/q5UH/X+smMwbgOoxR2QxgAuP46QBg4c8LAJqW1vt78NYQhVLubzwjZD4H95F8wAWAgjwCw35bbVCquWQq5HzBOi97zsyAdCABwAwHAEM0dzzKAKYIzee4GZArIHuvewCs8dda7ZWKAt5opIVjqXXMUYBplDU8ugegVgsM+//RTDDKgOxM0MuAWpngaQHIBTDqi1itcPpq0AqsliI3b4mxXL2UxpnmD+sJDg+AppnSmu+WAd0DUDsf0JxWNwwYFgCrzVjDDnvudrvtX5G3Pn/o5nS4ewDw/D1qo0eFPyZHsy9ETgNAK19QywS8Bz2HfSXWPQClmVDbBLyaF/mafSl6WgAYE2TcGyWiJlAKUMqACwBI6VJLqvCNkVI3S7xMNDMAmVD6ysxpAGAmUfrWmKzH5vVq3hwFtKJGc0Jso6xI0sbZvM0BwI0yr6xpEuex3jPMFRjXc/sALyPw+ae9OhsFpnWnKOwDrLZsNY2jAPgGjQYXfQbG4aMAAAAASUVORK5CYII=";

var letters = (letters = {
  A: [[, 1], [1, , 1], [1, , 1], [1, 1, 1], [1, , 1]],
  B: [[1, 1], [1, , 1], [1, 1, 1], [1, , 1], [1, 1]],
  C: [[1, 1, 1], [1], [1], [1], [1, 1, 1]],
  D: [[1, 1], [1, , 1], [1, , 1], [1, , 1], [1, 1]],
  E: [[1, 1, 1], [1], [1, 1, 1], [1], [1, 1, 1]],
  F: [[1, 1, 1], [1], [1, 1], [1], [1]],
  G: [[, 1, 1], [1], [1, , 1, 1], [1, , , 1], [, 1, 1]],
  H: [[1, , 1], [1, , 1], [1, 1, 1], [1, , 1], [1, , 1]],
  I: [[1, 1, 1], [, 1], [, 1], [, 1], [1, 1, 1]],
  J: [[1, 1, 1], [, , 1], [, , 1], [1, , 1], [1, 1, 1]],
  K: [[1, , , 1], [1, , 1], [1, 1], [1, , 1], [1, , , 1]],
  L: [[1], [1], [1], [1], [1, 1, 1]],
  M: [
    [1, 1, 1, 1, 1],
    [1, , 1, , 1],
    [1, , 1, , 1],
    [1, , , , 1],
    [1, , , , 1]
  ],
  N: [[1, , , 1], [1, 1, , 1], [1, , 1, 1], [1, , , 1], [1, , , 1]],
  O: [[1, 1, 1], [1, , 1], [1, , 1], [1, , 1], [1, 1, 1]],
  P: [[1, 1, 1], [1, , 1], [1, 1, 1], [1], [1]],
  Q: [[0, 1, 1], [1, , , 1], [1, , , 1], [1, , 1, 1], [1, 1, 1, 1]],
  R: [[1, 1], [1, , 1], [1, , 1], [1, 1], [1, , 1]],
  S: [[1, 1, 1], [1], [1, 1, 1], [, , 1], [1, 1, 1]],
  T: [[1, 1, 1], [, 1], [, 1], [, 1], [, 1]],
  U: [[1, , 1], [1, , 1], [1, , 1], [1, , 1], [1, 1, 1]],
  V: [[1, , , , 1], [1, , , , 1], [, 1, , 1], [, 1, , 1], [, , 1]],
  W: [[1, , , , 1], [1, , , , 1], [1, , , , 1], [1, , 1, , 1], [1, 1, 1, 1, 1]],
  X: [[1, , , , 1], [, 1, , 1], [, , 1], [, 1, , 1], [1, , , , 1]],
  Y: [[1, , 1], [1, , 1], [, 1], [, 1], [, 1]],
  Z: [[1, 1, 1, 1, 1], [, , , 1], [, , 1], [, 1], [1, 1, 1, 1, 1]],
  "0": [[1, 1, 1], [1, , 1], [1, , 1], [1, , 1], [1, 1, 1]],
  "1": [[, 1], [, 1], [, 1], [, 1], [, 1]],
  "2": [[1, 1, 1], [0, 0, 1], [1, 1, 1], [1, 0, 0], [1, 1, 1]],
  "3": [[1, 1, 1], [0, 0, 1], [1, 1, 1], [0, 0, 1], [1, 1, 1]],
  "4": [[1, 0, 1], [1, 0, 1], [1, 1, 1], [0, 0, 1], [0, 0, 1]],
  "5": [[1, 1, 1], [1, 0, 0], [1, 1, 1], [0, 0, 1], [1, 1, 1]],
  "6": [[1, 1, 1], [1, 0, 0], [1, 1, 1], [1, 0, 1], [1, 1, 1]],
  "7": [[1, 1, 1], [0, 0, 1], [0, 0, 1], [0, 0, 1], [0, 0, 1]],
  "8": [[1, 1, 1], [1, 0, 1], [1, 1, 1], [1, 0, 1], [1, 1, 1]],
  "9": [[1, 1, 1], [1, 0, 1], [1, 1, 1], [0, 0, 1], [1, 1, 1]],
  " ": [[, ,], [, ,], [, ,], [, ,], [, ,]]
});

function draw(string, size) {
  var needed = [];
  string = string.toUpperCase(); // because I only did uppercase letters
  for (var i = 0; i < string.length; i++) {
    var letter = letters[string.charAt(i)];
    if (letter) {
      // because there's letters I didn't do
      needed.push(letter);
    }
  }

  ctx.fillStyle = "white";
  var currX = 0;
  for (i = 0; i < needed.length; i++) {
    letter = needed[i];
    var currY = 0;
    var addX = 0;
    for (var y = 0; y < letter.length; y++) {
      var row = letter[y];
      for (var x = 0; x < row.length; x++) {
        if (row[x]) {
          ctx.fillRect(currX + x * size, currY, size, size);
        }
      }
      addX = Math.max(addX, row.length * size);
      currY += size;
    }
    currX += size + addX;
  }
}

//variables

var w = canvas.width;
var h = canvas.height;

var onLoadScreen = true;
var onWinScreen = false;
var onGameoverScreen = false;
var starColours = ["#ffffff", "#ffe9c4", "#d4fbff"];

var spaceship = {
  maxSpeed: 2.5,
  position: {
    x: random(10, 230),
    y: random(10, 230)
  },
  velocity: {
    x: Math.random() * 0.2,
    y: Math.random() * 0.2
  },
  height: 18,
  width: 18,
  angle: random(0, 360),
  engineOn: false,
  rotatingLeft: false,
  rotatingRight: false,
  fuel: 100,
  eva: 100
};

var spacestation = {
  position: {
    x: random(40, 200),
    y: random(40, 200)
  },
  gate1: {
    x: 0,
    y: 0
  },
  gate2: {
    x: 0,
    y: 0
  }
};

//helper functions and imported functions

function degreesToRadians(degrees) {
  return (degrees * Math.PI) / 180;
}

function random(min, max) {
  return Math.round(Math.random() * max - min + min);
}

// create the audio context
var ac =
    typeof AudioContext !== "undefined"
      ? new AudioContext()
      : new webkitAudioContext(),
  // get the current Web Audio timestamp (this is when playback should begin)
  when = ac.currentTime,
  // set the tempo
  tempo = 132,
  // initialize some vars
  sequence1,
  sequence2,
  sequence3,
  // create an array of "note strings" that can be passed to a sequence
  lead = ["C4 w", "G3 w", "A#3 w", "F3 w"],
  harmony = [
    "-   e",
    "C5  e",
    "D#5 e",
    "D4  e",
    "G5 e",
    "C5  e",
    "D#5 e",
    "G5 e",

    "G3  e",
    "A3  e",
    "Bb3 e",
    "A3  e",
    "G3  e",
    "A3  e",
    "F3  q"
  ],
  bass = ["C3  w", "G2  w", "A#2  w", "F2  w"];

// create 3 new sequences (one for lead, one for harmony, one for bass)
sequence1 = new TinyMusic.Sequence(ac, tempo, lead);
sequence2 = new TinyMusic.Sequence(ac, tempo, harmony);
sequence3 = new TinyMusic.Sequence(ac, tempo, bass);

// set staccato and smoothing values for maximum coolness
sequence1.staccato = 0.55;
sequence2.staccato = 0.55;
sequence3.staccato = 0.05;
sequence3.smoothing = 0.4;

// adjust the levels so the bass and harmony aren't too loud
sequence1.gain.gain.value = 1.0 / 2;
sequence2.gain.gain.value = 0.8 / 2;
sequence3.gain.gain.value = 0.65 / 2;

// apply EQ settings
sequence1.mid.frequency.value = 800;
sequence1.mid.gain.value = 3;
sequence2.mid.frequency.value = 1200;
sequence3.mid.gain.value = 3;
sequence3.bass.gain.value = 6;
sequence3.bass.frequency.value = 80;
sequence3.mid.gain.value = -6;
sequence3.mid.frequency.value = 500;
sequence3.treble.gain.value = -2;
sequence3.treble.frequency.value = 1400;

function startSoundtrack() {
  when = ac.currentTime;
  //start the lead part immediately
  sequence1.play(when);
  // delay the harmony by 16 beats
  sequence2.play(when + (60 / tempo) * 16);
  // start the bass part immediately
  sequence3.play(when);
}

function keepDistance() {
  var distanceX = spaceship.position.x - spacestation.position.x;
  var distanceY = spaceship.position.y - spacestation.position.y;

  var c = Math.sqrt(distanceX * distanceX + distanceY * distanceY);
  if (c < 50) {
    spacestation.position.x = random(40, 200);
    spacestation.position.y = random(40, 200);
    keepDistance();
  }
}

keepDistance();

function updateSpaceship() {
  spaceship.eva = spaceship.eva - 0.07;

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

  if (spaceship.fuel >= 0) {
    if (spaceship.rotatingRight) {
      if (spaceship.angle >= 360) {
        spaceship.angle = 0;
      }
      spaceship.angle += 4;
      spaceship.fuel = spaceship.fuel - 0.1;
    } else if (spaceship.rotatingLeft) {
      if (spaceship.angle <= -360) {
        spaceship.angle = 0;
      }
      spaceship.angle -= 4;
      spaceship.fuel = spaceship.fuel - 0.1;
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
  ctx.save();
  ctx.translate(220, 5);
  draw("Fuel!", 1);
  ctx.restore();

  ctx.beginPath();
  ctx.rect(w - spaceship.fuel, 12, spaceship.fuel, 5);
  ctx.fillStyle = "#3b6d0c";
  ctx.fill();
  ctx.closePath();

  ctx.save();
  ctx.translate(220, 20);
  draw("Air", 1);
  ctx.restore();

  ctx.beginPath();
  ctx.rect(w - spaceship.eva, 27, spaceship.eva, 5);
  ctx.fillStyle = "#1F538A";
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

function drawSpaceStation(degree) {
  r1 = 32;
  // first save the untranslated/unrotated context
  ctx.save();

  ctx.beginPath();
  ctx.save();
  ctx.translate(spacestation.position.x, spacestation.position.y);
  ctx.rotate(i / 50);
  ctx.drawImage(spacestationSprite, -32, -32);

  ctx.closePath();
  ctx.restore();

  ctx.beginPath();
  ctx.moveTo(spacestation.position.x, spacestation.position.y);
  ctx.lineTo(
    spacestation.position.x + Math.sin(degree - 0.2 - Math.PI) * r1,
    spacestation.position.y + Math.cos(degree - 0.2 - Math.PI) * r1
  );
  spacestation.gate1.x =
    spacestation.position.x + Math.sin(degree - 0.2 - Math.PI) * r1;
  spacestation.gate1.y =
    spacestation.position.y + Math.cos(degree - 0.2 - Math.PI) * r1;

  ctx.lineTo(
    spacestation.position.x + Math.sin(degree - 1.2 + Math.PI) * r1,
    spacestation.position.y + Math.cos(degree - 1.2 + Math.PI) * r1
  );

  spacestation.gate2.x =
    spacestation.position.x + Math.sin(degree - 1.2 + Math.PI) * r1;
  spacestation.gate2.y =
    spacestation.position.y + Math.cos(degree - 1.2 + Math.PI) * r1;

  ctx.lineTo(spacestation.position.x, spacestation.position.y);
  ctx.closePath();
  // restore the context to its untranslated/unrotated state
  ctx.restore();
}

var i = 0;
var spaceshipRotation = 0;

function initGameBg() {
  star_field(ctx3, 200);
}

function triangle_area(x1, y1, x2, y2, x3, y3) {
  return Math.abs((x1 * (y2 - y3) + x2 * (y3 - y1) + x3 * (y1 - y2)) / 2.0);
}

function isInside(x1, y1, x2, y2, x3, y3, x, y) {
  /* Calculate area of triangle ABC */
  var A = triangle_area(x1, y1, x2, y2, x3, y3);

  /* Calculate area of triangle PBC */
  var A1 = triangle_area(x, y, x2, y2, x3, y3);

  /* Calculate area of triangle PAC */
  var A2 = triangle_area(x1, y1, x, y, x3, y3);

  /* Calculate area of triangle PAB */
  var A3 = triangle_area(x1, y1, x2, y2, x, y);

  /* Check if sum of A1, A2 and A3 is same as A */
  return A == A1 + A2 + A3;
}
var stopAnim = false;
function collision_detection() {
  if (
    isInside(
      spacestation.position.x,
      spacestation.position.y,
      spacestation.gate1.x,
      spacestation.gate1.y,
      spacestation.gate2.x,
      spacestation.gate2.y,
      spaceship.position.x,
      spaceship.position.y
    )
  ) {
    stopAnim = true;
    winScreen();
  }
}

var redraw = function() {
  ctx.save();
  // paint bg
  updateSpaceship();
  drawSpaceship();
  spaceshipRotation = spaceshipRotation - 0.02;
  drawSpaceStation(spaceshipRotation);
  drawFuel();
  collision_detection();

  if (spaceship.fuel <= 0 || spaceship.eva <= 0) {
    gameoverScreen();
  }
  if (stopAnim) {
    return;
  }
  i++;
  window.requestAnimationFrame(redraw);
};

//Load Screen Function
function loadScreen() {
  initGameBg();
  ctx.save();
  ctx.translate(20, 100);
  draw("Autopilot offline", 3);
  ctx.restore();
  ctx.save();
  ctx.translate(30, 130);
  draw("your ships autopilot has malfunctioned you have", 1);
  ctx.restore();
  ctx.save();
  ctx.translate(45, 140);
  draw("to land before your fuel and eva runs out", 1);
  ctx.restore();
  ctx.save();
  ctx.translate(55, 170);
  draw("Use up to thrust and left and right", 1);
  ctx.restore();
  ctx.save();
  ctx.translate(62, 180);
  draw("to rotate to control your angle", 1);
  ctx.restore();
  ctx.save();
  ctx.translate(60, 200);
  draw("Press up to start!!", 2);
  ctx.restore();

  startSoundtrack();
}

loadScreen();

function gameoverScreen() {
  onGameoverScreen = true;
  ctx.clearRect(0, 0, w, h);
  ctx.save();
  ctx.translate(95, 100);
  draw("Oh no..", 3);
  ctx.restore();
  ctx.save();
  ctx.translate(70, 130);
  draw(" you ran out of fuel or air", 1);
  ctx.restore();
  ctx.save();
  ctx.translate(85, 180);
  draw("press up to try again", 1);
  ctx.restore();
}

function winScreen() {
  onWinScreen = true;
  ctx.clearRect(0, 0, w, h);

  initGameBg();

  ctx.save();
  ctx.translate(30, 100);
  draw("Congratulations", 3);
  ctx.restore();
  ctx.save();
  ctx.translate(50, 130);
  draw("congratulations you landed your ship", 1);
  ctx.restore();
  ctx.save();
  ctx.translate(80, 140);
  draw(" enjoy some space beer!", 1);
  ctx.restore();
  ctx.save();
  ctx.translate(80, 180);
  draw("press up to start again", 1);
  ctx.restore();
}

//startGame Function
function startGame() {
  ctx.restore();
  window.requestAnimationFrame(redraw);
  initGameBg();
}

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
      if (onLoadScreen == true) {
        startGame();
        onLoadScreen = false;
      } else if (onWinScreen == true) {
        location.reload();
      } else if (onGameoverScreen == true) {
        location.reload();
      }
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
      spaceship.engineOn = false;
      break;
  }
}

document.addEventListener("keyup", keyLetGo);
