export default class Cl_Empleado{    
    constructor(cedula, sexo){
    this.cedula=cedula;
    this.sexo=sexo;
}
    set nombre(n){
        this._nombre=n;
    }
    get nombre(){
        return this._nombre;
    }
    set sexo(s){
        this._sexo=s;
    }
    get sexo(){
        return this._sexo;
    }
}
