import './style.css';
import favicon from './favicon.png'
import header from './header';
import main from './mainPage';
import menu from './menuPage';
import contactUs from './contactUsPage';


function setFavicons(favImg){
    let headTitle = document.querySelector('head');
    let setFavicon = document.createElement('link');
    setFavicon.setAttribute('rel','shortcut icon');
    setFavicon.setAttribute('href',favImg);
    headTitle.appendChild(setFavicon);
}
setFavicons(favicon);


header();
main();
menu();
contactUs();