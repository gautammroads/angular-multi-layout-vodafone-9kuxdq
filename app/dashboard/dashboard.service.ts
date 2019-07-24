import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';


import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { MessageModel } from './MessageModel';



@Injectable()
export class HeroesService {
  heroesUrl = 'http://localhost:8082/OnPremPoc/get';  // URL to web api
  

  constructor(
    private http: HttpClient) {
    
  }

  /** GET heroes from the server */
  getHeroes (): Observable<MessageModel> {
    return this.http.get<MessageModel>(this.heroesUrl);
  }

  
}


/*
Copyright 2017-2018 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/