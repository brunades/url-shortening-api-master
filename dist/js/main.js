import { formValidator, displayLinks } from "./_formHandler.js"
import { handleLinkCopy } from "./_formLinks.js";

document.addEventListener("readystatechange", (event) => {
  if (event.target.readyState === "complete") {
    initApp();
  }
});

const initApp = () => {

  const introForm = document.querySelector('#introForm');

  introForm.addEventListener('submit', formValidator);

  onload = (event) => {
    const myShortenedLinks  = JSON.parse(localStorage.getItem('myShortenedLinks'));
    if (myShortenedLinks) {
      for (const link of myShortenedLinks) { displayLinks(link) };
      handleLinkCopy();
    }
  }

  //Menu

  const mobileMenu = document.querySelector('#mobile-menu');

  const toggleMenu = () => {
    const menuContainer = document.querySelector('#navbar .nav-container');
    menuContainer.classList.toggle('hidden');

  }

  mobileMenu.addEventListener('click', toggleMenu);

}