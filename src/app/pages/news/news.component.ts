import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';

import {NewsService} from './../../globals/services/news.service'

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit, OnChanges {
  name:string = "Noticias"
  news:any[] = [];

  constructor(private newsService:NewsService) { 
   this.newsService = newsService;
  }
  
  ngOnInit(): void {
   this.newsService.getNews().then(data =>{
     this.news = data;
   }).catch(err =>{
     console.error(err);
   });
  }
  
  ngOnChanges(changes: SimpleChanges): void {
    throw new Error('Method not implemented.');
  }

}
