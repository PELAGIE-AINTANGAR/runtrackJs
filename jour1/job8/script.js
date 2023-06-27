
function nombrePremier(nombre1, nombre2){
    //verifie si les deux nombres sont premiers et on retourne true si c'est le cas
    if (nombre1 % 2 != 0 && nombre2 % 2 != 0){
        let somme = nombre1 + nombre2;
        // console.log(somme);
        return somme;
    }
    //verifie si les deux nombres sont premiers et on retourne false si c'est le cas    
    else{

        return false;
    }
      
}
// nombrePremier(3, 5);
console.log(nombrePremier(3, 5));
