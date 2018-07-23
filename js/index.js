let active = document.getElementById('actived');
let close = document.getElementById('closed');
let link = document.getElementById('link');


function Block() {
    active.style.display= 'block';
    link.style.display = 'flex';
    console.log('test message');
}
function Hide() {
    active.style.display= 'none';
    link.style.display = 'none';
    console.log('close');

}