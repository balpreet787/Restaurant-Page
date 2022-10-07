const contactUs = () =>{
    const content = document.querySelector(".content");
    
    
    const contactUsPage = document.createElement("div");
    contactUsPage.classList.add("page","contactUs");

    const location = document.createElement("div");
    location.classList.add("contactUs","location");
    location.textContent = "The restaurant will be near you, you have to manifest into existence. Maybe submit the form and we will send you the location for it."

    contactUsPage.appendChild(location);

    const form = document.createElement("form");
    form.setAttribute("method", "post");
    form.setAttribute("action", "");

    const nameField = document.createElement("input");
    nameField.setAttribute("type", "text");
    nameField.setAttribute("name", "FullName");
    nameField.setAttribute("placeholder", "Full Name");

    const emailID = document.createElement("input");
    emailID.setAttribute("type", "email");
    emailID.setAttribute("name", "emailID");
    emailID.setAttribute("placeholder", "E-Mail ID");

    const messageBox = document.createElement("textarea");
    messageBox.setAttribute("name", "messageBox");
    messageBox.setAttribute("placeholder", "Type your message here....");

    const submit = document.createElement("button");
    submit.classList.add("submit");
    submit.textContent="Submit";

    form.appendChild(nameField);
    form.appendChild(emailID);
    form.appendChild(messageBox);
    form.appendChild(submit);

    contactUsPage.appendChild(form);

    
    submit.addEventListener('click',()=>{    
        form.reset();
        location.textContent = "You don't learn do you, its futile. Only your luck can bring you to us."
    });

    const contactUsBtn = document.querySelector(".btn.contact");
    contactUsBtn.addEventListener('click', () =>{
        if (document.querySelector(".page.menu")){
            document.querySelector(".page.menu").remove();
        }
        if (document.querySelector(".page.main")){
            document.querySelector(".page.main").remove();
        }
        
        content.appendChild(contactUsPage);
    });


};
export default contactUs;