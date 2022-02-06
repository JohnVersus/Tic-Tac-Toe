
//test server
const serverUrl = ""//add moralis server here ;
const appId = ""; //add moralis appid here
Moralis.start({ serverUrl, appId });
//Moralis.enableWeb3()
async () => {
  await Moralis.enableWeb3();
  //const web3 = new Web3(Moralis.provider)
  // await Moralis.enableWeb3();
  const web3 = Moralis.web3;
};

logincheck = async () => {
  if (Moralis.User.current() != null) {
    if (document.getElementById("metaLogin") != null) {
      document.getElementById("metaLogin").classList.add("Hide");
      document.getElementById("wcLogin").classList.add("Hide");
      document.getElementById("useraddress").classList.remove("Hide");
      // document.getElementById("userAvatar").classList.remove("Hide");
      // document.getElementById("userAvatar").src = "assets/img/DeadPool.jpeg";
      useraddress.innerText = ethereum.selectedAddress;
    }
  } else {
    if (document.getElementById("metaLogin") != null) {
      document.getElementById("useraddress").classList.add("Hide");
      // document.getElementById("userAvatar").classList.add("Hide");
      document.getElementById("metaLogin").classList.remove("Hide");
      document.getElementById("wcLogin").classList.remove("Hide");
    }
  }
};

logincheck();
