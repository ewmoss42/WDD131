function toggleMenu() {
    const menuList = document.querySelectorAll('ul a');

    menuList.forEach(function(item) {
        item.classList.toggle("hide");
    });
}
function handleResize() {
    const menuList = document.querySelectorAll('ul a');

    if (window.innerWidth > 1000) {
        menuList.forEach(function(item) {
            item.classList.remove("hide");
        });
    } 
    else {
        menuList.forEach(function(item) {
            item.classList.add("hide");
        });
    }
}
function viewerTemplate(pic, alt){
    return `<div class="viewer">
        <button class="close-viewer">X</button>
        <img src="${pic}" alt="${alt}" class="viewer-img">
        </div>`
}
function viewHandler(event) {
    const image = event.target;
    console.log(image);
    const source = image.src.split("-");
    console.log(source);
    const newImage = source[0] + "-full.jpeg";
    console.log(newImage);
    document.querySelector("body").insertAdjacentHTML("afterbegin", viewerTemplate(newImage, "please work"));
    document.querySelector(".close-viewer").addEventListener("click", closeViewer);
}
function closeViewer() {
    document.querySelector(".viewer").remove();
    console.log("it did something");
}
handleResize();
document.querySelector("#menuButton").addEventListener("click", toggleMenu);
window.addEventListener("resize", handleResize);
document.querySelector(".gallery").addEventListener("click", viewHandler);