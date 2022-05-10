/* YOUR CODE HERE! */
let boxes = document.getElementsByClassName("box");
const container = document.querySelector(".box-container");

let l_pressed = 0;
let r_pressed = 0;
let id = 2;
let colors = ["red", "yellow", "purple", "pink"];
let offset;

document.onmousedown = function (e){
    if(e.button === 0){
        l_pressed = 1;
    }
    else if(e.button === 2){
        r_pressed = 1;
    }
};


document.onmouseup = function (e){
    if(e.button === 0){
        l_pressed = 0;
    }
    else if(e.button === 2){
        r_pressed = 0;
    }
};

function shift(e){
    return e.shiftKey;
}
function alt(e){
    return e.altKey;
}


function resize(box){
    if(box.classList.contains("box-large")){
        box.classList.remove("box-large");
    }
    else{
        box.classList.add("box-large");
    }
}

function duplicate(box){
    let newb = box.cloneNode(true);
    newb.textContent = id;
    id += 1;
    console.log(box.offsetTop + box.clientHeight + 'px')
    newb.style.top = box.offsetTop + box.clientHeight + 'px';
    newb.style.left = box.offsetLeft + box.clientWidth + 'px';
    container.appendChild(newb);
    add_event_listeners(newb);
    boxes = document.getElementsByClassName("box");
}

function change_col(box){
    box.style.backgroundColor = colors[Math.floor(Math.random()*colors.length)];
}

function remove(box){
    if(boxes.length > 1){
        box.parentNode.removeChild(box);
        boxes = document.getElementsByClassName("box");
    }
}

function add_event_listeners(box){
    box.addEventListener('mousedown', (ev)=>{
        if(ev.button === 0){
            l_pressed = 1;
            offset = [
                box.offsetLeft - ev.clientX,
                box.offsetTop - ev.clientY
            ];
        }
        if(ev.button === 0 && shift(ev)){
            resize(box);
        }
        if(ev.button === 2 || ev.button === 1){
            change_col(box);
        }
    })

    box.addEventListener('mouseup', (ev)=>{
        l_pressed = 0;
    })

    box.addEventListener('mousemove', (ev)=>{
        ev.preventDefault();
        if(l_pressed){
            box.style.top = ev.clientY + offset[0] + 'px';
            box.style.left = ev.clientX + offset[1] + 'px';
        }
    })

    box.addEventListener('dblclick', (ev)=>{
        if(alt(ev)){
            remove(box);
        }
        else{
            duplicate(box);
        }
    })
}

[...boxes].forEach((box) => {
    add_event_listeners(box);
})



// box.addEventListener('mouseover', (ev) =>{
//     console.log('clicked!', ev.currentTarget.valueOf().innerText);
//     // console.log(l_pressed);
//     console.log(box.clientHeight)
//     while(l_pressed === 1){
//         box.style.left = ev.pageX + "px";
//         box.style.top = ev.pageY + "px";
//     }
// });