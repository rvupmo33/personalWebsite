let myLocalTime = document.querySelector("#myLocalTime");

// Function to update the local time
function updateLocalTime() {
  let date = new Date();
  let options = {
    timeZone: "America/Toronto",
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  };
  let canadaTime = date.toLocaleString("en-US", options);
  myLocalTime.textContent = "EST: " + canadaTime;
}

updateLocalTime();
setInterval(updateLocalTime, 2000);
