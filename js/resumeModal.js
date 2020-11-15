let modal = document.querySelector("#resume");
let showModal = document.querySelector(".show");
let closeModal = document.querySelector(".close-btn");
let nav = document.querySelector(".linksContainer");

const toggleModal = () => {
    modal.classList.toggle("show-modal");
    nav.classList.toggle("hidden");
};

const clickOutside = (event) => {
    if(event.target === modal) toggleModal();
};

showModal.addEventListener("click", toggleModal);
closeModal.addEventListener("click", toggleModal);
window.addEventListener("click", clickOutside);