
let count = 0;
let result;

let visible = document.getElementById("count");

let saveEl = document.getElementById("save-el");




function increment(){
    count += 1;
    visible.textContent = count;
};

function save(){
    let countStr = count + ' - '
    saveEl.textContent += countStr ;
    count= 0;
    visible.textContent = 0;

};

