export class Todo {
    public id: number;
    public texto: string;
    public completado: boolean;
    constructor(texto: string){
        var start = new Date();
        this.id = start.getTime()
        this.texto = texto;
        this.completado = false;
    }

}