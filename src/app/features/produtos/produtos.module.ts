import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from "@angular/forms";
import { ProdutoFormComponent } from './views/form/produto-form.component';
import { ProdutoListComponent } from './views/list/produto-list.component';
import { ProdutosRoutingModule } from './produtos-routing.module';
import { CommonModule } from '@angular/common';
import { CoreModule } from 'src/app/core/core.module';
import { LoadingModule } from 'src/app/core/components/loading/loading.module';

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        CoreModule,
        ProdutosRoutingModule,
    ],
    declarations: [
        ProdutoFormComponent,
        ProdutoListComponent,
    ]
})
export class ProdutosModule { }
