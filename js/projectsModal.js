let projects = document.querySelector("#projects");
let showProjects = document.querySelector("#showProjects");
let showResume = document.querySelector("#showResume");
let showContact = document.querySelector('#showContact');
let closeProjects = document.querySelector("#closeProjects");
let closeResume = document.querySelector("#closeResume");
let closeContact = document.querySelector("#closeContact");
let nav = document.querySelector(".linksContainer");
let resume = document.querySelector("#resume");
let contact = document.querySelector("#contact")

const toggleProjects = () => {
    projects.classList.toggle("show-modal");
    nav.classList.toggle("hidden");
};

const toggleResume = () => {
    resume.classList.toggle("show-modal");
    nav.classList.toggle('hidden');
}

const toggleContact = () => {
    contact.classList.toggle('show-modal');
    nav.classList.toggle('hidden');
}

const clickProjects = (event) => {
    if(event.target === projects) toggleProjects();
    else if (event.target === resume) toggleResume();
    else if (event.target === contact) toggleContact();
};

showProjects.addEventListener("click", toggleProjects);
showResume.addEventListener("click", toggleResume);
showContact.addEventListener("click", toggleContact);
closeProjects.addEventListener("click", toggleProjects);
closeResume.addEventListener("click", toggleResume);
closeContact.addEventListener("click", toggleContact);
window.addEventListener("click", clickProjects);
