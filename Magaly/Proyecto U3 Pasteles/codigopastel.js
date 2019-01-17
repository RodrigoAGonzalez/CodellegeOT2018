function meterencarro(formu) {
unidades=formu.numpedido.value;
descripcion=formu.producto.value;
if (confirm("El siguiente producto se va a a\u00F1adir al carro de la compra.\n\n " + descripcion + " \n\nEst\u00E1 de acuerdo?")) {
numeroregistro = 0;  
numeroregistro = getcookie("numerodeorden");
numeroregistro++;
if ( numeroregistro > 5 )
     alert("ATENCI�N\nSu carrito esta lleno.\nPor favor, acceda a la hoja de pedido.\nGracias.");
else {
actualizarbase = formu.numpedido.value + "|"  + formu.precio.value  + "|" + formu.referencia.value + "|" + formu.producto.value;
nuevopedido = "Order." + numeroregistro;
setcookie (nuevopedido, actualizarbase, null, "/");
setcookie ("numerodeorden", numeroregistro, null, "/");

aviso = "PRODUCTO SELECCIONADO\n\n" + "Cantidad: " + unidades + " unidad/es.\n"
+ "Producto: \n" + descripcion;
alert(aviso);
}
}
}

function getcookieval (offset) {
  var endstr = document.cookie.indexOf (";", offset);
  if (endstr == -1)
  endstr = document.cookie.length;
  return unescape(document.cookie.substring(offset, endstr));
}

function getcookie (name) {
   var arg = name + "=";
   var alen = arg.length;
   var clen = document.cookie.length;
   var i = 0;
   while (i < clen)
        {
        var j = i + alen;
        if (document.cookie.substring(i, j) == arg) return getcookieval (j);
        i = document.cookie.indexOf(" ", i) + 1;
        if (i == 0) break;
        }
   return null;
}

function setcookie (name,value,expires,path,domain,secure) {
   document.cookie = name + "=" + escape (value) +
      ((expires) ? "; expires=" + expires.toGMTString() : "") +
      ((path) ? "; path=" + path : "") +
      ((domain) ? "; domain=" + domain : "") +
      ((secure) ? "; secure" : "");
}
function operacion1(){
	
    var n1= document.getElementById('chess').value;
    var sum1= parseInt(n1) * 280;
    var n2= document.getElementById('choc').value;
    var sum2= parseInt(n2) * 300;
    var n3= document.getElementById('tres').value;
    var sum3= parseInt(n3) * 250;
    var n4= document.getElementById('co').value;
    var sum4= parseInt(n4) * 300; 
    var n5= document.getElementById('man').value;
    var sum5= parseInt(n5) * 500; 
     var suma6= sum1 + sum2 + sum3 + sum4 + sum5; 
     var sub= suma6 * .16;
     var total= suma6 + sub ;
     document.getElementById("h").innerHTML = total;
     document.getElementById("f").innerHTML = suma6; 
     document.getElementById('g').innerHTML = sub;
     document.getElementById("a").innerHTML = sum1;
     document.getElementById("b").innerHTML = sum2;
     document.getElementById("c").innerHTML = sum3;
     document.getElementById("d").innerHTML = sum4;
     document.getElementById("e").innerHTML = sum5;
 }

function Borrar(){
location.reload(true);    
}