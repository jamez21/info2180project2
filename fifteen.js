"use strict";

window.onload = function(){
    var shuffle = document.getElementById("shufflebutton");
    
    var puzzlespace = document.getElementById("puzzlearea");
    var divs = puzzlespace.getElementsByTagName("div");
    
    var empDiv = {x:300, y:300};
    
    gameplay(divs,empDiv,shuffle);
    
};

// function to align blocks on screen
function display(list){
     for (var x=0; x<list.length; x++){
        if (x<4) {
            var y = (100*(x));
            var z = (0);
            list[x].style.left = y + "px";
            list[x].style.top = z + "px";
        }
        
        if (x>=4 && x<8){
            var y = (100*(x-4));
            var z = (100);
            list[x].style.left = y + "px";
            list[x].style.top = z + "px";
        }
        if (x>=8 && x<12){
            var y = (100*(x-8));
            var z = (100*2);
            list[x].style.left = y + "px";
            list[x].style.top = z + "px";
        }
        if(x>=12 && x<16){
            var y = (100*(x-12));
            var z = (100*3);
            list[x].style.left = y + "px";
            list[x].style.top = z + "px";
        }
    }
    
    list[0].style.backgroundPosition = "0px 0px";
    list[1].style.backgroundPosition = "-100px 0px";
    list[2].style.backgroundPosition = "-200px 0px";
    list[3].style.backgroundPosition = "-300px 0px";
    list[4].style.backgroundPosition = "0px -100px";
    list[5].style.backgroundPosition = "-100px -100px";
    list[6].style.backgroundPosition = "-200px -100px";
    list[7].style.backgroundPosition = "-300px -100px";
    list[8].style.backgroundPosition = "0px -200px";
    list[9].style.backgroundPosition = "-100px -200px";
    list[10].style.backgroundPosition = "-200px -200px";
    list[11].style.backgroundPosition = "-300px -200px";
    list[12].style.backgroundPosition = "0px -300px";
    list[13].style.backgroundPosition = "-100px -300px";
    list[14].style.backgroundPosition = "-200px -300px";
}


// function to swap block locations
function move(empDiv,div){
    var xTemp = empDiv.x;
    var yTemp = empDiv.y;
    empDiv.x = parseInt(div.style.left);
    empDiv.y = parseInt(div.style.top);
    div.style.left = xTemp + "px";
    div.style.top = yTemp + "px";
}


  
function gameplay(list,empDiv,shuffle){
    
    display(list);
    
    for (var x=0; x<list.length; x++) {
        list[x].addClassName("puzzlepiece");
        list[x].style.backgroundImage = "url('background.jpg')";
        
        // hover function
        // function checks and assigns mobility, if block is beside empty space
        list[x].onmouseover = function(){
        if ((parseInt(this.style.top)==empDiv.y) && 
            Math.abs(parseInt(this.style.left)-empDiv.x)==100 ||
            Math.abs(parseInt(this.style.top)-empDiv.y)==100 && 
            (parseInt(this.style.left)==empDiv.x)){
                this.addClassName("movablepiece");
            }
        };
        
        // click function
        // function moves/swaps movable block with empty space
        list[x].onmousedown = function(){
            if(this.className == "puzzlepiece movablepiece"){
                if((parseInt(this.style.top)==empDiv.y) && 
                    (Math.abs(parseInt(this.style.left)-empDiv.x)==100)){
                        move(empDiv,this);
                        
                }else if(Math.abs(parseInt(this.style.top)-empDiv.y)<=100 && 
                        (parseInt(this.style.left)==empDiv.x)){
                            move(empDiv,this);
                }
            }
        };
        
        // function to assign block as regular peice
        list[x].onmouseout = function(){
            this.className = "puzzlepiece";
        };
    }
    
    // function to randomize/shuffle blocks
    shuffle.onmousedown = function(){
        for (var x=0; x<100; x++){
            var pos = Math.floor(Math.random()*(list.length-1));
            move(empDiv,list[pos]);
        }
    };
    
}
