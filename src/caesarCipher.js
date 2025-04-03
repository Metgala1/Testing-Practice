function caesarCipher(text, shift) {
    let result = "";
    for (let i = 0; i < text.length; i++) {
      let char = text[i];
  
      if (char.match(/[a-z]/i)) { 
        let code = char.charCodeAt(0);
        let isUpperCase = char === char.toUpperCase(); 

        let shiftedCode = code + shift;
  
      
        if (isUpperCase) {
          if (shiftedCode > 90) { 
            shiftedCode = 65 + (shiftedCode - 91); 
          } else if (shiftedCode < 65) { 
            shiftedCode = 90 - (64 - shiftedCode); 
          }
        } else {
          if (shiftedCode > 122) { 
            shiftedCode = 97 + (shiftedCode - 123); 
          } else if (shiftedCode < 97) {
            shiftedCode = 122 - (96 - shiftedCode); 
          }
        }
  
        result += String.fromCharCode(shiftedCode); 
      } else {
        result += char;
      }
    }
  
    return result;
  }
  
  module.exports = caesarCipher;