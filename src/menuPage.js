import previewOne from './previewOne.jpeg';
import previewTwo from './previewTwo.jpeg';
import previewThree from './previewThree.jpeg';
import previewFour from './previewFour.jpeg';

const menu = () =>{
    const content = document.querySelector(".content");
    
    
    const menuPage = document.createElement("div");


    menuPage.classList.add("page","menu");
    
    const firstPreviewDiv = document.createElement("div");
    firstPreviewDiv.classList.add("preview","one");

    const firstPreview = new Image();
    firstPreview.src = previewOne;
    firstPreview.classList.add("image","one");

    const firstPreviewOverlay = document.createElement("div");
    firstPreviewOverlay.classList.add("overlay", "one");
    firstPreviewOverlay.textContent="Nope, not this garbage";
    firstPreviewDiv.appendChild(firstPreview);
    firstPreviewDiv.appendChild(firstPreviewOverlay);


    const secondPreviewDiv = document.createElement("div");
    secondPreviewDiv.classList.add("preview","one");

    const secondPreview = new Image();
    secondPreview.src = previewTwo;
    secondPreview.classList.add("image","two");

    const secondPreviewOverlay = document.createElement("div");
    secondPreviewOverlay.classList.add("overlay", "one");
    secondPreviewOverlay.textContent="Nope, not this garbage";
    secondPreviewDiv.appendChild(secondPreview);
    secondPreviewDiv.appendChild(secondPreviewOverlay);


    const thirdPreviewDiv = document.createElement("div");
    thirdPreviewDiv.classList.add("preview","one");

    const thirdPreview = new Image();
    thirdPreview.src = previewThree;
    thirdPreview.classList.add("image","three");

    const thirdPreviewOverlay = document.createElement("div");
    thirdPreviewOverlay.classList.add("overlay", "one");
    thirdPreviewOverlay.textContent="Nope, not this garbage";
    thirdPreviewDiv.appendChild(thirdPreview);
    thirdPreviewDiv.appendChild(thirdPreviewOverlay);


    const fourthPreviewDiv = document.createElement("div");
    fourthPreviewDiv.classList.add("preview","one");

    const fourthPreview = new Image();
    fourthPreview.src = previewFour;
    fourthPreview.classList.add("image","four");

    const fourthPreviewOverlay = document.createElement("div");
    fourthPreviewOverlay.classList.add("overlay", "one");
    fourthPreviewOverlay.textContent="Nope, not this garbage";
    fourthPreviewDiv.appendChild(fourthPreview);
    fourthPreviewDiv.appendChild(fourthPreviewOverlay);
    
    menuPage.appendChild(firstPreviewDiv);
    menuPage.appendChild(secondPreviewDiv);
    menuPage.appendChild(thirdPreviewDiv);
    menuPage.appendChild(fourthPreviewDiv);
 

    const menuBtn = document.querySelector(".btn.menu");
    menuBtn.addEventListener('click', () =>{
        if (document.querySelector(".page.main")){
            document.querySelector(".page.main").remove();
        }
        if (document.querySelector(".page.contactUs")){
            document.querySelector(".location").textContent = "The restaurant will be near you, you have to manifest into existence. Maybe submit the form and we will send you the location for it."
            document.querySelector(".page.contactUs").remove();
        }
        
        content.appendChild(menuPage);
    });


};
export default menu;