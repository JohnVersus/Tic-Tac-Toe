login = async () => {
  try {
    // const user = await Moralis.Web3.authenticate();
    const user = await Moralis.authenticate();

    logincheck();
    // location.reload();
  } catch (error) {
    const code = error.code;
    const message = error.message;
    document.getElementById("Wallet_Logout").classList.add("Hide");
  }
};

if (document.getElementById("metaLogin") != null) {
  document.getElementById("metaLogin").onclick = login;
}
if (document.querySelector("wcLogin") != null) {
  document.querySelector("wcLogin").onclick = wclogin;
}
