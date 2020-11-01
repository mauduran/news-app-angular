import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { countries } from '../../constants/countries.constants';
import { Country } from '../../models/country.model';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(private httpClient: HttpClient) { }

  getNews(q, source = null): Promise<any> {
    let sourceQuery = '';
    if (source) sourceQuery = '&sources=' + source;
    return this.httpClient.get(`http://localhost:3000/api/news?q=${q}${sourceQuery}`).toPromise();
  }

  getHeadlines(): Promise<any> {
    return this.httpClient.get('http://localhost:3000/api/top-headlines').toPromise();
  }

  getSources(): Promise<any> {
    return this.httpClient.get('http://localhost:3000/api/sources').toPromise();
  }
  getCountries(): Promise<Country[]> {
    return Promise.resolve(countries);
  }

}
