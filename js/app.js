/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

// Define Global Variables
const navBar = document.querySelector('.navbar__menu');
const navList = document.querySelector('#navbar__list');
const sections = document.querySelectorAll('section');
const footer = document.querySelector('footer');
const header = document.querySelector('.page__header');
// End Global Variables

// navigation function
function navFunction() {
    // "for of" loop to iterate over sections
    for (section of sections) {
        // creating "li" elements in the "ul"
        const navButton = document.createElement('li');
        // inserting text in "li" elements
        navButton.insertAdjacentHTML('afterbegin', `<a href='#${section.id}' class='menu__link'>${section.dataset.nav}</a>`);
        // adding the "li" to "ul"
        navList.appendChild(navButton);
        // calling the scroll function
        smoothScroll(navButton, section);
    };
    // adding "ul" to navigation
    navBar.appendChild(navList);
};

// calling the navFunction
navFunction();

// Scroll to anchor ID using scrollTO event
function smoothScroll(navButton, section) {
    // adding the event listener and scrolling function
    navButton.addEventListener('click', function(event) {
        // preventing default action to be initiated
        event.preventDefault();
        window.scrollTo({
            top: section.offsetTop,
            behavior:'smooth'
        });
    });
};

// Add class 'active' to section when near top of viewport
function activeClass() {
    // selecting all menu__link classes
    const activeState = document.querySelectorAll('.menu__link');
    // "for each" property to iterate over sections
    sections.forEach((section, i) => {
        // getting boundingrect for each section
        const sectionBond = section.getBoundingClientRect();
        // if condition to check activity according to boudings
        if (sectionBond.top <= 380 && sectionBond.bottom >= 350){
            // adding the active class
            section.classList.add('your-active-class');
            // adding active_button  class to nav button according to ID
            activeState[i].classList.add('active_button');
        } else {
            // removing active classes when section is not active
            section.classList.remove('your-active-class');
            activeState[i].classList.remove('active_button');
        }
    });
};

// toggling navBar according to activity
function navBar_toggle() {
    let userScroll;
    // default scrolling
    header.getElementsByClassName.cssText = 'opacity: 1; transition: ease 0.3s';
    // clearing during scrolling
    window.clearTimeout(userScroll);
    // running after end of scrolling
    userScroll = setTimeout(function() {
        header.style.cssText = 'opacity: 0; transition: ease 0.3s'
    }, 6000);
};

// adding the event for the last 2 functions of activeness
window.addEventListener('scroll', (event)=>{
    activeClass();
    navBar_toggle();
})

// adding a return to top button
const returnToTop = footer.insertAdjacentHTML('beforebegin', `<div id='returnToTop'></div>`);
// applying the function using the return button
document.getElementById('returnToTop').addEventListener('click', function(){
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});