(async () => {
    alert("hi")
    const res = await fetch("https://www.youtube.com")
    const text = await res.text()
    const element = document.createElement("p")
    element.textContent = text
    document.getElementById('textbox').appendChild(element)
    alert(text)
})()
