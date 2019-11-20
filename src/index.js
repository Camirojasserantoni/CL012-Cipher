//para cifrar un mensaje a Ascii y entregue nueva letra 
let texto = document.getElementById("txt1");
let moveNum = document.getElementById("offSet");
let texto2 = document.getElementById("txt2");

document.getElementById("btn1").addEventListener("click", descifrar); 

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
//paa descifrar , desde el cifrado a letras ABC 


document.getElementById("btn2").addEventListener("click", cifrar);
 function cifrar(){
      texto2.innerHTML=window.cipher.decode(moveNum.value, texto.value);
   }
