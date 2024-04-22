(async () => {
    const res = await fetch("https://www.youtube.com")
    const element = document.createElement("p")
    element.textContent = await res.text()
    document.getElementById('textbox').appendChild(element)
})
