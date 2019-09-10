import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { tap, finalize } from 'rxjs/operators'; 
import { ProdutoService } from 'src/app/core/produtos/produto.service';
import { Produto } from 'src/app/core/produtos/produto';
import { LoadingService } from 'src/app/core/components/loading/loading.service';

@Component({
    templateUrl: './produto-list.component.html',
    styleUrls: ['./produto-list.component.scss']
})
export class ProdutoListComponent implements OnInit {

    produtos: Produto[];

    constructor(
        private service: ProdutoService,
        private loading: LoadingService,
        private router: Router) {
    }

    ngOnInit() {
        this.buscarProdutos();
    }

    adicionarClick() {
        this.router.navigate(["produtos/new"]);
    }

    editarClick(produto: any) {
        this.router.navigate([`produtos/${produto.id}`]);
    }

    apagarClick(produto: any) {
        console.log("Não implementado");
    }

    buscarProdutos() {
        this.loading.start();
        this.service.getAll()
            .pipe(finalize(() => this.loading.stop()))
            .subscribe((list: any) => this.produtos = list);
    }
}