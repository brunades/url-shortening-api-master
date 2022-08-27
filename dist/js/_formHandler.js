import { requestShortLink } from "./_api.js";
import { handleLinkCopy } from "./_formLinks.js";

const formInput = document.querySelector('#introInput');
const invalidLink = document.querySelector('#invalidLink');

const data = [];

const updateLocalStorage = (link) => {
  data.push(link);
  localStorage.setItem('myShortenedLinks', JSON.stringify(data));
};

const toggleLoader = () => {
  const loader = document.querySelector('#loader');
  loader.classList.toggle('hidden');
}

export const formValidator = async (event) => {
  toggleLoader();
    requestShortLink(formInput.value).then((res) => {
      if(res.ok === true) {
        updateLocalStorage(res.result);
        invalidLink.style.display = 'none';
        formInput.classList.remove('error');
        displayLinks(res.result);
        handleLinkCopy();
      } else {
        invalidLink.style.display = 'block';
        formInput.classList.add('error');
      }
      toggleLoader();
    });
    formInput.value = '';
  
  event.preventDefault();
};

const formLinks = document.querySelector('#form-links');

export const displayLinks = (obj) => {

    var newDiv = document.createElement('div');
    newDiv.className = 'single-link';
    var newP = document.createElement('p');
    newP.className = 'full-link';
    var fullLink = document.createTextNode(`${obj.original_link}`);
    newP.appendChild(fullLink);
    var newLink = document.createElement('a');
    newLink.href = `${obj.short_link}`;
    newLink.target = '_blank'; 
    newLink.className = 'short-link';
    var shortLink = document.createTextNode(`${obj.short_link}`);
    newLink.appendChild(shortLink);
    var newBtn = document.createElement('button')
    newBtn.className = 'btn';
    newBtn.innerText= 'Copy';

    newDiv.appendChild(newP);
    newDiv.appendChild(newLink);
    newDiv.appendChild(newBtn);
    formLinks.appendChild(newDiv);

}