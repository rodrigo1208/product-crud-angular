import { transition, state, style, trigger, animate } from '@angular/animations';

export const hideShowAnimation = trigger('hideShow', [
    state('active', style({
        'margin-top': '0'
    })),
    state('inactive', style({
        'margin-top': '-70px'
    })),
    transition('active <=> inactive', animate('200ms ease-out'))
]);