
function establecerDireccion(keyCode){
    if (keyCode == 37 || keyCode == 65){
        if (direccion != "derecha"){
            direccion = "izquierda";
            return direccion;
        } 
    }
    else if (keyCode == 38 || keyCode == 87){
        if (direccion != "abajo"){
            direccion = "arriba";
            return direccion;
        }  
    }
    else if (keyCode == 39 || keyCode == 68){
        if (direccion != "izquierda"){
            direccion = "derecha";
            return direccion;
        }   
    }
    else if (keyCode == 40 || keyCode == 83){
        if (direccion != "arriba"){
            direccion = "abajo";
            return direccion;
        }  
    }
    else{
        return direccion;
    }
    
}