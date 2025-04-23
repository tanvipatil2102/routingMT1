import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { UuidService } from '../../services/uuid.service';
import { ProductsService } from '../../services/products.service';
import { IProduct } from '../../models/product';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent implements OnInit {

  isInEditMode !: boolean;
  pId !: string;
  prodForm !: FormGroup;
  mode !: string;

  constructor(
    private _routes : ActivatedRoute,
    private _uuidService : UuidService,
    private _productService : ProductsService
  ) { }

  ngOnInit(): void {
    this.createForm();
    this.editModeSetup();
  }

  editModeSetup(){
    this.pId = this._routes.snapshot.params['pId'];
    if(this.pId){
      this.isInEditMode = true,
      this.mode = 'edit'
      let getEditObj = this._productService.getProdInfo(this.pId);
      this.prodForm.patchValue(getEditObj);
    }else{
      this.isInEditMode = false,
      this.mode = 'create'
    }
  }

  createForm(){
    this.prodForm = new FormGroup({
      pName : new FormControl(null, [Validators.required]),
      pStatus : new FormControl(null, [Validators.required]),
      pDetails : new FormControl(null, [Validators.required])
    })
  }

  onFormSubmit(){
    if(this.prodForm.valid){
      if(this.mode === 'create'){
        let obj = {...this.prodForm.value, pId : this._uuidService.uuid()} 
        this._productService.addProduct(obj);
      }else if(this.mode === 'edit'){
        let updatedObj = {...this.prodForm.value, pId : this.pId}
        this._productService.updateProduct(updatedObj);
      }
    }
  }


}
