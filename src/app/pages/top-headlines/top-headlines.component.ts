import { Component, OnInit } from '@angular/core';
import { Country } from 'src/app/models/country.model';
import { NewsService } from '../../globals/services/news.service';

@Component({
  selector: 'app-top-headlines',
  templateUrl: './top-headlines.component.html',
  styleUrls: ['./top-headlines.component.scss']
})
export class TopHeadlinesComponent implements OnInit {
  name: string = "Titulares"
  headlines: any[] = [];
  countries: Country[];
  selectedCountry: string = 'mx';


  constructor(private newsService: NewsService) { }

  onSubmit(): void {
    this.newsService.getHeadlines(this.selectedCountry)
    .then(data => {
      this.headlines = data;
    })
  }

  ngOnInit(): void {
    this.newsService.getCountries()
      .then(data => {
        this.countries = data;
      })
      .catch(err => {
        console.error(err);
      });
  }

}
