function displaying(box){
    // let floresimg= ["img/rosas_rojas.jpg", "img/rosas_rosas.jpg", "img/rosas_amarillas.jpg", "img/rosas_blancas.jpg", "img/rosas_multi.jpg"]
    let floresimg = new Array(5);
    floresimg[0] = "img/rosas_rojas.jpg";
    floresimg[1] = "img/rosas_rosas.jpg";
    floresimg[2] = "img/rosas_amarillas.jpg";
    floresimg[3] = "img/rosas_blancas.jpg";
    floresimg[4] =  "img/rosas_multi.jpg";
    document.getElementById('flores').src = floresimg[parseInt(box.value)];
}