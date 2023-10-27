// DOM Manipulation Part 1
// _________________________________________________________________


// Getting Started

const mainEl = document.querySelector("main");
mainEl.style.height = "100vh"
mainEl.classList.add("flex-ctr");

const h1El = document.createElement("h1")
h1El.textContent = "DOM Manipulation";
mainEl.appendChild(h1El);
mainEl.style.backgroundColor = "#4a4e4d";

// Creating a Menu Bar

const topMenuEl = document.querySelector("#top-menu");
topMenuEl.style.height = "100%";
topMenuEl.style.backgroundColor = "#0e9aa7";
topMenuEl.classList.add("flex-around");

// Adding Menu Buttons

// Menu data structure
var menuLinks = [
  { text: 'about', href: '/about' },
  {
    text: 'catalog', href: '#', subLinks: [
      { text: 'all', href: '/catalog/all' },
      { text: 'top selling', href: '/catalog/top' },
      { text: 'search', href: '/catalog/search' },
    ]
  },
  {
    text: 'orders', href: '#', subLinks: [
      { text: 'new', href: '/orders/new' },
      { text: 'pending', href: '/orders/pending' },
      { text: 'history', href: '/orders/history' },
    ]
  },
  {
    text: 'account', href: '#', subLinks: [
      { text: 'profile', href: '/account/profile' },
      { text: 'sign out', href: '/account/signout' },
    ]
  },
];

menuLinks.forEach(link => {
  const anchorTag = document.createElement("a");
  anchorTag.href = link.href;
  anchorTag.textContent = link.text;
  topMenuEl.appendChild(anchorTag);

});

// _________________________________________________________________


// DOM Manipulation Part 2


// Creating the Submenu

const subMenuEl = document.querySelector("#sub-menu");
subMenuEl.style.height = "100%";
subMenuEl.style.backgroundColor = "#3da4ab";
subMenuEl.classList.add("flex-around");
subMenuEl.style.position = "absolute";
subMenuEl.style.top = "0";

// Adding Menu Interaction

const topMenuLinks = topMenuEl.querySelectorAll("a");

topMenuEl.addEventListener('click',

  function (event) {
    event.preventDefault();
    if (event.target.nodeName === 'A') {
      console.log(event.target.textContent);


      if (event.target.nodeName === 'A') {
        const clickedLink = event.target;
        console.log(clickedLink.textContent);

        if (!clickedLink.classList.contains('active')) {
          clickedLink.classList.add('active');
          subMenuEl.innerHTML = " ";
          menuLinks.forEach(el => {
            if (el.text == clickedLink.textContent) {
              el.subLinks.forEach(sub => {
                let subMenuItem = document.createElement("a");
                subMenuItem.textContent = sub.text;
                subMenuEl.append(subMenuItem);
              })
            } else {
              subMenuEl.style.top = '0';
            }
          })
        }
        const menuLink = menuLinks.find(link => link.text.toLowerCase() === clickedLink.textContent.toLowerCase());

        if (menuLink && menuLink.subLinks) {
          subMenuEl.style.top = '100%';

        }
      }

    }
  })




