const header = () =>{
    const content = document.querySelector(".content");
    const headerDiv = document.createElement("div");
    headerDiv.classList.add("header");

    const mainBtn = document.createElement("button");
    mainBtn.classList.add("btn", "main");
    mainBtn.textContent = "Main"
    const menuBtn = document.createElement("button");
    menuBtn.classList.add("btn", "menu");
    menuBtn.textContent = "Menu"
    const contactBtn = document.createElement("button");
    contactBtn.classList.add("btn", "contact");
    contactBtn.textContent = "Contact Us"

    headerDiv.appendChild(mainBtn);
    headerDiv.appendChild(menuBtn);
    headerDiv.appendChild(contactBtn);
    content.appendChild(headerDiv);

    return (mainBtn, menuBtn, contactBtn)
};
export default header;