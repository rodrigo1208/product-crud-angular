import { Component, OnInit } from '@angular/core';
import { timer } from 'rxjs';
import { flatMap } from 'rxjs/operators';
import { ErrorService } from './error.service';
import { hideShowAnimation } from '../../animations/hide-show.animation';

@Component({
    selector: 'error-component',
    template: `
        <div [@hideShow]="state" class="alert alert-danger" role="alert">
            {{error}}
        </div>
    `,
    styles: [`
        :host {
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            text-align: center;
            z-index: 1000;
        }
    `],
    animations: [hideShowAnimation]
})
export class ErrorComponent implements OnInit {
    error: string;
    state: 'active' | 'inactive' = 'inactive';

    constructor(private service: ErrorService) { }

    ngOnInit() {
        this.service.valueChanges
            .pipe(
                flatMap((value) => {
                    this.state = 'active',
                    this.error = value;
                    return timer(5000);
                })
            )
            .subscribe(() => this.state = 'inactive');
    }
}
