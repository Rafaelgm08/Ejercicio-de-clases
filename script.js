class Libro {
    constructor (titulo, autor, genero, leido=false) {
    this.titulo = titulo;
    this.autor = autor;
    this.genero = genero; 
    this.leido = leido;
}

marcarComoleido() {
    this.leido=true;
    console.log("Este libro ha sido leido");
}

marcarComoNoLeido() {
    this.leido=false;
    console.log("Este libro no ha sido leido");
}

informacion() {
    const estadoLeido = this.leido ? "Sí" : "No";
    console.log(`El titulo de este libro es: ${this.titulo}, autor ${this.autor} y genero ${this.genero},Leído: ${estadoLeido}`);
    }
}

const libro1 = new Libro ("Cien años de soledad","Gabriel Garcia Marquez", "Realismo Fantastico");
const libro2 = new Libro ("2999","Roberto Bolaño", "Crimen");

libro1.marcarComoleido();
libro1.marcarComoNoLeido();
libro1.informacion();

