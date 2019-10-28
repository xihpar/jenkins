function validar(){
    var nom = document.getElementById("nombre").value;
    var edad = parseInt(document.getElementById("edad").value);
    var pass1 = document.getElementById("pass1").value;
    var pass2 = document.getElementById("pass2").value;
    var email = document.getElementById("email").value;
    var tlf = document.getElementById("movil").value;

    //NOMBRE
    nom=nom.trim();
    if (nom=="" ){
        alert("Tienes que introducir un Nombre");
        document.getElementById("nombre").focus();
        return false;
    }

    //EDAD//
    if (isNaN(edad)){
        alert("Tienes que introducir un número entero en su edad.");
        document.getElementById("edad").focus();
        return false;
        }
        else if(edad<18 || edad>=60){
            alert("Debe ser mayor de 18 y menor de 60 años.");
            document.getElementById("edad").focus();
            return false;
            } 

    //PASSWORD
    pass1=pass1.trim();
    pass2=pass2.trim();
    
    if(pass1!==pass2){
        alert("Las contraseñas no coinciden");
        return false;
    }

    //EMAIL//    
    email=email.trim();
    if( !(/^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i.test(email)) ) {
        alert("Tienes que introducir una Email válido");
        document.getElementById("email").focus();
        return false;
    }

     //Móvil
    tlf=tlf.trim();
    if( !(/^[6]{1}([0-9]+){8}$/i.test(tlf)) ) {
        alert("Tienes que introducir una Móvil válido");
        document.getElementById("movil").focus();
        return false;
    } 
    
    return true;
}