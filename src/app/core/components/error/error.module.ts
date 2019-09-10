import { NgModule, ModuleWithProviders } from '@angular/core';
import { ErrorComponent } from './error.component';
import { ErrorService } from './error.service';

@NgModule({
    declarations: [ErrorComponent],
    exports: [ErrorComponent]
})
export class ErrorModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: ErrorModule,
            providers: [ErrorService]
        }
    }
}