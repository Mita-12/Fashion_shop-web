// JavaScript for E-Commerce Website Interactivity
let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}

document.addEventListener("DOMContentLoaded", () => {
    // Navbar - Smooth Scroll to Sections
    const navLinks = document.querySelectorAll(".navbar a");
    navLinks.forEach(link => {
        link.addEventListener("click", event => {
            event.preventDefault();
            const sectionId = event.target.getAttribute("href");
            const section = document.querySelector(sectionId);
            section.scrollIntoView({ behavior: "smooth" });
        });
    });

    // Sign-Up Dropdown Logic
    const signupBtn = document.querySelector(".signup-btn");
    const signinDropdown = document.querySelector(".signin-dropdown");

    signupBtn.addEventListener("mouseover", () => {
        signinDropdown.style.display = "block";
    });

    signupBtn.addEventListener("mouseout", () => {
        signinDropdown.style.display = "none";
    });

    // Search Button Functionality
    const searchBtn = document.querySelector(".search-btn");
    searchBtn.addEventListener("click", () => {
        const searchQuery = prompt("Enter a search query:");
        if (searchQuery) {
            alert(`Searching for "${searchQuery}"...`);
            // Simulate search - redirect to a search results page or process query
        }
    });

    // Shop by Category - Click Events
    const categoryCards = document.querySelectorAll(".category-card");
    categoryCards.forEach(card => {
        card.addEventListener("click", () => {
            const categoryName = card.querySelector("h3").innerText;
            alert(`Viewing products in the "${categoryName}" category.`);
        });
    });

    // Marquee - Dynamic Speed Change on Hover
    //const marquee = document.querySelector("marquee");
    //marquee.addEventListener("mouseover", () => {
       // marquee.stop();
//});
   // marquee.addEventListener("mouseout", () => {
       // marquee.start();
   // });
});
