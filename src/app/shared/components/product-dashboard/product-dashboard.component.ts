import { Component, OnInit } from '@angular/core';
import { IProduct } from '../../models/product';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-product-dashboard',
  templateUrl: './product-dashboard.component.html',
  styleUrls: ['./product-dashboard.component.scss']
})
export class ProductDashboardComponent implements OnInit {

  prodData !: Array<IProduct>
  constructor(
    private _prodService : ProductsService
  ) { }

  ngOnInit(): void {
    this.prodData = this._prodService.fetchProdArr()
  }


}
