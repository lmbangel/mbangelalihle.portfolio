const createNode = (el) => {
    return document.createElement(el)
}
const appendNode = (parent, child) => {
    return parent.appendChild(child);
}
const sectionHero = () => {
    document.getElementById('full-name').innerHTML = `LIHLE MBANGELA`
    document.getElementById('job-title').innerHTML = `Web Developer`
    document.getElementById('about-me').innerHTML = `I am a Full-Stack web developer
    and web design enthusiast. I do freelance work on various projects; feel free to contact me for any web project your have or for a jam session `
}
const navOpen = () =>
{
    document.getElementById('open-close-nav').innerHTML = `<img id="open-nav" data-aos="flip-left" class="mr-6 w-8 h-8 self-center lg:hidden" src="./src/svg/hamburger-nav.svg" alt="">`
}
const navClose = () =>
{
    document.getElementById('open-close-nav').innerHTML = `<img data-aos="flip-left" class="mr-6 w-8 h-8 self-center lg:hidden" src="./src/svg/close-nav.svg" alt="">`
}

const navBtn  = () => {
    let nav = document.getElementById('open-nav');

    if (nav)
        navClose();
    else
        navOpen();

    return;
}

navOpen();
sectionHero();