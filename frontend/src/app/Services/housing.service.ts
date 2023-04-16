import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

import { iproperty } from '../interface/iproperty.interface';
import { Api } from '../api';


@Injectable({
  providedIn: 'root'
})
export class HousingService {

  constructor(private http:HttpClient) { }
 
  getAllProperties(){
    return this.http.get('data/properties.json');
  }
}
