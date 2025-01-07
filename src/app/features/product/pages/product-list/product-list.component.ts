import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html'
})
export class ProductListComponent {
  category: string = '';
  selectedManufacturers: string[] = [];
  
  constructor(private route: ActivatedRoute) {
    this.route.params.subscribe(params => {
      this.category = params['category'];
    });
  }
} 