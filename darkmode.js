var icon = document.getElementById("icon");

  if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("darkmode");
    icon.src = "images/sun.png";
  } else {
    icon.src = "images/moon.png";
  }

  icon.onclick = function () {
    document.body.classList.toggle("darkmode");

    if (document.body.classList.contains("darkmode")) {
      icon.src = "images/sun.png";
      localStorage.setItem("theme", "dark");
    } else {
      icon.src = "images/moon.png";
      localStorage.setItem("theme", "light");
    }
  };