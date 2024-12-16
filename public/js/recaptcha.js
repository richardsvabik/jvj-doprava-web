function initRecaptcha() {
    var head = document.getElementsByTagName('head')[0]
    var script = document.createElement('script')
    script.type = 'text/javascript'
    script.src = 'https://www.google.com/recaptcha/api.js'
    head.appendChild(script)

    // remove focus to avoid js error:
    document.querySelectorAll('.js-init-recaptcha').forEach(elem => {
        elem.removeEventListener('focus', initRecaptcha)
    })
}
document.querySelectorAll('.js-init-recaptcha').forEach(elem => {
    elem.addEventListener('focus', initRecaptcha, false)
})