import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';

@Injectable()
export class DummyService implements OnInit {
  
    constructor(private http: HttpClient) {}

    ngOnInit(): void {
        throw new Error('Method not implemented.');
    }
    
    getPosts(): Observable<any> {
        return this.http.get<any>('https://dummyjson.com/posts').pipe(
            tap(data => console.log('Response: ' + JSON.stringify(data)))          
        );
    }
    
    getProducts(): Observable<any> {
        return this.http.get<any>('https://dummyjson.com/products').pipe();
    }
    
}