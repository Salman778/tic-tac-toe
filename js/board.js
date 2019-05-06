 let arr = [ [], [], [] ];
 let count = -1;
 let turn = true;

 $(document).ready(function () {
   board();
 });
 
 const board = function(){
    $( "body" ).empty();
    $("body").append(" <ul></ul> <ul></ul> <ul></ul> <button>Restart</button> ");
    $("ul").append(" <li></li> <li></li> <li></li> ");

    arr = [ [], [], [] ];
    turn = true;

     $("li").click(function(){
       count++;
       $(this).off("click")
        if(turn)
            $(this).text("X")
        else
            $(this).text("O")
            
        turn = !turn
        arr[$(this).parents().index()][$(this).index()] = $(this).text();
        console.log(arr)
        if(count >= 4)
          setTimeout(check(), 100);
    })

    $("button").click(function(){
      return restart();
    })
 }




 const check = function(){
     if(arr[0][0] === arr[1][1] && arr[1][1] === arr[2][2] && arr[1][1])
       return restart(true)
     else if(arr[0][2] === arr[1][1] && arr[1][1] === arr[2][0] && arr[1][1])
      return restart(true)
     else
     for(let i = 0; i <= 2; i++)
        if(arr[i][0] === arr[i][1] && arr[i][1] === arr[i][2] && arr[i][1])
          return restart(true)
        else if(arr[0][i] === arr[1][i] && arr[1][i] === arr[2][i] && arr[2][i])
          return restart(true)
          
      if(count === 8)
        return restart(); 
 }



 const restart = function(check=false){
   count = -1;
   if(check){
    if(!turn)
      alert("X is Win");
    else
      alert("O is Win");
   }
  else  
      alert("Draw");
  return board();
 }