function Determinar(){
    var edad=document.getElementById("edad").value;
    var nombre=document.getElementById("nombre").value;
    if(edad>=18 && edad<65)
        alert("El trabajador "+nombre+" está en edad laboral");
    else
        alert("El trabajador "+nombre+" no está en edad laboral");
}  