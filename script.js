AOS.init();

const sidenavOpen = document.getElementById('sidenavOpen'); 
const sidenavClose = document.getElementById('sidenavClose');
const sidenav = document.getElementById('sidenav');
const form = document.getElementById("contactForm");
const responseBox = document.getElementById("responseBox");
const submitButton = document.getElementById("submitBtn");
const loader = document.getElementById("loader");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  loader.classList.remove("hidden"); 
}); 

loader.classList.add("hidden");
    enableButton();

// Side navigation
sidenavOpen.style.display = 'block';
sidenavClose.style.display = 'none'; 

sidenavOpen.addEventListener('click', () => {
    sidenavOpen.style.display = 'none'; 
    sidenavClose.style.display = 'block';
}); 

sidenavOpen.addEventListener('click', () => {
    sidenavClose.classList.toggle('hidden');
    sidenav.classList.toggle('hidden');
});

sidenavClose.addEventListener('click', () => {
    sidenavClose.classList.toggle('hidden');
    sidenav.classList.toggle('hidden');
    sidenavOpen.style.display = 'block';
    sidenavClose.style.display = 'none';
});

// Back to top button
let mybutton = document.getElementById("backToTopBtn"); 

window.onscroll = function() {scrollFunction}; 

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

mybutton.addEventListener("click", topFunction);

function topFunction() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}

// Form button disable/enable
function disableButton() {
  const button = document.getElementById("submitBtn");
  button.disabled = true;
  button.textContent = "Submitting...";
  return true;
}

function enableButton() {
  const button = document.getElementById("submitBtn");
  button.disabled = false;
  button.textContent = "Submit";
  return true;
}