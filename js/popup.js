window.onload = function(){
    document.onclick = function(e){
        console.log(e.target.className);
        if(e.target.className !== "popup" && e.target.className !== "imageInRandom"
            && e.target.className !== "textInRandom" && e.target.className !== "carousel-control-next-icon" 
            && e.target.className !== "carousel-control-next" && e.target.className !== "carousel-control-prev-icon" 
            && e.target.className !== "carousel-control-prev"){
            d = document.getElementsByClassName("popup");
            for(let i = 0; i < d.length; i++){
                d[i].style.display = 'none';
            }
        }
    }
}

function hide(id){
    document.getElementById(id).style.display = 'none';
}

function show(id){   
    document.getElementById(id).style.display = 'inline';  
}