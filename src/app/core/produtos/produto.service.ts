import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { environment } from 'src/environments/environment';
import { Produto } from './produto';
import { catchError } from 'rxjs/operators';
import { ErrorService } from '../components/error/error.service';
import { throwError } from 'rxjs';

@Injectable()
export class ProdutoService {
    private readonly url = `${environment.restUrl}/produtos/`;
    constructor(private http: HttpClient, private errorService: ErrorService) { }

    save(produto: Produto) {
        return this.http.post(this.url, produto.toJson()).pipe(this.catch())
    }

    update(produto: Produto) {
        return this.http.put(`${this.url}/${produto.id}`, produto.toJson()).pipe(this.catch());
    }

    get(id: string) {
        return this.http.get(`${this.url}/${id}`).pipe(this.catch());
    }

    getAll() {
        return this.http.get(`${this.url}`).pipe(this.catch());
    }

    delete(produto: Produto) {
        return this.http.delete(`${this.url}/${produto.id}`).pipe(this.catch());
    }

    catch() {
        return catchError((err: HttpErrorResponse) => {
            this.errorService.error(err.message);
            return throwError(err);
        });
    }
}