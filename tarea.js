const suma = (x,y) =>{
    return x + y;
}

const sonIguales = (z, w)=>{
    return z === w;
}

function MirarMismaLongitud(str1, str2) {
    return str1.length === str2.length;
}

function esPositivo(numero) {
 
    if (numero > 0) {
      return "El número es positivo";
    } else if (numero < 0) {
      return "El número es negativo";
    } else {
      return false;
    }
}

const colores = (color)=>{

    const Colores = {
      gray: "This is gray",
      red: "This is red",
      green: "This is green",
      orange: "This is orange",
      blue: "This is blue",
    };
    const Colordefault = "Color no encontrado";
  
    return Colores[color] || Colordefault;
}

const jiggywiggy = (numero)  => {
    if (numero % 3 === 0 && numero % 5 === 0) {
      return "jiggywiggy";
    }
    if (numero % 3 === 0) {
      return "jiggy";
    } else if (numero % 5 == 0) {
      return "wiggy";
    } else {
      return numero;
    }
}

const devolverPrimerElemento = (array) => {
    return array[0];
}

const agregarItemAlFinalDelArray = (array, elemento) =>{
    array.push(elemento);
    return array;
}

const nuevoUsuario = (nombre, email, password) => {
    const Usuarios = {
      nombre: nombre,
      gmail: gmail,
      password: password,
    }
    return Usuarios;
}

const verificarPassword = (usuario, password) => {
    if (usuario.password === password) {
      return true;
    } 
    else {
      return false;
    }
}

const actualizarPassword =(usuario, nuevaPassword) => {
    usuario.password = nuevaPassword;
    return usuario;
}

const agregarAmigo = (usuario, nuevoAmigo) => {

    usuario.amigo.push(nuevoAmigo);
    return usuario;
}

const pasarUsuarioAPremium = usuarios => {
    usuarios.forEach((usuario) => {
    usuario.esPremium = true;
    })
    return usuarios;
}

const sumarLikesDeUsuario = usuario => {
    let suma = 0;
    usuario.posts.forEach((post) => (suma += post.likes));
    return suma;
}

  

class Persona {
    constructor(nombre, apellido, edad, domicilio) {
      this.nombre = nombre;
      this.apellido = apellido;
      this.edad = edad;
      this.domicilio = domicilio;
    }
    detalle() {
      return {
        nombre: this.nombre,
        apellido: this.apellido,
        edad: this.edad,
        domicilio: this.domicilio,
      };
    }
}

const crearInstanciaPersona = (nombre, apellido, edad, dir)=>{
    const persona = new Persona(nombre, apellido, edad, dir);
    return persona;
}

const sumarArray = (numeros, cb) =>{
    let suma = numeros.reduce((num1, num2) => {
     return num1 + num2;
    }, 0);
    cb(suma);
}

const copiarEach = (array, cb) =>{
    array.forEach((value) => cb(value));
  }

  const operacionMatematica =(n1, n2, cb) =>{
    return cb(n1, n2);
  }

  function filter(array) {
    return array.filter((element) => {
      if (/[aá]/gi.test(element[0])) {
        return element;
      }
    });
  } 


module.exports = {
    suma,
    sonIguales,
    MirarMismaLongitud,
    esPositivo,
    colores,
    jiggywiggy,
    devolverPrimerElemento,
    agregarItemAlFinalDelArray,
    nuevoUsuario,
    verificarPassword,
    actualizarPassword,
    agregarAmigo,
    pasarUsuarioAPremium,
    sumarLikesDeUsuario,
    Persona,
    crearInstanciaPersona,
    sumarArray,
    copiarEach,
    operacionMatematica,
    filter
}
