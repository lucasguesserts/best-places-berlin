const images = [
    // pairs image path and alternative text
    ["images/berlin_bridge.jpg", "Berlin Bridge"],
    ["images/berlin_building.jpg", "Berlin Building"],
    ["images/berlin_gate.jpg", "Berlin Gate"],
    ["images/berlin_green.jpg", "Berlin Green"],
    ["images/berlin_museum.jpg", "Berlin Museum"],
    ["images/berlin_reichstag.jpg", "Berlin Reichstag"],
    ["images/berlin_tower.jpg", "Berlin Tower"],
]

function upDate(previewPic) {
    const focus = document.getElementById("image-focus")
    focus.style.backgroundImage = `url('${previewPic.src}')`
    focus.textContent = previewPic.alt
}

function unDo() {
    const focus = document.getElementById("image-focus")
    focus.style.backgroundImage = `url('')`
    focus.textContent = "Hover over an image below to display here."
}

function addAllImages() {
    const previews = document.getElementById("images-preview")
    for (const image_data of images) {
        const image_element = document.createElement("img")
        image_element.tabIndex = 0
        image_element.setAttribute("class", "preview")
        image_element.src = image_data[0]
        image_element.alt = image_data[1]
        image_element.addEventListener("mouseover", () => upDate(image_element))
        image_element.addEventListener("mouseout", unDo)
        image_element.addEventListener("focus", () => upDate(image_element))
        image_element.addEventListener("blur", unDo)
        previews.appendChild(image_element)
    }
}
