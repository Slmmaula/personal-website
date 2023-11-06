// Toggle icon navbar
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        }
    });
    // sticky navbar
    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100)

    // Remove toggle icon & Navbar when click navbar link (Scroll)
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};




function emailSend(){

    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "contact.slmmaula@gmail.com",
        Password : "D905718DA4132375367EB1206B084A413120",
        To : 'contact.slmmaula@gmail.com',
        From : "contact.slmmaula@gmail.com",
        Subject : "New Contact Form Enquiry",
        Body : "messageBody"
    }).then(
    message => alert("Message Sent Succesfully!")
);
}

// Scroll Reveal
ScrollReveal({
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .services-container, .portofolio-box, .contact-form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });