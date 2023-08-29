/*changing big and small img*/
var MainImg = document.getElementById("main_img");
var smallimg = document.getElementsByClassName("small_img")

smallimg[1].onclick = function() {
    MainImg.src = smallimg[1].src;
}
smallimg[2].onclick = function() {
    MainImg.src = smallimg[2].src;
}
smallimg[3].onclick = function() {
    MainImg.src = smallimg[3].src;
}
smallimg[0].onclick = function() {
    MainImg.src = smallimg[0].src;
}


/*zoom*/
document.getElementById('container').addEventListener("mouseover", function(e) {
    const tgt = e.target;
    tgt.classList.add('zoomed')
})

document.getElementById('container').addEventListener("mouseout", function(e) {
    const tgt = e.target;
    tgt.classList.remove('zoomed')
})

/*ADD-MINUS id="minus_quantity"*/
var minus_quantity = document.getElementById("minus_quantity");
var plus_quantity = document.getElementById("plus_quantity");
const p = document.getElementById("number_quantity");

plus_quantity.onclick = function() {
    p.textContent = +p.textContent + 1;
}

minus_quantity.onclick = function() {
    p.textContent = +p.textContent - 1;
}
