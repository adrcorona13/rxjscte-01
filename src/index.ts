import { Observable, Observer } from 'rxjs';

const observer: Observer<any> = {
    next: v => console.log('next: ', v),
    error: e => console.error('error: ', e),
    complete: () => console.info('complete'),
}

const intervalo$ = new Observable<number>(subscriber => {
    let counter = 0;
    const interval = setInterval(() => {
        subscriber.next(counter++);
    }, 1000)

    return () => {
        clearInterval(interval);
        console.log('intervalo destruido');
    }
});

const subscription = intervalo$.subscribe(console.log);
const subscription2 = intervalo$.subscribe(console.log);
const subscription3 = intervalo$.subscribe(console.log);
 
setTimeout(() => {
    subscription.unsubscribe();
    subscription2.unsubscribe();
    subscription3.unsubscribe();
}, 3000);
