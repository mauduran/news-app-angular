import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  news =  [
    {
      url: "#",
      title: "Noticia 1",
      image: "https://www.thedome.org/wp-content/uploads/2019/06/300x300-Placeholder-Image.jpg",
    },
    {
      url: "#",
      title: "Noticia 2",
      image: "https://www.thedome.org/wp-content/uploads/2019/06/300x300-Placeholder-Image.jpg",
    },
    {
      url: "#",
      title: "Noticia 3",
      image: "",
    }
  ];

  constructor(private httpClient:HttpClient) { }

  getNewsCallback(callback){
    setTimeout(() => {
      callback(
       this.news
      );
    }, 2000);
  }

  getNews():Promise<any>{
    return this.httpClient.get('https://jsonplaceholder.typicode.com/posts').toPromise();
  }
}
