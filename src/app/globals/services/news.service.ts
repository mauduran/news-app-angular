import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(private httpClient:HttpClient) { }
  
  getNews():Promise<any>{
    return this.httpClient.get('https://jsonplaceholder.typicode.com/posts').toPromise();
  }
}
