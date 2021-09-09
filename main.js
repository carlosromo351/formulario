/**
 * autor carlos romo
 * este es un comentario de bloque 
 * 
 * 
*/
function subir (){
var $Nombres=document.getElementsById('Nombres').value
var $Apellidos=document.getElementsById('Apellidos').value
var $Tipodedocumento=document.getElementsById('Tipodedocumento').value
var $numerodedocumento=document.getElementsById('numerodedocumento').value
var $Movil=document.getElementsById('Movil').value
var $clave=document.getElementsById('clav').value
var $VERIFIQUE=document.getElementsById('$VERIFIQUE').value
const valores= [$Nombres,$Apellidos,$Tipodedocumento,$numerodedocumento,$Movil,$clave]
alert(valores)
}
function my_function (a,b) {
    const suma=a+b
    console.log(suma )
    
}
 const valor_1 =my_function(4,6)
 const valor_2=my_function(1100.500)


 const funcion =(a,b)=>{
     const suma=a+b
     return suma
 } 
 const valor_1 =my_function(4,6)   
 console.log(valor_1 )  
 const suma=(a,b)=>a+b
 const resultado =suma(12,5)
 alert(resultado)
 