window.cipher = {
  encode: (moveNum, texto) => {
     /* Aqui declararemos variables */
     let asciiLet = "";
     let finalLet = "";
     
     /* Function Zone: */
     // For permite que el indice tome los valores ascii de acuerdo al largo de su string
     for(let i=0; i<texto.length; i++){
        asciiLet = texto.charCodeAt(i);
        
        let newAscii = "";
        //Al revisar rango de las MAYÚSCULAS desde 65-90 ascii
        if ((asciiLet >= 65) && (asciiLet <=90)){
         newAscii = ((asciiLet-65+ parseInt(moveNum))%26+65);    
        } 
        else if (asciiLet===32){
           newAscii=asciiLet
        }
        let resultado = String.fromCharCode(newAscii);
        finalLet += resultado;
                
     } 
     
     return finalLet;
     
  },
  decode:(moveNum, texto) => {
     let asciiLet = "";
     let finalLet = "";
     
     for(let i=0; i<texto.length; i++){
        asciiLet = texto.charCodeAt(i);
        let newAscii = "";
        //dentro de rango de las mayúsculas 65-90 ascii
        if ((asciiLet >= 65) && (asciiLet <=90)){
         newAscii = ((asciiLet-90-parseInt(moveNum))%26+90);  
        }
        else if (asciiLet===32){
           newAscii=asciiLet
        }
        let resultado=String.fromCharCode(newAscii);
        finalLet+=resultado;
       
     }  
     return finalLet;

  },         

        
  


};