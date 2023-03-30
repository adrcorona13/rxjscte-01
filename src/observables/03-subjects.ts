import { Observable, Observer, Subject } from 'rxjs';

const observer: Observer<any> = {
    next: v => console.log('next: ', v),
    error: e => console.error('error: ', e),
    complete: () => console.info('complete'),
}

const intervalo$ = new Observable<number>(subs => {
    
    const intervalID = setInterval( () => {
        subs.next(Math.random());
        console.log('intervalo en ejecucion')
    }, 1000);
    

    return () =>  {
        clearInterval(intervalID)
        console.log('intervalo destruido');
    };
});

// const s1 = intervalo$.subscribe(rnd => console.log('sub1: ', rnd));
// const s2 = intervalo$.subscribe(rnd => console.log('sub2: ', rnd));

/**
 *  1.- Casteo multiple (muchas subs sujetas al mismo subject para misma info a todos)
 *  2.- Tambiene s un observer
 *  3.- next, error y complete
 */

const subject$ = new Subject();
const suscripcion = intervalo$.subscribe(subject$);

// const s1 = subject$.subscribe(rnd => console.log('sub1: ', rnd));
// const s2 = subject$.subscribe(rnd => console.log('sub2: ', rnd));

const s1 = subject$.subscribe(observer);
const s2 = subject$.subscribe(observer);

setTimeout(() => {
    subject$.next(10);
    subject$.complete();
    suscripcion.unsubscribe();
}, 3500);