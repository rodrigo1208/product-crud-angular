import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { ProdutoListComponent } from './views/list/produto-list.component';
import { ProdutoFormComponent } from './views/form/produto-form.component';

const routes: Route[] = [
    {
        path: "produtos",
        children: [
            {
                path: "",
                component: ProdutoListComponent
            },
            {
                path: ":new",
                component: ProdutoFormComponent
            }
        ]
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ProdutosRoutingModule {

}