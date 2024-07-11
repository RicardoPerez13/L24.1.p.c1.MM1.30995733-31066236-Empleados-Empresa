export default class Cl_Empresa{
    
    constructor(){
        this.cont_empleados=0;
        this.cont_hombres=0;
        this.cont_mujeres=0
    }

    procesar(e){
    this.cont_empleados++
    if (e.sexo==="F") { 
        this.cont_mujeres++ 
         }
    if (e.sexo === "M") {
        this.cont_hombres++
        }
    }
    devolverEmpleados(){
        return this.cont_empleados
    }
    devolverHombres(){
        return this.cont_hombres
    }
    porcentajeMujeres(){
        return (this.cont_mujeres/this.cont_empleados)*100
    }
} 
