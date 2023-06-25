document.querySelectorAll('.faq-question').forEach(el => {
    el.addEventListener('click', () => {
        const activeFaqItem = document.querySelector('.faq-item.active')
        if (activeFaqItem && activeFaqItem != el.parentNode) {
            activeFaqItem.classList.remove('active')
        }

        el.parentNode.classList.toggle('active')
    })
})

document.querySelectorAll('.mobile-nav-toggle').forEach(el => {
    el.addEventListener('click', () => {
        document.querySelector('#navbar').classList.toggle('mobile-nav-active')
    })
})