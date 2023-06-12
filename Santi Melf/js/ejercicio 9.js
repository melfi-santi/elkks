function Persona(nombre, edad, genero){
    this.nombre = nombre;
    this.edad = edad;
    this.genero = genero;   
}

Persona.prototype.obtDetalles = function() {
    console.log("nombre: " + this.nombre);
    console.log("edad: " + this.edad);
    console.log("genero: " + this.genero);
}

function Estudiante(nombre, edad, genero, curso, grupo){
    Persona.call(this, nombre, edad, genero);
    this.curso = curso;
    this.grupo = grupo;
}

Estudiante.prototype = Object.create(Persona.prototype);
Estudiante.prototype.constructor = Estudiante;

Estudiante.prototype.registrar = function(){
    console.log("el alumno " + this.nombre + " está registrado en el curso " + this.curso + " del grupo " + this.grupo);
}

function Profesor(nombre, edad, genero, asignatura, nivel){
    Persona.call(this, nombre, edad, genero);
    this.asignatura = asignatura;
    this.nivel = nivel;
}

Profesor.prototype = Object.create(Profesor.prototype);
Profesor.prototype.constructor = Profesor;

Profesor.prototype.asignar = function(){
    console.log("el profesor " + this.nombre + " tiene la asignatura " + this.asignatura + " del nivel " + this.nivel);
}