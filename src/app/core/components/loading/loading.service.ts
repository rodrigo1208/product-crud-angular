import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class LoadingService {
    private loading$: Subject<boolean>;

    constructor() {
        this.loading$ = new Subject();
    }

    public get valueChanges() {
        return this.loading$.pipe();
    }

    start() {
        this.loading$.next(true);
    }

    stop() {
        this.loading$.next(false);
    }
}