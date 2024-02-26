document.addEventListener("astro:page-load", () => {
  document.querySelector(".hamburger").addEventListener("click", () => {
    if (document.querySelector(".nav-links").style.display == "block") {
      document.querySelector(".nav-links").style.display = "none";
    } else {
      document.querySelector(".nav-links").style.display = "block";
    }
  });
});