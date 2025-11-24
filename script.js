const sidenavOpen = document.getElementById('sidenavOpen'); 
const sidenavClose = document.getElementById('sidenavClose');
const sidenav = document.getElementById('sidenav');

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