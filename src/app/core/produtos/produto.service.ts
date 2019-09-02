import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment } from 'src/environments/environment';
import { Produto } from './produto';

@Injectable()
export class ProdutoService {
    private readonly url = `${environment.restUrl}/produtos/`;
    constructor(private http: HttpClient) { }

    save(produto: Produto) {
        return this.http.post(this.url, produto);
    }

    update(produto: Produto) {
        return this.http.put(`${this.url}/${produto.id}`, produto)
    }

    getAll() {
        return this.http.get(`${this.url}`);
    }

    delete(produto: Produto) {
        return this.http.delete(`${this.url}/${produto.id}`);
    }
}