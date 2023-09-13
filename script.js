let main=document.querySelector(".wraper")
// console.log(main);
window.onload=()=>{

    for(let i=0; i<55; i++){
        let div=document.createElement("div")
        div.classList.add("box")
        let x=Math.floor(Math.random()*16777215).toString(16);
        div.style.backgroundColor="#"+x
        main.appendChild(div)

    }

    // let x=Math.floor(Math.random()*16777215).toString(16); 
    // console.log(x);
}

main.addEventListener("click",function(e){
    // console.log(e);
    if(e.target.tagName.toLowerCase()==="div"){
        // console.log("yes found");
        e.target.style.display="none"                
    }
})
