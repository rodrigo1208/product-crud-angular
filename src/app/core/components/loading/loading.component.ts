import { Component, OnInit } from '@angular/core';
import { hideShowAnimation } from '../../animations/hide-show.animation';
import { LoadingService } from './loading.service';

@Component({
    selector: 'loading-component',
    templateUrl: './loading.component.html',
    styleUrls: ['./loading.component.scss'],
    animations: [hideShowAnimation]
})
export class LoadingComponent implements OnInit {
    state: 'active' | 'inactive' = 'inactive';

    constructor(private service: LoadingService) {}

    ngOnInit() {
        this.service.valueChanges
            .subscribe(value => this.state = value ? 'active' : 'inactive');
    }

}