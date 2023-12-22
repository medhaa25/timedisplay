function updateTime() {
  const currentTime = new Date();
  const hours = currentTime.getHours();
  const minutes = currentTime.getMinutes();
  const seconds = currentTime.getSeconds();

  const formattedTime = `${hours}:${minutes}:${seconds}`;
  const body = document.body;

  if (hours >= 6 && hours < 9) {
    body.setAttribute("data-time", "morning");
    document.getElementById("time").style.color = "#000";
  } else if (hours >= 9 && hours < 12) {
    body.setAttribute("data-time", "forenoon");
    document.getElementById("time").style.color = "#000";
  } else if (hours >= 12 && hours < 16) {
    body.setAttribute("data-time", "afternoon");
    document.getElementById("time").style.color = "#fff";
  } else if (hours >= 16 && hours < 19) {
    body.setAttribute("data-time", "evening");
    document.getElementById("time").style.color = "#fff";
  } else if (hours >= 19 && hours < 21) {
    body.setAttribute("data-time", "night");
    document.getElementById("time").style.color = "#fff";
  } else if (hours >= 21 || hours < 6) {
    body.setAttribute("data-time", "midnight");
    document.getElementById("time").style.color = "#fff";
  }

  document.getElementById("time").innerText = formattedTime;
}

document.getElementById("time").innerText = "Loading...";

setInterval(updateTime, 1000);

updateTime();
