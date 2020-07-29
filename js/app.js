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
const navMobile = (state) => {

    if (state == 1)
    {
        let ul = createNode('ul'),
            a_li = createNode('li'),
            b_li = createNode('li'),
            c_li = createNode('li')

            ul.setAttribute("class", "h-40 p-8 ")
            a_li.setAttribute("class", "nav-item text-xl text-gray-100 border-b border-gray-500")
            b_li.setAttribute("class", "text-xl text-gray-100 border-b border-gray-500")
            c_li.setAttribute("class", "text-xl text-gray-100 border-b border-gray-500")

            a_li.innerHTML = `<a href="#">HOME</a>`
            b_li.innerHTML = `<a href="#portfolio-section">PORTFOLIO</a>`
            c_li.innerHTML = `<a href="#footer-contact">CONTACT</a>`

            appendNode(ul, a_li)
            appendNode(ul, b_li)
            appendNode(ul, c_li)
            appendNode(document.getElementById('nav-mobile'), ul)

    }
    else{
        document.getElementById('nav-mobile').innerHTML = ""
    }
}
const navOpen = () =>
{
    document.getElementById('open-close-nav').innerHTML = `<img id="open-nav" data-aos="flip-left" class="mr-6 w-8 h-8 self-center lg:hidden" src="./src/svg/hamburger-nav.svg" alt="">`
    navMobile(0)
}
const navClose = () =>
{
    document.getElementById('open-close-nav').innerHTML = `<img data-aos="flip-left" class="my-4 mr-6 w-8 h-8 self-center lg:hidden" src="./src/svg/close-nav.svg" alt="">`
    navMobile(1)
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