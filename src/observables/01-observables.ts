import { Observable, Observer } from 'rxjs';

const observer: Observer<any> = {
    next: v => console.log('next: ', v),
    error: e => console.error('error: ', e),
    complete: () => console.info('complete'),
}

// const obs$ = Observable.create();
const obs$ = new Observable<string>(subscriber => {
    subscriber.next('Hola');
    subscriber.next('Mundo');

    // throw ('Error');

    subscriber.complete();
});

// obs$.subscribe(console.log);
// obs$.subscribe(resp => {
//     console.log(resp);
// });
// obs$.subscribe({
//     next: (v) => console.log('next: ', v),
//     error: (e) => console.error('error: ', e),
//     complete: () => console.log('complete')    
// });

obs$.subscribe(observer);

obs$.subscribe()