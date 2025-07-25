window.addEventListener("DOMContentLoaded", () => {
  const initData = window.Telegram.WebApp.initData || 'No initData received';
  const output = document.getElementById("initData");

  try {
    const decoded = new URLSearchParams(initData);
    let formatted = "";
    decoded.forEach((value, key) => {
      formatted += `${key}: ${value}\n`;
    });
    output.textContent = formatted || "No parameters found.";
  } catch (e) {
    output.textContent = "Error parsing initData:\n" + initData;
  }
});
