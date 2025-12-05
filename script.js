AOS.init();

const sidenavOpen = document.getElementById('sidenavOpen'); 
const sidenavClose = document.getElementById('sidenavClose');
const sidenav = document.getElementById('sidenav');
const form = document.getElementById("contactForm");
const responseBox = document.getElementById("responseBox");
const submitButton = document.getElementById("submitBtn");
const loader = document.getElementById("loader");


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

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  loader.classList.add("hidden"); 

  const formData = new FormData(form);

  try {
    const response = await fetch("https://lily-hospital.com.ng/portfolio/api.php", {
      method: "POST",
      body: formData, 
    }); 

    setTimeout (() => {
      submitButton.textContent = "Submitted"; 
      loader.classList.add("hidden");
  }, 300);

  setTimeout (() => {
    submitButton.disabled = false;
    submitButton.textContent = "Submit";
    submitButton.classList.remove('Submitted');
    responseBox.textContent = "";
  }, 4000);

  setTimeout (() => {
    responseBox.classList.add("hidden");
  }, 4500); 

    const data = await response.json(); 
    loader.classList.add("hidden");
    enableButton();

    console.log(data); 

    responseBox.classList.remove("hidden"); 
    
     if (data.status === "success") {
      responseBox.className =
        "text-green-700";
      form.reset();
    } else {
      responseBox.className =
        "text-red-700";
    }

      responseBox.innerHTML = `<p class="text-sm text-green-600">${JSON.stringify(
      data.message,
      null,
      2
    )}</p>`;

  } catch (error) {
    responseBox.classList.remove("hidden");
    responseBox.innerHTML = "Error submitting the form. Please try again.";
    responseBox.className =
      "text-red-700";
  }
});


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