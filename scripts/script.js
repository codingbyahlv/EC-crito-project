toggleMenu = (action) => {
  const menu = document.querySelector("#mobileMenu");
  const icon = document.querySelector(".fa-bars");
  if (action === "open") {
    menu.style.display = "flex";
    icon.style.display = "none";
  } else {
    menu.style.display = "none";
    icon.style.display = "block";
  }
};
