function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  if (icon.classList.contains("open")) {
    icon.classList.add("closing");
    setTimeout(() => {
      icon.classList.remove("closing");
    }, 400); // match duration of animation
  }
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}
