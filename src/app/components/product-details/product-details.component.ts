import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  @Input('id') inputText: string;
  inputTxt: string;
  constructor() { }

  ngOnInit() {
    this.inputTxt = this.inputText;
  }

}
