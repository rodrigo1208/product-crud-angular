import * as uuid from "uuid";

export class Produto {
    private _id: string;
    private _nome: string;
    private _codigo: string;
    private _ativo: boolean;
    private _observacao?: string;

    constructor(produto?: Produto) {
        if (!produto) {
            this._id = uuid.v4();
        }

        this._id = produto.id || uuid.v4();
        this._nome = produto.nome;
        this._codigo = produto.codigo;
        this._ativo = produto.ativo;
        this._observacao = produto.observacao;
    }

    public get id() {
        return this._id;
    }
    
    public get nome() {
        return this._nome;
    }

    public get codigo() {
        return this._codigo;
    }

    public get ativo() {
        return this._ativo;
    }

    public get observacao() {
        return this._observacao;
    }

    public toJson() {
        return {
            id: this._id,
            nome: this._nome,
            codigo: this._codigo,
            ativo: this._ativo,
            observacao: this._observacao
        };
    }
}