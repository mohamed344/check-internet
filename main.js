let title = document.querySelector('.title');
let ul = document.querySelector('ul');
let reload = document.querySelector('.reload');

window.onload = function(){
    if(window.navigator.onLine){
        console.log(onLine)
        onLine()
    }else{
        console.log(offLine)
        
        offLine()
    }
}
window.addEventListener("online", function(){
    onLine()
})
window.addEventListener("offline", function(){
    offLine()
})

reload.onclick = function(){
    window.location.reload();
}


function onLine(){
    title.innerHTML = 'Online Now';
    title.style.color = '#062';
    ul.classList.add('hide');
    reload.classList.add('hide');
}
function offLine(){
    title.innerHTML = 'Offline Now'
    title.style.color = '#333'
    ul.classList.remove('hide');
    reload.classList.remove('hide');
}