let userAgentData = navigator.userAgentData

/*>>> Effect Search <<< */
const search = document.getElementById('search')

function openSearch(){
  this.search.classList.toggle("openSearch");
}

/*>>> MENU-MOBILE <<<*/

window.onload = () => {
  const burger = document.getElementById('burger')
  const nav    = document.getElementById('main-nav')

  burger.addEventListener('click', () => {
    burger.classList.toggle('is-open');
    nav.classList.toggle('is-open');
  });

  const titleLeft = document.getElementById("titleLeft"),
  titleRight = document.getElementById("titleRight")

  titleLeft.style.transform = "translate(300%)";
  titleRight.style.transform = "translate(-300%)"
}

