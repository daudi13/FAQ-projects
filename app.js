const toggles = document.querySelectorAll('button');

toggles.forEach(toggle => {
    toggle.addEventListener('click', () => {
        toggle.parentNode.classList.toggle('active')
    })
})


