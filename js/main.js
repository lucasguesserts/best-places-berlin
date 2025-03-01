function upDate(previewPic){
    let div = document.getElementById("image")
    div.style.backgroundImage = `url('${previewPic.src}')`
    div.textContent = previewPic.alt
}

function unDo(){
    let div = document.getElementById("image")
    div.style.backgroundImage = `url('')`
    div.textContent = "Hover over an image below to display here."
}
