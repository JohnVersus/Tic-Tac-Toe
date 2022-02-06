document.getElementById("AvatarSelection").onclick = () => {
  document.getElementById("AvatarList").classList.toggle("Hide");

  document.getElementById("AvatarSelect").innerHTML = "";
  GetNFT();
};

let newuserPic = "";

// fixURL = (url) => {
//   if (url.startsWith("ipfs")) {
//     return "http://ipfs.moralis.io:2053/ipfs" + url.split("ipfs://").slice(-1);
//   } else {
//     return url + "?format=json";
//   }
// };

fixURL = (url) => {
  if (url.startsWith("ipfs")) {
    return "http://ipfs.moralis.io:2053/ipfs" + url.split("ipfs://").slice(-1);
  } else {
    return url + "?format=json";
  }
};

GetNFT = async () => {
  const testnetNFTs = await Moralis.Web3API.account.getNFTs({
    chain: "avalanche testnet",
  });

  if (testnetNFTs.result.length > 0) {
    testnetNFTs.result.forEach((n) => {
      //console.log(JSON.parse(n.metadata));
      metadata = JSON.parse(n.metadata);

      let content = `
        <img onclick = "getsrc(this)"
        src="${fixURL(metadata.image)}"
        height="100rem"
        style="padding: 1rem"
        class = "selectimg"
        />
        
        `;
      document.getElementById("AvatarSelect").innerHTML += content;
    });
  }
};

setprofilepic = async () => {
  const query = new Moralis.Query("TttUsers");
  query.equalTo("UserAdd", ethereum.selectedAddress);
  const data = await query.find();
  if (data.length == 0) {
    const q = Moralis.Object.extend("TttUsers");
    const nq = new q();
    nq.set("UserAdd", ethereum.selectedAddress);
    nq.set("UserImage", newuserPic);
    await nq.save();
  } else if (data.length > 0) {
    data[0].set("UserImage", newuserPic);
    await data[0].save();
  }
  getprofielpic();
  document.getElementById("AvatarList").classList.toggle("Hide");
};

getprofielpic = async () => {
  const query = new Moralis.Query("TttUsers");
  query.equalTo("UserAdd", ethereum.selectedAddress);
  const data = await query.find();
  if (data.length > 0) {
    document.getElementById("userAvatar").classList.remove("Hide");
    document.getElementById("userAvatar").src = data[0].get("UserImage");
  }
};
getanyuserpic = async (useradd) => {
  const query = new Moralis.Query("TttUsers");
  query.equalTo("UserAdd", useradd);
  const data = await query.find();
  if (data.length > 0) {
    document.getElementById("userAvatar").classList.remove("Hide");
    return data[0].get("UserImage");
  }
};

SaveAvatar.onclick = setprofilepic;

getsrc = (element) => {
  newuserPic = avatarpath.innerText = element.src;

  //console.log(newuserPic);
};

getprofielpic();

getPlayer1pic = async (useradd) => {
  const query = new Moralis.Query("TttUsers");
  query.equalTo("UserAdd", useradd);
  const data = await query.find();
  if (data.length > 0) {
    document.getElementById("Player1Pic").src = data[0].get("UserImage");
  } else {
    document.getElementById("Player1Pic").src = "/x.png";
  }
};

getPlayer2pic = async (useradd) => {
  const query = new Moralis.Query("TttUsers");
  query.equalTo("UserAdd", useradd);
  const data = await query.find();
  if (data.length > 0) {
    document.getElementById("Player2Pic").src = data[0].get("UserImage");
  } else {
    document.getElementById("Player2Pic").src = "/O.png";
  }
};
