var nombre_completo = prompt("Por favor ingrese el nombre completo:", "Nombres y apellidos");
var dia_nacimiento = prompt("Ingrese el día de nacimiento", "Ejemplo: Si nació el 22 de enero, solamente ingresar 22");
var mes_nacimiento = prompt("Ingrese el mes de nacimiento", "Ejemplo: Si nació en enero, solamente ingresar 1 porque es el mes 1");
var anio_nacimiento = prompt("Ingrese el año de nacimiento", "Ejemplo: Si nació el 22 de enero de 1987, solamente ingresar 1987");

var conyuge = prompt("¿Tiene cónyuge?", "SI/NO");
var hijos = prompt("¿Tiene hijos?", "SI/NO");
var cantidad_hijos = prompt("Ingrese la cantidad de hijos menores de 21 años:", "Por favor ingrese únicamente números");

const precio_base = 250;


comision = precio_base * 0.30;

// El siguiente es un comentario.
// Por favor no elimine los caracteres // que se encuentran al inicio.

// En la siguiente variable usted debe calcular los cargos correspondientes.
// Puede crear la cantidad de variables necesarias para calcular cada uno
// de los recargos que sean necesarios
recargos = 0;


total_a_pagar = precio_base + comision + recargos;
document.write(total_a_pagar);
