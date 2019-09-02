import * as uuid from "uuid";

export class Produto {
    private _id: string;
    public nome: string;
    public codigo: string;
    public ativo: boolean;
    public observacao?: string;

    constructor(produto?: Produto) {
        if (!produto) {
            this._id = uuid.v4();
        }

        this._id = produto.id || uuid.v4();
        this.nome = produto.nome;
        this.codigo = produto.codigo;
        this.ativo = produto.ativo;
        this.observacao = produto.observacao;
    }

    public get id() {
        return this._id;
    }
}