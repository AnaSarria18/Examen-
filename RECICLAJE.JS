class MaterialReciclable{
    constructor(nombre, centroReciclaje){
        this.nombre = nombre;
        this.centroReciclaje = centroReciclaje;
    }

    obtenerDetalles() {
        return `Material Reciclable: ${this.nombre}, Centro de Reciclaje: ${this.centroReciclaje.obtenerNombre()}`;
}
}

class CentroReciclaj{
    constructor(nombre){
        this.nombre = nombre;
        this.materiales = [];
    }

    obtenerNombre() {
        return this.nombre;
    }

    agregarMaterial(material){
        this.materiales.push(material);
    }

    obtenerDetalles() {
        let deta = "Centro Reciclaj: ${this.nombre}, Materiales: ";
        
        for (let i = 0; i < this.materiales.length; i++) {
            deta += this.materiales[i].nombre;
            if (i < this.materiales.length - 1) {
                deta += ', ';
            }
        }
        return deta;
    }
    
}



document.querySelector("#mostrarDetalles").addEventListener("click", () => {
    let nombreMaterial = document.querySelector("#nombrematerial").value;
    let nombreCentro = document.querySelector("#nombrecentro").value;

    let centro = new CentroReciclaj(nombreCentro);
    let material = new MaterialReciclable(nombreMaterial, centro);
    centro.agregarMaterial(material);

    document.querySelector("#detalles").innerText = material.obtenerDetalles();
});