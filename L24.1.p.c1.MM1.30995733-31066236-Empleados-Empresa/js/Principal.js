import Cl_Empresa from "./Cl_Empresa.js";
import Cl_Empleado from "./Cl_Empleado.js";

let empledao1=new Cl_Empleado("Mary","F");
let empledao2=new Cl_Empleado("Jose","M");
let empledao3=new Cl_Empleado("Carlos","M");
let empledao4=new Cl_Empleado("Pedro","M");

let empresa=new Cl_Empresa();
empresa.procesar(empledao1);
empresa.procesar(empledao2);
empresa.procesar(empledao3);
empresa.procesar(empledao4);
let salida=document.getElementById("salida");
salida.innerHTML="Resultados deResultado de la Empresa ";
salida.innerHTML+="<br> El número de empleados masculinos es de: "+empresa.devolverHombres();
salida.innerHTML+="<br> El porcentaje de empleadas femeninas es de: "+empresa. porcentajeMujeres()+"%";