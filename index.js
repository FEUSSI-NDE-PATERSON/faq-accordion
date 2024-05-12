let img 
function accordion(value){
    let titleOne = document.querySelector(`.title-${value}`)
    let sign = document.querySelector(`.img-${value}`)
    img = sign
    if(img.src === "http://127.0.0.1:5500/assets/images/icon-plus.svg"){
        img.src="http://127.0.0.1:5500/assets/images/icon-minus.svg"
    }
    else{
        img.src="http://127.0.0.1:5500/assets/images/icon-plus.svg"
    }
  titleOne.classList.toggle('accor')
}