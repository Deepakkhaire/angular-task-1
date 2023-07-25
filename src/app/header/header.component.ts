import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ProductLists } from '../shared/services/product-lists.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
@ViewChild('myForm')  productLists : any;
  // productLists : any;

  constructor(private httpServe : ProductLists) {
    
  }

  ngOnInit(): void {
    // this.productLists = new FormGroup({
    //   productName : new FormControl('', Validators.required),
    //   productPrice : new FormControl('', Validators.required),
    //   productImage : new FormControl('', Validators.required),
    // })
  }

  onSubmit(){
    console.log(this.productLists.value);
    this.httpServe.addProductsList(this.productLists.value).subscribe((data : any)=>{
      console.log(data);
    })
  }
  // onCLick(){
  //   console.log('submitted');
  //   console.log(this.productLists.value);
  //   this.productLists.reset();
  //   this.httpServe.getProductsList(this.productLists.value).subscribe((data : any)=>{
  //     console.log(data);
  //   })
  // }
}
