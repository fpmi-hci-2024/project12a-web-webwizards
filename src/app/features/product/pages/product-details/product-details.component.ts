import { Component } from '@angular/core';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html'
})
export class ProductDetailsComponent {
  selectedRAM: string = '8ГБ';
  selectedStorage: string = '256ГБ';
  selectedColor: string = 'черный';
} 