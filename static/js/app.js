document.addEventListener("DOMContentLoaded", function (event) {
  document.querySelectorAll(".menu-toggle").forEach(function (element) {
    element.addEventListener("click", function(menuToggle) {
      menuToggle.target.classList.toggle("active");
      document.getElementById("main-menu").classList.toggle("active");
    });
  });

  const today = new Date();
  const year = today.getMonth() === 0 ? today.getFullYear() - 1 : today.getFullYear();
  const firstDate = new Date(year, 11, 1)
  const lastDate = new Date(year + 1, 0, 5)

  if (today >= firstDate && today <= lastDate) {
    const snow = document.createElement("div");
    snow.className = "snow";
    document.body.appendChild(snow);
    const snow2 = document.createElement("div");
    snow.className = "snow2";
    document.body.appendChild(snow2);
  }
});