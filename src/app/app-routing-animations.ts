import {
    transition,
    trigger,
    query,
    style,
    animate
} from '@angular/animations';

export const routingAnimations =
    trigger('routeAnimations', [
        transition('* => *', [
            query(
                ':enter',
                [style({opacity: 0})],
                {optional: true}
            ),
            query(
                ':leave',
                [style({opacity: 1}), animate('.2s', style({opacity: 0}))],
                {optional: true}
            ),
            query(
                ':enter',
                [style({opacity: 0}), animate('.2s', style({opacity: 1}))],
                {optional: true}
            )
        ])
    ]);
