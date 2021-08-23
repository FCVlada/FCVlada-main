let bgBlack = document.querySelector('#black');
let blackBtn = document.querySelector('.btn_black');

let blackBool = false;

blackBtn.addEventListener('click', blackFunction)
function blackFunction() {
    if(blackBool == true) {
        bgBlack.href = "./assets/styles/black.css";
        blackBool = false
    } else {
        bgBlack.href = "";
        blackBool = true
    }
}