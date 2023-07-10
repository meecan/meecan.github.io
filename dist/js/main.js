const portfolioSlider = tns({
    container: '.portfolio-slider',
    mouseDrag: true,
    items: 1,
    responsive: {
        768: {
            items: 2,
        },
        992: {
            items: 3,
        }
    },
    gutter: 24,
    nav: true,
    navPosition: 'bottom',
    controls: false
})


const updateNavlink = (section) => {
    document.querySelectorAll('.navlink').forEach(link => {
        link.classList.remove('active')
        if (link.getAttribute('href') == section) {
            link.classList.add('active')
        }
    })
}



window.onscroll = () => {
    // if (!document.body.classList.contains('sticky-header') && window.scrollY > 120) {
    //     document.body.classList.add('sticky-header')
    // }

    // if (document.body.classList.contains('sticky-header') && window.scrollY <= 20) {
    //     document.body.classList.remove('sticky-header')
    // }

    document.querySelectorAll('[data-section]').forEach(section => {
        const sectionTop = section.offsetTop
        if (window.scrollY >= sectionTop - 250) {
            let current = section.getAttribute('data-section')

            updateNavlink(current)
        }
    })
}


const dataNavbarToggle = document.querySelectorAll('[data-navbar-toggle]')

dataNavbarToggle.forEach(el => {
    el.addEventListener('click', () => {
        document.querySelector('#navbar').classList.toggle('show')
    })
})