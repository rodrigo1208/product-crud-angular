import { NgModule, ModuleWithProviders } from '@angular/core';
import { LoadingComponent } from './loading.component';
import { LoadingService } from './loading.service';

@NgModule({
    declarations: [LoadingComponent],
    exports: [LoadingComponent],
})
export class LoadingModule { 
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: LoadingModule,
            providers: [
                LoadingService
            ]
        }
    }
}