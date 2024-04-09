const hamb = document.querySelector("#hamb");
const body = document.body;
const popup = document.querySelector("#popup");

const navList = document.querySelector("#nav-list").cloneNode(1);

hamb.addEventListener("click", hambHandler);

function renderPopup() {
    popup.appendChild(navList);
}

function hambHandler(e) {
    e.preventDefault();
    hamb.classList.toggle("active");
    popup.classList.toggle("open");
    body.classList.toggle("noscroll");
    renderPopup();
}

const links = Array.from(navList.children);

links.forEach((link) => {
    link.addEventListener("click", closeOnClick);
});

function closeOnClick() {
    popup.classList.remove("open");
    hamb.classList.remove("active");
    body.classList.remove("noscroll");
}

// galery

const italy = document.querySelector("#_btn--italy");
const australia = document.querySelector("#_btn--australia");
const india = document.querySelector("#_btn--india");
const brazil = document.querySelector("#_btn--brazil");

const italyOpen = document.querySelector("#photo-chapter_list-italy");

italy.addEventListener("click", openChangingTheCountryToItaly);

function openChangingTheCountryToItaly() {
    italyOpen.classList.toggle("open");
    brazilOpen.classList.remove("open");
    indiaOpen.classList.remove("open");
    australiaOpen.classList.remove("open");
};

const indiaOpen = document.querySelector("#photo-chapter_list-india");

india.addEventListener("click", openChangingTheCountryToIndia);

function openChangingTheCountryToIndia() {
    indiaOpen.classList.toggle("open");
    brazilOpen.classList.remove("open");
    italyOpen.classList.remove("open");
    australiaOpen.classList.remove("open");
};

const australiaOpen = document.querySelector("#photo-chapter_list-australia");

australia.addEventListener("click", openChangingTheCountryToAustralia);

function openChangingTheCountryToAustralia() {
    australiaOpen.classList.toggle("open");
    brazilOpen.classList.remove("open");
    italyOpen.classList.remove("open");
    indiaOpen.classList.remove("open");
};

const brazilOpen = document.querySelector("#photo-chapter_list-brazil");

brazil.addEventListener("click", openChangingTheCountryToBrazil);

function openChangingTheCountryToBrazil() {
    brazilOpen.classList.toggle("open");
    italyOpen.classList.remove("open");
    indiaOpen.classList.remove("open");
    australiaOpen.classList.remove("open");
};




