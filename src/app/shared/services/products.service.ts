import { Injectable } from '@angular/core';
import { IProduct, ProductStatus } from '../models/product';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { GetConfirmComponent } from '../components/get-confirm/get-confirm.component';
import { SnackbarService } from './snackbar.service';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  productArr : Array<IProduct> = [
    {
      pName : 'Samsung TV',
      pDetails : 'Lorem IPsum doler sit amet, jdi akjshi jsin',
      pStatus : ProductStatus.Dispatched,
      pId : '123'
    },
    {
      pName : 'Iphone 16',
      pDetails: 'Lorem IPsum doler sit amet, jdi akjshi jsin',
      pStatus : ProductStatus.Delivered,
      pId : '124'
    }
  ]

  constructor(
    private _router : Router,
    private _matModule : MatDialog,
    private _snackBar : SnackbarService
  ) { }

  fetchProdArr(){
    return this.productArr
  }

  getProdInfo(id : string): IProduct{
    return this.productArr.find(prod => prod.pId === id)!;
  }

  addProduct(prod : IProduct){
    this.productArr.push(prod);
    this._router.navigate(['products']);
    this._snackBar.openSnackBar('The Product Added Successfully !!!')
  }

  updateProduct(obj : IProduct){
    let getIndex = this.productArr.findIndex(prod => prod.pId === obj.pId);
    this.productArr[getIndex] = obj
    this._router.navigate(['products']);
    this._snackBar.openSnackBar('The Product Updated Successfully !!!')

  }

  onRemoveBtn(obj : IProduct){
    this._matModule.open(GetConfirmComponent)
      .afterClosed()
      .subscribe(res => {
        if(res){
          let getIndex = this.productArr.findIndex(prod => prod.pId === obj.pId);
          this.productArr.splice(getIndex, 1);
          this._router.navigate(['products']);
        }
      })
  }
}
