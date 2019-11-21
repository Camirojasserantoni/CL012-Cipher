//Declarando variables de la funcionalidad de elementos HTML
let texto = document.getElementById("txt1");
let moveNum = document.getElementById("offSet");
let texto2 = document.getElementById("txt2");

//funcionalidad del botón cifrar, con su respectivo evento y presentación de información 
document.getElementById("btn1").addEventListener("click", descifrar); 
//alertas de manejo de la App
  function descifrar () {
    if(texto.value ==''){
      alert("Para proceder con su denuncia escriba un texto");
      return false;
    }
    if(moveNum.value==''){
      alert("Debe Seleccionar un nivel de seguridad para su mensaje");   
      return false;
    }

    texto2.innerHTML = window.cipher.encode(moveNum.value, texto.value);
  }
//Llamado de botón descifrar, con su respectivo evento y presentación de información 

document.getElementById("btn2").addEventListener("click", cifrar);
 function cifrar(){
      texto2.innerHTML=window.cipher.decode(moveNum.value, texto.value);
   }
