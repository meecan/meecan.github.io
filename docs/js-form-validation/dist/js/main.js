document.querySelector('.code-dropdown .control').addEventListener('click', () => {
    const codeDropdown = document.querySelector('.code-dropdown')
    codeDropdown.classList.toggle('hide')
    codeDropdown.classList.toggle('show')
})



const form = document.getElementById('myForm')
form.validation({
    firstTime:true,
    onSubmit:() => alert('Form submitted successfully...')
})



const form2 = document.getElementById('myForm2')
const fteCbx = document.getElementById('fte-cbx')

fteCbx.addEventListener('input', (e) => {
    if (e.target.checked) {
        localStorage.setItem('fte-cbx', 'checked')
        window.location.reload()
    }else{
        localStorage.removeItem('fte-cbx')
        window.location.reload()
    }
})

window.addEventListener('DOMContentLoaded', () => {
    if (localStorage.getItem('fte-cbx')) {
        fteCbx.checked = true
    }else{
        fteCbx.checked = false
    }

    if (fteCbx.checked) {
        form2.validation({
            firstTime:true,
            onSubmit:() => alert('Form submitted successfully...')
        })
    }else{
        form2.validation({
            firstTime:false,
            onSubmit:() => alert('Form submitted successfully...')
        })
    }
})



const updateInputElement = (ht, title) => {
    const inputArea = document.querySelector('#myForm2InputArea')
    const preCode = form2.querySelector('pre.code code')
    form2.querySelector('.label-heading').innerText = title

    inputArea.innerHTML = ht

    inputArea.querySelectorAll('input, textarea').forEach(el => {
        el.parentElement.classList.add('validate-label')
        el.classList.add('validate-input')

        if (title == 'Using Regex') {
            el.setAttribute('pattern', '\\'+el.getAttribute('pattern'))
        }
    })

    preCode.textContent = ht
    Prism.highlightElement(preCode)

    
    const fteCbx = document.getElementById('fte-cbx')

    if (fteCbx.checked) {
        form2.validation({
            firstTime:true,
            onSubmit:() => alert('Form submitted successfully...')
        })
    }else{
        form2.validation({
            firstTime:false,
            onSubmit:() => alert('Form submitted successfully...')
        })
    }
}



const updateInputElementHandler = (dataType) => {
    let ht = ''
    let title = ''

    switch (dataType) {
        
        case 'email':
            title = 'Email Input'
            ht = `<label>\n    <input type="email" placeholder="Enter an email..." minlength="6" maxlength="20" autocomplete="off" required>\n</label>`
        break;

        case 'text':
            title = 'Text Input'
            ht = `<label>\n    <input type="text" placeholder="Enter an username..." maxlength="10" minlength="5" required>\n</label>`
        break;

        case 'password':
            title = 'Password Inputs'
            ht = `<label>\n    <input type="password" id="passwordInput" placeholder="Enter a password..." required minlength="6">\n</label>\n\n<label>\n    <input type="password" data-equal="#passwordInput" placeholder="Confirm password..." required minlength="6">\n</label>`
        break;

        case 'number':
            title = 'Number Input'
            ht = `<label>\n    <input type="number" placeholder="Enter a number..." required min="0" max="102">\n</label>`
        break;

        case 'date':
            title = 'Date Input'
            ht = `<label>\n    <input type="date" placeholder="Enter a date..." required>\n</label>`
        break;

        case 'url':
            title = 'URL Input'
            ht = `<label>\n    <input type="url" placeholder="Enter an URL..." required>\n</label>`
        break;

        case 'radio':
            title = 'Radio Inputs'
            ht = `<label>\n    <input type="radio" name="radioInput" required>\n    <span>Male</span>\n</label>\n\n<label>\n    <input type="radio" name="radioInput" required>\n    <span>Female</span>\n</label>`
        break;

        case 'checkbox':
            title = 'Checkbox Inputs'
            ht = `<label>\n    <input type="checkbox" name="checkboxInput" required>\n    <span>Checkbox 1</span>\n</label>\n\n<label>\n    <input type="checkbox" name="checkboxInput2" required>\n    <span>Checkbox 2</span>\n</label>`
        break;

        case 'regex':
            title = 'Using Regex'
            ht = `<label>\n    <input type="text" placeholder="Enter a phone number..." maxlength="13" minlength="13" required pattern="\+90[5][0-9]{9}" data-format="+(90)5**********">\n</label>`
        break;

        case 'textarea':
            title = 'Textarea'
            ht = `<label>\n    <textarea required placeholder="Your CV..."></textarea>\n</label>`
        break;

        case 'file':
            title = 'File Input'
            ht = `<label>\n    <input type="file" required accept="image/png, image/gif, image/jpeg">\n</label>`
        break;

    }

    updateInputElement(ht, title)
}



document.querySelectorAll('.control-list li span').forEach(el => {
    el.onclick = () => {
        document.querySelector('.control-list .active').classList.remove('active')
        el.classList.add('active')

        updateInputElementHandler(el.getAttribute('data-type'))
    }
})



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





const form3 = document.getElementById('myForm3')


const connect = () => {
    let form3messages = {}

    const form3Mail = form3.querySelector('#form3Mail')
    const form3Password = form3.querySelector('#form3Password')

    if (form3Mail.value == 'example@gmail.com' && form3Password.value == '1234') {
        form3messages = {}
        setTimeout(() => {
            alert('Successfuly...')
        }, 100);
    }else if (form3Mail.value == 'example@gmail.com' && form3Password.value != '1234') {
        form3messages = {
            form3Password: "You entered the password incorrectly..."
        }
    }else if (form3Mail.value != 'example@gmail.com' && form3Password.value == '1234') {
        form3messages = {
            form3Mail: "Email address was not found..."
        }
    }else{
        form3messages = {
            form3Mail: "Email address was not found...",
            form3Password: "You entered the password incorrectly..."
        }
    }

    form3.validation.setMessage(form3messages)
}

window.addEventListener('DOMContentLoaded', () => {
    form3.validation({
        realTime: false,
        onSubmit: connect
    })
})