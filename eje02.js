var cadena = "se van sus naves ";

//Verificar si la cadena es un palíndromo o no
function Pali(cadena){
 
  cadena=cadena.toLowerCase().replace(/\s/g,"");
  cadenaR=cadena.split("").reverse().toString();
  for (var i = 0; i < ((cadenaR.length)-1); i++) {
    cadenaR=cadenaR.replace(",","");
  };
  if(cadena==cadenaR){
    resultado="Es un Palindromo";
  }
  else{
    resultado="No es un Palindromo";
  }
  console.log (resultado); 
}
Pali(cadena);

//Contar cuantos palabras tiene la cadena
function contar_palabras(cadena){
    
    var tokens = cadena.split(" ");
    result = tokens.length;
    console.log("El numero de palabras son: "+result);
}
contar_palabras(cadena);

//Contar cuantos caracteres tiene la cadena
function contar_caracteres(cadena){

    var nueva = cadena.split(" ").join("");
    var caracteres=nueva.length;   
    console.log("El numero de caracteres es: "+caracteres);
}
contar_caracteres(cadena);

//Contar el numero de vocales
function contar_vocales(cadena){
    var nueva = cadena.split(" ").join("");
    var vocales=0;
    for(var i=0;i<nueva.length;i++){
        if(nueva[i]=="a" || nueva[i]=="e" || nueva[i]=="i" || nueva[i]=="o" || nueva[i]=="u"){
            vocales=vocales+1;
        }
    }
    console.log("El numero de vocales es: "+vocales);
}
contar_vocales(cadena);

//Contar el numero de consonantes
function contar_consonantes(cadena){
    var frase = cadena.split(" ").join("");
    var consonantes=0;
    for(var i=0;i<frase.length;i++){
        if(frase[i]=='b' || frase[i]=='c' || frase[i]=='d' || frase[i]=='f' 
        || frase[i]=='g' || frase[i]=='h' || frase[i]=='j' || frase[i]=='k' 
        || frase[i]=='l' || frase[i]=='m' || frase[i]=='n' || frase[i]=='p'
        || frase[i]=='q' || frase[i]=='r' || frase[i]=='s' || frase[i]=='t' 
        || frase[i]=='v' || frase[i]=='w' || frase[i]=='x' || frase[i]=='y'
        || frase[i]=='z'){
            consonantes=consonantes+1;
        }
}
console.log("El numero de consonantes es: "+consonantes);
}
contar_consonantes(cadena);

