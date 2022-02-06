let gameIdnumber = "";
NewGame.onclick = async () => {
  const q = Moralis.Object.extend("TttGames");
  const nq = new q();
  nq.set("Player1", ethereum.selectedAddress);
  nq.set("turn", ethereum.selectedAddress);
  await nq.save();

  gameIdnumber = nq.id;
  gameId.innerText = gameIdnumber;
  //cleanGame();
  await getPlayer1pic(ethereum.selectedAddress);
  subscribeToGame();
};

JoinGame.onclick = async () => {
  gameIdnumber = GameIdtoJoin.value;

  const query = new Moralis.Query("TttGames");
  query.equalTo("objectId", gameIdnumber);
  const data = await query.find();

  if (data.length == 0) {
    alert("Joining Game Failed. Invalid Game id number.");
  } else if (data.length > 0) {
    data[0].set("Player2", ethereum.selectedAddress);
    await data[0].save();
    gameId.innerText = gameIdnumber;
    await getPlayer2pic(ethereum.selectedAddress);
    //cleanGame();
    subscribeToGame();
    RefreshGame(gameIdnumber);
  }
};

cleanGame = () => {
  one.src = "/Solid_white.svg";
  two.src = "/Solid_white.svg";
  three.src = "/Solid_white.svg";
  four.src = "/Solid_white.svg";
  five.src = "/Solid_white.svg";
  six.src = "/Solid_white.svg";
  seven.src = "/Solid_white.svg";
  eight.src = "/Solid_white.svg";
  nine.src = "/Solid_white.svg";
  Player1Pic.src = "/Solid_white.svg";
  Player2Pic.src = "/Solid_white.svg";
};

RefreshGame = async (gameid) => {
  let query = new Moralis.Query("TttGames");
  query.equalTo("objectId", gameid);
  const data = await query.find();
  console.log(await data[0].get("Player1"));
  Player1Pic.src = await getanyuserpic(data[0].get("Player1"));
  Player2Pic.src = await getanyuserpic(data[0].get("Player2"));
  Player1add = data[0].get("Player1");
  Player2add = data[0].get("Player2");
  cell1add = data[0].get("c1");
  cell2add = data[0].get("c2");
  cell3add = data[0].get("c3");
  cell4add = data[0].get("c4");
  cell5add = data[0].get("c5");
  cell6add = data[0].get("c6");
  cell7add = data[0].get("c7");
  cell8add = data[0].get("c8");
  cell9add = data[0].get("c9");
  var b1, b2, b3, b4, b5, b6, b7, b8, b9;

  if (cell1add == Player1add) {
    b1 = "X";
  } else if (cell1add == Player2add) {
    b1 = "0";
  }
  if (cell2add == Player1add) {
    b2 = "X";
  } else if (cell2add == Player2add) {
    b2 = "0";
  }
  if (cell3add == Player1add) {
    b3 = "X";
  } else if (cell3add == Player2add) {
    b3 = "0";
  }
  if (cell4add == Player1add) {
    b4 = "X";
  } else if (cell4add == Player2add) {
    b4 = "0";
  }
  if (cell5add == Player1add) {
    b5 = "X";
  } else if (cell5add == Player2add) {
    b5 = "0";
  }
  if (cell6add == Player1add) {
    b6 = "X";
  } else if (cell6add == Player2add) {
    b6 = "0";
  }
  if (cell7add == Player1add) {
    b7 = "X";
  } else if (cell7add == Player2add) {
    b7 = "0";
  }
  if (cell8add == Player1add) {
    b8 = "X";
  } else if (cell8add == Player2add) {
    b8 = "0";
  }
  if (cell9add == Player1add) {
    b9 = "X";
  } else if (cell9add == Player2add) {
    b9 = "0";
  }

  if (data[0].get("c1") == data[0].get("Player1")) {
    console.log(data[0].get("Player1"));
    one.src = await getanyuserpic(data[0].get("Player1"));
  } else if (data[0].get("c1") == data[0].get("Player2")) {
    one.src = await getanyuserpic(data[0].get("Player2"));
  }
  if (data[0].get("c2") == data[0].get("Player1")) {
    two.src = await getanyuserpic(data[0].get("Player1"));
  } else if (data[0].get("c2") == data[0].get("Player2")) {
    two.src = await getanyuserpic(data[0].get("Player2"));
  }
  if (data[0].get("c3") == data[0].get("Player1")) {
    three.src = await getanyuserpic(data[0].get("Player1"));
  } else if (data[0].get("c3") == data[0].get("Player2")) {
    three.src = await getanyuserpic(data[0].get("Player2"));
  }
  if (data[0].get("c4") == data[0].get("Player1")) {
    four.src = await getanyuserpic(data[0].get("Player1"));
  } else if (data[0].get("c4") == data[0].get("Player2")) {
    four.src = await getanyuserpic(data[0].get("Player2"));
  }
  if (data[0].get("c5") == data[0].get("Player1")) {
    five.src = await getanyuserpic(data[0].get("Player1"));
  } else if (data[0].get("c5") == data[0].get("Player2")) {
    five.src = await getanyuserpic(data[0].get("Player2"));
  }
  if (data[0].get("c6") == data[0].get("Player1")) {
    six.src = await getanyuserpic(data[0].get("Player1"));
  } else if (data[0].get("c6") == data[0].get("Player2")) {
    six.src = await getanyuserpic(data[0].get("Player2"));
  }
  if (data[0].get("c7") == data[0].get("Player1")) {
    seven.src = await getanyuserpic(data[0].get("Player1"));
  } else if (data[0].get("c7") == data[0].get("Player2")) {
    seven.src = await getanyuserpic(data[0].get("Player2"));
  }
  if (data[0].get("c8") == data[0].get("Player1")) {
    eight.src = await getanyuserpic(data[0].get("Player1"));
  } else if (data[0].get("c8") == data[0].get("Player2")) {
    eight.src = await getanyuserpic(data[0].get("Player2"));
  }
  if (data[0].get("c9") == data[0].get("Player1")) {
    nine.src = await getanyuserpic(data[0].get("Player1"));
  } else if (data[0].get("c9") == data[0].get("Player2")) {
    nine.src = await getanyuserpic(data[0].get("Player2"));
  }

  let winner = checkwinner(b1, b2, b3, b4, b5, b6, b7, b8, b9);

  if (winner == "x" && Player1add == ethereum.selectedAddress) {
    celebrate();
  } else if (winner == "0" && Player2add == ethereum.selectedAddress) {
    celebrate();
  }
};

async function subscribeToGame() {
  //console.log("subscribeMyBuys");
  let query = new Moralis.Query("TttGames");
  query.equalTo("objectId", gameIdnumber);

  subscriptionAlerts = await query.subscribe();
  subscriptionAlerts.on("update", (object) => {
    RefreshGame(gameIdnumber);
  });
}

imageclick = async (content) => {
  console.log(content.id);

  let query = new Moralis.Query("TttGames");
  query.equalTo("objectId", gameIdnumber);
  const data = await query.find();
  console.log(data);
  console.log(data[0].get("Player1"));

  Player1add = data[0].get("Player1");
  Player2add = data[0].get("Player2");
  cell1add = data[0].get("c1");
  cell2add = data[0].get("c2");
  cell3add = data[0].get("c3");
  cell4add = data[0].get("c4");
  cell5add = data[0].get("c5");
  cell6add = data[0].get("c6");
  cell7add = data[0].get("c7");
  cell8add = data[0].get("c8");
  cell9add = data[0].get("c9");

  turn = data[0].get("turn");
  if (turn == ethereum.selectedAddress) {
    console.log("my turn");
    console.log(content.id);
    if (content.id == "one") {
      if (cell1add == null) {
        console.log(userAvatar.src);
        content.id.src = userAvatar.src;
        data[0].set("c1", ethereum.selectedAddress);
      }
    }
    if (content.id == "two") {
      if (cell2add == null) {
        content.id.src = userAvatar.src;
        data[0].set("c2", ethereum.selectedAddress);
      }
    }
    if (content.id == "three") {
      if (cell3add == null) {
        content.id.src = userAvatar.src;
        data[0].set("c3", ethereum.selectedAddress);
      }
    }
    if (content.id == "four") {
      if (cell4add == null) {
        content.id.src = userAvatar.src;
        data[0].set("c4", ethereum.selectedAddress);
      }
    }
    if (content.id == "five") {
      if (cell5add == null) {
        content.id.src = userAvatar.src;
        data[0].set("c5", ethereum.selectedAddress);
      }
    }
    if (content.id == "six") {
      if (cell6add == null) {
        content.id.src = userAvatar.src;
        data[0].set("c6", ethereum.selectedAddress);
      }
    }
    if (content.id == "seven") {
      if (cell7add == null) {
        content.id.src = userAvatar.src;
        data[0].set("c7", ethereum.selectedAddress);
      }
    }
    if (content.id == "eight") {
      if (cell8add == null) {
        content.id.src = userAvatar.src;
        data[0].set("c8", ethereum.selectedAddress);
      }
    }
    if (content.id == "nine") {
      if (cell9add == null) {
        content.id.src = userAvatar.src;
        data[0].set("c9", ethereum.selectedAddress);
      }
    }
    if (data[0].get("turn") == Player1add) {
      GameText.innerText = "Player 2 Turn";
      data[0].set("turn", Player2add);
      await data[0].save();
    } else if (data[0].get("turn") == Player2add) {
      GameText.innerText = "Player 1 Turn";
      data[0].set("turn", Player1add);
      await data[0].save();
    }
  } else {
    ("Not Your Turn");
  }
  RefreshGame(gameIdnumber);
};
