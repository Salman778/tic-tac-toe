 let arr = [ [], [], [] ];
 let count = -1;
 let turn;
 let temp = false
 let audio;
 localStorage.setItem("x", 0);
 localStorage.setItem("o", 0)
 $(document).ready(function () {
   board();
 });
 
 const board = function(){
    $( "body" ).empty();
    $("body").append(" <div> <ul></ul> <ul></ul> <ul></ul></div> <button>Restart</button> <p id='one'></p> <p id='two'></p>");
    $("ul").append(" <li></li> <li></li> <li></li> ");
    $("#one").text(`X: ${localStorage.getItem('x')}`)
    $("#two").text(`O: ${localStorage.getItem('o')}`)
    arr = [ [], [], [] ];
    temp = !temp
    turn = temp;
    $("li").mouseover(function () { 
      $(this).css("background", "rgba(33, 62, 74, .5)")
    }
    );

    $("li").mouseleave(function () { 
      $(this).css("background", "rgb(33, 62, 74)")
    });

    $("li").click(function(){
      count++;
      $(this).off("click")
      $(this).off("mouseover")
      if(turn)
          $(this).text("X"), audio = new Audio('../audio/Tick.mp3');
      else
          $(this).text("O"), audio = new Audio('../audio/Woosh.mp3');
      audio.play();
      turn = !turn
      arr[$(this).parents().index()][$(this).index()] = $(this).text();
      if(count >= 4)
        setTimeout(check, 100);
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
    audio = new Audio('../audio/applause.mp3');
    audio.play();
    if(!turn){
      setTimeout(function(){
        alert("X is Win")
      }, 100);
      localStorage.setItem("x", (parseInt(localStorage.getItem("x")) + 1))
      audio = new Audio('../audio/applause.mp3');
    }
    else{
      setTimeout(function(){
        alert("O is Win")
      }, 100);
      localStorage.setItem("o", (parseInt(localStorage.getItem("o")) + 1))
    }
  }
  else  
      o = 0, x = 0, localStorage.setItem("x", 0), localStorage.setItem("o", 0);
  return board();
 }