const main = () =>{
    const content = document.querySelector(".content");
    
    
    const mainPage = document.createElement("div");
    mainPage.classList.add("page","main");
    mainPage.textContent = "This is a restaurant that is nowhere and everywhere. Menu that is constantly changing." + 
    "We maybe near you, if you find us, come on in for the most unique experience of your life. Will be explained more if you can find us. One piece is real"

    content.appendChild(mainPage);

    
    const mainBtn = document.querySelector(".btn.main");
    mainBtn.addEventListener('click', () =>{
        if (document.querySelector(".page.menu")){
            document.querySelector(".page.menu").remove();
        }
        if (document.querySelector(".page.contactUs")){
            document.querySelector(".location").textContent = "The restaurant will be near you, you have to manifest into existence. Maybe submit the form and we will send you the location for it."
            document.querySelector(".page.contactUs").remove();
        }
        content.appendChild(mainPage);
    });

};

export default main;