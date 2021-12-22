const btn = document.getElementById('btn');
const input = document.querySelector('input');

function countDown(){
    let n = input.value;
    for(let i = n; i >= 0; i--){
        console.log(i);
    };
}
btn.addEventListener('click', countDown, 4)
