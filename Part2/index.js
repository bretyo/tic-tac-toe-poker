const idInput = document.getElementById("idInput");
const colorInput = document.getElementById("colorInput");


function setCard(){
    let card = document.getElementById(idInput.value);
    console.log(card.style.color);

    card.style.color = colorInput.value;
}

function reset(){
    document.getElementById('spade').style.color = '';
    document.getElementById('diamond').style.color = '';
    document.getElementById('club').style.color = '';
    document.getElementById('heart').style.color = '';
}