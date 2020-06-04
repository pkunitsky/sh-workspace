import { animate, animateChild, group, keyframes, query, style, transition, trigger } from '@angular/animations';

export const appearDisappear = trigger('appearDisappear', [
  transition(':enter', [
    style({transform: 'scale(0.22)', opacity: 0}),
    animate(150, style({transform: 'scale(1)', opacity: 1}))
  ]),
  transition(':leave', [
    style({transform: 'scale(1)', opacity: 1}),
    animate(100, style({transform: 'scale(0.75)', opacity: 0}))
  ])
]);

export const slideInAnimation = trigger('routeAnimations', [
  transition('HomePage <=> AboutPage', [
    style({position: 'relative'}),
    query(':enter, :leave', [
      style({
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%'
      })
    ]),
    query(':enter', [
      style({left: '-100%'})
    ]),
    query(':leave', animateChild()),
    group([
      query(':leave', [
        animate('300ms ease-out', style({left: '100%'}))
      ]),
      query(':enter', [
        animate('300ms ease-out', style({left: '0%'}))
      ])
    ]),
    query(':enter', animateChild()),
  ]),
  transition('* <=> FilterPage', [
    style({position: 'relative'}),
    query(':enter, :leave', [
      style({
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%'
      })
    ]),
    query(':enter', [
      style({left: '-100%'})
    ]),
    query(':leave', animateChild()),
    group([
      query(':leave', [
        animate('200ms ease-out', style({left: '100%'}))
      ]),
      query(':enter', [
        animate('300ms ease-out', style({left: '0%'}))
      ])
    ]),
    query(':enter', animateChild()),
  ])
]);

export const routeAnimations = trigger('routeAnimations', [
  transition('CarsPage <=> CarPage', [
    style({position: 'relative'}),
    query(':enter, :leave', [
      style({
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%'
      })
    ]),
    query(':enter', [
      style({left: '-100%'})
    ]),
    query(':leave', animateChild()),
    group([
      query(':leave', [
        animate('300ms ease-out', style({left: '100%'}))
      ]),
      query(':enter', [
        animate('300ms ease-out', style({left: '0%'}))
      ])
    ]),
    query(':enter', animateChild()),
  ]),
]);

export const fadeInFadeOut = trigger('fadeInFadeOut', [
  transition(':enter', [
    style({transform: 'translateY(30px)', opacity: 0}),
    animate(150, style({transform: 'translateY(0px)', opacity: 1}))
  ]),
  transition(':leave', [
    style({transform: 'translateY(0px)', opacity: 1}),
    animate(100, style({transform: 'translateY(30px)', opacity: 0}))
  ])
]);

export const replaceItem = trigger('replaceItem', [
  transition(':enter', [
    animate(300, keyframes([
      style({opacity: 0, offset: 0}),
      style({opacity: 0, transform: 'scale(0.2) rotate(45deg)', offset: 0.5}),
      style({opacity: 1, transform: 'scale(1) rotate(0deg)', offset: 1.0}),
    ]))
  ]),
  transition(':leave', [
    animate(300, keyframes([
      style({opacity: 1, transform: 'scale(1) rotate(0deg)', offset: 0}),
      style({opacity: 1, transform: 'scale(0.2) rotate(45deg)', offset: 0.5}),
      style({opacity: 0, offset: 1.0}),
    ]))
  ])
]);
