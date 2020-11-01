import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Source } from 'src/app/models/source.model';

import { NewsService } from '../../globals/services/news.service'


@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit, OnChanges {
  name: string = "Noticias"
  news: any[] = [];
  sources: Source[];
  selectedSource: string;
  searchQuery: string = '';

  constructor(private newsService: NewsService) {
    this.newsService = newsService;
  }

  onSubmit(): void {
    if (!this.searchQuery) return;
    
    this.newsService.getNews(this.searchQuery, this.selectedSource)
      .then(data => {
        this.news = data;
      })
      .catch(err => {
        console.error(err);
      });

  }
  ngOnInit(): void {

    this.newsService.getSources()
      .then(data => {
        this.sources = data;
      })
      .catch(err => {
        console.error(err);
      })

  }


  ngOnChanges(changes: SimpleChanges): void {
    throw new Error('Method not implemented.');
  }

}
