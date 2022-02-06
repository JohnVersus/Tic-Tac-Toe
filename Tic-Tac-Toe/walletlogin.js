// const serverUrl = "https://yatkdyphudkw.bigmoralis.com:2053/server";
// const appId = "MHufb6Kr8GTVARnYNbBLD3kBt9RHYJnf1lJywt3X";

//test server
const serverUrl = "https://dd9gb6eskdiv.usemoralis.com:2053/server";
const appId = "nGY3M9DPvp124XRcWNSefVN9i2HYcWBi4XbDPYiR";
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
