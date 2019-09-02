import { NgModule } from '@angular/core';
import { ProdutoService } from './produtos/produto.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
    imports: [HttpClientModule],
    providers: [
        ProdutoService
    ]
})
export class CoreModule { }