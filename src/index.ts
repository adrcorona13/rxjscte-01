import { Observable } from 'rxjs';


// const obs$ = Observable.create();
const obs$ = new Observable<string>(subscriber => {
    subscriber.next('Hola');
    subscriber.next('Mundo');
    subscriber.next('Hola');
    subscriber.next('Mundo');
    subscriber.next('Mundo');
    subscriber.complete();
});

obs$.subscribe(console.log);
