import { Component, OnInit } from '@angular/core';
import { IProduct } from '../../models/product';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  getProdObj !: IProduct

  constructor(
    
  ) { }

  ngOnInit(): void {
    
  }


}
