import { NgModule } from '@angular/core';
import { ProdutoFormComponent } from './views/form/produto-form.component';
import { ProdutoListComponent } from './views/list/produto-list.component';
import { ProdutosRoutingModule } from './produtos-routing.module';

@NgModule({
    imports: [
        ProdutosRoutingModule
    ],
    declarations: [
        ProdutoFormComponent,
        ProdutoListComponent,
    ]
})
export class ProdutosModule { }
