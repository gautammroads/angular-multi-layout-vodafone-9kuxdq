import { Injectable } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient, HttpParams } from '@angular/common/http';



import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Message } from './message';



@Injectable()
export class DashboardService {
  heroesUrl = 'http://localhost:8082/OnPremPoc/get';  // URL to web api
  

  constructor(
    private http: HttpClient) {
    
  }

  /** GET heroes from the server */
  getHeroes (): Observable<Message> {
    return this.http.get<Message>(this.heroesUrl);
  }


 /** GET heroes from the server */
  getMessage (): Observable<Message> {
    return this.http.get<Message>(this.heroesUrl);
  }
  
}


/*
Copyright 2017-2018 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/