function newTime() {
  const time = document.getElementById("time");
  const date = document.getElementById("date");

  const dateFormat = {weekday: 'long', month: 'short', day: 'numeric'};
  const today = new Date();


  const hours = convertHours(today.getHours());
  const minutes = addZero(today.getMinutes());
  const seconds = addZero(today.getSeconds());

  function convertHours(num) {
    return num > 12 ? num - 12 : num;
  }

  function addZero(num) {
    return num < 10 ? `0${num}`: num;
  }

  const currentTime = `${hours}:${minutes}:${seconds}`;

  time.innerHTML = currentTime;
  date.innerHTML = today.toLocaleDateString("en-US", dateFormat);
}

setInterval(newTime, 1000);
