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
        console.log(counter);
    }, 1000)

    setTimeout(() => {
        subscriber.complete()
    }, 2500);

    return () => {
        clearInterval(interval);
        console.log('intervalo destruido');
    }
});

const subscription = intervalo$.subscribe(observer);
const subscription2 = intervalo$.subscribe(observer);
const subscription3 = intervalo$.subscribe(observer);

subscription.add(subscription2)
subscription.add(subscription3)
 
setTimeout(() => {
    subscription.unsubscribe();
    // subscription2.unsubscribe();
    // subscription3.unsubscribe();

    console.log('completado timeout');
}, 6000);
