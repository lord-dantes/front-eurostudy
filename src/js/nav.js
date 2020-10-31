// nav

document.onclick = toggleNav;
function toggleNav(){
	const navElement = document.getElementById('nav');
  const navBtn = document.getElementById('navBtn');
	if (!navElement.contains(event.target)) {
    navElement.classList.remove('nav-active');
	}
	if (navBtn.contains(event.target)) {
		navElement.classList.toggle('nav-active');
	}
}

// nav-dropdown

const acc = document.getElementsByClassName("nav-current");
for (let i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle('nav-current--active');
    if (this.querySelector('.nav-dropdown')){
      let currentDropdown = this.querySelector('.nav-dropdown');
      currentDropdown.classList.toggle('nav-dropdown--active'); 
    }
  });
}
