/**
 * autor carlos romo
 * este es un comentario de bloque 
 * 
 * 
*/



function subir ( ){
var $Nombres=document.getElementsById('Nombres').value
var $Apellidos=document.getElementsById('Apellidos').value
var $Tipodedocumento=document.getElementsById('Tipodedocumento').value
var $numerodedocumento=document.getElementsById('numerodedocumento').value
var $Movil=document.getElementsById('Movil').value
var $clave=document.getElementsById('clav').value
var $VERIFIQUE=document.getElementsById('$VERIFIQUE').value

const dataUser=new dataRegister($Nombres,$Apellidos,$Tipodedocumento,$numerodedocumento,$Movil,$clave)

console.log(dataUser)

}
class dataRegister{

    Nombres
    Apellidos
    Tipodedocumento
    numerodedocumento
    Movil
    clave
    constructor(pnombres,ppellido,
                pTipodedocumento,
                Pnumerodedocumento,
                PMovil,
                Pclave,){

         this.Nombres= pnombres 
         this.Apellidos=ppellido
         this.Tipodedocumento=pTipodedocumento
         this.numerodedocumento=Pnumerodedocumento
         this.Movil=PMovil
         this.clave.Pclave
    }     
         
}

