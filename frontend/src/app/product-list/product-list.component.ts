import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { iproperty } from '../interface/iproperty.interface';
import { HousingService } from '../Services/housing.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit{
  
 Properties:any;
  constructor(private housingService:HousingService){
    
  }
  ngOnInit(): void {
   
    this.housingService.getAllProperties().subscribe((res)=>this.Properties = res);
  }
}
