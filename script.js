const hexArray = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F']
var hexColor= "#";

// for(var i=0; i<6; i++){
//     var index= Math.floor(Math.random() * (hexArray.length));
//     hexColor= hexColor+ hexArray[index];
// }

// console.log(hexColor);

// var body = document.querySelector('body');  //puri body uthane k liye
// body.style.backgroundColor = hexColor;




function changeColor(){
    for(var i=0; i<6; i++){
        var index= Math.floor(Math.random() * (hexArray.length));
        hexColor= hexColor+ hexArray[index];
    }
    
    console.log(hexColor);
    
    var body = document.querySelector('body');  //puri body uthane k liye
    body.style.backgroundColor = hexColor;
    var changeName = document.querySelector(".changeName")
    changeName.innerHTML = hexColor;
    hexColor="#";

}