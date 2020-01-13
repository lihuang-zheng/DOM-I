const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"]);


// Updated to show the nav words
let navItems = document.querySelectorAll('a');
navItems.forEach((item, index) => item.textContent = siteContent["nav"][`nav-item-${index++}`]);

// Change color of nav links
navItems.forEach(item => item.style.color = "green");

// Add items with append and prepend
let nav = document.querySelector('nav');

let firstItem = document.createElement('a');
let lastItem = document.createElement('a');

firstItem.href = "#";
firstItem.textContent = "First Item";

firstItem.href = "#";
lastItem.textContent = "Last Item";

nav.prepend(firstItem);
nav.appendChild(lastItem);


// CTA
let headingOne = document.querySelector('h1');
headingOne.textContent = siteContent["cta"]["h1"];


let button = document.querySelector('button');
button.textContent = siteContent["cta"]["button"];


let ctaImg = document.querySelector('#cta-img');
ctaImg.src = siteContent["cta"]["img-src"];



// Middle image
let middleImage = document.querySelector('#middle-img');
middleImage.src = siteContent["main-content"]["middle-img-src"];



// Main Contents

// H4 contents
let headingFour = document.querySelectorAll('h4');

headingFour[0].textContent = siteContent["main-content"]["features-h4"];
headingFour[1].textContent = siteContent["main-content"]["about-h4"];
headingFour[2].textContent = siteContent["main-content"]["services-h4"];
headingFour[3].textContent = siteContent["main-content"]["product-h4"];
headingFour[4].textContent = siteContent["main-content"]["vision-h4"];
headingFour[5].textContent = siteContent["contact"]["contact-h4"];

// Paragraph contents
let paragraphs = document.querySelectorAll('p');

paragraphs[0].textContent = siteContent["main-content"]["features-content"];
paragraphs[1].textContent = siteContent["main-content"]["about-content"];
paragraphs[2].textContent = siteContent["main-content"]["services-content"];
paragraphs[3].textContent = siteContent["main-content"]["product-content"];
paragraphs[4].textContent = siteContent["main-content"]["vision-content"];
paragraphs[5].textContent = siteContent["contact"]["address"];
paragraphs[6].textContent = siteContent["contact"]["phone"];
paragraphs[7].textContent = siteContent["contact"]["email"];
paragraphs[8].textContent = siteContent["footer"]["copyright"];