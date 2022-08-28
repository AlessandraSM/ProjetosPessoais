export class Turma {
    constructor(
        private id: string,
        private nome: string,
        private modulo: string,
        
    ) { }
    public getId() {
        return this.id
    }
    public getNome() {
        return this.nome
    }
    public getModulo() {
        return this.modulo
    }
}