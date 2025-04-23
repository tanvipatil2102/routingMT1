import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../../services/products.service';
import { IProduct } from '../../models/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  getProdObj !: IProduct
  pId !: string
  constructor(
    private routes : ActivatedRoute,
    private _productService : ProductsService
  ) { }

  ngOnInit(): void {
    if(this.pId){
      this.pId = this.routes.snapshot.params['pId'];
      this.getProdObj = this._productService.getProdInfo(this.pId);
    }   
  }

  onRemove(){
    this._productService.onRemoveBtn(this.getProdObj);
  }

}
