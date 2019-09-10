import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class ErrorService {
    private error$: Subject<string>;

    constructor() {
        this.error$ = new Subject();
    }

    public get valueChanges() {
        return this.error$.pipe();
    }

    public error(msg: string) {
        this.error$.next(msg);
    }
}