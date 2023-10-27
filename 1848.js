var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.replaceAll("\r","").split("\n");

let soma = 0;
for (let index = 0; index < lines.length; index++) {
    let grito = lines[index];
    if (grito != "caw caw") {
        
        switch (lines[index]) {
            case "---":
                soma += 0;
                break;
            case "--*":
                soma += 1;
                break;
            case "-*-":
                soma += 2;
                break;
            case "-**":
                soma += 3;
                break;
            case "*--":
                soma += 4;
                break;
            case "*-*":
                soma += 5;
                break;
            case "***":
                soma += 7;
                break;
            case "**-":
                soma += 6;
                break;
            
            default: 
                break;
        } 
    } else {
        console.log(soma);
        soma = 0;
    }
    
}
