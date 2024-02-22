let menubtn = document.getElementById("menu-btn");
let sideNav = document.getElementById("sideNav");
let menu = document.getElementById("menu");

sideNav.style.right = "-250px";

menubtn.onclick = function () {
  if (sideNav.style.right == "-250px") {
    sideNav.style.right = "0";
    menu.src = "./Barber_Shop_img/close.png";
  } else {
    sideNav.style.right = "-250px";
    menu.src = "./Barber_Shop_img/menu.png";
  }
};
let scroll = new SmoothScroll('a[href*="#"]', {
  speed: 800,
  speedAsDuration: true,
});
