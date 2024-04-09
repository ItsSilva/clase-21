const render = () => {
    const persona ={
        nombre: "Juan",
        edad: 19,
        esMayorDeEdad: true,
    }
    
    console.log(persona);
    console.log(persona.nombre, persona.edad, persona.esMayorDeEdad);

    persona.edad = 20;
    console.log(persona.edad);

    persona.nombreMascota = "Toby";
    console.log(persona);

    const personaDos = {
        nombre: "Ana",
        edad: 17,
        esMayorDeEdad: false,
        nombreMascota: "Luna",
    };
    console.log(personaDos);

    const familia = [
        persona,
        personaDos,
        {nombre: "Pedro", edad: 40, esMayorDeEdad: true, nombreMascota: "Rex"}
    ];
    console.log(familia);

    for(const integrante of familia){
        console.log(integrante.nombre);
    }
}
    document.addEventListener("DOMContentLoaded", render);