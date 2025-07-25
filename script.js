window.addEventListener("DOMContentLoaded", () => {
  const initDataRaw = window.Telegram.WebApp.initData;
  const params = new URLSearchParams(initDataRaw);
  const userJSON = params.get("user");

  try {
    const user = JSON.parse(userJSON);
    const username = user.username;

    if (username) {
      document.getElementById("status").textContent = "Opening @" + username + " in Telegram...";
      window.location.href = `https://t.me/${username}`;
    } else {
      document.getElementById("status").textContent = "No username found.";
    }
  } catch (e) {
    document.getElementById("status").textContent = "Failed to parse user data.";
  }
});
