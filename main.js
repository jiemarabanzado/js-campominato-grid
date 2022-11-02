
let inside=document.querySelector('.square');
for (let index = 1; index <=100; index++) {
    let element=document.createElement('div');
    element.innerHTML=index;
    inside.append(element);
    element.classList.add('square10');
    
}