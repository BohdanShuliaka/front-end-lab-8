var start = confirm("Do you want to play a game?");
var attemps=3;
var userScore=0;
var initPrice =10;
var range = 5;
  if(start){
    var price = initPrice;
    while(true){
      var number = Math.floor(Math.random() * range + 1);
      var userInput = prompt("Enter the number in range 0 to "+range+"\n"+
                            "Attemps left "+attemps+"\n"+
                            "Total prize "+ userScore+" $\n"+
                            "Possible price on current attemp "+price+" $");
      if(userInput){
          if(userInput==number){
          userScore += price;
          var resume = confirm("You guess, do you want continue?");
              if(resume){
                  attemps=3;
                  price=initPrice*=3;
                  range*=2;
              }else break;
           }else{
            attemps--;
            price = Math.floor(price/2);
               }
      }else break;
      if(attemps===0){
        break;
        }
    }
    console.log("Thank you for a game. Your prize is: "+userScore+" $");
  }else alert("You did not become a millionaire");