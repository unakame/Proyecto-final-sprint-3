document.getElementById("input-number").addEventListener("click", function(){
    //document.getElementById("demo").innerHTML = "Hello World";
    var input1 = document.createElement("input");
    input1.setAttribute("type","text");
    input1.setAttribute("placeholder","Name");
    //document.body.appendChild(input1);
    document.getElementById("box").appendChild(input1);

    var br1 = document.createElement("br");
    document.getElementById("box").appendChild(br1);

    var br1 = document.createElement("br");
    document.getElementById("box").appendChild(br1);

    var input2 = document.createElement("input");
    input2.setAttribute("type","email");
    input2.setAttribute("placeholder","Email");
    document.getElementById("box").appendChild(input2);

    var br1 = document.createElement("br");
    document.getElementById("box").appendChild(br1);

    var br1 = document.createElement("br");
    document.getElementById("box").appendChild(br1);

    var input3 = document.createElement("input");
    input3.setAttribute("type","text");
    input3.setAttribute("placeholder","City");
    document.getElementById("box").appendChild(input3);

    var br1 = document.createElement("br");
    document.getElementById("box").appendChild(br1);

    var br1 = document.createElement("br");
    document.getElementById("box").appendChild(br1);

    //var box = document.getElementById("box");
    //box.setAttribute("style","height: 1500px;")
});

var number = document.getElementById("input-number");

if(number.value.length > 10){
  alert("Ingrese un número válido");
}

//document.getElementById("body").addEventListener("scroll",function(){

//  var nav = document.getElementById("nav");
//  nav.setAttribute("style","background-color: white;");
  //input1.setAttribute("placeholder","Name");
  //document.body.appendChild(input1);
//  document.getElementById("box").appendChild(input1);


//})
