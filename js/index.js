let active = document.getElementById('actived');
let close = document.getElementById('closed');
let link = document.getElementById('link');
let img = document.getElementById('img480');
let arrowd = document.getElementById('arrowd');

let num =1;
if(num >= 6){
    num =6;
}


function Block() {
    active.style.display= 'block';
    link.style.display = 'flex';
    arrowd.style.display= 'block';
    console.log('test message');
}
function Hide() {
    active.style.display= 'none';
    link.style.display = 'none';
    arrowd.style.display = 'none';
    console.log('close');
}
function AddSlider() {
    num++;
    if(num > 6){
        num =1;
    }
    img.src = `./img/img${num}.png`;
    console.log('test2 ');

}

function Sub() {
    if(num <=1){
        num =6;
    }
    num--;
    img.src = `./img/img${num}.png`;
    console.log('test ');
}