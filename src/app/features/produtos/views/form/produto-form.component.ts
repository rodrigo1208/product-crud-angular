import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProdutoService } from 'src/app/core/produtos/produto.service';
import { Produto } from 'src/app/core/produtos/produto';
import { LoadingService } from 'src/app/core/components/loading/loading.service';
import { finalize } from 'rxjs/operators';

@Component({
    templateUrl: './produto-form.component.html',
    styleUrls: ['./produto-form.component.scss']
})
export class ProdutoFormComponent implements OnInit {
    formGroup: FormGroup;

    private routeParam: any;
    constructor(
        private service: ProdutoService,
        private router: Router,
        private loading: LoadingService,
        private route: ActivatedRoute,
        private fb: FormBuilder
        ) {
        this.formGroup = this.fb.group({
            id: [undefined, Validators.compose([])],
            nome: [undefined, Validators.compose([Validators.required])],
            codigo: [undefined, Validators.compose([Validators.required])],
            ativo: [true, Validators.compose([Validators.required])],
            observacao: [undefined, Validators.compose([])]
        });
    }

    ngOnInit() {
        this.route.params.subscribe(params => {
            this.routeParam = params;
            
            if (this.isNew()) return;
            this.buscarProduto();
        });
    }

    isNew() {
        return this.routeParam.produtoId === "new";
    }

    salvar() {
        if (this.formGroup.invalid) return this.formGroup.markAsDirty();
        this.loading.start();
        this.salvarOuAtualizar()
            .pipe(finalize(() => this.loading.stop()))
            .subscribe(() => this.voltar());
    }

    voltar() {
        this.router.navigate([".."], { relativeTo: this.route });
    }

    invalidField(name: string) {
        if (!this.formGroup.dirty || !this.formGroup.get(name)) return;

        const control = this.formGroup.get(name);
        
        if (control.invalid) {
            return true;
        }
        
        return false
    }

    private salvarOuAtualizar() {
        const { value } = this.formGroup;
        if (!value.id)
            return this.service.save(new Produto(value));
        
        return this.service.update(new Produto(value));
    }

    private buscarProduto() {
        this.loading.start();
        this.service.get(this.routeParam.produtoId)
            .pipe(finalize(() => this.loading.stop()))
            .subscribe(produto => this.formGroup.patchValue(produto));
    }
    
}