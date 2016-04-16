/*************exp.js***********/
	
var dataBox=[0,0,0,0,0,0,0,0,0];	//array to store results
var status=true;			//ignore
var priorList=[0,1,2,3,4,5,6,7,8];	//computer's choice in array

document.getElementById("ta0").onclick = function() {myFunction(0)};
document.getElementById("ta1").onclick = function() {myFunction(1)};
document.getElementById("ta2").onclick = function() {myFunction(2)};
document.getElementById("ta3").onclick = function() {myFunction(3)};
document.getElementById("ta4").onclick = function() {myFunction(4)};
document.getElementById("ta5").onclick = function() {myFunction(5)};
document.getElementById("ta6").onclick = function() {myFunction(6)};
document.getElementById("ta7").onclick = function() {myFunction(7)};
document.getElementById("ta8").onclick = function() {myFunction(8)};
document.getElementById("display").innerHTML=dataBox;			//just to see "dataBox" visually
document.getElementById("display2").innerHTML=priorList;			//just to see "priorList" visually

var i=0;			//for loop in checkWin() below

function checkWin(){		//function to check if anybody won
 for(i=0;i<dataBox.length;i++){
  if(dataBox[i]==1&&dataBox[8-i]==dataBox[i]){
   alert("Player");
  } else if(dataBox[i]==2&&dataBox[8-i]==dataBox[i]){
   alert("Computer");
  }
 } 
}


function myFunction(num) {					//function to implment onclick
 document.getElementById("ta"+num).innerHTML = "a";
 dataBox[num]=1;
 checkWin();
 compFunction();
document.getElementById("display").innerHTML=dataBox;
document.getElementById("display2").innerHTML=priorList;
}

function compFunction(){					//function for computer to make a choice
 updatePrior();
 num2=priorList[0];
  document.getElementById("ta"+num2).innerHTML="b";
 dataBox[num2]=2;
 num2++;
document.getElementById("display").innerHTML=dataBox;
document.getElementById("display2").innerHTML=priorList;
}
	 
function updatePrior(){					//function for computer to avoid choosing an already chosen 
 var numBoard=priorList[0];
 if(dataBox[numBoard]!=0){
  priorList.shift();
  updatePrior();
 }
}
  


