$("#container .main-bd .right-side .nav ul li").click(function () {
  $(this).addClass("active").siblings().removeClass("active");
});

// const tabBtn = document.querySelectorAll(
//   "#container .main-bd .right-side .nav ul li"
// );
const tab = document.querySelectorAll(
  "#container .main-bd .right-side .profile-body .tab"
);

function tabs(panelIndex) {
  tab.forEach(function (node) {
    node.style.display = "none";
  });
  tab[panelIndex].style.display = "block";
}
tabs(0);
