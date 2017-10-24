import { trigger, state, style, animate, transition } from '@angular/animations';

export function visibility() {
    return trigger('visibility', [
        state('shown', style({
            transform: 'scale(1.0)',
            opacity: 1
        })),
        state('hidden', style({
            transform: 'scale(0.5)',
            opacity: 0
        })),
        transition('* => *', animate('0.5s ease-in-out'))
    ]);
}
export function flyInOut() {
    return trigger('flyInOut',[
        state('*', style({ opacity: 1, transform: 'translateX(0)'})),
        transition(':enter', [
            style({  transform: 'translateX(-100%)', opacity:0 }),
            animate('500ms ease-in')
        ]),
        transition(':leave', [
            animate('500ms ease-out', style({ transform: 'translateX(100%)', opacity: 0}))
        ])
    ]);
}
export function expand() {
    return trigger('expand', [
        state('*', style({ opacity: 1, transform: 'translateX(0)' })),
        transition(':enter', [
            style({ transform: 'translateY(-50%)', opacity:0 }),
            animate('200ms ease-in', style({ opacity: 1, transform: 'translateX(0)' }))
        ])
    ]);
}
export function scrollAnimation() {
 return trigger('scrollAnimation', [
      state('show', style({
        backgroundColor: '#17a2b8',
        position: 'fixed',
        top: 0,
        right: 0,
        left: 0,
         zIndex:9, 
        'padding-right' : 0,
        'padding-left' : 0,
         transform: 'scale(1)'
      })),
      state('hide',   style({
       position: 'fixed',
        top: 0,
        right: 0,
        left: 0,
         zIndex:9,
        transform: 'scale(1.1)'
      })),
      transition('show => hide', animate('700ms ease-out')),
      transition('hide => show', animate('700ms ease-in'))
    ]);
  }
  
export function collapse() {
 return trigger('collapse', [
    state('open', style({
      position: 'fixed',
        top: '50px',
        right: 0,
        left: 0,
         zIndex:9,
      opacity: '1',
      display: 'block',
      transform: 'translate3d(0, 0, 0)'
    })),
    state('closed',   style({
   
      opacity: '0',
      display: 'none',
      transform: 'translate3d(0, -100%, 0)'
    })),
    transition('closed => open', animate('200ms ease-in')),
    transition('open => closed', animate('100ms ease-out'))
  ])
  }
