const check = function(){
    for(let i = 0; i <= 6; i++){
        if(i === 4 || i === 5)
            continue;
        for(let j = 1; j <= 4; j++){
            if(i === 0 || i === 3 || i === 6 && j === 1){
                smallCheck(i, j);
                if(checking){
                    checking = false
                    return restart();
                }
            }
            if(i === 0 || i === 1 || i === 2 && j === 3){
                smallCheck(i, j);
                if(checking){
                    checking = false
                    return restart();
                }
            }if(checking){
                checking = false
            
                return restart();
            }
            if(i === 0 || i === 1 || i === 2 && j === 3){
                smallCheck(i, j);
                if(checking){
                    checking = false
                    return restart();
                }
            }
            if(i === 2 && j === 2){
                smallCheck(i, j);
                if(checking){
                    checking = false
                    return restart();
                }
            }
            if(i === 0 && j === 4){
                smallCheck(i, j);
                if(checking){
                    checking = false
                    return restart();
                }
            }
            
            
    }
}
    return;
    
}

const smallCheck = function(i, j){
    if(($("li").eq(i).text() === $("li").eq((i+j)).text()) && ($("li").eq(i).text() === $("li").eq((i+(j*2))).text()) && $("li").eq(i).text() !== ""){
        alert("Win");
        checking = true;
    } 
    if(cells ===  9)
        return restart();
   
    
    return;
}




/////////////////////


let turn = "X"
let arr = [];
const play = function(){
    $(this).off("click");
    /*if(turn === "X"){
        //$(this).text(turn);
        //arr.push($(this).text(turn));
        //turn = "O"
    }
    else{
        //$(this).text(turn);
        arr.push($(this).text(turn));
        turn = "X"
    }*/
    
    $(this).text($(this).index());
}
$("li").on("click", play)


const restart = function(){
        turn = "X"
        $("li").text("");
        $("li").on("click", play)
}
$("button").on("click", restart)


//////////////////////////////////////


$("input[type='text']").click(function(event) {
    let str = ""
    $(this).val("");
  $("input[type='text']").keydown(function(event){
    $(this).val("");
    if(event.keyCode == "8")
        str = str.slice(0, -1);
        for(let i = 65; i <= 90; i++)
        if(event.keyCode == `${i}` ){
            str += String.fromCharCode(event.keyCode);
            break;
        }

   $(this).val(str);
});

});

$("input[type='text'").css({"background": "#355664", "margin": "0 2em", "color": "#ffffff"})
  $("input[type='button']").css({"background": "#355664", "color": "#ffffff"})


  $("span, input[type='submit']").css({"margin": "2em", "padding": "0 5em"})