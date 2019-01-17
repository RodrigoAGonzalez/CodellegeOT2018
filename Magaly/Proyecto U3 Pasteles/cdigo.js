
function operacion1(){
	
    var n1= document.getElementById('Cheese').value;
    var sum1= parseInt(n1) * 280;
    var n2= document.getElementById('choco').value;
    var sum2= parseInt(n2) * 300;
    var n3= document.getElementById('tresL').value;
    var sum3= parseInt(n3) * 290;
    var n4= document.getElementById('coco').value;
    var sum4= parseInt(n4) * 300; 
    var n5= document.getElementById('Mango').value;
    var sum5= parseInt(n5) * 500; 
     var suma6= sum1 + sum2 + sum3 + sum4 + sum5; 
     var sub= suma6 * .16;
     var total= suma6 + sub ;
     document.getElementById("h").innerHTML = total;
     document.getElementById("f").innerHTML = suma6; 
     document.getElementById('g').innerHTML= sub;
     document.getElementById("a").innerHTML = sum1;
     document.getElementById("b").innerHTML = sum2;
     document.getElementById("c").innerHTML = sum3;
     document.getElementById("d").innerHTML = sum4;
     document.getElementById("e").innerHTML = sum5;
 }

function Borrar(){
location.reload(true);        

	
}
function compra() {
    var n1= document.getElementById('Cheese').value;
    var sum1= parseInt(n1) * 280;
    var n2= document.getElementById('choco').value;
    var sum2= parseInt(n2) * 300;
    var n3= document.getElementById('tresL').value;
    var sum3= parseInt(n3) * 290;
    var n4= document.getElementById('coco').value;
    var sum4= parseInt(n4) * 300; 
    var n5= document.getElementById('Mango').value;
    var sum5= parseInt(n5) * 500; 
     var suma6= sum1 + sum2 + sum3 + sum4 + sum5; 
     var sub= suma6 * .16;
     var total= suma6 + sub ;
     document.getElementById("h").innerHTML = total;
     document.getElementById("f").innerHTML = suma6; 
     document.getElementById('g').innerHTML= sub;
     document.getElementById("a").innerHTML = sum1;
     document.getElementById("b").innerHTML = sum2;
     document.getElementById("c").innerHTML = sum3;
     document.getElementById("d").innerHTML = sum4;
     document.getElementById("e").innerHTML = sum5;
     
     var cuadro = document.getElementById("cuadro").innerHTML;
    
if (parseInt(document.getElementById("h").innerHTML)==0) {
	alert("Favor de seleccionar producto");
	}else{
		alert("Compra exitosa su total es: " + "\n"+ cuadro + total);
    }
	}






