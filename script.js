// Обробка форми
document.querySelector("form").addEventListener("submit", function(e) {
   e.preventDefault();
   alert("Дякуємо за повідомлення! Ми з вами зв'яжемося.");
});
 // Логіка бургер-меню
document.addEventListener("DOMContentLoaded", function() {
   const menuToggle = document.querySelector(".menu-toggle");
   const mainNav = document.querySelector(".main-nav");
   if (menuToggle && mainNav) {
       menuToggle.addEventListener("click", function() {
           mainNav.classList.toggle("active");
       });
   }
});
