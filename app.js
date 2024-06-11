let inp=document.querySelector("input");
let btn=document.querySelector("button");
let ul=document.querySelector("ul");


btn.addEventListener("click",function(){
    let item=document.createElement("li");
    item.innerText=inp.value;

    let del=document.createElement("button");
    del.innerText="delete";
    del.classList.add("delete");

    item.appendChild(del);
    ul.appendChild(item);
    inp.value = "";
})


ul.addEventListener("click",function(event){
    if(event.target.nodeName=="BUTTON"){
        console.log(event.target);
        let item=event.target.parentElement;
        item.remove();
    }
})

// let delbtn=document.querySelectorAll(".del");
// for(d of delbtn){
//     d.addEventListener("click",function(){
//         let par=d.parentElement;
//         console.log(par);
//         par.remove();
//     })
// }