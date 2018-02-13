var rows = +prompt("enter natural number", "");
if (rows <= 0 || rows >= 20) {
    console.error('Incorrect!');
} else if (!Number.isInteger(rows)){
    console.error('Incorrect!');
} else {
var rows = rows + (rows - 1);
function createPyramid(rows)
{
for(var i=0;i<rows;i++) {
 if (i % 2 == 1) continue;
var output="";
    for(var j=0;j<rows-i;j++) {
        output+="  ";
    }
    for(var k=0;k<=i;k++) {    
       output += "[~] ";
    }
    console.log(output);  
    }  
}
createPyramid(rows);
}

