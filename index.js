

var modal = document.getElementById("myModal");
var modalImg = document.getElementById("modal_img");


function superHello(imgName) {
    modal.style.display = "flex";
    modalImg.src=imgName;
}

modal.onclick = function() { 
  modal.style.display = "none";
}