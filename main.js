
let inside=document.querySelector('.square');
for (let index = 1; index <=100; index++) {
    let element=document.createElement('div');
    element.innerHTML=index;
    inside.append(element);
    element.classList.add('square10');
    
}
function Difficulty(level){
    inside.innerHTML='';
    if(level=='Easy'){
        for (let index = 1; index <=100; index++) {
            let element=document.createElement('div');
            element.innerHTML=index;
            inside.append(element);
            element.classList.add('square10');   
        }
    }else if(level=='Normal'){
        for (let index = 1; index <=81; index++) {
            let element=document.createElement('div');
            element.innerHTML=index;
            inside.append(element);
            element.classList.add('square9');   
        }
    }else{
        for (let index = 1; index <=49; index++) {
            let element=document.createElement('div');
            element.innerHTML=index;
            inside.append(element);
            element.classList.add('square7');   
        }
    }
}

let choose=document.getElementById('GetDifficulty').addEventListener('click',function(){
    let choice=document.getElementById('difficulty').value;
    Difficulty(choice);
});