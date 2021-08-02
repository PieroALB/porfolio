
(function(){


  let contact = document.getElementById("contact");
  let root =  document.getElementById("contain-home");

  ScrollReveal().reveal(".contain",{delay:1000});
  ScrollReveal().reveal(".contain-about-me",{delay:1000});
  ScrollReveal().reveal(".contain-work",{delay:1000});
  
  contact.addEventListener("click",(e)=>{
    let containContact =  document.createElement("article");
    let divclose =  document.createElement("div");
    let divemail =  document.createElement("div");
    let divsocial =  document.createElement("div");
    let plinkedin = document.createElement("a");
    let pinstagram  =  document.createElement("a");
    let pgithub =  document.createElement("a");  
    let pclose =  document.createElement("p");
    let pemail =  document.createElement("h1");
   
    containContact.classList.add("zoomIn");
    containContact.style.position = "absolute";
    containContact.style.width = "95%";
    containContact.style.boxSizing = "border-box";
    containContact.style.overflow = "hidden";
    containContact.style.zIndex = "2000";
    containContact.style.padding = "1rem";
    containContact.style.height = "90vh";
    containContact.style.top ="50%";
    containContact.style.left = "50%";
    containContact.style.transition =  "all 300ms ease-in 0s";
    containContact.style.display = "flex";
    containContact.style.flexFlow =  "column wrap";
    containContact.style.transform =  "translate(-50%,-50%)";
    containContact.style.backgroundColor = "var(--color-white)";
  
    divclose.style.height = "10%";
    divclose.style.padding = ".5rem";
    divclose.style.display = "flex";
    divclose.style.flexFlow = "row wrap";
    divclose.style.justifyContent = "flex-end";
    divclose.style.alignItems = "center";
    pclose.innerHTML = "<i class='bi bi-x-lg'></i>"
    pclose.style.fontSize = "2rem"; 
    pclose.style.opacity= ".6";
    pclose.style.cursor =  "pointer";
  
  
   pclose.addEventListener("click",(e)=>{
      divclose.style.transform = "rotate(45deg)";
      containContact.style.visibility =  "hidden";
      containContact.classList.add("zoomOut");
    });
  
    divemail.style.height = "80%";
    divemail.style.display =  "flex";
    divemail.style.flexFlow = "row wrap";
    divemail.style.justifyContent = "center";
    divemail.style.alignItems = "center";
    pemail.innerHTML = "alvarezbenavidespiero@gmail.com";
    pemail.style.fontSize = "200%";
    pemail.style.fontFamily = "var(--title)";
  
    divsocial.style.height = "10%";
    divsocial.style.display = "flex";
    divsocial.style.flexFlow =  "row wrap";
    divsocial.style.alignItems = "center";
    divsocial.style.gap = "1rem";
    divsocial.style.justifyContent = "center";
    plinkedin.innerHTML= "<i class='bi bi-linkedin'></i>";
    plinkedin.style.fontSize = "1.5rem";
    plinkedin.style.cursor = "pointer";
    pinstagram.innerHTML= "<i class='bi bi-instagram'></i>";
    pinstagram.style.cursor = "pointer";
    pinstagram.style.fontSize = "1.5rem";
    pgithub.innerHTML= "<i class='bi bi-github'></i>";
    pgithub.style.cursor = "pointer";
    pgithub.style.fontSize = "1.5rem";
  
    divsocial.appendChild(plinkedin);
    divsocial.appendChild(pgithub);
    divsocial.appendChild(pinstagram);
    divemail.appendChild(pemail);
    divclose.appendChild(pclose);
    containContact.appendChild(divclose);
    containContact.appendChild(divemail);
    containContact.appendChild(divsocial);
    root.appendChild(containContact);
  });
})();
