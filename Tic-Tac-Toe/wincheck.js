// Function called whenever user tab on any box
function checkwinner(a, b, c, d, e, f, g, h, i) {
  // Setting DOM to all boxes or input field
  var b1, b2, b3, b4, b5, b6, b7, b8, b9;
  b1 = a;
  b2 = b;
  b3 = c;
  b4 = d;
  b5 = e;
  b6 = f;
  b7 = g;
  b8 = h;
  b9 = i;

  // Checking if Player 1 won or not and after
  // that disabled all the other fields
  if (
    (b1 == "x" || b1 == "X") &&
    (b2 == "x" || b2 == "X") &&
    (b3 == "x" || b3 == "X")
  ) {
    document.getElementById("GameText").innerHTML = "Player 1 won";
    // document.getElementById("b4").disabled = true;
    // document.getElementById("b5").disabled = true;
    // document.getElementById("b6").disabled = true;
    // document.getElementById("b7").disabled = true;
    // document.getElementById("b8").disabled = true;
    // document.getElementById("b9").disabled = true;
    // window.alert("Player 1 won");
    return "x";
  } else if (
    (b1 == "x" || b1 == "X") &&
    (b4 == "x" || b4 == "X") &&
    (b7 == "x" || b7 == "X")
  ) {
    document.getElementById("GameText").innerHTML = "Player 1 won";
    // document.getElementById("b2").disabled = true;
    // document.getElementById("b3").disabled = true;
    // document.getElementById("b5").disabled = true;
    // document.getElementById("b6").disabled = true;
    // document.getElementById("b8").disabled = true;
    // document.getElementById("b9").disabled = true;

    // window.alert("Player 1 won");
    return "x";
  } else if (
    (b7 == "x" || b7 == "X") &&
    (b8 == "x" || b8 == "X") &&
    (b9 == "x" || b9 == "X")
  ) {
    document.getElementById("GameText").innerHTML = "Player 1 won";
    // document.getElementById("b1").disabled = true;
    // document.getElementById("b2").disabled = true;
    // document.getElementById("b3").disabled = true;
    // document.getElementById("b4").disabled = true;
    // document.getElementById("b5").disabled = true;
    // document.getElementById("b6").disabled = true;
    // window.alert("Player 1 won");
    return "x";
  } else if (
    (b3 == "x" || b3 == "X") &&
    (b6 == "x" || b6 == "X") &&
    (b9 == "x" || b9 == "X")
  ) {
    document.getElementById("GameText").innerHTML = "Player 1 won";
    // document.getElementById("b1").disabled = true;
    // document.getElementById("b2").disabled = true;
    // document.getElementById("b4").disabled = true;
    // document.getElementById("b5").disabled = true;
    // document.getElementById("b7").disabled = true;
    // document.getElementById("b8").disabled = true;
    // window.alert("Player 1 won");
    return "x";
  } else if (
    (b1 == "x" || b1 == "X") &&
    (b5 == "x" || b5 == "X") &&
    (b9 == "x" || b9 == "X")
  ) {
    document.getElementById("GameText").innerHTML = "Player 1 won";
    // document.getElementById("b2").disabled = true;
    // document.getElementById("b3").disabled = true;
    // document.getElementById("b4").disabled = true;
    // document.getElementById("b6").disabled = true;
    // document.getElementById("b7").disabled = true;
    // document.getElementById("b8").disabled = true;
    // window.alert("Player 1 won");
    return "x";
  } else if (
    (b3 == "x" || b3 == "X") &&
    (b5 == "x" || b5 == "X") &&
    (b7 == "x" || b7 == "X")
  ) {
    document.getElementById("GameText").innerHTML = "Player 1 won";
    // document.getElementById("b1").disabled = true;
    // document.getElementById("b2").disabled = true;
    // document.getElementById("b4").disabled = true;
    // document.getElementById("b6").disabled = true;
    // document.getElementById("b8").disabled = true;
    // document.getElementById("b9").disabled = true;
    // window.alert("Player 1 won");
    return "x";
  } else if (
    (b2 == "x" || b2 == "X") &&
    (b5 == "x" || b5 == "X") &&
    (b8 == "x" || b8 == "X")
  ) {
    document.getElementById("GameText").innerHTML = "Player 1 won";
    // document.getElementById("b1").disabled = true;
    // document.getElementById("b3").disabled = true;
    // document.getElementById("b4").disabled = true;
    // document.getElementById("b6").disabled = true;
    // document.getElementById("b7").disabled = true;
    // document.getElementById("b9").disabled = true;
    // window.alert("Player 1 won");
    return "x";
  } else if (
    (b4 == "x" || b4 == "X") &&
    (b5 == "x" || b5 == "X") &&
    (b6 == "x" || b6 == "X")
  ) {
    document.getElementById("GameText").innerHTML = "Player 1 won";
    // document.getElementById("b1").disabled = true;
    // document.getElementById("b2").disabled = true;
    // document.getElementById("b3").disabled = true;
    // document.getElementById("b7").disabled = true;
    // document.getElementById("b8").disabled = true;
    // document.getElementById("b9").disabled = true;
    // window.alert("Player 1 won");
    return "x";
  }

  // Checking of Player 1 finish
  // Checking for Player 2 starts, Is Player 2 won or
  // not and after that disabled all the other fields
  else if (
    (b1 == "0" || b1 == "0") &&
    (b2 == "0" || b2 == "0") &&
    (b3 == "0" || b3 == "0")
  ) {
    document.getElementById("GameText").innerHTML = "Player 2 won";
    // document.getElementById("b4").disabled = true;
    // document.getElementById("b5").disabled = true;
    // document.getElementById("b6").disabled = true;
    // document.getElementById("b7").disabled = true;
    // document.getElementById("b8").disabled = true;
    // document.getElementById("b9").disabled = true;
    // window.alert("Player 2 won");
    return "0";
  } else if (
    (b1 == "0" || b1 == "0") &&
    (b4 == "0" || b4 == "0") &&
    (b7 == "0" || b7 == "0")
  ) {
    document.getElementById("GameText").innerHTML = "Player 2 won";
    // document.getElementById("b2").disabled = true;
    // document.getElementById("b3").disabled = true;
    // document.getElementById("b5").disabled = true;
    // document.getElementById("b6").disabled = true;
    // document.getElementById("b8").disabled = true;
    // document.getElementById("b9").disabled = true;
    // window.alert("Player 2 won");
    return "0";
  } else if (
    (b7 == "0" || b7 == "0") &&
    (b8 == "0" || b8 == "0") &&
    (b9 == "0" || b9 == "0")
  ) {
    document.getElementById("GameText").innerHTML = "Player 2 won";
    // document.getElementById("b1").disabled = true;
    // document.getElementById("b2").disabled = true;
    // document.getElementById("b3").disabled = true;
    // document.getElementById("b4").disabled = true;
    // document.getElementById("b5").disabled = true;
    // document.getElementById("b6").disabled = true;
    // window.alert("Player 2 won");
    return "0";
  } else if (
    (b3 == "0" || b3 == "0") &&
    (b6 == "0" || b6 == "0") &&
    (b9 == "0" || b9 == "0")
  ) {
    document.getElementById("GameText").innerHTML = "Player 2 won";
    // document.getElementById("b1").disabled = true;
    // document.getElementById("b2").disabled = true;
    // document.getElementById("b4").disabled = true;
    // document.getElementById("b5").disabled = true;
    // document.getElementById("b7").disabled = true;
    // document.getElementById("b8").disabled = true;
    // window.alert("Player 2 won");
    return "0";
  } else if (
    (b1 == "0" || b1 == "0") &&
    (b5 == "0" || b5 == "0") &&
    (b9 == "0" || b9 == "0")
  ) {
    document.getElementById("GameText").innerHTML = "Player 2 won";
    // document.getElementById("b2").disabled = true;
    // document.getElementById("b3").disabled = true;
    // document.getElementById("b4").disabled = true;
    // document.getElementById("b6").disabled = true;
    // document.getElementById("b7").disabled = true;
    // document.getElementById("b8").disabled = true;
    // window.alert("Player 2 won");
    return "0";
  } else if (
    (b3 == "0" || b3 == "0") &&
    (b5 == "0" || b5 == "0") &&
    (b7 == "0" || b7 == "0")
  ) {
    document.getElementById("GameText").innerHTML = "Player 2 won";
    // document.getElementById("b1").disabled = true;
    // document.getElementById("b2").disabled = true;
    // document.getElementById("b4").disabled = true;
    // document.getElementById("b6").disabled = true;
    // document.getElementById("b8").disabled = true;
    // document.getElementById("b9").disabled = true;
    // window.alert("Player 2 won");
    return "0";
  } else if (
    (b2 == "0" || b2 == "0") &&
    (b5 == "0" || b5 == "0") &&
    (b8 == "0" || b8 == "0")
  ) {
    document.getElementById("GameText").innerHTML = "Player 2 won";
    // document.getElementById("b1").disabled = true;
    // document.getElementById("b3").disabled = true;
    // document.getElementById("b4").disabled = true;
    // document.getElementById("b6").disabled = true;
    // document.getElementById("b7").disabled = true;
    // document.getElementById("b9").disabled = true;
    // window.alert("Player 2 won");
    return "0";
  } else if (
    (b4 == "0" || b4 == "0") &&
    (b5 == "0" || b5 == "0") &&
    (b6 == "0" || b6 == "0")
  ) {
    document.getElementById("GameText").innerHTML = "Player 2 won";
    // document.getElementById("b1").disabled = true;
    // document.getElementById("b2").disabled = true;
    // document.getElementById("b3").disabled = true;
    // document.getElementById("b7").disabled = true;
    // document.getElementById("b8").disabled = true;
    // document.getElementById("b9").disabled = true;
    // window.alert("Player 2 won");
    return "0";
  }

  // Checking of Player 2 finish
  // Here, Checking about Tie
  else if (
    (b1 == "X" || b1 == "0") &&
    (b2 == "X" || b2 == "0") &&
    (b3 == "X" || b3 == "0") &&
    (b4 == "X" || b4 == "0") &&
    (b5 == "X" || b5 == "0") &&
    (b6 == "X" || b6 == "0") &&
    (b7 == "X" || b7 == "0") &&
    (b8 == "X" || b8 == "0") &&
    (b9 == "X" || b9 == "0")
  ) {
    // document.getElementById("print").innerHTML = "Match Tie";
    window.alert("Match Tie");
    return "draw";
  } else {
    // Here, Printing Result
    if (flag == 1) {
      document.getElementById("GameText").innerHTML = "Player 1 Turn";
    } else {
      document.getElementById("GameText").innerHTML = "Player 2 Turn";
    }
  }
}



celebrate = () => {
  // do this for 30 seconds
  var duration = 2 * 1000;
  var end = Date.now() + duration;

  (function frame() {
    // launch a few confetti from the left edge
    confetti({
      particleCount: 7,
      angle: 60,
      spread: 55,
      origin: { x: 0 },
    });
    // and launch a few from the right edge
    confetti({
      particleCount: 7,
      angle: 120,
      spread: 55,
      origin: { x: 1 },
    });

    // keep going until we are out of time
    if (Date.now() < end) {
      requestAnimationFrame(frame);
    }
  })();
};
