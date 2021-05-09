const textarea = document.getElementById('textarea');
const buton = document.getElementById('buton');
const outputArea = document.getElementById('outputArea');


buton.addEventListener('click',print);


function handelerr(e){
    console.log(e);
    alert("Something wrong with the server, Try again latter");
}

function print(){

    const value = textarea.value;
    fetch(`https://api.funtranslations.com/translate/minion.json?text=${value}`)
    .then((APIDATA)=>{
        return APIDATA.json();
    }).then((REALDATA)=>{
        outputArea.innerText = REALDATA.contents.translated;
    }).catch(handelerr);
}

