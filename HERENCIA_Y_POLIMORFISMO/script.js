//POLIMORFISMO

class FiguraGeometrica {
    constructor() {
      this.tipo = "Figura Geométrica";
    }
  
    obtenerArea() {
      return "No se puede calcular el área de una figura genérica.";
    }
  
    obtenerPerimetro() {
      return "No se puede calcular el perímetro de una figura genérica.";
    }
  }
  
  class Circulo extends FiguraGeometrica {
    constructor(radio) {
      super();
      this.tipo = "Círculo";
      this.radio = radio;
    }
  
    obtenerArea() {
      return Math.PI * this.radio ** 2;
    }
  
    obtenerPerimetro() {
      return 2 * Math.PI * this.radio;
    }
  }
  
  class Cuadrado extends FiguraGeometrica {
    constructor(lado) {
      super();
      this.tipo = "Cuadrado";
      this.lado = lado;
    }
  
    obtenerArea() {
      return this.lado ** 2;
    }
  
    obtenerPerimetro() {
      return 4 * this.lado;
    }
  }
  
  class Rectangulo extends FiguraGeometrica {
    constructor(ancho, alto) {
      super();
      this.tipo = "Rectángulo";
      this.ancho = ancho;
      this.alto = alto;
    }
  
    obtenerArea() {
      return this.ancho * this.alto;
    }
  
    obtenerPerimetro() {
      return 2 * (this.ancho + this.alto);
    }
  }

function calcularFigura (figura) {
    console.log(figura.tipo);
    console.log("area:",figura.obtenerArea());
    console.log("perimetro:",figura.obtenerPerimetro());
    console.log("___________");
} 

  
  // Ejemplos de uso:
  const circulo = new Circulo(5);
  const rectangulo = new Rectangulo (7,8);
  const cuadrado = new Cuadrado (6);
  
  calcularFigura (circulo);
  calcularFigura (rectangulo);
  calcularFigura (cuadrado);



  /*console.log(`Área del círculo: ${circulo.obtenerArea()}`);
  console.log(`Perímetro del círculo: ${circulo.obtenerPerimetro()}`);
  console.log(`Área del rectangulo: ${rectangulo.obtenerArea()}`);
  console.log(`Área del cuadrado: ${cuadrado.obtenerArea()}`);*/





