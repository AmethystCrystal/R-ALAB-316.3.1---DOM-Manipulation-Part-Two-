// PART ONE: Getting Started

const mainEl = document.querySelector("main");
mainEl.style.height = "100vh"
mainEl.classList.add("flex-ctr");

const h1El = document.createElement("h1")
h1El.textContent = "DOM Manipulation";
mainEl.appendChild(h1El);
mainEl.style.backgroundColor = "#4a4e4d";

// PART TWO: Creating a Menu Bar

const topMenuEl = document.querySelector("#top-menu");
topMenuEl.style.height = "100%";
topMenuEl.style.backgroundColor = "#0e9aa7";
topMenuEl.classList.add("flex-around");

// PART THREE: Adding Menu Buttons

// Menu data structure
var menuLinks = [
    { text: 'about', href: '/about' },
    { text: 'catalog', href: '/catalog' },
    { text: 'orders', href: '/orders' },
    { text: 'account', href: '/account' },
];

menuLinks.forEach(link => {
    const anchorTag = document.createElement("a");
    anchorTag.href = link.href;
    anchorTag.textContent = link.text;
    topMenuEl.appendChild(anchorTag);
});

// PART FOUR: Adding Interactivity



