const clearSearch = () => {
    document.querySelector('#searchInput').value = null
}


const searchInput = document.querySelector('#searchInput')
searchInput.addEventListener('input', () => {

    let val = searchInput.value
    val = val.toLowerCase()

    let el = document.getElementsByClassName('hsd-item')


    if (val.length >= 2) {
        for (i = 0; i < el.length; i++) {
            if (!el[i].getAttribute('data-keys').toLowerCase().includes(val)) {
                el[i].classList.remove('show')
            }
            else {
                el[i].classList.add('show')
            }
        }
    }else{
        for (i = 0; i < el.length; i++) {
            el[i].classList.remove('show')
        }
    }
})


document.querySelectorAll('.hsd-item').forEach(el => {
    el.onclick = () => {
        clearSearch()

        let hsdItems = document.querySelectorAll('.hsd-item.show')
        hsdItems.forEach(el => {
            el.classList.remove('show')
        })
    }
})


document.querySelectorAll('.sidebar-toggle').forEach(el => {
    el.onclick = () => {
        document.querySelector('#sidebar').classList.toggle('sidebar-show')
    }
})