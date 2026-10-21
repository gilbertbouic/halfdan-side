/* Farfar's portrait in the top corner of every page. Change the caption here (one place only). */
window.PORTRAIT_CAPTION = "Farfar Gilbert";
(function () {
  "use strict";
  function add() {
    if (document.querySelector(".farfar")) return;
    var f = document.createElement("figure"); f.className = "farfar";
    f.innerHTML = '<img src="/assets/farfar.webp" alt="" width="150" height="150" decoding="async" /><figcaption></figcaption>';
    f.querySelector("img").alt = window.PORTRAIT_CAPTION;
    f.querySelector("figcaption").textContent = window.PORTRAIT_CAPTION;
    document.body.appendChild(f);
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", add); else add();
})();
